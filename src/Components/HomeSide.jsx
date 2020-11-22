import React from 'react';
import './HomeSide.css';
import {Link} from 'react-router-dom';
import {BsBookmarksFill} from 'react-icons/bs';
import {FcBiohazard,FcCalendar,FcClapperboard,FcShop,FcAdvertising,FcRating,FcDonate} from 'react-icons/fc';
import {MdPeople} from 'react-icons/md';
import {HiUserGroup} from 'react-icons/hi';
import {Scrollbars} from 'react-custom-scrollbars';

function HomeSide() {
    return (
        <div className="homeside px-4">
            <Scrollbars style={{height:"100vh",width:"100%"}}>
            <ul className="nav flex-column pt-5">
                <li className="nav-item"><Link to="/home/covid" className="btn nav-link"><FcBiohazard size="25"/>&nbsp; COVID-19 Information</Link></li>
                <li className="nav-item"><Link to="/home/friends" className="btn nav-link"><MdPeople size="25"/>&nbsp; Friends</Link></li>
                <li className="nav-item"><Link to="/groups" className="btn nav-link"><HiUserGroup size="25"/>&nbsp; Groups</Link></li>
                <li className="nav-item"><Link to="/marketplace" className="btn nav-link"><BsBookmarksFill size="25"/>&nbsp; Saved</Link></li>
                <li className="nav-item"><Link to="/marketplace" className="btn nav-link"><FcShop size="25"/>&nbsp; Market Place</Link></li>
                <li className="nav-item"><Link to="/watch" className="btn nav-link"><FcClapperboard size="25"/>&nbsp; Videos</Link></li>
                <li className="nav-item"><Link to="/home/events" className="btn nav-link"><FcCalendar size="25"/>&nbsp; Events</Link></li>
                <li className="nav-item"><Link to="/ad-center" className="btn nav-link"><FcAdvertising size="25"/>&nbsp; Ad Center</Link></li>
                <li className="nav-item"><Link to="/home/blood-donations" className="btn nav-link"><FcDonate size="25"/>&nbsp; Food Donations</Link></li>
                <li className="nav-item"><Link to="/home/favourites" className="btn nav-link"><FcRating size="25"/>&nbsp; Favourites</Link></li>
                <div className="dropdown-divider"></div>
                <small className="row m-2 pb-3">
                    <a className="" href="#">Privacy</a>  &nbsp;·&nbsp; 
                    <a className="" href="#">Terms</a>  &nbsp;·&nbsp; 
                    <a className="" href="#">Advertising</a>  &nbsp;·&nbsp; 
                    <a className="" href="#"><FcAdvertising/> Ad choices</a>   &nbsp;·&nbsp; 
                    <a className="" href="#">Cookies</a> · Foodbook © 2020
                </small>
            </ul>
            </Scrollbars>
        </div>
    )
}

export default HomeSide;
