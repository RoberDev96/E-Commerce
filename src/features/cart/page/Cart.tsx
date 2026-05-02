import { Link } from 'react-router'
import { useCart } from '../context/cartContext'

export const Cart = () => {
  const { cart, removeItem, updateQuantity, clearCart, totalPrice } = useCart()

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,#334155_0,#111827_34%,#030712_100%)] px-4 py-10 text-slate-100">
      <section className="mx-auto max-w-5xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-white">Carrito</h1>
            <p className="mt-2 text-sm text-slate-300">
              Revisa tus productos antes de finalizar la compra.
            </p>
          </div>

          <Link
            to="/productos"
            className="w-fit rounded-full bg-cyan-300 px-5 py-2 text-sm font-black text-slate-950 transition hover:bg-white"
          >
            Seguir comprando
          </Link>
        </div>

        {cart.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/8 p-8 text-center shadow-xl shadow-black/20 backdrop-blur">
            <p className="text-lg font-bold text-white">Tu carrito esta vacio</p>
            <p className="mt-2 text-sm text-slate-300">
              Agrega productos desde el catalogo para verlos aqui.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
            <div className="space-y-4">
              {cart.map((item) => (
                <article
                  key={item.product.id}
                  className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/8 p-4 shadow-xl shadow-black/20 backdrop-blur sm:flex-row sm:items-center"
                >
                  <div className="flex h-28 w-full items-center justify-center rounded-2xl bg-white p-4 sm:w-28">
                    <img
                      src={item.product.image}
                      alt={item.product.title}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h2 className="line-clamp-2 text-base font-bold text-white">
                      {item.product.title}
                    </h2>
                    <p className="mt-1 text-sm font-semibold text-cyan-100">
                      ${item.product.price.toFixed(2)}
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-3 sm:flex-col sm:items-end">
                    <div className="flex items-center overflow-hidden rounded-full border border-white/10 bg-slate-950/70">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="px-3 py-2 text-lg font-black text-cyan-100 transition hover:bg-white/10"
                        aria-label={`Disminuir cantidad de ${item.product.title}`}
                      >
                        -
                      </button>
                      <span className="min-w-10 px-2 text-center text-sm font-black">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="px-3 py-2 text-lg font-black text-cyan-100 transition hover:bg-white/10"
                        aria-label={`Aumentar cantidad de ${item.product.title}`}
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeItem(item.product.id)}
                      className="text-sm font-bold text-red-200 transition hover:text-red-100"
                    >
                      Eliminar
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <aside className="h-fit rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-xl shadow-black/20 backdrop-blur">
              <h2 className="text-lg font-black text-white">Resumen</h2>
              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-5">
                <span className="text-sm font-semibold text-slate-300">Total</span>
                <span className="text-2xl font-black text-cyan-100">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>

              <button
              onClick={()=>alert('Funcionalidad en desarrollo')}
                type="button"
                className="mt-6 w-full rounded-full bg-cyan-300 px-4 py-3 text-sm font-black text-slate-950 transition hover:bg-white"
              >
                Comprar
              </button>
              <button
                type="button"
                onClick={clearCart}
                className="mt-3 w-full rounded-full border border-white/10 px-4 py-3 text-sm font-black text-slate-200 transition hover:bg-white/10"
              >
                Vaciar carrito
              </button>
            </aside>
          </div>
        )}
      </section>
    </main>
  )
}
