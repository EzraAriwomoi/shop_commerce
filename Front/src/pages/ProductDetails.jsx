import Footer from "../components/layout/Footer";
import NavBar from "../components/layout/NavBar";
import "../css/productdetails/productdetails.css";

const ProductDetails = () => {
  return (
    <>
      <NavBar />
      <div className="product-details">
        <div className="pd-cont">
          <section className="pd-image-cont">
            <img src="/ring.jpeg" />
          </section>
          <section className="pd-details">
            <h1>PRODUCT NAME</h1>
            <h2>
              PRICE:<span>Kes 00.00</span>
            </h2>
            <p>
              Embrace the trend with this versatile layered necklace. Delicate
              chains adorned with [charm/pendant descriptions] create a unique
              and personalized look.
            </p>
            <button>Add to Cart</button>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
