import React from "react";
import Image from "next/image";
import { FaShippingFast } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { LuPackageOpen } from "react-icons/lu";
import bestSeller1 from "../../../../public/best_sellers1.webp";
import bestSeller2 from "../../../../public/best_sellers2.webp";
import bestSeller3 from "../../../../public/best_sellers3.webp";



import "./Banner1.css";
import { TbClockHour11 } from "react-icons/tb";

const FirstBanner = () => {
  return (
    <>
      <section style={{backgroundColor:"#FEE7D6"}}>
        <h1 className="four_heading_div" >Best - Sellers</h1>
        <div className="four_div_container">
            <div className="round_container" >
            <Image
              src={bestSeller1}
              className="round_contaner_img"
            />  
            <p className="txt_container" >RING</p>

            </div>

            <div className="round_container" >
            <Image
              src={bestSeller2}
              className="round_contaner_img"

            />
             <p className="txt_container" >EARRINGS</p>
            
            </div>
            
            <div className="round_container" >
            <Image
              src={bestSeller3}
              className="round_contaner_img"

            />
            <p className="txt_container" >NECLES</p>
            </div>
            

            <div className="round_container" >
            <Image
              src={bestSeller1}
              className="round_contaner_img"

            />
            <p className="txt_container" >VOGUISH</p>
            </div>
            

        </div>
      </section>
    </>
  );
};

export default FirstBanner;
