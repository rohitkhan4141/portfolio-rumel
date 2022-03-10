import React from "react";
import TitleSection from "../../components/TitleSection";
import ServicesCard from "./ServicesCard";
const servicesContent = [
  {
    name: "Website Design",
    description: "I design Beautiful Website Design For My Valuable Clients",
    whyChoseMe: [
      "Elegent Modern Looks",
      "Responsive Design",
      "Mobile First Strategy",
      "Clean Code",
    ],
  },
  {
    name: "Web Development",
    description: "I make websites come alive.",
    whyChoseMe: [
      "Modern Single Page Architecture",
      "Faster Website",
      "Dynamic Applications",
      "Clean Code",
    ],
  },
  {
    name: "Graphics Design",
    description: "Connect With Your Customers with Good Design",
    whyChoseMe: [
      "Slick Design",
      "Vectorizing",
      "Photo Retouching",
      "Infographics",
    ],
  },
];

const Services = () => {
  return (
    <section className='services section'>
      <TitleSection subtitle='My Services' sectionName='What I offer' />
      <div className='services__container container grid'>
        {servicesContent.map((el, index) => (
          <ServicesCard
            key={index}
            name={el.name}
            description={el.description}
            whyChoseMe={el.whyChoseMe}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
