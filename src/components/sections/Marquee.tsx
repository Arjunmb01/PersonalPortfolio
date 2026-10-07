import { MARQUEE_ITEMS } from '../../lib/constants'

export default function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

  return (
    <div
      className="py-8 border-y border-paper/5 overflow-hidden"
      aria-hidden="true"
    >
      <div className="marquee-wrapper">
        <div className="marquee-inner">
          {items.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-8 mx-8">
              <span className="text-caption text-mist tracking-widest uppercase">{item}</span>
              <span className="text-accent text-lg">—</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
