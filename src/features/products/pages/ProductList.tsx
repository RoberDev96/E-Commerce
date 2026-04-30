import { useQuery } from '@tanstack/react-query'
import { getAllProducts } from '../services/productService'
import { SkeletonProduct } from '../components/skeletonProduct'
import { useState } from 'react'
import {
  categoryFilters,
  filterProductsByCategory,
  type ProductCategoryFilter
} from '../services/filter'
import { Link } from 'react-router'

export const ProductList = () => {
  const productQuery = useQuery({
    queryKey: ['productos'],
    queryFn: getAllProducts,
    staleTime: 1000 * 60
  })

  const productos = productQuery.data ?? []
  const [selectedCategory, setSelectedCategory] = useState<ProductCategoryFilter>('all')
  const filteredProducts = filterProductsByCategory(productos, selectedCategory)

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,#334155_0,#111827_34%,#030712_100%)] px-4 py-10 text-slate-100">
      <section className="mx-auto max-w-7xl">


        <div className="mb-8 flex w-full flex-col items-center gap-4">
          <h2 className="text-sm font-black uppercase tracking-[0.2em] text-cyan-100/80">
            Categorias
          </h2>
          <div className="flex max-w-full flex-wrap justify-center gap-2 rounded-3xl border border-white/10 bg-slate-950/70 p-2 shadow-xl shadow-black/20 backdrop-blur">
            {categoryFilters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setSelectedCategory(filter.value)}
                className="rounded-2xl px-4 py-2 text-xs font-black uppercase tracking-wide text-slate-300 transition hover:bg-cyan-300 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-cyan-200 sm:px-5"
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
        {productQuery.isLoading && <SkeletonProduct />}

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
            {filteredProducts.map((producto) => (
              <article
                key={producto.id}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/8 shadow-xl shadow-black/20 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-200/40 hover:bg-white/12"
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
                    <Link to={`/productos/${producto.id}`} 
                    
                    className="rounded-full bg-cyan-300 px-4 py-2 text-sm font-black text-slate-950 transition hover:bg-white">
                      Ver producto
                    </Link>
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
