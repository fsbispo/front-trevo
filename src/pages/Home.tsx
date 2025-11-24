import { FaFireAlt } from 'react-icons/fa'
import colors from '../styles/styles'
import principalHero from '../assets/principal.png'
import CarouselCard from '@/components/carousel/CarouselCard'
import HeroCarousel from '@/components/carousel/HeroCarousel'
import { RiTrophyFill } from 'react-icons/ri'
import LevelUpCard from '@/components/cards/LevelUpCard'

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

      {/* Level up */}
      {/* <Section className="p-3 sm:p-4">
        <LevelUpCard
          title="Suba mais alto e desbloqueie presentes maiores!"
          buttonText="IR PARA NÍVEIS"
        />
      </Section> */}
    </div>
  )
}
