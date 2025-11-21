import colors from '../../styles/colors'

interface TodayPaidCardProps {
  label?: string
  game: string
  amount: string
  onPlay?: () => void
  imageUrl?: string
}

export default function TodayPaidCard({ label = 'PIX', game, amount, onPlay, imageUrl }: TodayPaidCardProps) {
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
        <div className="ml-auto flex items-center gap-2">
          <span className="text-[10px] px-2 py-[2px] rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-200">{label}</span>
          <button
            onClick={onPlay}
            className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-yellow-400/90 text-gunmetal hover:bg-yellow-300 transition"
          >
            JOGAR ▶
          </button>
        </div>
      </div>
      <div className="mt-2 text-xs text-emerald-100/90">{game}</div>
      <div className="text-emerald-400 font-bold">{amount}</div>
    </div>
  )
}
