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
  console.log(form.password)
  const { data, error } = await supabase.auth.signInWithPassword({
    email: form.email,
    password: form.password
  })

  console.log(data.session)
}
export { Register, Login }
