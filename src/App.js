import './App.css';
import {Switch, Route} from 'react-router-dom';
import Layout from './common/layout';
import ScrollToTop from "../src/common/components/ScrollToTop";

function App() {
  return (
    <div>
       <ScrollToTop></ScrollToTop>
       <Switch>
          <Layout></Layout>
       </Switch>

    </div>
  );
}

export default App;
