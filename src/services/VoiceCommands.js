import artyom from 'artyom.js'

import Router from '@/router'
// import getArticles from '@/services/News'
const voice = new artyom()

voice.initialize({
  lang: 'en-GB',
  debug: true,
  listen: true,
  speed: 1,
  mode: 'normal'
})

const Navigation = () => {
  voice.addCommands([
    {
      indexes: ['show Weather '],
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
    }
  })
}

export { Navigation, MusicStatus, NewsArticle }
