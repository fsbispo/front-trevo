import { ReactNode } from 'react'
import colors from '../../styles/colors'

interface CarouselSectionProps {
  title: string
  icon?: ReactNode
  children: ReactNode
  className?: string
}

export default function CarouselSection({ title, icon, children, className = '' }: CarouselSectionProps) {
  return (
    <section
      className={`rounded-xl border px-3 sm:px-4 py-3 sm:py-4 ${className}`}
      style={{
        borderColor: colors.border.slateBlue,
        background: 'linear-gradient(180deg, rgba(22,103,120,0.35) 0%, rgba(10,46,54,0.9) 100%)'
      }}
    >
      <div className="flex items-center gap-2 mb-3 sm:mb-4 select-none">
        {icon && <div className="text-emerald-400">{icon}</div>}
        <h2 className="text-sm sm:text-base font-semibold text-white">{title}</h2>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1">
        {children}
      </div>
    </section>
  )
}
