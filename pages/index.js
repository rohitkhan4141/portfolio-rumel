import React from "react";
import {
  About,
  Contact,
  Footer,
  Header,
  Hero,
  Portfolio,
  Services,
  Skills,
  Testimonials,
} from "../containers";
import "../styles/Home.module.css";

const HomePage = () => {
  // const [theme, setTheme] = useState("dark");

  // useEffect(() => {
  //   const savedTheme = getThemeToLocalStorage();
  //   setTheme(savedTheme);
  // }, [theme]);

  // const setThemeToLocalStorage = (theme) => {
  //   localStorage.setItem("Theme", theme);
  // };

  // const getThemeToLocalStorage = () => {
  //   return localStorage.getItem("Theme");
  // };

  // const handleTheme = (thm) => {
  //   const theme = thm;
  //   theme === "dark" ? setTheme("light") : setTheme("dark");
  //   theme === "light"
  //     ? document.body.classList.add("light-theme")
  //     : document.body.classList.remove("light-theme");
  //   setThemeToLocalStorage(theme);
  // };
  return (
    <>
      <Header />
      <main className='main'>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default HomePage;
