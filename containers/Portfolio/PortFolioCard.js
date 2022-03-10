import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

const PortFolioCard = ({ name, imageSrc, link }) => {
  return (
    <motion.div
      className='work__card'
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <Image
        src={imageSrc}
        alt=''
        className='work__img'
        width={400}
        height={300}
      />
      <h3 className='work__title'>{name}</h3>
      <Link href={link}>
        <a className='work__button' target='_blank'>
          demo <BiRightArrowAlt className='work__icon' />
        </a>
      </Link>
    </motion.div>
  );
};

export default PortFolioCard;
