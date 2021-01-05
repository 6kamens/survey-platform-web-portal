import React from "react";
import ProductSection from "./ProductSection";
import ContactUs from "../Main/ContactUs";
import MainTop from "../Main/MainTop";
import ExampleVideo from './ExampleVideo';

const Main = (props) => {
  return (
    <div>
        <MainTop></MainTop>
        <ExampleVideo></ExampleVideo>
        <ProductSection></ProductSection>
        <ContactUs></ContactUs>
    </div>
  );
};

export default Main;
