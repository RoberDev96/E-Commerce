import { sleep } from '../../../shared/utils/sleep'
import { getAuthUsers } from './authStorage'

interface AuthUser {
  id: number
  name: string
  email: string
  role: string
}

interface AuthResponse {
  token: string
  user: AuthUser
}

export const authservice = async (usuario: string, password: string): Promise<AuthResponse> => {
 
  await sleep(1500)
   

  const normalizedUsuario = usuario.trim().toLowerCase()
  const userFound = getAuthUsers().find((user) => (
    normalizedUsuario === user.name.toLowerCase() ||
    normalizedUsuario === user.email.toLowerCase()
  ))
    if (!userFound) {
      throw new Error('Usuario no Encontrado')
    }
    if (userFound.password !== password) {
         throw new Error("Contraseña incorrecta") 
    }

  return {
    token: 'fake-token-123',
    user:{
      id: userFound.id,
      name: userFound.name,
      email: userFound.email,
      role: userFound.role
    }
  }

}
