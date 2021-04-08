import React from 'react'

const Auth = (cb) => {
    let isAuthenticated=false;
    const loggedIn=()=>{
        isAuthenticated=true;
        setTimeout(cb,100);
    }
    const loggedOut=()=>{
        isAuthenticated=false;
        setTimeout(cb,100);
    }
}

export default Auth;
