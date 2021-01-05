import './App.css';
import {Switch, Route} from 'react-router-dom';
import Layout from './common/Layout/Layout';
import ScrollToTop from "../src/common/components/ScrollToTop";

function App() {
  return (
    <div>
       <ScrollToTop></ScrollToTop>
        <Switch>
          <Route path="/" component={Layout}></Route>
        </Switch>
    </div>
  );
}

export default App;
