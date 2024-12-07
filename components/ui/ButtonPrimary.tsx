import { Button } from '@/components/ui/button'

const ButtonPrimary = ({message}: {message: string}) => {
  return (
    <Button
        variant="ghost"
        size="lg"
        className="text-gray-300 rounded-[30px] px-8 py-6 border border-white hover:bg-[#D1F5D2] hover:text-black"
    >
        {message}
    </Button>
  )
}

export default ButtonPrimary
