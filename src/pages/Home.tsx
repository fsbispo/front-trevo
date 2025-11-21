import { MdChevronRight } from 'react-icons/md'
import { FaTrophy, FaRegSmile, FaCoins, FaFireAlt } from 'react-icons/fa'
import colors from '../styles/colors'
import principalHero from '../assets/principal.png'
import CarouselCard from '@/components/carousel/CarouselCard'
import HeroCarousel from '@/components/carousel/HeroCarousel'
import { RiTrophyFill } from 'react-icons/ri'

const winnerCardItems = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  position: `${i + 1}°`,
  title: "Plinko X",
  amount: "R$ 1.500,00",
  onPlay: () => console.log("Jogar Plinko X")
}));

const winnerCardItems2 = Array.from({ length: 8 }).map((_, i) => ({
  name: `Player ${i + 1}`,
  id: i,
  position: `${i + 1}°`,
  title: "Plinko X",
  amount: "R$ 1.500,00",
}));

type Winner = {
  id: number;
  name: string;
  game: string;
  amount: string;
}

const winners: Winner[] = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  name: 'Ryan Kentor',
  game: 'Raspadinha',
  amount: 'R$150,00'
}))

function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={` ${className}`.trim()}>
      {children}
    </section>
  )
}

// (helper removido - não utilizado)

export default function Home() {
  const heroImages = [principalHero, principalHero, principalHero];

  return (
    <div className="text-white space-y-4 sm:space-y-6">
      {/* Hero */}
      <Section className="p-0 border-0">
        <HeroCarousel images={heroImages} />
      </Section>

      {/* Pagou hoje */}


    <Section>
      <CarouselCard
        title="Pagou Hoje"
        headerBg={`linear-gradient(180deg, ${colors.border.slateBlue}, ${colors.border.darkBlue})`}
        borderColor={colors.border.slateBlue}
        iconLeft={<FaFireAlt />}
        items={winnerCardItems}
      />
    </Section>

    <Section>
      <CarouselCard
        title="Ganhadores Recentes"
        headerBg={`linear-gradient(180deg, ${colors.border.slateBlue}, ${colors.border.darkBlue})`}
        borderColor={colors.border.slateBlue}
        iconLeft={<RiTrophyFill />}
        items={winnerCardItems2}
      />
    </Section>


      {/* Raspadinhas */}
      <Section className="p-3 sm:p-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="rounded-xl overflow-hidden border border-emerald-500/20">
              <div className="h-36 sm:h-44 bg-gradient-to-br from-emerald-600/40 to-cyan-600/30" />
              <div className="p-3 bg-gunmetal/40">
                <div className="flex items-center justify-between text-emerald-200 text-xs">
                  <span className="px-2 py-[2px] rounded-full bg-emerald-500/10 border border-emerald-400/30">RASPADINHA</span>
                  <span className="opacity-80">tire sua sorte</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Ganhadores recentes */}
      <Section className="p-3 sm:p-4">
        <div className="flex items-center gap-2 mb-3 sm:mb-4">
          <FaRegSmile className="text-emerald-400" />
          <h2 className="text-sm sm:text-base font-semibold">Ganhadores recentes</h2>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {winners.map((w) => (
            <div key={w.id} className="min-w-[160px] rounded-lg bg-gunmetal/40 border border-emerald-500/20 p-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500/40 to-cyan-400/30" />
                <div>
                  <div className="text-xs font-medium">{w.name}</div>
                  <div className="text-[11px] text-emerald-200/90">{w.game}</div>
                </div>
              </div>
              <div className="mt-2 text-sm font-bold text-emerald-300">{w.amount}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Level up */}
      <Section className="p-3 sm:p-4">
        <div className="relative overflow-hidden rounded-lg bg-gunmetal/40 border border-emerald-500/20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-4">
            <div className="md:col-span-8">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Suba mais alto e desbloqueie presentes maiores!</h3>
              <button className="inline-flex items-center gap-1 px-3 py-2 rounded-md bg-emerald-500 text-gunmetal font-semibold hover:bg-emerald-400 transition">
                IR PARA NÍVEIS <MdChevronRight />
              </button>
            </div>
            <div className="md:col-span-4 justify-self-end hidden md:block">
              <div className="w-[220px] h-[120px] rounded-lg bg-gradient-to-br from-emerald-500/30 to-cyan-400/20 border border-emerald-400/30" />
            </div>
          </div>
        </div>
      </Section>

      {/* Footer simples */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-emerald-200/90 py-6">
        <div>
          <div className="font-semibold text-white mb-2">Raspadinha</div>
          <ul className="space-y-1 opacity-90">
            <li>Opção 1</li>
            <li>Opção 2</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-white mb-2">Cassino</div>
          <ul className="space-y-1 opacity-90">
            <li>Clássico</li>
            <li>Cassino ao vivo</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-white mb-2">Suporte</div>
          <ul className="space-y-1 opacity-90">
            <li>Central de Ajuda</li>
            <li>Política de Privacidade</li>
            <li>Termos de Uso</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
