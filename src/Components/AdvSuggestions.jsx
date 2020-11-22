import React from 'react';
import {FcAdvertising} from 'react-icons/fc';
import './AdvSuggestions.css';

function AdvSuggestions(props) {
    const advertisements=[
        {
            avatar:"https://www.guambusinessmagazine.com/wp-content/uploads/2018/03/BKMBJLife_WhoppersDT_030817rev.jpg",
            link:"https://www.burgerking.in/",
            title:"Burger King"
        },
        {
            avatar:"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-advertisement-design-template-21e0906216e683aee70ea037c019d130_screen.jpg?ts=1561487272",
            link:"https://www.burgerking.in/",
            title:"Mahira's Kitchen"
        },
        {
            avatar:"https://i.pinimg.com/originals/a5/3f/54/a53f5480aa0a7d448c797ff46260e353.jpg",
            link:"https://www.burgerking.in/",
            title:"Designyep"
        },
    ]
    return (
            <div className="adv">
            <span className="text-muted m-auto">Advertisements <FcAdvertising size="18"/></span>
           {advertisements.map((adv)=>(
               <div className="jumbotron-fluid shadow m-2">
                <a href={adv.link} target="_blank"><img className="adv-avatar" src={adv.avatar} alt={adv.title}/></a>
                <span className="btn btn-link adv-icon" style={{float:"right"}}></span>
              </div>
           ))}
        </div>
           
    )
}
export default AdvSuggestions;