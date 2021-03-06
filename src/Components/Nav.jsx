import React from 'react';
import './Nav.css';
import {BsBellFill,BsCollectionPlayFill} from 'react-icons/bs';
import {FaFacebookMessenger,FaPlaystation,FaPlus} from 'react-icons/fa';
import {TiHome} from 'react-icons/ti';
import {FcSettings} from 'react-icons/fc';
import {BiLogOut} from 'react-icons/bi';
import {AiFillShop,AiFillCaretDown} from 'react-icons/ai';
import {HiUserGroup} from 'react-icons/hi';
import {GoSearch} from 'react-icons/go';
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <div>
           <nav className="navbar navbar-expand-lg navbar-dark bg-nav shadow py-1 fixed-top">
            <div className="container-fluid py-0">
                <Link to="/home" className="navbar-brand">Foodbook</Link>

                <button 
                className="navbar-toggler" 
                type="button" 
                data-toggle="collapse"
                data-target="#navContent"
                aria-controls="navContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span class="navbar-toggler-icon"></span>
                </button>
                <form className="form-inline">
                    <input className="search shadow-sm ml-3 px-3 py-1" type="search" placeholder="Search Foodbook"/>
                </form>
                <div className="collapse navbar-collapse mx-5" id="navContent">
                    <ul className="navbar-nav ml-5 pl-5">
                        <li className="nav-item active"><Link to="/home" className="p-0 mx-4 nav-link"><TiHome size="26"/></Link></li>
                        <li className="nav-item"><Link to="/watch" className="p-0 mx-4 nav-link"><BsCollectionPlayFill size="26"/><span className="updates badge badge-danger">4</span></Link></li>
                        <li className="nav-item"><Link to="/marketplace" className="p-0 mx-4 nav-link"><AiFillShop size="26"/><span className="updates badge badge-danger"></span></Link></li>
                        <li className="nav-item"><Link to="/groups" className="p-0 mx-4 nav-link"><HiUserGroup size="26"/><span className="updates badge badge-danger"></span></Link></li>
                    </ul>
                </div>
                <div className="row">
                    <button className="user m-auto btn">
                        <Link to="/username">
                        <img className="avatar shadow-sm" src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" alt="user"/>
                        <span className="m-2">User Name</span>
                        </Link>
                    </button>

                    <ul className="navbar-nav">
                        <div className="dropdown">
                            <a href="#" className="nav-link" role="button" id="dropdownContent" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><FaPlus size="20"/></a>
                            <div className="dropdown-menu jumbotron dropdown-menu-right px-2" aria-labelledby="dropdownContent">
                                <h6 className="text-center">Add Post</h6>
                            </div>
                        </div>

                        <div className="dropdown">
                            <a href="#" className="nav-link" role="button" id="dropdownContent" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><BsBellFill size="20"/><span className="updates badge badge-danger">24</span></a>
                            <div className="dropdown-menu jumbotron dropdown-menu-right px-2" aria-labelledby="dropdownContent">
                                <h6 className="text-center">Notifications</h6>
                            </div>
                        </div> 

                        <div className="dropdown">
                            <a href="#" className="nav-link" role="button" id="dropdownContent" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><FaFacebookMessenger size="20"/><span className="updates badge badge-danger">5</span></a>
                            <div className="dropdown-menu jumbotron dropdown-menu-right px-2" aria-labelledby="dropdownContent">
                                <h6 className="text-center">Messages</h6>
                            </div>
                        </div>
                    </ul>



                    <div className="dropdown">
                        <a href="#" className="nav-link" id="dropdownContent" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><AiFillCaretDown size="20"/></a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownContent">
                            <a href="#" className="dropdown-item"><FcSettings/> Settings</a>
                            <div className="dropdown-divider"></div>
                            <Link to="/login" className="dropdown-item"><BiLogOut/> sign Out</Link>
                        </div>
                    </div>
                </div>
                


               
            </div>
           </nav>
        </div>
    )
}

export default Nav;
