import Nav from "../components/Nav";
import Hero from "../components/Hero";
import CaseStudies from "../components/CaseStudies";
import Services from "../components/Services";
import Repos from "../components/Repos";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <CaseStudies />
      <Services />
      <Repos />
      <Contact />
      <Footer />
    </>
  );
}
