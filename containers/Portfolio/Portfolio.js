import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import TitleSection from "../../components/TitleSection";
import PortFolioCard from "./PortFolioCard";

const portfolioContent = [
  {
    name: "Khejuka",
    img: "/Assets/Khejuka.PNG",
    Link: "https://khejuka.com/",
    tags: "Wordpress",
  },
  {
    name: "Watch's World",
    img: "/Assets/watchs-world.png",
    Link: "https://final-project-25a6d.web.app/",
    tags: "React Apps",
  },
  {
    name: "Netflix-Clone",
    img: "/Assets/netflix.png",
    Link: "https://netflix-clone-99ed7.firebaseapp.com/",
    tags: "React Apps",
  },
  {
    name: "Docify",
    img: "/Assets/Docify.PNG",
    Link: "https://docify-hub-client.vercel.app/",
    tags: "React Apps",
  },

  {
    name: "Ultra-Addons",
    img: "/Assets/Ultra.png",
    Link: "https://rohitkhan4141.github.io/Ulrta-addons/",
    tags: "Js Websites",
  },
  {
    name: "Mark's Fitness",
    img: "/Assets/mark-fitness.png",
    Link: "https://assingment11-262e9.web.app/",
    tags: "React Apps",
  },

  {
    name: "Investor Tips",
    img: "/Assets/in.PNG",
    Link: "https://www.thriftyinvestortips.com/",
    tags: "Wordpress",
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
    <section className="work section sec" id="work">
      <TitleSection subtitle="My Portfolio" sectionName="Recent Works" />
      <div className="work__filters">
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

      <motion.div layout className="work__container container grid">
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
