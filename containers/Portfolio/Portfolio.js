import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import TitleSection from "../../components/TitleSection";
import PortFolioCard from "./PortFolioCard";

const portfolioContent = [
  {
    name: "Netflix-Clone",
    img: "/Assets/netflix.png",
    Link: "https://netflix-clone-99ed7.firebaseapp.com/",
    tags: "React Apps",
  },
  {
    name: "Pet Care",
    img: "/Assets/pet.png",
    Link: "https://dev-pettraoner.pantheonsite.io/",
    tags: "Wordpress",
  },
  {
    name: "Ecommerce Website",
    img: "/Assets/ecom.JPG",
    Link: "https://github.com/rohitkhan4141",
    tags: "React Apps",
  },
  {
    name: "Ultra-Addons",
    img: "/Assets/Ultra.png",
    Link: "https://rohitkhan4141.github.io/Ulrta-addons/",
    tags: "Js Websites",
  },
  {
    name: "Chat Application",
    img: "/Assets/chatapp.png",
    Link: "https://github.com/rohitkhan4141/chatApp",
    tags: "React Apps",
  },

  {
    name: "Fitness",
    img: "/Assets/fitness.png",
    Link: "https://dev-fitnessconsultant.pantheonsite.io/",
    tags: "Wordpress",
  },
  {
    name: "Coinbase",
    img: "/Assets/coinbase.png",
    Link: "https://github.com/rohitkhan4141",
    tags: "Blockchain",
  },
];

const Portfolio = () => {
  const [works, setWorks] = useState(portfolioContent);
  const [filterWork, setFilterWork] = useState(portfolioContent);
  const [activeFilter, setActiveFilter] = useState("All");
  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    if (item === "All") {
      setFilterWork(works);
    } else {
      setFilterWork(works.filter((work) => work.tags.includes(item)));
    }
  };
  return (
    <section className='work section sec' id='work'>
      <TitleSection subtitle='My Portfolio' sectionName='Recent Works' />
      <div className='work__filters'>
        {["All", "React Apps", "Wordpress", "Js Websites"].map(
          (item, index) => (
            <span
              key={index}
              className={`work__item ${
                activeFilter === item ? "active-work" : ""
              }`}
              onClick={() => handleWorkFilter(item)}
            >
              {item}
            </span>
          )
        )}
      </div>

      <motion.div layout className='work__container container grid'>
        <AnimatePresence>
          {filterWork.map((work, index) => (
            <PortFolioCard
              key={index}
              name={work.name}
              imageSrc={work.img}
              link={work.Link}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Portfolio;
