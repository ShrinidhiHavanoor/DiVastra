import Card from "../Card/Card";
import SectionHeading from "./SectionHeading";
import Jeans from "../../assets/img/JeansCard.jpeg";
import Shirts from "../../assets/img/ShirtsCard1.jpeg";
import Tshirts from "../../assets/img/TshirtsCard1.jpeg";
import Dresses from "../../assets/img/DressesCard1.jpeg";
import Kurtis from "../../assets/img/KurtisCard.jpeg";
import Joggers from "../../assets/img/JoggersCard.jpeg";
import Carousel from "react-multi-carousel";
import { responsive } from "../../lib/Section.constants";

const items = [
  
  {
    title: "Jeans",
    imagePath: Jeans,
  },
  {
    title: "Shirts",
    imagePath: Shirts,
  },
  {
    title: "T-Shirts",
    imagePath: Tshirts,
  },

  {
    title: "Dresses",
    imagePath: Dresses,
  },
  {
    title: "Kurtis",
    imagePath: Kurtis,
  },
  {
    title: "Joggers",
    imagePath: Joggers,
  },
];

const NewArrivals = () => {
  return (
    <>
      <SectionHeading title={"New Arrivals"} />
      <Carousel
        responsive={responsive}
        autoPlay={false}
        swipeable={true}
        draggable={false}
        showDots={false}
        infinite={false}
        partialVisible={false}
      >
        {items &&
          items?.map((item, index) => (
            <Card
              key={item?.title + index}
              title={item.title}
              imagePath={item.imagePath}
            />
          ))}
      </Carousel>
    </>
  );
};

export default NewArrivals;
