
import bowman from '../assets/partners/bowman.png';
// import chrisarisyian from '../assets/partners/chrisarisyin.jpg';
import construct from '../assets/partners/construct.jpg';
import loveville from '../assets/partners/loveville.png';
import panah from '../assets/partners/panah.jpg';
import saleh from '../assets/partners/saleh.jpg';
import saleh2 from '../assets/partners/saleh2.jpg';
import tcdd from '../assets/partners/tcdd.png';
import thebrick from '../assets/partners/thebrick.png';
import zaloumis from '../assets/partners/zaloumis.jpg';

const partners = [
    {
        image: bowman,
    },
    {
        image: construct,
    },
    {
        image: loveville,
    },
    {
        image: panah,
    },
    {
        image: saleh,
    },
    {
        image: saleh2,
    },
    {
        image: tcdd,
    },
    {
        image: thebrick,
    },
    {
        image: zaloumis,
    },
];

export default function Partners() {
    return (
        <section className="Partners py-2 lg:px-[50px] px-[25px] lg:mx-[50px] mx-[25px]">
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
                <p className="text-lg text-center mb-8">We collaborate with leading companies to deliver exceptional services.</p>
                <ul className='flex justify-center items-center gap-4'>
                    {partners.map((partner, index) => (
                        <li key={index} className="mx-2 infinite-scroll">
                            <img src={partner.image} alt={`Partner ${index + 1}`} className="w-32 h-auto object-contain rounded-lg shadow-md" />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
        
}