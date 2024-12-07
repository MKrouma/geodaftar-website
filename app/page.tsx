import { Hero } from '@/components/Hero'
import Testimonial from '@/components/Testimonial'

export default function Home() {
  return (
    <>
      <Hero />
      <div className='bg-white px-[100px]'>
        <Testimonial />
      </div>
    </>
  )
}