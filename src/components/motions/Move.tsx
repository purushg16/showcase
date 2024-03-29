import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  direction?: "x" | "y";
  delay?: number;
}

const AnimateMove = ({ children, direction = "x", delay = 0.1 }: Props) => {
  return (
    <motion.div
      className="box"
      initial={{ opacity: 0, [direction]: 20 }}
      animate={{ opacity: 1, [direction]: 0 }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      children={children}
    />
  );
};

export default AnimateMove;
