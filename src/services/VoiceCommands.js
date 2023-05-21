import artyom from 'artyom.js'
import Router from '../router'
import getArticles from '@/services/News'
const voice = new artyom()

voice.initialize({
  lang: 'en-GB',
  debug: true,
  listen: true,
  speed: 1,
  mode: 'normal'
})

function Navigation() {
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

function NewsArticleNavigation() {
  voice.addCommands({
    indexes: ['show article *'],
    action: async function (i, wildcard) {
      const articles = await getArticles()
      const title = articles[wildcard]
      Router.push(`News/${title}`)
    }
  })
}

export { Navigation, NewsArticleNavigation }
