import { motion } from "framer-motion";
import results from "../assets/results.jpg";

export default function Results() {
  return (
    <section className="relative overflow-hidden">
      
      <motion.div
        className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-[#FFB000]/30 to-[#FF3D00]/30 blur-3xl z-0"
        animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0.5, 0.7] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      
      <div className="relative z-10 flex flex-col items-center gap-8 lg:px-[50px] px-[25px] py-16">
        
        <motion.h1
          className="text-center text-[32px] lg:text-[40px] font-extrabold capitalize"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Results That Matter
        </motion.h1>

        
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-0 lg:gap-12">
          
          <motion.div
            className="lg:px-[50px] px-[25px] py-12 bg-[#333333] text-white text-center lg:text-left rounded-lg shadow-xl flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-[26px] lg:text-[32px] font-bold mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Results Matter.
            </motion.h2>
            <motion.p
              className="text-[16px] lg:text-[20px] mb-6 text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Traffic is nice. Sales matter more.
            </motion.p>

            <motion.ul
              className="flex flex-col gap-5 text-[16px] lg:text-[20px]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.3 } },
              }}
            >
              {["SEO Growth", "Leads Funnel", "Sales Uplift"].map(
                (item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-3"
                    variants={{
                      hidden: { opacity: 0, x: -30 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <span className="text-[#FFB000] text-lg">✓</span>
                    {item}
                  </motion.li>
                )
              )}
            </motion.ul>
          </motion.div>

          
          <motion.div
            className="relative h-[300px] lg:h-auto rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${results})` }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
