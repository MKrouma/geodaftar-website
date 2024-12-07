import TitleH2 from "./ui/TitleH2"
import Image from "next/image"
import { AfricanGeospace } from "@/public/Images"
import { MoyaExpertises } from "@/public/Images"

const Testimonial = () => {
  return (
    <section className='h-[300px] pt-[80px]'>
        <TitleH2 content='Ils nous font confiance' />
        <div className="flex items-center">
          <Image src={AfricanGeospace} alt="African geospace logo" className="size-20 rounded-lg mr-10"></Image>
          <Image src={MoyaExpertises} alt="African geospace logo" className="w-22 h-16 rounded-lg"></Image>
        </div>
    </section>
  )
}

export default Testimonial
