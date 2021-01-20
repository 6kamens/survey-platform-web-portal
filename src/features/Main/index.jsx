import React from "react";
import ProductSection from "./Product";
import ContactUs from "./ContactUs";
import MainTop from "./Top";
import ExampleVideo from './Example';

function Main(props){
  return (
    <>
        <MainTop></MainTop>
        <ExampleVideo></ExampleVideo>
        <ProductSection></ProductSection>
        <ContactUs></ContactUs>
    </>
  );
};

export default Main;
