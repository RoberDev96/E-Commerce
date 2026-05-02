import { z } from 'zod'
import type { UseFormSetError } from 'react-hook-form'
import type { NavigateFunction } from 'react-router'
import type { User } from '../context/authContext'
import { authregister } from './authregister'
import { authservice } from './authservice'

export const loginSchema = z.object({
  usuario: z
    .string()
    .trim()
    .min(1, 'El usuario es obligatorio')
    .min(3, 'Debe tener al menos 3 caracteres'),
  password: z
    .string()
    .min(1, 'La contraseña es obligatoria')
    .min(6, 'Debe tener minimo 6 caracteres'),
})

export const registerSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(1, 'El nombre es obligatorio')
      .min(3, 'Debe tener al menos 3 caracteres'),
    email: z
      .string()
      .trim()
      .min(1, 'El correo electronico es obligatorio')
      .email('Correo electronico invalido'),
    password: z
      .string()
      .min(1, 'La contraseña es obligatoria')
      .min(6, 'Debe tener minimo 6 caracteres')
      .max(20, 'Maximo 20 caracteres'),
    confirmPassword: z.string().min(1, 'Confirma tu contraseña'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Las contraseñas no coinciden',
    path: ['confirmPassword'],
  })

export type LoginFormData = z.infer<typeof loginSchema>
export type RegisterFormData = z.infer<typeof registerSchema>

interface AuthFormActions<TFormData extends LoginFormData | RegisterFormData> {
  login: (user: User) => void
  navigate: NavigateFunction
  setError: UseFormSetError<TFormData>
}

const getSubmitErrorMessage = (error: unknown) => {
  return error instanceof Error ? error.message : 'Error desconocido'
}

export const loginUser = (data: LoginFormData) => {
  return authservice(data.usuario, data.password)
}

export const registerUser = (data: RegisterFormData) => {
  return authregister({
    name: data.name,
    email: data.email,
    password: data.password,
  })
}

export const submitLoginForm = async (
  data: LoginFormData,
  { login, navigate, setError }: AuthFormActions<LoginFormData>
) => {
  try {
    const result = await loginUser(data)
    login(result.user)
    localStorage.setItem('token', result.token)
    navigate('/productos')
  } catch (error) {
    setError('root', {
      type: 'server',
      message: getSubmitErrorMessage(error),
    })
  }
}

export const submitRegisterForm = async (
  data: RegisterFormData,
  { login, navigate, setError }: AuthFormActions<RegisterFormData>
) => {
  try {
    const result = await registerUser(data)
    login(result.user)
    localStorage.setItem('token', result.token)
    navigate('/productos')
  } catch (error) {
    setError('root', {
      type: 'server',
      message: getSubmitErrorMessage(error),
    })
  }
}
