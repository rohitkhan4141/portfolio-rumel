import React from "react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import TitleSection from "../../components/TitleSection";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import TestimonialCard from "./TestimonialCard";
const testimonialContent = [
  {
    name: "Jasmin",
    img: "/Assets/testimonial2.png",
    say: "Very Professional Work",
  },
  {
    name: "Adam",
    img: "/Assets/testimonial1.png",
    say: "Slick Design and Very Good Support",
  },
  {
    name: "Elizabeth",
    img: "/Assets/testimonial3.png",
    say: "WoW, Very Happy to get This Kind of Services",
  },
];
const Testimonials = () => {
  const { width } = useWindowDimensions();

  return (
    <section className='testimonial section'>
      <TitleSection subtitle='My Clients Say' sectionName='testimonials' />
      <div className='testimonial__container container swiper'>
        <div className='swipper-wrapper'>
          <Swiper
            slidesPerView={width > 700 ? 2 : 1}
            spaceBetween={20}
            pagination={{
              el: ".swiper-pagination",
              type: "bullets",
              clickable: true,
            }}
            modules={[Pagination]}
            className='mySwiper'
          >
            {testimonialContent.map((el, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard name={el.name} image={el.img} say={el.say} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='swiper-pagination'></div>
      </div>
    </section>
  );
};

export default Testimonials;
