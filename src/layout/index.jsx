import '../common/scss/layout.scss';
import NavBar from "./NavBar";
import ContentSection from "./Content";
import FooterSection from "./Footer";


function LayoutPage(props){
  return (
    <>
        <NavBar></NavBar>
        <br></br>
        <ContentSection ></ContentSection>
        <FooterSection></FooterSection>
    </>

  );
};

export default LayoutPage;
