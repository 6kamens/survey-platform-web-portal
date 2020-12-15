import '../scss/layout.scss';
import NavBarTop from "./NavBar/NavBarTop";
import ContentSection from "./Content/Content";
import FooterSection from "./Footer/Footer";


const LayoutPage = (props) => {
  return (
    <div className="bg-color">
        <NavBarTop></NavBarTop>
        <ContentSection ></ContentSection>
        <FooterSection></FooterSection>
    </div>

  );
};

export default LayoutPage;
