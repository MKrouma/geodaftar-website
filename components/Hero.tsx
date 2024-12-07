import { Button } from '@/components/ui/button'
import ButtonPrimary from './ui/ButtonPrimary'
import ButtonSecondary from './ui/ButtonSecondary'

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/30 rounded-full blur-3xl pointer-events-none" />
      <div className="relative z-10 space-y-8">
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-xl md:text-6xl font-bold text-white">
            Studio d'<span className="text-[#D1F5D2]">Intelligence Géospatiale</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl">
            Accélérez le développement des entreprises africaines avec nos solutions d'intelligences géospatiales.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <ButtonSecondary message='Nos services' href='services'/> 
          <ButtonPrimary message='Voir la vidéo' /> 
        </div>
      </div>
    </section>
  )
}

