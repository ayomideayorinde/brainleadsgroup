import logo from '../assets/brainleads.png'

export default function Nav() {
    return (
        <section className="fixed w-full z-10 top-0 left-0 py-3 px-[100px]">
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <img src={logo} className='w-[40px]'/>
                    <p>Brainleads</p>
                </div>
                <div>
                    <ul className='flex items-center gap-10'>
                        <li className='cursor-pointer hover:text-[#FFC734] hover:border-b-2 border-[#FFC734]'><a>Home</a></li>
                        <li className='cursor-pointer hover:text-[#FFC734] hover:border-b-2 border-[#FFC734]'><a>Services</a></li>
                        <li className='cursor-pointer hover:text-[#FFC734] hover:border-b-2 border-[#FFC734]'><a>Benefits</a></li>
                        <li className='cursor-pointer hover:text-[#FFC734] hover:border-b-2 border-[#FFC734]'><a>Contact</a></li>
                    </ul>
                </div>
                <div>
                    <button className='bg-[#FFC734] px-4 py-1 rounded-md text-black font-semibold hover:bg-[#FFB000] transition-colors duration-300'>
                        Sign Up
                    </button>
                </div>
            </div>
        </section>
    )
}