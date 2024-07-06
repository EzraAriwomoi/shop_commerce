// eslint-disable-next-line no-unused-vars
import React, { Suspense, useState } from "react";
import { Helmet } from "react-helmet";
import "../css/shoppingcartcss/shoppingcart.css";
import "../css/shoppingcartcss/details.css";
import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";

const data = [
  {},
  {
    braceletoneimage: "images/img_noonbrew_zicb4_ekmak_unsplash.png",
    bracelettwotext: "Brass Chokers",
    kescountertext: "Kes: 3500",
    oneqtytext: "2 qty",
    kescountertext1: "Kes. 7000",
  },
  {
    braceletoneimage: "images/img_k8_0_fkphulv_m_unsplash.png",
    bracelettwotext: "Elephant curvings",
    kescountertext: "Kes: 15000",
    oneqtytext: "1 qty",
    kescountertext1: "Kes. 15000",
  },
];

const CloseIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 384 512"
    width="16"
    height="16"
    className="close-icon"
  >
    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
  </svg>
);

function ShoppingCartItems({
  braceletoneimage = "images/img_ed_o_neil_avvdz.png",
  bracelettwotext = "Bracelet",
  kescountertext = "Kes: 2500",
  kescountertext1 = "Kes. 2500",
  ...props
}) {
  const [quantity, setQuantity] = useState(1); // State for managing quantity

  // Function to handle increasing quantity
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Function to handle decreasing quantity, with a minimum of 1
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div {...props} className={`${props.className} flex-container`}>
      <div className="flex-full">
        <img src={braceletoneimage} alt="bracelet" className="image-cover" />
        <div className="flex-column-start">
          <div className="flex-start-between">
            <h5 className="h5txt">
              {bracelettwotext}
            </h5>
            {/* Close button defined with SVG */}
            <button
              className="close-button"
              aria-label="Close"
              onClick={() => console.log("Close button clicked")}
            >
              {CloseIcon}
            </button>
          </div>
          <p className="kescountertext">
            {kescountertext}
          </p>
          <div className="bdy">
            <div className="divhead">
              <h6 className="oneqtytext">
                {quantity} qty
              </h6>
              <div className="quantity-controls">
                <button className="quantity-button" onClick={increaseQuantity}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    width="10"
                    height="10"
                  >
                    <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                  </svg>
                </button>
                <button className="quantity-button" onClick={decreaseQuantity}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    width="10"
                    height="10"
                  >
                    <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                  </svg>
                </button>
              </div>
            </div>
            <h5 className="kescountertext1">
              {kescountertext1}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ShoppingcartPage() {
  return (
    <>
      <Helmet>
        <title>Shopping cart</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <NavBar />
      <div className="containerA">
        <div className="fdiv">
          <p className="text-stylingn dot">
            My Cart
          </p>
          <p className="itms">
            3 items selected
          </p>
        </div>
        <div className="divider"></div> {/* Divider line */}
        <div className="container2">
          <div className="container3">
            <div className="container4">
              <Suspense fallback={<div>Loading feed...</div>}>
                {data.map((d, index) => (
                  <ShoppingCartItems {...d} key={"shoppingcart" + index} />
                ))}
              </Suspense>
            </div>
          </div>
          <div className="order-summ">
            <h2>Order summary</h2>
            <div className="div-sub">
              <div className="sub">
                <p>Subtotal</p>
                <p>Kes: 24500.00</p>
              </div>
              <div className="sub">
                <p>Shipping</p>
                <p>Kes: 500.00</p>
              </div>
              <div className="sub">
                <p>Discount (6.12%)</p>
                <p>Kes: 1499.40</p>
              </div>
              <div className="sub">
                <h3 className="self-end">
                  Total
                </h3>
                <h4 className="cash">
                  Kes: 23500.60
                </h4>
              </div>
            </div>
            <button className="payment">
              <img src="images/img_arrowright.svg" alt="arrow_right" className="arrow-rght" />
              Proceed to payment
            </button>
          </div>
        </div>
        <div className="divider"></div>
        <div className="Dis">
          <div className="discode">
            <h1 className="txtheading">
              Discount code
            </h1>
            <button className="applybtn">
              Apply
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
