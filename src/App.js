import './App.css';
import {Switch, Route} from 'react-router-dom';
import Layout from './common/Layout/Layout'

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Layout}></Route>
      </Switch>
    </div>
  );
}

export default App;
