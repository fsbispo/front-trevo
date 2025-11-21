import colors from '../../styles/colors'

interface WinnerCardProps {
  name: string
  game: string
  amount: string
  imageUrl?: string
}

export default function WinnerCard({ name, game, amount, imageUrl }: WinnerCardProps) {
  return (
    <div
      className="min-w-[200px] sm:min-w-[220px] rounded-xl p-3"
      style={{
        backgroundColor: 'rgba(8,35,41,0.9)',
        border: `1px solid ${colors.border.slateBlue}`
      }}
    >
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-md bg-gradient-to-br from-emerald-500/40 to-cyan-400/30 overflow-hidden flex items-center justify-center">
          {imageUrl ? <img src={imageUrl} alt={game} className="w-full h-full object-cover" /> : (
            <div className="w-6 h-6 rounded-full bg-emerald-300/60" />
          )}
        </div>
        <div className="truncate">
          <div className="text-xs font-medium text-white truncate max-w-[120px]">{name}</div>
          <div className="text-[11px] text-emerald-200/90">{game}</div>
        </div>
      </div>
      <div className="mt-2 text-sm font-bold text-emerald-400">{amount}</div>
    </div>
  )
}
