'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const ButtonSecondary = ({message, href="/"}: {message: string, href: string}) => {
  const router = useRouter();

  const handleOnClick = () => {
    router.push(href);  // Replace with your services page route
  };

  return (
    <Button
      variant="outline"
      size="lg"
      className="bg-black/80 border-gray-800 hover:bg-black/100 backdrop-blur-md relative group rounded-[30px] px-8 py-6"
      onClick={handleOnClick}
    >
      <span className="relative z-10">{message}</span>
      <div className="absolute inset-0 rounded-lg bg-teal-500/20 blur-lg group-hover:blur-xl transition-all" />
    </Button>
  )
}

export default ButtonSecondary
