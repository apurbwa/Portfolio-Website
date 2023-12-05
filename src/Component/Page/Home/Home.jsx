import About from "../About/About";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience";
import Hero from "../Hero/Hero";
import Project from "../Project/Project";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <main className="main">
      <Hero />
      <About />
      <Experience />
      <Services />
      <Project />
      <Testimonials />
      <Blog />
      <Contact />
    </main>
  );
};

export default Home;
