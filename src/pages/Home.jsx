import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Contests from "../components/Contests";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Contests />
      <Pricing />
      <Footer />
    </>
  );
}

export default Home;