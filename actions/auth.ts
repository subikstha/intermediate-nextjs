'use server'
import { cookies } from 'next/headers'
import { signin, signup } from '@/utils/authTools'
import { z } from 'zod'
import { redirect } from 'next/navigation'
// This is the name of the cookie that we will be setting
import { COOKIE_NAME } from '@/utils/constants'

const authSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

export const registerUser = async (prevState: any, formData: FormData) => {
  const data = authSchema.parse({
    email: formData.get('email'),
    password: formData.get('password'),
  })

  try {
    const { token } = await signup(data)
    cookies().set(COOKIE_NAME, token)
  } catch (e) {
    console.error(e)
    return { message: 'Failed to sign you up' }
  }

  //  We put the redirect after the try catch block, because if we put it in the try block, then
  // it will catch an error
  redirect('/dashboard')
}

export const signinUser = async (prevState: any, formData: FormData) => {
  const data = authSchema.parse({
    email: formData.get('email'),
    password: formData.get('password'),
  })

  try {
    const { token } = await signin(data)
    cookies().set(COOKIE_NAME, token)
  } catch (e) {
    console.error(e)
    return { message: 'Failed to sign you in' }
  }

  redirect('/dashboard')
}
