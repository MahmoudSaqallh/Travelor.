import Hero from "./components/Hero";
import About from "./components/About";
import BookingSteps from "./components/BookingSteps";
import TopDestination from "./components/TopDestination";
import TourGuide from "./components/TourGuide";
import TourCategories from "./components/TourCategories";
import Testimonials from "./components/Testimonials";
import Counter from "./components/Counter";
import Tours from "./components/Tours";
import Blogs from "./components/Blogs";


export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Hero />
      <About />
      <BookingSteps />
      <TopDestination />
      <TourGuide />
      <TourCategories />
      <Testimonials />
      <Counter />
      <Tours />
      <Blogs />
    
    </div>
  );
}
