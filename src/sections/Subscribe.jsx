import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section className='max-container flex justify-center items-center max-lg:flex-col gap-10'
    id='contact-us'
    >
      <h3 className='text-4xl leading-[68px] max-lg:max-w-md font-palanquin font-bold w-full '>Sign Up for
        <span className='text-coral-red'> Updates </span>
        & Newsletter
      </h3>
      <div className="lg:max-w-[40%] flex w-full items-center max-sm:flex-col gap-5 p-2 sm:border sm:border-slate-gray rounded-full">
        <input type="text" 
        placeholder='subscribe@nike.com'
        className='input'
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth/>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
