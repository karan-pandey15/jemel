import Link from "next/link";
import React from "react";
import { IoLeafOutline } from "react-icons/io5";
import { FaBan } from "react-icons/fa";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { GrTest } from "react-icons/gr";
import "./Banner2.css";
import Addtocart from "../addtocart/page";

const SecondBanner = () => {
  return (
    <>
      <section style={{ backgroundColor: "#FAD0C1" }}>
        <Addtocart />
      </section>
    </>
  );
};

export default SecondBanner;
