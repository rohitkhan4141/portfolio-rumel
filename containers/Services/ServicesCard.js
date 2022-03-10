import React, { useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import ServicesModal from "./ServicesModal";
const ServicesCard = ({ name, description, whyChoseMe }) => {
  const [isActive, setIsActive] = useState(false);
  const handleModal = () => {
    setIsActive(!isActive);
  };
  return (
    <div className='services__card'>
      <h3 className='services__title'>{name}</h3>
      <span className='services__button' onClick={handleModal}>
        See More <BiRightArrowAlt className='services__icon' />
      </span>
      <ServicesModal
        name={name}
        description={description}
        whyChoseMe={whyChoseMe}
        isActive={isActive}
        handleModal={handleModal}
      />
    </div>
  );
};

export default ServicesCard;
