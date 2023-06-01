<template>
  <TitleComponent title="Setup" />
  <div class="setup">
    <div class="setup__Header">
      <h1>Setup</h1>
      <ClockComponent />
    </div>
    <form class="setup__form" @submit.prevent="submit">
      <input type="text" placeholder="Name" class="setup__form-input" v-model="form.displayname" />
      <select v-model="form.countryCode" class="setup__form-select">
        <option selected="true" disabled="disabled">Select Country code</option>
        <option v-for="country in countrycodes" v-bind:value="country.code">
          {{ country.name }}({{ country.code }})
        </option>
      </select>
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
  </div>
</template>

<script>
import TitleComponent from '@/components/title.Component.vue'
import ClockComponent from '@/components/Clock.component.vue'
import json from '@/externalData/CountryCodes.json'
import { insertUpdateUserData } from '@/services/supabase'
import { isMobile } from 'mobile-device-detect'
export default {
  components: {
    TitleComponent,
    ClockComponent
  },

  data() {
    return {
      countrycodes: json,
      form: {
        displayname: '',
        countryCode: 'Select Country Code',
        timezone: '',
        measurement: ''
      }
    }
  },
  mounted() {
    if (!isMobile) {
      this.$router.push('404')
    }
    if (document.cookie.match('session')) {
      console.log('exist')
    } else {
      this.$router.push('/login')
    }
  },
  methods: {
    submit() {
      this.$emit('submit', this.form)
      insertUpdateUserData(this.form)
    }
  }
}
</script>
