import { motion } from 'framer-motion';

const SloganStrip = () => {
  const text = "FASHION • STYLE • CONFIDENCE • ELEGANCE • TRENDS • ";

  return (
    <div className="overflow-hidden whitespace-nowrap h-[30px] bg-white/50 backdrop-blur-xl text-black font-front md:text-lg py-2 md:bg-white">
      <motion.div
        className="inline-block"
        animate={{ x: ['0%', '-100%'] }}
        transition={{
          repeat: Infinity,
          duration: 250,
          ease: 'linear',
        }}
      >
        <span>{text.repeat(40)}</span>
      </motion.div>
    </div>
  );
};

export default SloganStrip;
