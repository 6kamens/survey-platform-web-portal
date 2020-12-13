import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Layout from './features/Layout/Layout'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Layout}></Route>
      </Switch>
    </div>
  );
}

export default App;
