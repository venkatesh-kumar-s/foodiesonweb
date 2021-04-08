import React from 'react'
import {Link, Route,BrowserRouter as Router, Switch} from 'react-router-dom'
import Register from '../Register';
import Login from './Login';
import '../App.css'



function Landing() {
   
    return (
        <div className="welcome">

          <Router>
            <Switch>
                <Route path="/login" component={Login}/>    
                <Route path="/register" component={Register}/>    
            </Switch>    
          </Router> 

         <img className="landing-banner" src="https://di-uploads-pod4.dealerinspire.com/fiatoftacoma/uploads/2019/09/Mexican-food-banner-Depositphotos_98697228.png" alt=""/>
        </div>
    )
}

export default Landing;
