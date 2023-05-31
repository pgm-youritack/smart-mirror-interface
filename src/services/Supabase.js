import { createClient } from '@supabase/supabase-js'
import Router from '@/Router'
const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY)

const Register = async (form) => {
  supabase.auth.signUp({
    email: form.email,
    password: form.password
  })
  Router.push('/login')
}
const Login = async (form) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: form.email,
    password: form.password
  })
  if (error) {
    console.log(error)
  } else {
    document.cookie = `session =${data.session.access_token}; path=/`
    return data.session.access_token
  }
}
const insertUpdateUserData = async (form) => {
  if (
    document.cookie
      .split('; ')
      .find((row) => row.startsWith('session='))
      .split('=')[1]
  ) {
    const token = document.cookie
      .split('; ')
      .find((row) => row.startsWith('session='))
      .split('=')[1]
    const {
      data: { user }
    } = await supabase.auth.getUser(token)

    if (supabase.from('UserData').select().eq('user_id', user.id)) {
      const { error } = await supabase
        .from('UserData')
        .update({
          displayname: form.displayname,
          hours: form.timezone,
          country_code: form.countryCode,
          measurements: form.measurement
        })
        .eq('user_id', user.id)
      console.log(error)
    } else {
      const { error } = await supabase.from('UserData').insert({
        user_id: user.id,
        displayname: form.displayname,
        hours: form.timezone,
        country_code: form.countryCode,
        measurements: form.measurement
      })
      if (error) {
        console.log(error)
      }
    }
  } else {
    console.log('didnt find it')
  }
}
export { Register, Login, insertUpdateUserData }
