import brainleads from '../assets/brainleads.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faLocationPin } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faXTwitter  } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer className="bg-[#333333] text-white pt-4 flex flex-col gap-8">
      <div className="py-4 px-[25px] lg:px-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div className="flex flex-col items-center lg:items-start gap-4">
          {/* <img src={brainleads} className='w-[60px]'/> */}
          <h1 class="text-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-grey-500 to-[#b9b9b9] py-2">
            Since Our Founding In 2015
          </h1>

          <p className='lg:text-justify text-center'>
            Brainleads Group is a premier marketing firm, delivering data-driven, creative marketing and sales solutions. Our team of innovative communications specialists focuses on achieving smart business results for our clients.

            Serving over 5,000 clients in 20+ countries, Brainleads Group offers unparalleled expertise in boosting brand awareness, generating leads, and driving sales.

            Whether you're a solo entrepreneur or a major financial institution, we seamlessly integrate with your existing marketing efforts or act as your dedicated agency partner for all your marketing and advertising needs.
          </p>
          <div className='flex items-center gap-2'>
            <a href="https://www.facebook.com/brainleadsgroup" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-[#FFC734] transition-colors duration-300">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.instagram.com/brainleadsgroup" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-[#FFC734] transition-colors duration-300">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.x.com/brainleadsgroup" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-[#FFC734] transition-colors duration-300">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <h1 className='text-xl font-bold'>Quick Links</h1>
          <ul className="space-y-2  text-center">
            <li className='myHover'><a href="/">Home</a></li>
            <li className='myHover'><a href="#services">Services</a></li>
            <li className='myHover'><a href="#benefits">Benefits</a></li>
            <li className='myHover'><a href="#contact">Contact</a></li>
          </ul>
        </div>
        {/* <div className="flex flex-col items-center lg:items-start gap-4">
          <h1 className='text-xl font-bold'>Contact Us</h1>
          <p><FontAwesomeIcon icon={faEnvelope} /> Email: <a href="mailto:contact@brainleads.com" className="primary-fg">brainleadsgroup@gmail.com</a></p>
          <p><FontAwesomeIcon icon={faPhone} /> Phone: <a href="tel:+1 204 952 4290" className="primary-fg">+1 204 952 4290</a></p>
          <p className="text-center lg:text-left"><FontAwesomeIcon icon={faLocationPin} /> Address: 63 mckenzie street winnipeg R2W5N1</p>
        </div> */}
      </div>
      
    </footer>
  );
}
