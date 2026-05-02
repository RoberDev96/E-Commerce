import type { UsuarioRegistrado } from '../../../shared/utils/constantes'
import { sleep } from '../../../shared/utils/sleep'
import { getAuthUsers, saveRegisteredUser } from './authStorage'

interface RegisterData {
  name: string
  email: string
  password: string
}

interface AuthResponse {
  token: string
  user: {
    id: number
    name: string
    email: string
    role: string
  }
}

export const authregister = async (data: RegisterData): Promise<AuthResponse> => {
  await sleep(1500)

  const normalizedEmail = data.email.trim().toLowerCase()
  const normalizedName = data.name.trim().toLowerCase()
  const userExists = getAuthUsers().some((user) => (
    user.email.toLowerCase() === normalizedEmail ||
    user.name.toLowerCase() === normalizedName
  ))

  if (userExists) {
    throw new Error('Ya existe un usuario con ese nombre o correo')
  }

  const newUser: UsuarioRegistrado = {
    id: Date.now(),
    name: data.name.trim(),
    email: normalizedEmail,
    password: data.password,
    role: 'cliente',
  }

  saveRegisteredUser(newUser)

  return {
    token: 'fake-token-123',
    user: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
    },
  }
}
