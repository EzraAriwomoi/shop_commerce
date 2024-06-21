import "../css/homepagecss/homepage.css";

//components
import HeroSection from "../components/homepagecomponents/HeroSection";
import HMCategories from "../components/homepagecomponents/HMCategories";
// import FPContainer from "../components/homepagecomponents/FPContainer";
import FeaturedProducts from "../components/homepagecomponents/FeaturedProducts";

const homepage = () => {
  return (
    <>
      <div className="home-page">
        <HeroSection />
        <HMCategories />
        <FeaturedProducts />
      </div>
    </>
  );
};

export default homepage;
