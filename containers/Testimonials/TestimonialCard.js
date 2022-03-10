import Image from "next/image";
import React from "react";

const TestimonialCard = ({ name, image, say }) => {
  return (
    <div className='testimonial__card'>
      <Image
        src={image}
        alt=''
        className='testimonial__img'
        width={50}
        height={50}
      />
      <h3 className='testimonial__name'>{name}</h3>
      <p className='testimonial__description'>{say}</p>
    </div>
  );
};

export default TestimonialCard;
