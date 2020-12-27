import React from "react";
import MainTopSection from "./MainTopSection";
import WhyUsSection from "./WhyUsSection";
import ProductSection from "./ProductSection";
import CompanyInfo from "../Main/ComponyInfoSection";
import GetStart from "../Main/GetStart";
import MainTop from "../Main/MainTop";

const Main = (props) => {
  return (
    <div className="hero ">
      <div className="hero-body ">
        <div className="container ">
          <MainTop></MainTop>
          {/* <MainTopSection></MainTopSection> */}
        <WhyUsSection></WhyUsSection>
        <ProductSection></ProductSection>
        {/* <CompanyInfo></CompanyInfo> */}
        </div>
      </div>
      <GetStart></GetStart>
    </div>
  );
};

export default Main;
