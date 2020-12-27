import '../scss/layout.scss';
import NavBar from "./NavBar/NavBar";
import ContentSection from "./Content/Content";
import FooterSection from "./Footer/Footer";


const LayoutPage = (props) => {
  return (
    <div>
        <NavBar></NavBar>
        <br></br>
        <ContentSection ></ContentSection>
        <FooterSection></FooterSection>
    </div>

  );
};

export default LayoutPage;
