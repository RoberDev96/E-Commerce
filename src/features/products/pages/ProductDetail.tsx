import { useQuery } from "@tanstack/react-query"
import { getById } from "../services/productDetail"
import { useNavigate, useParams } from "react-router"
import { Spinner } from "@/shared/components/spinner"
import { useCart } from "@/features/cart/context/cartContext"

export const ProductDetail = () => {
  const { id } = useParams();
  const productId = Number(id);
  const navigate = useNavigate()
  const { addItem } = useCart()

  const { data: product, isLoading, isError } = useQuery({
    queryKey: ['producto', productId],
    queryFn: () => getById(productId),
    enabled: !isNaN(productId),
    staleTime: 1000 * 60
  })


  const handleClick = () => {
    if (product) {
      addItem(product)
      alert('Producto agregado al carrito')
    }
  }

  if (isLoading) {
    return (
      <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,#334155_0,#111827_34%,#030712_100%)] px-4 py-10 text-slate-100">
        <Spinner />
      </main>
    )
  }

  if (isError) {
    return (
      <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,#334155_0,#111827_34%,#030712_100%)] px-4 py-10 text-slate-100">
        <section className="mx-auto max-w-3xl rounded-3xl border border-red-300/30 bg-red-500/10 p-6 text-red-100">
          <h1 className="text-2xl font-black">Error al cargar el producto</h1>
          <p className="mt-2 text-red-100/80">
            Intenta volver a la lista y abrir el producto de nuevo.
          </p>
          <button
            onClick={() => navigate('/productos')}
            className="mt-5 rounded-full bg-cyan-300 px-5 py-2 text-sm font-black text-slate-950 transition hover:bg-white"
          >
            Volver a productos
          </button>
        </section>
      </main>
    )
  }

  if (!product) {
    return (
      <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,#334155_0,#111827_34%,#030712_100%)] px-4 py-10 text-slate-100">
        <section className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl shadow-black/30 backdrop-blur">
          <h1 className="text-2xl font-black text-white">Producto no encontrado</h1>
          <button
            onClick={() => navigate('/productos')}
            className="mt-5 rounded-full bg-cyan-300 px-5 py-2 text-sm font-black text-slate-950 transition hover:bg-white"
          >
            Volver a productos
          </button>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,#334155_0,#111827_34%,#030712_100%)] px-4 py-10 text-slate-100">
      <section className="mx-auto max-w-7xl">
        <button
          onClick={() => navigate('/productos')}
          className="mb-6 rounded-full border border-white/10 bg-slate-950/60 px-5 py-2 text-sm font-bold text-cyan-100 transition hover:border-cyan-200/40 hover:bg-white/10"
        >
          Volver a productos
        </button>

        <article className="overflow-hidden rounded-4xl border border-white/10 bg-white/10 shadow-2xl shadow-black/30 backdrop-blur">
          <div className="grid gap-8 p-5 md:grid-cols-[0.9fr_1.1fr] md:p-8 lg:p-10">
            <div className="relative flex min-h-96 items-center justify-center rounded-3xl bg-white p-8">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-96 max-w-full object-contain"
              />
              <span className="absolute left-4 top-4 rounded-full bg-slate-950/85 px-4 py-1 text-xs font-black uppercase tracking-wide text-cyan-100">
                {product.category}
              </span>
            </div>

            <div className="flex flex-col">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-cyan-100/80">
                Detalle del producto
              </p>
              <h1 className="text-3xl font-black leading-tight text-white md:text-5xl">
                {product.title}
              </h1>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <p className="rounded-2xl bg-cyan-300 px-5 py-3 text-3xl font-black text-slate-950">
                  ${product.price.toFixed(2)}
                </p>
                <p className="rounded-2xl border border-amber-200/20 bg-amber-300/15 px-5 py-3 text-sm font-black text-amber-200">
                  {product.rating.rate} estrellas
                </p>
                <p className="rounded-2xl border border-white/10 bg-slate-950/50 px-5 py-3 text-sm font-bold text-slate-300">
                  {product.rating.count} reseñas
                </p>
              </div>

              <div className="mt-8 rounded-3xl border border-white/10 bg-slate-950/35 p-5">
                <h2 className="text-lg font-black text-white">Descripcion</h2>
                <p className="mt-3 text-base leading-7 text-slate-300">
                  {product.description}
                </p>
              </div>

              <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row">
                <button
                  onClick={handleClick}
                  className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-black text-slate-950 transition hover:bg-white">
                  Agregar al carrito
                </button>
                <button className="rounded-full border border-white/10 bg-white/10 px-6 py-3 text-sm font-black text-white transition hover:border-cyan-200/40 hover:bg-white/15">
                  Guardar favorito
                </button>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  )
}
