import { Heading, Img } from "./";
// eslint-disable-next-line no-unused-vars
import React from "react";
import "../../css/shoppingcartcss/shoppingcart.css"; 

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
      className={`${props.className} flex-container`}
    >
      <div className="flex-full">
        <Img src={braceletoneimage} alt="bracelet" className="h-[159px] w-[160px] object-cover" />
        <div className="flex flex-1 flex-col items-start">
          <div className="flex items-start justify-between gap-5 self-stretch">
            <Heading as="h5" className="mt-2.5 sm:text-[17px]">
              {bracelettwotext}
            </Heading>
            <div className="flex w-[15%] justify-between gap-5">
              <div className="relative h-[18px] w-[19%] sm:h-auto">
                <Img src="images/img_user.svg" alt="bracelet" className="h-[12px] w-[12px]" />
                <Img
                  src="images/img_contrast.svg"
                  alt="bracelet"
                  className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[18px] w-full"
                />
              </div>
              <Img src="images/img_arrow_down.svg" alt="bracelet" className="h-[18px]" />
            </div>
          </div>
          <Heading size="headings" as="p" className="mt-2 !text-green-800">
            {kescountertext}
          </Heading>
          <div className="mt-[17px] flex items-start justify-between gap-5 self-stretch">
            <div className="mb-[5px] flex w-[20%] items-center justify-between gap-5 rounded-[20px] border-2 border-solid border-black-900_0f bg-white-a700">
              <Heading size="headingmd" as="h6" className="mb-1 ml-3 self-end !font-semibold sm:text-[13px]">
                {oneqtytext}
              </Heading>
              <Img src="images/img_edit.svg" alt="1_qty" className="h-[32px] w-[32px]" />
            </div>
            <Heading as="h5" className="!text-green-800 sm:text-[17px]">
              {kescountertext1}
            </Heading>
          </div>
        </div>
      </div>
    </div>
  );
}
