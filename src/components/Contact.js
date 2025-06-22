import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faMapLocation, faClock } from '@fortawesome/free-solid-svg-icons'
//import {  } from '@fortawesome/free-brands-svg-icons'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(
            'service_bk0zpsj',     // e.g., service_xxxxx
            'template_k4ddrmf',    // e.g., template_xxxxx
            form.current,
            'iWKvxS1STVD6PeFco'      // e.g., mG8u4Xxxxxxxxx
        )
        .then(
            (result) => {
            console.log('SUCCESS!', result.text);
            alert('Message sent successfully!');
            form.current.reset(); // Optional: clear the form
            },
            (error) => {
            console.log('FAILED...', error.text);
            alert('Failed to send message.');
            }
        );
    };

    return (
        <section className="bg-[#F8F9FC] py-5 lg:px-[50px] px-[25px]" id='contact'>
            <div className="text-center py-8 flex flex-col items-center gap-4">
                <h1 className="text-[32px] lg:text-[40px] font-bold">Get In Touch</h1>
                <h2 className='text-2xl primary-fg bg-[#333333] px-5 py-1 text-center rounded-full'>Contact Us</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 py-6">
                <div className="flex flex-col items-center lg:items-start gap-4 mb-6">
                    <h3 className="text-xl font-semibold">We'd Love to Hear From You!</h3>
                    <p className="text-gray-600 text-center lg:text-left">Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.</p>
                    <p className="text-gray-600 text-center lg:text-left">Feel free to reach out via the contact form or contact us directly at:</p>
                    <h3 className="text-xl font-semibold">Contacts Info</h3>
                    <p className="text-gray-600"><strong><FontAwesomeIcon icon={faEnvelope} className='text-[#FFB000]'/> Email:</strong> <a href="mailto:contact@brainleads.com" className="font-semibold">brainleadsgroup@gmail.com</a></p>
                    <p className="text-gray-600"><strong><FontAwesomeIcon icon={faPhone} className='text-[#FFB000]'/> Phone:</strong> <a href="tel:+1 204 952 4290" className="font-semibold">+1 204 952 4290</a></p>
                    <p className="text-gray-600"><strong><FontAwesomeIcon icon={faMapLocation} className='text-[#FFB000] text-center lg:text-left'/> Address:</strong> 63 mckenzie street winnipeg  R2W5N1</p>
                    <p className="text-gray-600"><strong><FontAwesomeIcon icon={faClock} className='text-[#FFB000]'/> Hours:</strong> Mon - Fri, 9AM - 4PM</p>

                </div>
                <form 
                    ref={form}
                    onSubmit={sendEmail}
                    className="w-full mx-auto bg-[#333333] p-6 rounded-lg shadow-lg">
                    <div className="mb-4">
                        <label className="block text-white mb-2" htmlFor="name">Name</label>
                        <input type="text" id="name" name='name' placeholder="Your name" className="w-full p-3 border border-gray-300 rounded" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white" htmlFor="email">Email</label>
                        <input type="email" id="email" name='email' placeholder='Your email' className="w-full p-3 border border-gray-300 rounded" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white mb-2" htmlFor="message">Message</label>
                        <textarea id="message" name='message' rows="4" placeholder="Your message" className="w-full p-3 border border-gray-300 rounded" required></textarea>
                    </div>
                    <button type="submit" className="primary-bg w-full py-3 rounded-full text-white font-semibold transition-colors duration-300 hover:bg-[#FFC734]">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}