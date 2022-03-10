import React from "react";

const ContactCard = ({ type, link }) => {
  return (
    <div className='contact__card'>
      <i className='bx bx-mail-send contact__card-icon'></i>
      <h3 className='contact__card-title'>{type}</h3>
      <span className='contact__card-data'>{link}</span>
      <a href='' target='_blank' className='contact__button'>
        Write me
        <i className='bx bx-right-arrow-alt contact__button-icon'></i>
      </a>
    </div>
  );
};

export default ContactCard;
