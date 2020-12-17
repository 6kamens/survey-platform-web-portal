import React from "react";
import MainTopSection from './MainTopSection';
import WhyUsSection from './WhyUsSection';
import ProductSection from './ProductSection';
import Product from "../Product/Product";
const Main = (props) => {
  return (
    <div>
        <MainTopSection></MainTopSection>
        <WhyUsSection></WhyUsSection>
        <ProductSection></ProductSection>
    </div>
  );
};

export default Main;
