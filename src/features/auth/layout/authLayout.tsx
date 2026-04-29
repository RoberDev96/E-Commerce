import { Outlet } from "react-router"

export const AuthLayout = () => {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top_left,#334155_0,#111827_36%,#030712_100%)] p-6 text-slate-100 md:p-10">
      <div className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-amber-300/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-200/60 to-transparent" />

      <div className="relative z-10 w-full max-w-md">
        <Outlet />
      </div>
    </div>
  )
}
