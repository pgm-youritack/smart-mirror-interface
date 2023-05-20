import artyom from 'artyom.js'

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
      indexes: ['Hello'],
      action: function () {
        alert('Hello, how are you ?')
      }
    },
    {
      indexes: ['Good night'],
      action: function () {
        alert('Hello, how are you ?')
      }
    },
    {
      indexes: ['Good morning'],
      action: function () {
        alert('Hello, how are you ?')
      }
    }
  ])
}

export { Navigation }
