import artyom from 'artyom.js'
import wordsToNumbers from 'words-to-numbers'
import Router from '@/router'
import { insertTodoItem, finishTodoItem } from '@/services/Supabase'
import eventbus from '@/utils/eventBus.js'
// import getArticles from '@/services/News'
const voice = new artyom()

voice.initialize({
  lang: 'en-GB',
  debug: true,
  listen: true,
  speed: 1,
  mode: 'normal',
  continuous: true
})

const Navigation = () => {
  voice.addCommands([
    {
      indexes: ['show weather '],
      action: function () {
        Router.push('/Weather')
      }
    },
    {
      indexes: ['show todo', 'show to do'],
      action: function () {
        Router.push('/Todo')
      }
    },
    {
      indexes: ['show music'],
      action: function () {
        Router.push('/Music')
      }
    },
    {
      indexes: ['show news'],
      action: function () {
        Router.push('/News')
      }
    }
  ])
}
const MusicStatus = () => {
  voice.addCommands({
    indexes: ['play ', 'pause'],
    action: (i) => {
      if (i === 0) {
        return true
      } else if (i === 1) {
        return false
      }
    }
  })
}
const NewsArticle = (articles) => {
  voice.addCommands({
    smart: true,
    indexes: ['article *'],
    action: function (i, wildcard) {
      console.log(wildcard)
      if (wordsToNumbers(wildcard)) {
        const number = wordsToNumbers(wildcard)
        const title = articles[number - 1].title.replace('.', '$')
        Router.push(`/News/${title}`)
      }
    }
  })
}
const SelectSong = (songs) => {
  console.log(songs)
  voice.addCommands({
    smart: true,
    indexes: ['song *'],
    action: function (i, wildcard) {
      if (wordsToNumbers(wildcard)) {
        const number = wordsToNumbers(wildcard)
        const title = songs[number - 1].song_name.replace(/\./g, '$')
        eventbus.songSelected = title
        Router.push('/home')
      }
    }
  })
}
const TodoPageCommands = (items) => {
  voice.addCommands(
    {
      smart: true,
      indexes: ['add *'],
      action: function (i, wildcard) {
        insertTodoItem(wildcard)
      }
    },
    {
      smart: true,
      indexes: ['finish article *'],
      action: function (i, wildcard) {
        if (wordsToNumbers(wildcard)) {
          const number = wordsToNumbers(wildcard)
          const id = items[number - 1].id
          finishTodoItem(id)
        }
      }
    }
  )
}

export { Navigation, MusicStatus, NewsArticle, SelectSong, TodoPageCommands }
