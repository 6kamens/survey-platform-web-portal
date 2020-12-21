import React from "react";
import MainTopSection from './MainTopSection';
import WhyUsSection from './WhyUsSection';
import ProductSection from './ProductSection';
import CompanyInfo from '../Main/ComponyInfoSection';
import  GetStart from '../Main/GetStart';

const Main = (props) => {
  return (
    <div>
        <MainTopSection></MainTopSection>
        <ProductSection></ProductSection>
        <CompanyInfo></CompanyInfo>
        <GetStart></GetStart>
    </div>
  );
};

export default Main;
