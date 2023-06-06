<template>
  <TitleComponent title="Setup" />
  <div class="setup">
    <div class="setup__Header">
      <h1>Setup</h1>
    </div>
    <form class="setup__form" @submit.prevent="submit">
      <input type="text" placeholder="Name" class="setup__form-input" v-model="form.displayname" />
      <select v-model="form.countryCode" class="setup__form-select">
        <option selected="true" disabled="disabled">Select Country code</option>
        <option v-for="country in countrycodes" v-bind:value="country.code">
          {{ country.name }}({{ country.code }})
        </option>
      </select>
      <input type="text" placeholder="city name" class="setup__form-input" v-model="form.city" />
      <select v-model="form.timezone" class="setup__form-select" placeholder="Select country">
        <option selected="true">12 Hours</option>
        <option>24 Hours</option>
      </select>
      <select v-model="form.measurement" class="setup__form-select">
        <option value="Imperial">Imperial</option>
        <option value="Metric">Metric</option>
      </select>
      <input type="submit" value="Save" class="setup__form-input" />
    </form>
    <div class="input_files">
      <h2 class="input_files_header">Upload your mp3 files</h2>
      <p class="input_files_status" v-if="result !== null">{{ result }}</p>
      <label class="input_files_label">
        <span>+</span>
        <input type="file" @change="handleUpload" accept=".mp3;audio/*" /></label>
    </div>
  </div>
</template>

<script lang="js">
import TitleComponent from '@/components/title.Component.vue'
import ClockComponent from '@/components/Clock.component.vue'
import json from '@/externalData/CountryCodes.json'
import { insertUpdateUserData, getData, uploadSong } from '@/services/supabase'
import { isMobile } from 'mobile-device-detect'
import { v4 as uuidv4 } from 'uuid'
export default {
  components: {
    TitleComponent,
  },

  data() {
    return {
      countrycodes: json,
      form: {
        displayname: '',
        countryCode: 'Select Country code',
        timezone: '12 Hours',
        measurement: 'Imperial',
        city: ''
      },
      result: null
    }
  },
  async mounted() {
    if (!isMobile) {
      this.$router.push('404')
    }
    this.socket = new WebSocket('ws://192.168.137.1:8080')
    this.socket.addEventListener('open', () => {
      console.log('connected')
    })

    this.socket.onerror = (error) => {
      console.error('WebSocket error:', error)
    }
    if (document.cookie.match('session')) {
      const { displayname, measurement, city, countryCode, hours } = await getData()
      this.form.displayname = displayname
      this.form.measurement = measurement
      this.form.countryCode = countryCode
      this.form.timezone = hours
      this.form.city = city
    } else {
      this.$router.push('/login')
    }
  },
  methods: {
    submit() {
      this.$emit('submit', this.form)
      insertUpdateUserData(this.form)
      const message = {
        title: 'reload',
        timestamp: Date.now()
      }
      setTimeout(() => {
        this.socket.send(JSON.stringify(message))
      }, 5000)
    },
    async handleUpload(event) {
      const file = event.target.files[0]
      const uuid = uuidv4()
      this.result = await uploadSong(file, uuid)
    }
  }
}
</script>
