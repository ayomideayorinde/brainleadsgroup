import results from '../assets/results.jpg';

export default function Results() {
  return (
    <section className="">
      <div className="flex flex-col items-center gap-8 lg:px-[50px] px-[25px] py-10">
        <h1 className="text-center text-[32px] lg:text-[40px] font-bold capitalize">
          Results That Matter
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
        <div className="lg:px-[50px] px-[25px] py-10 bg-[#333333] text-white text-center lg:text-left">
          <h1 className='text-[25px] lg:text-[30px] font-bold'>Results Matter.</h1>
          <p className='text-[16px] lg:text-[20px] mb-5'>Traffic is nice. Sales matter more.</p>
          <ul className='flex flex-col gap-5 text-[16px] lg:text-[20px]'>
            <li>✓ SEO Growth</li>
            <li>✓ Leads Funnel</li>
            <li>✓ Sales Uplift</li>
          </ul>
        </div>
        <div className='lg:px-[50px] px-[25px] h-[400px] lg:h-auto flex justify-end items-center bg-cover bg-no-repeat bg-center' style={{backgroundImage: `url(${results})`}}>
          
        </div>
      </div>
    </section>
  );
}
