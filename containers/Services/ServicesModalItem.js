import React from "react";
import { BsCheck } from "react-icons/bs";

const ServicesModalItem = ({ content }) => {
  return (
    <li className='services__modal-item'>
      {/* <i className='bx bx-check services__modal-icon'></i> */}
      <BsCheck className='services__modal-icon' />
      <p className='services__modal-info'>{content}</p>
    </li>
  );
};

export default ServicesModalItem;
