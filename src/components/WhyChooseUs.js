const features = [
  { icon: "✔️", title: "Transparency", desc:'You see exactly what we do and the results we deliver.'},
  { icon: "⚡", title: "Agility", desc:'We adapt fast to market changes and trends.'},
  { icon: "📈", title: "Impact", desc:'Every campaign is designed to produce measurable growth.'},
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#F8F9FC]  py-5 lg:px-[50px]" id='values'>
          <div className="text-center py-8 flex flex-col items-center gap-4 px-[25px] ">
            {/* <h1 className="text-[32px] lg:text-[40px] font-bold">Comprehensive Marketing Strategy</h1> */}
            <h1 className="text-[32px] lg:text-[40px] font-bold">Our Values</h1>
            {/* <h2 className='text-2xl primary-fg bg-[#333333] px-5 py-1 text-center rounded-full'>Our Values</h2> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex items-center gap-4 hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
  );
}
