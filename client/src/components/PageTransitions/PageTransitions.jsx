import { motion } from "framer-motion";
/* animation for page transition */
const animationConfiguration = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.36, ease: "easeInOut" },
  },
  exit: { opacity: 0, scale: 0.9 },
};
const Transitions = ({ children }) => {
  return (
    <motion.div
      variants={animationConfiguration}
      initial="initial"
      animate="animate"
      exit="exit"
      className="main-layout__main-container"
    >
      {children}
    </motion.div>
  );
};
export default Transitions;
