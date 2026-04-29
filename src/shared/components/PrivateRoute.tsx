import { Navigate } from 'react-router'
import type { ReactNode } from 'react'
import { useAuth } from '../../features/auth/context/useAuth'

export const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth()
  
  // Si no hay usuario, redirige al login
  if (!user) {
    return <Navigate to="/auth" replace />
  }
  
  // Si hay usuario, muestra el contenido protegido
  return children
}
