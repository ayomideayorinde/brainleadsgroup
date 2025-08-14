
export default function CTA() {
  return (
    <section className="bg-[#333333] px-[25px] py-10 lg:px-[50px]">
      <div className="flex flex-col items-center gap-8 lg:px-[50px] px-[25px] py-10">
        <h1 className="text-center text-white text-[32px] lg:text-[40px] font-bold capitalize">
          Digital marketing connects your business to the customers looking for you.
        </h1>
        <p className="text-center text-white text-[18px] lg:text-[20px] font-normal">
          We create a strategy that binds you up with your target audience, driving not just traffic flow but conversions.
        </p>
        <button className='rounded-full font-bold primary-bg px-5 py-3'><a href='https://calendly.com/brainleadsgroup/30min' target='_blank'>Book Your Free Strategy Call Now</a></button>
      </div>
    </section>
  );
}
