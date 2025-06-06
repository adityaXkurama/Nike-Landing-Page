import {offer} from '../assets/images/index'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'


const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div>
        <img src={offer} alt="" width={700} height={600}
        className='object-contain w-full'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        
      <h2 className=' font-palanquin text-4xl  capitalize  font-bold lg:max-w-lg'>
      <span className='text-coral-red'>Special</span> offer 
      </h2>
      <p className='mt-4 lg:max-w-lg info-text'>Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.</p>
          <p className='mt-4 lg:max-w-lg info-text'>
            Our dedication to detail and excellence ensures your satisfication
          </p>
      <div className='mt-11 flex flex-wrap gap-4'>
        <Button label="Shop now" iconURL={arrowRight}/>
        <Button label="Learn more" 
        backgroundColor='bg-white'
        borderColor='border-slate-gray'
        textColor='text-slate-gray'
        />
      </div>
      </div>
      
    </section>
  )
}

export default SpecialOffer
