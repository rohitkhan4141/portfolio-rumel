import React from "react";
import { IoMdClose } from "react-icons/io";
import ServicesModalItem from "./ServicesModalItem";

const ServicesModal = ({
  name,
  description,
  whyChoseMe,
  isActive,
  handleModal,
}) => {
  const activeModal = isActive ? "active-modal" : "";
  return (
    <div className={`services__modal ${activeModal}`}>
      <div className='services__modal-content'>
        <IoMdClose className='services__modal-close' onClick={handleModal} />
        <h3 className='services__modal-title'>{name}</h3>
        <p className='services__modal-description'>{description}</p>
        <ul className='services__modal-list'>
          {whyChoseMe.map((el, index) => (
            <ServicesModalItem key={index} content={el} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServicesModal;
