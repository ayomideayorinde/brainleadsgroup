const steps = [
  {step: 'Step 1', title: 'AUDIT', icon: '🔍', desc: 'We review your current marketing, identify gaps, and spot quick wins.'},
  {step: 'Step 2', title: 'RESEARCH', icon: '📊', desc: 'We analyze your industry, competition, and audience to uncover opportunities.'},
  {step: 'Step 3', title: 'STRATEGY', icon: '🧠', desc: 'We build a tailored plan designed to reach your ideal customers.'},
  {step: 'Step 4', title: 'EXECUTION', icon: '🚀', desc: 'We launch and manage campaigns across the right platforms for maximum reach.'},
  {step: 'Step 5', title: 'OPTIMIZE', icon: '📈', desc: 'We track performance in real time and fine-tune for higher ROI.'},
  {step: 'Step 6', title: 'CONVERSION', icon: '💰', desc: 'We focus on turning leads into paying customers — because clicks alone don’t pay the bills.'},
]

export default function Process() {
  return (
    <section className="py-5">
      <div className="text-center py-12 px-[25px] lg:px-[50px]">
        <h1 className="text-center text-[32px] lg:text-[40px] font-bold capitalize">
          How We Do It
        </h1>
        <p className="text-[18px] lg:text-[20px] ">
          Every brand is different, so we take a structured, customized approach that delivers measurable results.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-0 p-6 px-[25px] lg:px-[50px]">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center justify-center rounded-lg py-2 hover:shadow-2xl transition-shadow duration-300 card-bg" data-aos="fade-up" data-aos-delay={index * 200}>
            <div className="mb-2">
              <span className="text-2xl font-bold text-[#FFB000]">{step.step}</span>
            </div>
            <div className="mb-2">
              <span className="text-4xl text-[#FFB000] mb-2">{step.icon}</span>
            </div>
            <h2 className="text-lg font-semibold mb-2">{step.title}</h2>
            <p className="text-sm text-center px-2">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
