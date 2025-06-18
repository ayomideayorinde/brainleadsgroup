import heroimg from '../assets/heroimg.jpg';

export default function Hero() {
  return (
    <section className='relative w-full h-screen overflow-hidden bg-cover bg-center' style={{backgroundImage: `url(${heroimg})`}}>
      <div className="">
        {/* <img src={heroimg} className=''/> */}
      </div>
      <div className='bg-black w-full h-full absolute z-10 top-0 right-0 left-0 opacity-50'></div>
      <div className='w-full flex flex-col items-center gap-[20px] lg:px-[150px] px-[50px] absolute z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-center'>
        <p className='text-2xl lg:text-4xl font-bold capitalize'>
            Rise above the noise. <span className='primary-fg'>Discover what’s true.</span>
        </p>
        <p className='text-md lg:text-xl font-semibold'>
            Your business deserves to prosper. Whether local or global, we create your path through digital marketing.
        </p>
        <button className='rounded-full font-bold primary-bg px-5 py-3'>Book A Free Consultation</button>
      </div>
    </section>
  );
}
