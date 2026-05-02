import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from "react-router";
import { useAuth } from "../context/useAuth";
import {
  loginSchema,
  submitLoginForm,
  type LoginFormData,
} from "../services/authFormService";

export default function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      usuario: '',
      password: '',
    },
  })

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

      <form
        onSubmit={handleSubmit((data) =>
          submitLoginForm(data, { login, navigate, setError })
        )}
        className="space-y-5"
        noValidate
      >
        <div>
          <label className="mb-2 block text-sm font-bold text-slate-200">Usuario</label>
        <input
          type="text"
          {...register('usuario')}
          placeholder="Roberto"
            className="w-full rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200/70 focus:ring-4 focus:ring-cyan-300/10"
        />
        {errors.usuario && (
          <p className="mt-2 text-sm font-semibold text-red-200">
            {errors.usuario.message}
          </p>
        )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-slate-200">Contraseña</label>
          <input
            type="password"
            {...register('password')}
            placeholder="••••••••"
            className="w-full rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200/70 focus:ring-4 focus:ring-cyan-300/10"
          />
          {errors.password && (
            <p className="mt-2 text-sm font-semibold text-red-200">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-2xl bg-cyan-300 px-5 py-4 font-black text-slate-950 shadow-lg shadow-cyan-950/30 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? 'Entrando...' : 'Entrar al catalogo'}
        </button>
      </form>

      {errors.root && (
        <div className="mt-5 rounded-2xl border border-red-300/30 bg-red-500/10 p-3 text-center text-sm font-semibold text-red-100">
          {errors.root.message}
        </div>
      )}

      <p className="mt-6 text-center text-sm text-slate-400">
        ¿No tienes cuenta?{" "}
        <Link to="/auth/register" className="font-bold text-cyan-200 transition hover:text-white">
          Regístrate
        </Link>
      </p>
    </div>
  )
}

