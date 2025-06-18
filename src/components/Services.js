import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNetworkWired, faChartColumn, faCalendar, faDashboard } from '@fortawesome/free-solid-svg-icons'
// import { faBar } from '@fortawesome/free-brands-svg-icons'

const serviceCard = [
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
    <section className="bg-[#F8F9FC]  py-5 lg:px-[50px]">
      <div className="text-center py-12">
        <h1 className="text-3xl">Comprehensive Marketing Strategy</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-6">
        {serviceCard.map((service, index) => (
          <div key={index} className="shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow duration-300 card-bg" data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={service.icon} className="text-2xl ml-2 text-[#FFB000]" />
            </div>
            <h2 className="text-center text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-center ">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
