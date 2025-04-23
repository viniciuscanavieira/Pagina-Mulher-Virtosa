import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import mulherImg from '../assets/mulher.png';
import bg from '../assets/bg-02.png';

const Hero = () => {
  return (
    <section
      className="pt-20 pb-10 md:pt-28 md:pb-16 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-3xl md:text-5xl font-extrabold leading-tight mb-8 drop-shadow-sm text-[#690742]"
          >
            VOCÊ JÁ SENTIU QUE CARREGA{' '}
            <span className="text-rose-500 underline decoration-wavy decoration-2">FERIDAS</span> QUE{' '}
            <span className="text-rose-500 underline decoration-wavy decoration-2">NINGUÉM VÊ</span>?
          </motion.h1>

          <motion.img
            src={mulherImg}
            alt="Imagem emocional representando feridas internas"
            className="mx-auto mb-8 w-3/4 sm:w-1/2 max-w-md animate-pulse-scale drop-shadow-xl rounded-xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
          />

          <div className="space-y-4 mb-8 text-lg md:text-xl text-gray-800">
            <motion.p
              className="p-2 font-medium"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Já tentou <span className="font-bold text-rose-600">ser forte o tempo todo</span>, mesmo quando tudo dentro de você pedia socorro?
            </motion.p>

            <motion.h4
              className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-rose-600 to-pink-500 text-transparent bg-clip-text p-2 tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              CHEGA DE IGNORAR A DOR!
            </motion.h4>

            <motion.p
              className="italic text-gray-700 p-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
            >
              E você <span className="font-semibold text-rose-500">não precisa fazer isso sozinha</span>.
            </motion.p>
          </div>

          <motion.div
            className="mt-10 animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <a href="#sobre" className="inline-block">
              <ArrowDown size={36} className="text-rose-500 drop-shadow-md" />
            </a>
          </motion.div>

          <motion.a
            href="#checkout"
            className="bg-rose-500 hover:bg-rose-600 text-white font-semibold text-lg md:text-xl px-8 py-4 rounded-full shadow-lg transition-all duration-300 mt-8 inline-block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            QUERO CONHECER
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
