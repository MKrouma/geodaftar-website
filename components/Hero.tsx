import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <div className="relative min-h-[100vh] flex flex-col items-center justify-center text-center px-4">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/30 rounded-full blur-3xl pointer-events-none" />
      <div className="relative z-10 space-y-8">
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-5">
            Studio d'<span className="text-[#D1F5D2]">Intelligence Géospatiale</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl pt-5">
            Accélérez le développement des entreprises africaines avec nos solutions d'intelligences géospatiales.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 pt-10">
          <Button
            variant="outline"
            size="lg"
            className="bg-black/80 border-gray-800 hover:bg-black/100 backdrop-blur-md relative group rounded-[30px] px-8 py-6"
          >
            <span className="relative z-10">Nos services</span>
            <div className="absolute inset-0 rounded-lg bg-teal-500/20 blur-lg group-hover:blur-xl transition-all" />
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="text-gray-300 rounded-[30px] px-8 py-6 border border-white hover:bg-[#D1F5D2] hover:text-black"
          >
            Voir la vidéo
          </Button>
        </div>
      </div>
    </div>
  )
}

