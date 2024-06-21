// eslint-disable-next-line no-unused-vars
import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Heading, Text } from "../components/shoppingcartcomponent";
import ShoppingCartBracelet from "../components/shoppingcartcomponent/details";
import "../css/shoppingcartcss/shoppingcart.css";

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

export default function ShoppingcartPage() {
  return (
    <>
      <Helmet>
        <title>Shopping cart</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="dv">
      <header className="header">
            <Img
              src="images/img_header_logo.png"
              alt="headerlogo"
              className="logo"
            />
            <div className="narbar">
              <ul className="ul">
                <li>
                  <a href="#">
                    <Text as="p">Products</Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text as="p">Home</Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text as="p">My Profile</Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text as="p">About</Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text as="p">Contact</Text>
                  </a>
                </li>
              </ul>
              <Button className="signin">
                signIn
              </Button>
              <div className="relative-container">
                <a href="#">
                  <Img
                    src="images/img_cart.svg"
                    alt="cart"
                    className="img-cart"
                  />
                </a>
                <Heading
                  size="headingxs"
                  as="p"
                  className="custom-badge"
                >
                  3
                </Heading>
              </div>
            </div>
          </header>
      </div>
    {/* <div className="container"> */}
        <div className="containerA">
          
          <div className="fdiv">
            <Text size="textmd" as="p" className="text-stylingn">
              My Cart
            </Text>
            <Text size="texts" as="p" className="itms">
              3 items selected
            </Text>
          </div>
          <div className="container2">
            <div className="container3">
              <div className="container4">
                <Suspense fallback={<div>Loading feed...</div>}>
                  {data.map((d, index) => (
                    <ShoppingCartBracelet {...d} key={"shoppingcart" + index} />
                  ))}
                </Suspense>
              </div>
              <div className="Dis">
                <div className="discode">
                  <Heading size="heading2xl" as="h1" className="txtheading">
                    Discount code
                  </Heading>
                  <Button className="applybtn">
                    Apply
                  </Button>
                </div>
              </div>
            </div>
            <div className="order-summ">
              <Heading as="h2">Order summary</Heading>
              <div className="div-sub">
                <div className="sub">
                  <Text as="p">Subtotal</Text>
                  <Text as="p">Kes: 24500.00</Text>
                </div>
                <div className="sub">
                  <Text as="p">Shipping</Text>
                  <Text as="p">Kes: 500.00</Text>
                </div>
                <div className="sub">
                  <Text as="p">Discount (6.12%)</Text>
                  <Text as="p">Kes: 1499.40</Text>
                </div>
                <div className="sub">
                  <Heading size="headinglg" as="h3" className="self-end">
                    Total
                  </Heading>
                  <Heading size="headinglg" as="h4" className="cash">
                    Kes: 23500.60
                  </Heading>
                </div>
              </div>
              <Button rightIcon={<Img src="images/img_arrowright.svg" alt="arrow_right" className="arrow-rght" />} className="payment">
                Proceed to payment
              </Button>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
}
