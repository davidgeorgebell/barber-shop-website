import { motion } from 'framer-motion';

export const AnimationX = ({ children }) => {
  return (
    <motion.div
      initial={{ x: -200, opacity: 0.2 }}
      animate={{ x: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}>
      {children}
    </motion.div>
  );
};
