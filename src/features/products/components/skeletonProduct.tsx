

export const SkeletonProduct = () => {
  return (
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
  );
};



