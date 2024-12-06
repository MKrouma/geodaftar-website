import { Button } from '@/components/ui/button'

const ButtonSecondary = ({message}: {message: string}) => {
  return (
    <Button
      variant="outline"
      size="lg"
      className="bg-black/80 border-gray-800 hover:bg-black/100 backdrop-blur-md relative group rounded-[30px] px-8 py-6"
    >
      <span className="relative z-10">{message}</span>
      <div className="absolute inset-0 rounded-lg bg-teal-500/20 blur-lg group-hover:blur-xl transition-all" />
    </Button>
  )
}

export default ButtonSecondary
