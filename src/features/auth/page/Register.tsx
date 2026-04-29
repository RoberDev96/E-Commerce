import { Link } from "react-router"

export default function Register() {
  return (
    <div className="overflow-hidden rounded-4xl border border-white/10 bg-white/[0.08] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl md:p-8">
      <div className="mb-8 text-center">
        <span className="mb-4 inline-flex rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-1 text-sm font-semibold text-cyan-100">
          Nueva cuenta
        </span>
        <h1 className="text-4xl font-black tracking-tight text-white">
          Crear cuenta
        </h1>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          Registrate para guardar tus compras y entrar al catalogo premium.
        </p>
      </div>
      
      <div className="space-y-5">
      <div>
        <label className="mb-2 block text-sm font-bold text-slate-200">Nombre</label>
        <input 
          type="text" 
          placeholder="Roberto"
          className="w-full rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200/70 focus:ring-4 focus:ring-cyan-300/10"
        />
      </div>
      
      <div>
        <label className="mb-2 block text-sm font-bold text-slate-200">Correo electronico</label>
        <input 
          type="email" 
          placeholder="usuario@ejemplo.com"
          className="w-full rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200/70 focus:ring-4 focus:ring-cyan-300/10"
        />
      </div>
      
      <div>
        <label className="mb-2 block text-sm font-bold text-slate-200">Contraseña</label>
        <input 
          type="password" 
          placeholder="••••••••"
          className="w-full rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200/70 focus:ring-4 focus:ring-cyan-300/10"
        />
      </div>
      
      <div>
        <label className="mb-2 block text-sm font-bold text-slate-200">Confirmar contraseña</label>
        <input 
          type="password" 
          placeholder="••••••••"
          className="w-full rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200/70 focus:ring-4 focus:ring-cyan-300/10"
        />
      </div>
      
      <button className="w-full rounded-2xl bg-cyan-300 px-5 py-4 font-black text-slate-950 shadow-lg shadow-cyan-950/30 transition hover:bg-white">
        Registrarse
      </button>
      </div>
      
      <p className="mt-6 text-center text-sm text-slate-400">
        ¿Ya tienes cuenta?{" "}
        <Link to="/auth" className="font-bold text-cyan-200 transition hover:text-white">
          Iniciar sesión
        </Link>
      </p>
    </div>
  )
}
