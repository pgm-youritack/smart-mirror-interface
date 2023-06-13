import { createClient } from '@supabase/supabase-js'
import Router from '@/Router'
import { v4 as uuid } from 'uuid'
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
    document.cookie = `session =${data.session.access_token}; path=/; expires=${data.session.expires_in}`
    Router.push('/setup')
    return data.session.access_token
  }
}
const getUserId = async () => {
  if (document.cookie.includes('session=')) {
    const token = document.cookie
      .split('; ')
      .find((row) => row.startsWith('session='))
      .split('=')[1]
    const {
      data: { user }
    } = await await supabase.auth.getUser(token)
    return user
  } else {
    console.log('didnt find it')
  }
}

const insertUpdateUserData = async (form) => {
  const boundGetUserId = getUserId.bind(this)
  const user = await boundGetUserId()
  if (user) {
    if (supabase.from('UserData').select().eq('user_id', user.id)) {
      const { error } = await supabase
        .from('UserData')
        .update({
          displayname: form.displayname,
          hours: form.timezone,
          country_code: form.countryCode,
          measurements: form.measurement,
          city: form.city
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
  }
}
const getData = async () => {
  const boundGetUserId = getUserId.bind(this)
  const user = await boundGetUserId()
  if (user !== null) {
    let { data: UserData } = await supabase.from('UserData').select('*').eq('user_id', user.id)
    return {
      displayname: UserData[0].displayname,
      countryCode: UserData[0].country_code,
      city: UserData[0].city,
      measurement: UserData[0].measurements,
      hours: UserData[0].hours
    }
  }
}
const uploadSong = async (file) => {
  const boundGetUserId = getUserId.bind(this)
  const user = await boundGetUserId()
  const fileid = uuid()
  if (user !== null) {
    const { error } = await supabase.storage
      .from('musicfiles')
      .upload(`/${fileid}.mp3`, file, { public: true })
    if (error) {
      window.alert(error.message)
      return error.message
    } else {
      const { error } = await supabase.from('Music').insert({
        user_id: user.id,
        song_name: file.name,
        file_name: `${fileid}.mp3`
      })
      window.alert('upload successfull')
      return 'upload successful'
    }
  }
}
const getMusic = async () => {
  const boundGetUserId = getUserId.bind(this)
  const user = await boundGetUserId()
  if (user !== null) {
    const { data } = await supabase.from('Music').select('song_name').eq('user_id', user.id)
    return data
  }
}

const getMusicFile = async (title) => {
  const music = await supabase.from('Music').select('file_name').eq('song_name', title)
  const { data, error } = await supabase.storage
    .from('musicfiles')
    .getPublicUrl(music.data[0].file_name)
  console.log(data)
  return data
}

const getTodoItems = async () => {
  const boundGetUserId = getUserId.bind(this)
  const user = await boundGetUserId()
  if (user !== null) {
    const { data } = await supabase.from('Todo').select('*').eq('user_id', user.id)
    return data
  }
}
const insertTodoItem = async (form) => {
  const boundGetUserId = getUserId.bind(this)
  const user = await boundGetUserId()
  if (user !== null) {
    const { error } = await supabase.from('Todo').insert({
      user_id: user.id,
      item: form.item
    })
    if (error) {
      console.log(error)
    }
  }
}
export {
  Register,
  Login,
  insertUpdateUserData,
  getUserId,
  getData,
  uploadSong,
  getMusic,
  getMusicFile,
  getTodoItems,
  insertTodoItem
}
