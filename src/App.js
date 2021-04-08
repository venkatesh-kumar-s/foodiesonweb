import React,{useState} from 'react';
import './App.css';
import Nav from './Components/Nav';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Home from './Components/Home';
import Watch from './Components/Watch';
import MarketPlace from './Components/MarketPlace';
import Groups from './Components/Groups';
import Games from './Components/Games';
import UserHome from './Components/UserHome';
import ChatBot from './Components/ChatBot';
import Register from './Register';
import Login from './Components/Login';


function App() {
  const [isAuthenticated,setAuth]=useState(false);

  const login=()=>{setAuth(true)}
  const logout=()=>{setAuth(false)}

  return (
    <div className="App">
      <Router>
       
        <Switch>
          <Route path="/auth/login" component={Login}/>
          <Route path="/auth/register" component={Register}/>
        
          <Route path="/" exact component={Home}/>
          <Route path="/watch" component={Watch}/>
          <Route path="/marketplace" component={MarketPlace}/>
          <Route path="/groups" component={Groups}/>
          <Route path="/games" component={Games}/>
          <Route path="/username" component={UserHome}/>
        </Switch>
      </Router>
      <div className="chatbot">
      <ChatBot/>
      </div>
    </div>
  );
}

export default App;