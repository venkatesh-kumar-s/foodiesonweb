import './App.css';
import Nav from './Components/Nav';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Components/Home';
import Watch from './Components/Watch';
import MarketPlace from './Components/MarketPlace';
import Groups from './Components/Groups';
import Games from './Components/Games';
import UserHome from './Components/UserHome';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/watch" component={Watch}/>
          <Route path="/marketplace" component={MarketPlace}/>
          <Route path="/groups" component={Groups}/>
          <Route path="/games" component={Games}/>
          <Route path="/username" component={UserHome}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
