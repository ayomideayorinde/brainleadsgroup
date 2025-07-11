
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faStar } from '@fortawesome/free-solid-svg-icons'
//import {  } from '@fortawesome/free-brands-svg-icons'
import fivestar from '../assets/5star.png'
import fourdotfivestar from '../assets/4.5star.png'

const testimonials = [
  {
    name: "John Mary",
    feedback: "Brainleads Group transformed our business with their innovative solutions!",
    rating: fivestar
  },
  {
    name: "Jane Smith",
    feedback: "Their team is incredibly professional and dedicated to client success.",
    rating: fivestar
  },
  {
    name: "Alice Johnson",
    feedback: "Exceptional service and results! Highly recommend Brainleads Group.",
    rating: fourdotfivestar
  },
  {
    name: "Bob Brown",
    feedback: "Brainleads Group helped us achieve our goals faster than we expected.",
    rating: fivestar
  },
  {name: "Charlie Davis",
    feedback: "Their expertise in digital marketing is unmatched. We saw a significant increase in our online presence.",
    rating: fourdotfivestar
  },
  {name: "Eve Wilson",
    feedback: "Brainleads Group's team is responsive and always goes the extra mile to ensure client satisfaction.",
    rating: fivestar
  },
  {name: "David Lee",
    feedback: "We were impressed with their strategic approach and attention to detail. Our project was a success!",
    rating: fivestar
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#333333] py-5 lg:px-[50px] px-[25px]" id='testimonials'>
      <div className="text-center py-8 flex flex-col items-center gap-4">
        <h1 className="text-[32px] lg:text-[40px] font-bold text-white">What Our Clients Say</h1>
        <h2 className='text-2xl text-[#3333333] bg-[#ffffff] px-5 py-1 text-center rounded-full'>Testimonials</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6 testi-scroll-container">
        <div className='testi-scroll-track'>
          <div className='testi-row'>
            {
              testimonials.map((testimonial, index) => (
                <div key={index} className="testi-card bg-white p-6 rounded-lg shadow-lg hover:bg-[#333333] hover:shadow-xl transition-shadow duration-300">
                  <img src={testimonial.rating} alt="Rating" className='w-[100px] mx-auto mb-4' />
                  <h3 className="text-xl font-semibold text-center mb-2">{testimonial.name}</h3>
                  <p className="txt text-gray-600 text-center">{testimonial.feedback}</p>
                </div>
              ))
            }
          </div>
          <div className='testi-row'>
            {
              testimonials.map((testimonial, index) => (
                <div key={index} className="testi-card bg-white p-6 rounded-lg shadow-lg hover:bg-[#333333] hover:shadow-xl transition-shadow duration-300">
                  <img src={testimonial.rating} alt="Rating" className='w-[100px] mx-auto mb-4' />
                  <h3 className="text-xl font-semibold text-center mb-2">{testimonial.name}</h3>
                  <p className="txt text-gray-600 text-center">{testimonial.feedback}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
}
