import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNetworkWired, faChartColumn, faCalendar, faDashboard } from '@fortawesome/free-solid-svg-icons'
// import { faBar } from '@fortawesome/free-brands-svg-icons'

const serviceCard = [
  {icon:faChartColumn, title:'Media Strategy & Planning', desc:'We use real insights to guide every step.'},
  {icon:faNetworkWired, title:'Full-Funnel Media Activation', desc:'We connect at every customer touchpoint.'},
  {icon:faCalendar, title:'Media Operations', desc:'We make sure everything runs on track.'},
  {icon:faDashboard, title:'Data, Analytics & Technology', desc:'You get full visibility in real time.'}
]

export default function Services() {
  return (
    <section className="bg-[#F8F9FC] px-[25px] py-5 lg:px-[50px]">
      <div className="text-center py-12">
        <h1 className="text-3xl">Comprehensive Marketing Strategy</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {serviceCard.map((service, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow duration-300 hover:bg-[#333333] hover:text-white">
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
