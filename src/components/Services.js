import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNetworkWired, faChartColumn, faCalendar, faDashboard, faVideoCamera } from '@fortawesome/free-solid-svg-icons'
// import { faBar } from '@fortawesome/free-brands-svg-icons'

const serviceCard = [
  {icon:faVideoCamera, title:'Ads Video Production', 
   desc:'High-impact video ads that grab attention, tell your story, and drive measurable sales results.'},
  {icon:faChartColumn, title:'Media Strategy & Planning', 
   desc:'Data-backed media plans that put your brand in front of the right people, at the right time, for the best ROI possible.'},
  {icon:faNetworkWired, title:'Full-Funnel Media Activation', 
   desc:'We engage your audience at every stage — from awareness to purchase — with tactics proven to drive conversions.'},
  {icon:faCalendar, title:'Media Operations', 
  desc:"We handle every detail from onboarding to campaign wrap-up, ensuring smooth execution and zero wasted ad spend."},
  {icon:faDashboard, title:'Data, Analytics & Technology', 
   desc:'Custom dashboards give you full transparency on what’s working and what needs adjusting.'}
]

export default function Services() {
  return (
    <section className="service-bg  py-5 lg:px-[50px]" id='services'>
      <div className="text-center py-8 flex flex-col items-center gap-4 px-[25px] ">
        {/* <h1 className="text-[32px] lg:text-[40px] font-bold">Comprehensive Marketing Strategy</h1> */}
        <h1 className="text-[32px] lg:text-[40px] font-bold text-white">Our Services</h1>
        {/* <h2 className='text-2xl primary-fg bg-[#333333] px-5 py-1 text-center rounded-full'>Our Services</h2> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {serviceCard.map((service, index) => (
          <div key={index} className="flex flex-col items-start lg:items-center shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow duration-300 card-bg" data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={service.icon} className="text-4xl ml-2 text-[#FFB000]" />
            </div>
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="lg:text-center text-justify">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
