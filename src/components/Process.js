const steps = [
  {step: 'Step 1', title: 'AUDIT', icon: '🔍'},
  {step: 'Step 2', title: 'RESEARCH', icon: '📊'},
  {step: 'Step 3', title: 'STRATEGY', icon: '🧠'},
  {step: 'Step 4', title: 'EXECUTION', icon: '🚀'},
  {step: 'Step 5', title: 'OPTIMIZE', icon: '📈'},
  {step: 'Step 6', title: 'CONVERSION', icon: '💰'},
]

export default function Process() {
  return (
    <section className="py-5">
      <div className="text-center py-12 px-[25px] lg:px-[50px]">
        <h1 className="text-center text-[32px] lg:text-[40px] font-bold capitalize">
          How We Do Digital Marketing
        </h1>
        <p className="text-[18px] lg:text-[20px] ">
          Every brand is different. So we apply a structured, customized approach to make sure your business gets the results it deserves.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-0 p-6 px-[25px] lg:px-[50px]">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center justify-center rounded-lg py-2 hover:shadow-2xl transition-shadow duration-300 card-bg" data-aos="fade-up" data-aos-delay={index * 200}>
            <div className="mb-2">
              <span className="text-2xl font-bold text-[#FFB000]">{step.step}</span>
            </div>
            <div className="mb-2">
              <span className="text-4xl text-[#FFB000] mb-2">{step.icon}</span>
            </div>
            <h2 className="text-lg font-semibold mb-2">{step.title}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}
