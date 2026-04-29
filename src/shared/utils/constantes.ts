export interface UsuarioRegistrado {
  id: number
  email: string
  password: string
  name: string
  role: string
}

export const usuariosRegistrados: UsuarioRegistrado[] = [
  {
    id: 1,
    email: "roberto@gmail.com",
    password: "123456",
    name: "Roberto",
    role: "cliente"
  },
  {
    id: 2,
    email: "pedro@email.com",
    password: "clave123",
    name: "Pedro",
    role: "cliente"
  }
]
