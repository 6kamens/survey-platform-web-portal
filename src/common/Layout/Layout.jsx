import '../scss/layout.scss';
import NavBar from "./NavBar/NavBar";
import NavBarTop from "./NavBar/NavBarTop";
import ContentSection from "./Content/Content";
import FooterSection from "./Footer/Footer";


const LayoutPage = (props) => {
  return (
    <div>
        <NavBarTop></NavBarTop>
        <NavBar></NavBar>
        <ContentSection ></ContentSection>
        <FooterSection></FooterSection>
    </div>

  );
};

export default LayoutPage;
