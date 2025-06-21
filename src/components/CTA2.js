
export default function CTA2() {
    return (
        <section className="py-20 lg:px-[50px] bg-[#333333] text-white flex flex-col items-center gap-8">
            <div className="text-center py-0 px-[25px] lg:px-[50px]">
                <h1 className="text-[32px] lg:text-[40px] font-bold">
                    Ready to Transform Your Business?
                </h1>
                <p className="text-[18px] lg:text-[20px] ">
                    Book a free consultation with our experts today and discover how digital marketing can elevate your brand.
                </p>
            </div>
            <div className="flex justify-center">
                <button className="primary-bg px-6 py-3 rounded-full text-white font-semibold transition-colors duration-300 hover:bg-[#FFB000]">
                    Book A Free Consultation
                </button>
            </div>
        </section>
    );
}