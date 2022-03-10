import { motion } from "framer-motion";
import React from "react";

const TitleSection = ({ subtitle, sectionName }) => {
  return (
    <>
      <motion.span
        className='section__subtitle'
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileInView={{ scale: [1.0, 1.3, 1.0] }}
      >
        {subtitle}
      </motion.span>
      <motion.h2
        className='section__title'
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileInView={{ scale: [1.0, 1.3, 1.6] }}
      >
        {sectionName}
      </motion.h2>
    </>
  );
};

export default TitleSection;
