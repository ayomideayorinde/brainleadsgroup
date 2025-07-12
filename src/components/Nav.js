import logo from '../assets/brainleads.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
// import { faBar } from '@fortawesome/free-brands-svg-icons'
import { useState, useRef, useEffect } from 'react'

export default function Nav() {
    const [showMenu, setShowMenu] = useState(false)

    const menuRef = useRef(null)

    // Detect clicks outside the menu to close it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowMenu(false)
            }
        }
        const handleScroll = () => {
            setShowMenu(false);
        }
        document.addEventListener('mousedown', handleClickOutside)
        window.addEventListener('scroll', handleScroll);
        return () => {
        document.removeEventListener('mousedown', handleClickOutside)
        window.addEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <section className="py-2 lg:px-[50px] px-[25px] right-0">
            {/* <section className="absolute z-[999] top-5 left-0 py-2 lg:px-[50px] px-[25px] lg:mx-[50px] mx-[25px] right-0 rounded-full shadow-lg"> */}
            <div className='flex items-center justify-between '>
                <a href='/' className='flex items-center gap-2 z-[999]'>
                    <img src={logo} className='w-[40px]'/>
                    <div className='flex lg:flex-row flex-col lg:gap-1'>
                        <p className=''>Brainleads Group</p>
                        <p className=''>Marketing Firm</p>
                    </div>
                </a>
                <div ref={menuRef} className={`${showMenu? 'flex openmenu':'hidden closemenu'} z-[999] lg:relative lg:top-0 absolute top-16 lg:block flex-col items-center gap-5 bg-white lg:bg-inherit w-full lg:w-auto right-0 left-0 lg:p-0 p-5  transition-all duration-[2s] ease-in-out`}>
                    <ul className='flex items-center lg:flex-row flex-col gap-5 '>
                        <li className='cursor-pointer hover:bg-[#FFC734] px-4 py-1 rounded-lg'><a href='/'>Home</a></li>
                        <li className='cursor-pointer hover:bg-[#FFC734] px-4 py-1 rounded-lg'><a href='#services'>Services</a></li>
                        <li className='cursor-pointer hover:bg-[#FFC734] px-4 py-1 rounded-lg'><a href='#benefits'>Benefits</a></li>
                        <li className='cursor-pointer hover:bg-[#FFC734] px-4 py-1 rounded-lg'><a href='#contact'>Contact</a></li>
                    </ul>
                    <button className='lg:hidden primary-bg px-4 py-1 rounded-full font-semibold transition-colors duration-300'>
                        <a href='https://calendly.com/brainleadsgroup/30min' target='_blank'>Book A Free Consultation</a>
                    </button>
                </div>
                <div className='z-[999] hidden lg:block'>
                    <button className='primary-bg px-4 py-1 rounded-full font-semibold transition-colors duration-300'>
                        <a href='https://calendly.com/brainleadsgroup/30min' target='_blank'>Book A Free Consultation</a>
                    </button>
                </div>
                <div onClick={()=>setShowMenu(!showMenu)} className='z-[998] lg:hidden'>
                    <FontAwesomeIcon icon={faBars} className='text-2xl mx-2 cursor-pointer hover:text-[#FFB000] transition-colors duration-300' />
                </div>
            </div>
            <div className='bg-white opacity-50 w-full h-full absolute top-0 left-0 right-0 rounded-full'></div>
        </section>
    )
}