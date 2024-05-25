import { motion } from "framer-motion";
import HeroLeft from "./Hero/HeroLeft"; // Import your HeroLeft component
import HeroRight from "./Hero/HeroRight"; // Import your HeroRight component

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5, // delay between child animations
    },
  },
};

const itemVariantsLeft = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};
const itemVariantsRight = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

function Hero() {
  return (
    <motion.div
      className="flex lg:min-h-fit min-h-screen justify-between w-full max-md:flex-col mt-10 h-full items-center mx-auto max-w-[1200px]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariantsLeft}>
        <HeroLeft /> {/* Your HeroLeft component */}
      </motion.div>
      <motion.div variants={itemVariantsRight}>
        <HeroRight /> {/* Your HeroRight component */}
      </motion.div>
    </motion.div>
  );
}

export default Hero;
