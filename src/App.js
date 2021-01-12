import './App.css';
import {Switch, Route} from 'react-router-dom';
import Layout from './common/Layout/Layout';
import ScrollToTop from "../src/common/components/ScrollToTop";
import Dashboard from './features/DashBoard/DashBoard';

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
