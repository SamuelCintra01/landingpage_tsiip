"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import "./styles.css";

const cardVariants: Variants = {
  offscreen: {
    y: 500,
  },
  onscreen: {
    y: 50,
    // rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export function CardMotion({ card }: any) {
  return (
    <motion.div
      className="card-container "
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 1 }}
    >
      <div className="w-full bottom-0 absolute " />
      <motion.div className="card" variants={cardVariants}>
        <div className="flex items-center flex-col justify-evenly  w-full h-full">
          <Image src={card.src} alt={card.id} className="rounded-md w-24" />
          <p className="text-lg text-dark-800 text-left h-44">{card.text}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
