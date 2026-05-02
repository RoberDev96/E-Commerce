import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from "react-router"
import { useAuth } from "../context/useAuth"
import {
  registerSchema,
  submitRegisterForm,
  type RegisterFormData,
} from "../services/authFormService"

export default function Register() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })
  
  return (
    <div className="overflow-hidden rounded-4xl border border-white/10 bg-white/8 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl md:p-8">
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
      
      <form
        onSubmit={handleSubmit((data) =>
          submitRegisterForm(data, { login, navigate, setError })
        )}
        className="space-y-5"
        noValidate
      >
      <div>
        <label className="mb-2 block text-sm font-bold text-slate-200">Nombre</label>
        <input 
          type="text" 
          {...register('name')}
          placeholder="Roberto"
          className="w-full rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200/70 focus:ring-4 focus:ring-cyan-300/10"
        />
        {errors.name && (
          <p className="mt-2 text-sm font-semibold text-red-200">
            {errors.name.message}
          </p>
        )}
      </div>
      
      <div>
        <label className="mb-2 block text-sm font-bold text-slate-200">Correo electronico</label>
        <input 
          type="email" 
          {...register('email')}
          placeholder="usuario@ejemplo.com"
          className="w-full rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200/70 focus:ring-4 focus:ring-cyan-300/10"
        />
        {errors.email && (
          <p className="mt-2 text-sm font-semibold text-red-200">
            {errors.email.message}
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
      
      <div>
        <label className="mb-2 block text-sm font-bold text-slate-200">Confirmar contraseña</label>
        <input 
          type="password" 
          {...register('confirmPassword')}
          placeholder="••••••••"
          className="w-full rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200/70 focus:ring-4 focus:ring-cyan-300/10"
        />
        {errors.confirmPassword && (
          <p className="mt-2 text-sm font-semibold text-red-200">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-2xl bg-cyan-300 px-5 py-4 font-black text-slate-950 shadow-lg shadow-cyan-950/30 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? 'Registrando...' : 'Registrarse'}
      </button>
      </form>

      {errors.root && (
        <div className="mt-5 rounded-2xl border border-red-300/30 bg-red-500/10 p-3 text-center text-sm font-semibold text-red-100">
          {errors.root.message}
        </div>
      )}
      
      <p className="mt-6 text-center text-sm text-slate-400">
        ¿Ya tienes cuenta?{" "}
        <Link to="/auth" className="font-bold text-cyan-200 transition hover:text-white">
          Iniciar sesión
        </Link>
      </p>
    </div>
  )
}
