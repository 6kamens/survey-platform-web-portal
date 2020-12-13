import NavBarTop from "./NavBar/NavBarTop";
import Content from './Content/Content';
import Footer from './Footer/Footer';

const Layout = (props) => {
  return (
    <div>
      <NavBarTop></NavBarTop>
      <div>
        <Content></Content>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
