export const Spinner = () => {
  return (
    <div className="flex items-center justify-center py-8" role="status">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-cyan-200/30 border-t-cyan-300" />
      <span className="sr-only">Cargando...</span>
    </div>
  )
}
