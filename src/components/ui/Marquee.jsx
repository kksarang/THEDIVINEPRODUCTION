export default function Marquee({ items, className = '' }) {
  const doubled = [...items, ...items]
  return (
    <div className={`overflow-hidden border-y border-gold/15 ${className}`}>
      <div className="marquee-track py-8 md:py-10">
        {doubled.map((item, i) => (
          <div
            key={`${item}-${i}`}
            className="flex items-center gap-8 px-8 md:px-12"
          >
            <span className="font-heading text-2xl md:text-3xl text-white/70 whitespace-nowrap tracking-wide">
              {item}
            </span>
            <span className="w-2 h-2 rounded-full bg-gold/70" />
          </div>
        ))}
      </div>
    </div>
  )
}
