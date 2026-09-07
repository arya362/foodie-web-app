import Navbar from "./_components/navbar";
import Hero from "./_components/Hero";
import SearchBar from "./_components/SearchBar";
import Categories from "./_components/Categories";
import FoodCard from "./_components/FoodCard";
import Footer from "./_components/Footer";
import About from "./_components/About";
import WhyUs from "./_components/WhyUs";
import Testimonials from "./_components/Testimonials";
import Contact from "./_components/Contact";

export default function Home()
{
  return(
    <>
    <Navbar/>
    <Hero/>
    <SearchBar/>
    <Categories/>
    <FoodCard/>
    <About/>
    <WhyUs/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    
    
    </>
  );
}