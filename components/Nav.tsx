import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { LogoWhite } from '@/public/Images'

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/50 backdrop-blur-md">
      <Link href="/" className="text-2xl font-bold text-white flex items-center">
        <Image src={LogoWhite} alt="Geodaftar logo" className='w-10 h-10 mr-1'/>
        Geodaftar
      </Link>
      <div className="hidden md:flex items-center gap-8">
        <Link href="/services" className="text-sm text-gray-300 hover:text-[#D1F5D2] transition-colors">
          Services
        </Link>
        <Link href="/produits" className="text-sm text-gray-300 hover:text-[#D1F5D2] transition-colors">
          Produits
        </Link>
        <Link href="/portfolio" className="text-sm text-gray-300 hover:text-[#D1F5D2] transition-colors">
          Portfolio
        </Link>
        <Link href="/blod" className="text-sm text-gray-300 hover:text-[#D1F5D2] transition-colors">
          Blog
        </Link>
        <Button variant="outline" className="text-sm hover:bg-[#D1F5D2] hover:text-black">
          Contactez-nous
        </Button>
      </div>
    </nav>
  )
}

