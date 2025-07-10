import brainleads from '../assets/brainleads.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faLocationPin } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faXTwitter  } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer className="bg-[#333333] text-white pt-8 flex flex-col gap-8">
      <div className="py-8 px-[25px] lg:px-[50px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
        <div className="flex flex-col items-center lg:items-start gap-4">
          <img src={brainleads} className='bg-white rounded-full p-1 w-[60px]'/>
          <p className='lg:text-justify text-center'>
            BrainLeads is a strategy-first digital marketing agency helping brands rise above the noise and drive real growth.
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
            <li><a href="/">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#benefits">Benefits</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-4">
          <h1 className='text-xl font-bold'>Contact Us</h1>
          <p><FontAwesomeIcon icon={faEnvelope} /> Email: <a href="mailto:contact@brainleads.com" className="primary-fg">brainleadsgroup@gmail.com</a></p>
          <p><FontAwesomeIcon icon={faPhone} /> Phone: <a href="tel:+1 204 952 4290" className="primary-fg">+1 204 952 4290</a></p>
          <p className="text-center lg:text-left"><FontAwesomeIcon icon={faLocationPin} /> Address: 63 mckenzie street winnipeg R2W5N1</p>
        </div>
      </div>
      
    </footer>
  );
}
