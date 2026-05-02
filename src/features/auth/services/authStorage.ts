import { usuariosRegistrados, type UsuarioRegistrado } from '../../../shared/utils/constantes'

const REGISTERED_USERS_STORAGE_KEY = 'registered-users'

export const getStoredRegisteredUsers = (): UsuarioRegistrado[] => {
  const storedUsers = localStorage.getItem(REGISTERED_USERS_STORAGE_KEY)

  if (!storedUsers) return []

  try {
    return JSON.parse(storedUsers) as UsuarioRegistrado[]
  } catch {
    return []
  }
}

export const getAuthUsers = () => {
  return [...usuariosRegistrados, ...getStoredRegisteredUsers()]
}

export const saveRegisteredUser = (user: UsuarioRegistrado) => {
  const storedUsers = getStoredRegisteredUsers()
  localStorage.setItem(
    REGISTERED_USERS_STORAGE_KEY,
    JSON.stringify([...storedUsers, user])
  )
}
