import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNetworkWired, faChartColumn, faCalendar, faDashboard, faVideoCamera } from '@fortawesome/free-solid-svg-icons'
// import { faBar } from '@fortawesome/free-brands-svg-icons'

const serviceCard = [
  {icon:faVideoCamera, title:'Content Video Production', 
   desc:'With our production experts, we produce high-quality video content specifically designed for monetization and sales conversion.'},
  {icon:faChartColumn, title:'Media Strategy & Planning', 
   desc:'Informed by data-driven audience insights, we curate the best strategic plan for both your brand, and your audience.'},
  {icon:faNetworkWired, title:'Full-Funnel Media Activation', 
   desc:'Activating across the media of today and tomorrow, we adapt to the ever-changing behaviors of people with tactics designed to drive connection with your customers.'},
  {icon:faCalendar, title:'Media Operations', 
  desc:"Crossing the t's and dotting the i's, our project management and ad operations teams ensure smooth execution from onboarding to campaign wrap-up and everything in between."},
  {icon:faDashboard, title:'Data, Analytics & Technology', 
   desc:'Collaboratively built dashboards mean that you have access to clear campaign reporting every step of the way, because we know transparency matters.'}
]

export default function Services() {
  return (
    <section className="bg-[#F8F9FC]  py-5 lg:px-[50px]" id='services'>
      <div className="text-center py-8 flex flex-col items-center gap-4 px-[25px] ">
        <h1 className="text-[32px] lg:text-[40px] font-bold">Comprehensive Marketing Strategy</h1>
        <h2 className='text-2xl primary-fg bg-[#333333] px-5 py-1 text-center rounded-full'>What We Offer</h2>
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
