import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import Navigation from "./components/Navigation/Navigation";
import Category from "./components/Sections/Categories/Category";
import NewArrivals from "./components/Sections/NewArrivals";
import content from "./data/content";

function Shop() {
  return (
  <>
      <HeroSection />
      <NewArrivals />
      {content?.categories &&
        content?.categories?.map((item, index) => (
          <Category
            key={item?.title + index}
            title={content?.categories[index]?.title}
            data={content?.categories[index]?.data}
          />
        ))}
      <Footer content={content?.footer} />
    </>
  );
}

export default Shop;
