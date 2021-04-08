import React,{useRef} from 'react'
import {useForm} from 'react-hook-form'
import { Link ,Route,Redirect} from 'react-router-dom';
import './Components/Welcome.css';
import classNames from 'classnames';

function Register() {
    const {register,handleSubmit,errors,watch}=useForm({
        mode:"onChange"
    });
    const password=useRef({});
    password.current=watch("password","");
    const submitHandler=(e)=>{
        console.log(e);
        localStorage.setItem("user",JSON.stringify(e));
    }
    
    return (
        <div>
            <div className="jumbotron-fluid row register-panel shadow bg-transparent">
               
                <div className="p-3" style={{zIndex:0,overflow:"hidden",borderRadius:"20px",background:"#c0d6df"}}>
                        <form className="form-vertical mx-auto mt-4" onSubmit={handleSubmit(submitHandler)} autoComplete="off">
                            
                        <div className="form-group">
                                <input className={classNames("form-control shadow-sm",{"is-invalid":errors.fullname})} name="fullname" type="text" placeholder="Full Name" 
                                ref={register({required:"Name Required",
                                minLength:{value:4,message:"Please Enter Minimun 4 Characters"}}
                                )}/>
                                {errors.fullname && <div className="ml-1 invalid-feedback text-left">{errors.fullname.message}</div>}
                            </div>
                            <div className="form-group">
                                <input className={classNames("form-control shadow-sm",{"is-invalid":errors.username})} name="username" type="text" placeholder="Username" 
                                ref={register({required:"Name Required",
                                minLength:{value:4,message:"Please Enter Minimun 4 Characters"}}
                                )}/>
                                {errors.username && <div className="ml-1 invalid-feedback text-left">{errors.username.message}</div>}
                            </div>
                            <div className="form-group">
                                <div className="row px-3">
                                    <input className={classNames("col form-control shadow-sm mr-1",{"is-invalid":errors.password})} name="password" type="password" placeholder="Password" ref={register({required:"Password Required",minLength:{value:5,message:"Please enter Minimum 5 Characters."}})}/>
                                    <input className={classNames("col form-control shadow-sm mr-1",{"is-invalid":errors.confirm__password})}  type="password" placeholder="Confirm Password" name="confirm__password"
                                    ref={register({
                                        required:true,
                                        validate:value=>value===password.current || "Passwords Mismatched."
                                    })}
                                    />
                                    {errors.password && <div className="invalid-feedback text-left">{errors.password.message}</div>}
                                    {errors.confirm__password && <div className="invalid-feedback text-left">{errors.confirm__password.message}</div>}
                                </div>
                            </div>
                           
                            <div className="form-group">
                                <input className={classNames("form-control shadow-sm",{"is-invalid":errors.mobile})} type="tel" name="mobile" placeholder="Mobile Number" 
                                ref={register({required:"Mobile Number Required",
                                minLength:{value:10,message:"Please Enter a Valid Mobile Number."}
                                })}/>
                                 {errors.mobile && <div className="ml-1 invalid-feedback text-left">{errors.mobile.message}</div>}
                            </div>
                            <div className="form-group">
                                <input className={classNames("form-control shadow-sm",{"is-invalid":errors.email})} type="email" name="email" placeholder="Email" 
                                ref={register({required:"Email Required",
                                pattern:{value:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message:"Please Enter a Valid Email address."}})}/>
                                {errors.email && <div className="ml-1 invalid-feedback text-left">{errors.email.message}</div>}
                            </div>
                            <div className="form-group text-left">
                                <label className="mx-3"><input type="radio" name="gender" value="Male" ref={register({required:"This field is required."})}/> Male</label>
                                <label className="mx-3"><input type="radio" name="gender" value="Female" ref={register({required:"This field is required."})}/> Female</label>
                                <label className="mx-3"><input type="radio" name="gender" value="Others" ref={register({required:"This field is required."})}/> Others</label>
                                {errors.gender && <div className="text-danger text-left">{errors.gender.message}</div>}
                            </div>
                            <button className="btn btn-block btn-link text-right pt-0">Forgot Password ?</button>
                            <div className="form-group text-left" style={{fontSize:"div"}}>
                                <label className="mx-3"><input type="checkbox" name="updates" ref={register}/> Receive all important updates (Optional)</label>
                                <br/>
                                <label className="mx-3"><input type="checkbox" name="tnc" ref={register({required:"Terms and Conditions Must be Agreed."})}/>  By signing up all our <a href="#">Terms and Conditions</a> will be agreed.</label>
                                <br/>
                                {errors.tnc && <div className="ml-3 text-danger text-left">{errors.tnc.message}</div>}
                            </div>

                            <button className="btn btn-block shadow-sm" style={{background:"#f48c06"}} onClick={()=><Redirect to="/auth/login"/>}>Sign Up</button>
                        </form>

                       <hr className="shadow"/>
                       {/*
                       <p>Or Sign Up with</p>
                        <div className="row login-with justify-content-center">
                            <img src="https://img.pngio.com/filefacebook-f-logo-2019svg-wikipedia-facebook-query-language-png-1200_1200.png" className="mx-2" alt="facebook"/>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1280px-Gmail_icon_%282020%29.svg.png" className="mx-2" alt="gmail"/>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1000px-Apple_logo_black.svg.png" className="mx-2" alt="apple"/>
                            <img src="https://i.pinimg.com/originals/8f/35/a4/8f35a40403a84631c4125c4f1859c7a6.png" className="mx-2" alt="twitter"/>
                            </div>*/}
                         
                           <p className="m-2">Already have an account ? <Link to="/auth/login">Sign In Here</Link></p>
                          
                </div>

                
            </div>
        </div>
    )
}

export default Register;
