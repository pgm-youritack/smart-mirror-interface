<template>
  <div class="navigationContainer">
    <nav class="navigation">
      <RouterLink class="navigation__item" to="/Home" @click="checkCookieAndNavigate('/Home')"
        >Home</RouterLink
      >
      <RouterLink class="navigation__item" to="/Weather" @click="checkCookieAndNavigate('/Weather')"
        >Weather</RouterLink
      >
      <RouterLink class="navigation__item" to="/Todo" @click="checkCookieAndNavigate('/Todo')"
        >ToDo</RouterLink
      >
      <RouterLink class="navigation__item" to="/Music" @click="checkCookieAndNavigate('/Music')"
        >Music</RouterLink
      >
      <RouterLink class="navigation__item" to="/News" @click="checkCookieAndNavigate('/News')"
        >News</RouterLink
      >
    </nav>
    <QrcodeVue
      value=" http://192.168.1.54:5173/Login"
      :size="50"
      level="L"
      render-as="svg"
      class="qrCode"
    />
  </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue'

export default {
  components: {
    QrcodeVue
  },
  methods: {
    checkCookieAndNavigate(path) {
      const requiredCookie = 'session' // Replace 'your_cookie_name' with the name of the specific cookie you want to check
      const hasCookie = this.$cookies.isKey(requiredCookie)
      if (!hasCookie) {
        this.$router.push('/') // Redirect to home page
      } else {
        this.$router.push(path) // Proceed with the navigation to the desired path
      }
    }
  }
}
</script>
