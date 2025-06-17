import logo from '../assets/brainleads.png'

export default function Nav() {
    return (
        <section className="fixed z-[999] top-5 left-0 py-2 px-[50px] mx-[50px] right-0 rounded-full">
            <div className='flex items-center justify-between '>
                <a href='/' className='flex items-center gap-2 z-[999]'>
                    <img src={logo} className='w-[40px]'/>
                    <p>Brainleads</p>
                </a>
                <div className='z-[999] hidden lg:block'>
                    <ul className='flex items-center gap-5 '>
                        <li className='cursor-pointer hover:bg-[#FFC734] px-4 py-1 rounded-lg'><a>Home</a></li>
                        <li className='cursor-pointer hover:bg-[#FFC734] px-4 py-1 rounded-lg'><a>Services</a></li>
                        <li className='cursor-pointer hover:bg-[#FFC734] px-4 py-1 rounded-lg'><a>Benefits</a></li>
                        <li className='cursor-pointer hover:bg-[#FFC734] px-4 py-1 rounded-lg'><a>Contact</a></li>
                    </ul>
                </div>
                <div className='z-[999] hidden lg:block'>
                    <button className='primary-bg px-4 py-1 rounded-full font-semibold transition-colors duration-300'>
                        Sign Up
                    </button>
                </div>
            </div>
            <div className='bg-white opacity-50 w-full h-full absolute top-0 left-0 right-0 rounded-full'></div>
        </section>
    )
}