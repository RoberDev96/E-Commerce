import { useQuery } from '@tanstack/react-query'
import { getAllProducts } from '../services/productService'

export const ProductList = () => {
  const productQuery = useQuery({
    queryKey: ['productos'],
    queryFn: getAllProducts,
    staleTime: 1000 * 60
  })

  const productos = productQuery.data ?? []

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,#334155_0,#111827_34%,#030712_100%)] px-4 py-10 text-slate-100">
      <section className="mx-auto max-w-7xl">
        <div className="mb-10 overflow-hidden rounded-4xl border border-white/10 bg-white/10 p-6 shadow-2xl shadow-black/30 backdrop-blur md:p-10">
          <span className="mb-4 inline-flex rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-1 text-sm font-semibold text-cyan-100">
            Tienda online
          </span>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="max-w-2xl text-4xl font-black tracking-tight text-white md:text-6xl">
                Productos con estilo, listos para explorar.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
                Descubre nuestra seleccion curada con precios claros, valoraciones y categorias para encontrar rapido lo que necesitas.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/50 px-6 py-4 text-center">
              <p className="text-3xl font-black text-cyan-200">{productos.length}</p>
              <p className="text-sm text-slate-400">productos disponibles</p>
            </div>
          </div>
        </div>

        {productQuery.isLoading && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="animate-pulse rounded-3xl border border-white/10 bg-white/10 p-5">
                <div className="mb-5 h-52 rounded-2xl bg-white/10" />
                <div className="mb-3 h-4 w-2/3 rounded bg-white/10" />
                <div className="mb-2 h-3 rounded bg-white/10" />
                <div className="mb-5 h-3 w-5/6 rounded bg-white/10" />
                <div className="h-10 rounded-full bg-white/10" />
              </div>
            ))}
          </div>
        )}

        {productQuery.isError && (
          <div className="rounded-3xl border border-red-300/30 bg-red-500/10 p-6 text-red-100">
            <h3 className="text-xl font-bold">No se pudieron cargar los productos</h3>
            <p className="mt-2 text-red-100/80">
              Intenta refrescar la pagina. Si el problema sigue, revisamos la conexion con la API.
            </p>
          </div>
        )}

        {productQuery.isSuccess && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {productos.map((producto) => (
              <article
                key={producto.id}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.08] shadow-xl shadow-black/20 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-200/40 hover:bg-white/[0.12]"
              >
                <div className="relative m-4 flex h-56 items-center justify-center overflow-hidden rounded-2xl bg-white p-6">
                  <img
                    src={producto.image}
                    alt={producto.title}
                    className="max-h-full max-w-full object-contain transition duration-500 group-hover:scale-110"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-slate-950/85 px-3 py-1 text-xs font-bold uppercase tracking-wide text-cyan-100">
                    {producto.category}
                  </span>
                </div>

                <div className="flex min-h-72 flex-col p-5 pt-1">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <p className="text-2xl font-black text-white">${producto.price.toFixed(2)}</p>
                    <p className="rounded-full bg-amber-300/15 px-3 py-1 text-sm font-bold text-amber-200">
                      {producto.rating.rate} estrellas
                    </p>
                  </div>

                  <h3 className="line-clamp-2 text-lg font-bold leading-snug text-white">
                    {producto.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-300">
                    {producto.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-5">
                    <span className="text-sm text-slate-400">
                      {producto.rating.count} reseñas
                    </span>
                    <button className="rounded-full bg-cyan-300 px-4 py-2 text-sm font-black text-slate-950 transition hover:bg-white">
                      Ver producto
                    </button>
                  </div>
                </div>
              </article>
        ))}
          </div>
        )}
      </section>
    </main>
  )
}
