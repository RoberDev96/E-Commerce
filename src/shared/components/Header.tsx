import { useAuth } from '../../features/auth/context/useAuth'
import { useNavigate } from 'react-router'

export default function Header() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/auth')
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 px-4 py-4 text-white shadow-2xl shadow-black/20 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <button
          onClick={() => navigate('/productos')}
          className="group flex items-center gap-3 text-left"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-200/30 bg-cyan-300/15 text-lg font-black text-cyan-100 shadow-lg shadow-cyan-950/30 transition group-hover:bg-cyan-300 group-hover:text-slate-950">
            E
          </span>
          <span>
            <span className="block text-lg font-black tracking-tight">Mi E-commerce</span>
            <span className="hidden text-xs font-medium uppercase tracking-[0.24em] text-cyan-200/80 sm:block">
              catalogo premium
            </span>
          </span>
        </button>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              <span className="hidden rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-200 sm:inline-flex">
                Hola, {user.name}
              </span>
              <button
                onClick={handleLogout}
                className="rounded-full bg-cyan-300 px-4 py-2 text-sm font-black text-slate-950 transition hover:bg-white"
              >
                Cerrar sesión
              </button>
            </>
          ) : (
            <button
              onClick={() => navigate('/auth')}
              className="rounded-full bg-cyan-300 px-4 py-2 text-sm font-black text-slate-950 transition hover:bg-white"
            >
              Iniciar sesión
            </button>
          )}
        </div>
      </div>
    </header>
  )
}
