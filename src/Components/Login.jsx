import React from 'react';
import Hamburger from '../images/Dineout.svg';
import {FaHandPointDown} from 'react-icons/fa';
import {useForm} from 'react-hook-form'
import './Welcome.css'
import {Link, Redirect} from 'react-router-dom';

function Login() {
    const {register,handleSubmit,errors}=useForm();

    const submitHandler=(e)=>{
        const values=JSON.parse(localStorage.getItem('user'));
        {((e.name===values.username||e.name===values.mobile||e.name===values.email) && e.password===values.password)?alert("Welcome "+values.fullname+"!"):alert("User Not Found!")}
    }

    return (
        <div>
            <div className="jumbotron p-0 row login-panel shadow bg-transparent">
                <div className="col-6 m-0 illustration px-0 pb-3 pt-5">
                    <div className="mx-2 mt-5 text-light" style={{fontSize:"x-large",fontWeight:450}}>
                       <span>Don't Have an Account ?</span>
                       <br/>
                       <i style={{fontSize:"large"}}>Let's get one here <FaHandPointDown size="30"/></i>
                       <br/>
                     
                      <Link to="/auth/register" className="btn btn-success mt-4 shadow-sm">Register Now</Link>
                     
                    </div>
                    <img src={Hamburger} className="dineout" alt="ham burger"/>
                    <img 
                    className="orange"
                    src="https://img.pngio.com/orange-png-86-images-in-collection-page-1-orange-png-png-333_190.png" alt="orange"/>
                </div>
                <div className="col-6 m-0 pb-4 pt-0 jumbotron" style={{zIndex:0,overflow:"hidden",borderRadius:"0 20px 20px 0",background:"#c0d6df"}}>
                   
                    {errors.name && <small className="alert alert-danger mx-2 my-2 col py-1 text-left" role="alert" style={{float:"left",borderLeft:"2px solid red"}}>{errors.name.message}</small>}
                        <form className="mx-0 px-0 mt-5" onSubmit={handleSubmit(submitHandler)}>
                            <div className="form-group">

                                <input className="form-control shadow-sm m-2" name="name" type="text" placeholder="Username" ref={register({required:"Name Cannot be Empty"})}/>
                            </div>
                            <div className="form-group">
                                <input className="form-control shadow-sm m-2" type="password" name="password" placeholder="Password" ref={register({required:"Password Required"})}/>
                            </div>
                            <button className="btn btn-block btn-link text-right">Forgot Password ?</button>
                            <button className="btn btn-block shadow-sm" style={{background:"#f48c06"}}>Sign In</button>
                        </form>

                       <hr className="shadow mt-4"/>
                       <p>Or Sign In with</p>
                        <div className="row login-with justify-content-center">
                            <img src="https://img.pngio.com/filefacebook-f-logo-2019svg-wikipedia-facebook-query-language-png-1200_1200.png" className="mx-2" alt="facebook"/>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1280px-Gmail_icon_%282020%29.svg.png" className="mx-2" alt="gmail"/>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1000px-Apple_logo_black.svg.png" className="mx-2" alt="apple"/>
                            <img src="https://i.pinimg.com/originals/8f/35/a4/8f35a40403a84631c4125c4f1859c7a6.png" className="mx-2" alt="twitter"/>
                        </div>
                        
                </div>
            </div>
        </div>
    )
}

export default Login;
