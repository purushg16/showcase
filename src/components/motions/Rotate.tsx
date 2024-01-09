import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AnimateRotate = ({ children }: Props) => {
  return (
    <motion.div
      className="box"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, rotate: [-50, 0] }}
      transition={{
        duration: 1,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      children={children}
    />
  );
};

export default AnimateRotate;
