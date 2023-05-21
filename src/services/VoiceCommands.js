import artyom from 'artyom.js'
import Router from '../router'
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

export { Navigation }
