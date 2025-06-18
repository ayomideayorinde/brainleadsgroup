import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faGlobe, faUsers, faCheck, faDollarSign, faBullseye} from '@fortawesome/free-solid-svg-icons'

const benefits = [
    {num:1, title:'Visibility', icon:faEye,
     desc:'Your brand becomes visible where people are already searching.'
    },
    {num:2, title:'Traffic', icon:faGlobe,
     desc:'Bring targeted visitors to your website and content platforms.'
    },
    {num:3, title:'Leads', icon:faUsers,
     desc:'Convert those visitors into interested prospects using smart funnels.'
    },
    {num:4, title:'MQL', icon:faCheck,
     desc:'Filter out marketing-qualified leads who are ready for nurturing.'
    },
    {num:5, title:'SQL', icon:faBullseye,
     desc:'Sales-qualified leads are passed to your sales team for closing deals.'
    },
    {num:6, title:'Revenue', icon:faDollarSign,
     desc:'All of it leads to what matters: revenue and long-term business growth.'
    }
]

export default function Benefits() {
    return (
        <section className="bg-[#F8F9FC] py-5 lg:px-[50px]">
            <div className="text-center py-12 px-[25px] lg:px-[50px]">
                <h1 className="text-[32px] lg:text-[40px] font-bold">
                    The Benefits of Digital Marketing to Your Business
                </h1>
                <p className="text-[18px] lg:text-[20px] ">
                    With 5.45 billion internet users globally, your customers are online looking for what you offer. Without digital marketing, you miss countless sales opportunities.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {benefits.map((benefit, index) => (
                    <div key={index} className="flex flex-col items-center shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow duration-300 card-bg" data-aos="fade-up" data-aos-delay={index * 200}>
                        <div className="absolute top-[10px] left-[10px] right-0">
                            <span className="text-2xl font-bold text-[#FFB000]">{benefit.num}</span>
                        </div>
                        <div className="mb-2">
                            <FontAwesomeIcon icon={benefit.icon} className="text-4xl text-[#FFB000] mb-2" />
                        </div>
                        <h2 className="text-lg font-semibold mb-2">{benefit.title}</h2>
                        <p className="text-center">{benefit.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}