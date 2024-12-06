import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/30 rounded-full blur-3xl pointer-events-none" />
      <div className="relative z-10 space-y-8">
        <div className="flex justify-center">
          <div className="relative">
            <Image
              src="/placeholder.svg?height=100&width=100"
              alt="Profile"
              width={100}
              height={100}
              className="rounded-full"
            />
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full border border-gray-800">
              ✓ Verified Expert
            </div>
          </div>
        </div>
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Designed for <span className="text-gray-400">Designers</span> to showcase their{' '}
            <span className="text-gray-400">work</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl">
            Helping startups and brands to craft expressive and engaging solutions for their software needs.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            variant="outline"
            size="lg"
            className="bg-black/50 border-gray-800 hover:bg-black/70 backdrop-blur-md relative group"
          >
            <span className="relative z-10">Use this Template</span>
            <div className="absolute inset-0 rounded-lg bg-teal-500/20 blur-lg group-hover:blur-xl transition-all" />
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="text-gray-300 hover:text-white"
          >
            Get Athos Plus
          </Button>
        </div>
      </div>
    </div>
  )
}

