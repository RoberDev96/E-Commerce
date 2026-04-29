import { useState, type FormEvent } from "react";
import { authservice } from "../services/authservice";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../context/useAuth";



export default function Login() {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate()
  const { login } = useAuth()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
 

    e.preventDefault()

    setLoading(true)
    setError('')

    try {
      const result = await authservice(name, password)
      login(result.user)
      
      localStorage.setItem('token', result.token);
      navigate('/productos')

    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido");

    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="overflow-hidden rounded-4xl border border-white/10 bg-white/8 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl md:p-8">
      <div className="mb-8 text-center">
        <span className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-200/30 bg-cyan-300/15 text-2xl font-black text-cyan-100">
          E
        </span>
        <h1 className="text-4xl font-black tracking-tight text-white">
          Bienvenido
        </h1>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          Inicia sesion para volver al catalogo y seguir explorando productos.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="mb-2 block text-sm font-bold text-slate-200">Usuario</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Roberto"
            className="w-full rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200/70 focus:ring-4 focus:ring-cyan-300/10"
        />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-slate-200">Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200/70 focus:ring-4 focus:ring-cyan-300/10"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-2xl bg-cyan-300 px-5 py-4 font-black text-slate-950 shadow-lg shadow-cyan-950/30 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? 'Entrando...' : 'Entrar al catalogo'}
        </button>
      </form>

      {
        error &&
        <div className="mt-5 rounded-2xl border border-red-300/30 bg-red-500/10 p-3 text-center text-sm font-semibold text-red-100">
          {error}</div>
      }

      <p className="mt-6 text-center text-sm text-slate-400">
        ¿No tienes cuenta?{" "}
        <Link to="/auth/register" className="font-bold text-cyan-200 transition hover:text-white">
          Regístrate
        </Link>
      </p>
    </div>
  )
}
