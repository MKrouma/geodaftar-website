import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/50 backdrop-blur-md">
      <Link href="/" className="text-2xl font-bold text-white">
        A.
      </Link>
      <div className="hidden md:flex items-center gap-8">
        <Link href="/work" className="text-sm text-gray-300 hover:text-white transition-colors">
          Work
        </Link>
        <Link href="/experience" className="text-sm text-gray-300 hover:text-white transition-colors">
          Experience
        </Link>
        <Link href="/blog" className="text-sm text-gray-300 hover:text-white transition-colors">
          Blog
        </Link>
        <Link href="/faq" className="text-sm text-gray-300 hover:text-white transition-colors">
          FAQ
        </Link>
        <Button variant="outline" className="text-sm">
          Get in Touch
        </Button>
      </div>
    </nav>
  )
}

