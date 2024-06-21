import { useState } from "react";
import FPContainer from "./FPContainer";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([
    {
      productName: "Rings",
      imageSrc: "/ring.jpeg",
    },
    {
      productName: "Necklace",
      imageSrc: "/necklace.jpeg",
    },
    {
      productName: "Rings",
      imageSrc: "/ring.jpeg",
    },
    {
      productName: "Necklace",
      imageSrc: "/necklace.jpeg",
    },
  ]);

  return (
    <div className="featured-products">
      <h1>Featured Products</h1>
      <div className="fp-div">
        {products.map((a) => {
          return <FPContainer productDetails={a} />;
        })}
      </div>
    </div>
  );
};

export default FeaturedProducts;
