import { usuariosRegistrados } from '../../../shared/utils/constantes'
import { sleep } from '../../../shared/utils/sleep'

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
   

  const userFound = usuariosRegistrados.find((user) => (
    usuario === user.name
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
