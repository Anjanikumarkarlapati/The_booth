export default function Loading() {
  return (
    <div className="min-h-screen bg-paper">
      {/* Hero skeleton */}
      <div className="bg-ink-900 min-h-[600px] flex items-center">
        <div className="max-w-[1240px] mx-auto px-6 w-full">
          <div className="w-40 h-3 bg-white/10 rounded animate-pulse mb-6" />
          <div className="w-full max-w-xl h-12 bg-white/10 rounded animate-pulse mb-4" />
          <div className="w-3/4 max-w-md h-12 bg-white/10 rounded animate-pulse mb-8" />
          <div className="w-full max-w-sm h-4 bg-white/5 rounded animate-pulse mb-10" />
          <div className="flex gap-4">
            <div className="w-36 h-12 bg-gold-500/20 rounded-sm animate-pulse" />
            <div className="w-40 h-12 bg-white/10 rounded-sm animate-pulse" />
          </div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="max-w-[1240px] mx-auto px-6 py-20">
        <div className="flex flex-col items-center mb-12">
          <div className="w-32 h-3 bg-gold-500/20 rounded animate-pulse mb-4" />
          <div className="w-80 h-8 bg-ink-800/10 rounded animate-pulse mb-3" />
          <div className="w-64 h-4 bg-stone-500/10 rounded animate-pulse" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex flex-col items-center p-6">
              <div className="w-14 h-14 rounded-full bg-gold-500/10 animate-pulse mb-4" />
              <div className="w-24 h-4 bg-ink-800/10 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
