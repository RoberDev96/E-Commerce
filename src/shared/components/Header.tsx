import { useAuth } from '../../features/auth/context/useAuth'
import { useCart } from '../../features/cart/context/cartContext'
import { useNavigate } from 'react-router'

export default function Header() {
  const { user, logout } = useAuth()
  const { totalItems } = useCart()
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
          <button
            type="button"
            onClick={() => navigate('/carrito')}
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-cyan-100 transition hover:border-cyan-200/50 hover:bg-cyan-300/15 focus:outline-none focus:ring-2 focus:ring-cyan-200"
            aria-label={`Carrito de compras con ${totalItems} productos`}
            title="Carrito de compras"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -right-1 -top-1 flex min-h-5 min-w-5 items-center justify-center rounded-full bg-cyan-300 px-1.5 text-xs font-black text-slate-950">
                {totalItems}
              </span>
            )}
          </button>
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
