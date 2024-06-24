import { Heading, Img } from "./";
// eslint-disable-next-line no-unused-vars
import React from "react";
import "../../css/shoppingcartcss/details.css"; 

export default function ShoppingCartBracelet({
  braceletoneimage = "images/img_ed_o_neil_avvdz.png",
  bracelettwotext = "Bracelet",
  kescountertext = "Kes: 2500",
  oneqtytext = "1  qty",
  kescountertext1 = "Kes. 2500",
  ...props
}) {
  return (
    <div
      {...props}
      // eslint-disable-next-line react/prop-types
      className={`${props.className} flex-container`}
    >
      <div className="flex-full">
        <Img src={braceletoneimage} alt="bracelet" className="image-cover" />
        <div className="flex-column-start">
          <div className="flex-start-between">
            <Heading as="h5" className="h5txt">
              {bracelettwotext}
            </Heading>
            <div className="imgcont">
              <Img src="images/img_arrow_down.svg" alt="bracelet" className="arrw" />
            </div>
          </div>
          <Heading size="headings" as="p" className="kescountertext">
            {kescountertext}
          </Heading>
          <div className="bdy">
            <div className="divhead">
              <Heading size="headingmd" as="h6" className="oneqtytext">
                {oneqtytext}
              </Heading>
              <Img src="images/img_edit.svg" alt="1_qty" className="icn" />
            </div>
            <Heading as="h5" className="kescountertext1">
              {kescountertext1}
            </Heading>
          </div>
        </div>
      </div>
    </div>
  );
}
