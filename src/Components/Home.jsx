import React,{useState} from 'react';
import {Helmet} from 'react-helmet';
import './Home.css';
import HomeSide from './HomeSide';
import Post from './Post';
import {FcInspection} from 'react-icons/fc';
import AdvSuggestions from './AdvSuggestions';
import CreatePost from './CreatePost';
import {BrowserRouter as Router, Route, Switch, useRouteMatch} from 'react-router-dom';
import Watch from './Watch';
import MarketPlace from './MarketPlace';
import Groups from './Groups';

import UserHome from './UserHome';
import Nav from './Nav';

function Home() {
    const posts=[
        {
            icon:"https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
            source:"",
            title:"Demo User",
            desc:"Paradise food court is started as a small cafe in Hyderabad and today it is a must place to eat Biryani in Hyderabad.",
        },
        {
            icon:"https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
            source:"https://images.dominos.co.in/new_veggie_paradise.jpg",
            title:"Demo User",
            desc:"",
        },
        {
            icon:"https://cdn.telanganatoday.com/wp-content/uploads/2020/01/Hyderabads-Paradise-opens-restaurant-in-Kolkata.jpg",
            source:"https://img4.nbstatic.in/tr:w-500/5b7527e4c9e77c000ccdea9f.jpg", 
            title:"Paradise",
            desc:"Paradise food court is started as a small cafe in Hyderabad and today it is a must place to eat Biryani in Hyderabad.",
        },
        {
            icon:"https://sgp1.digitaloceanspaces.com/quickcompany/trademark/80b2bd377d553d3f.jpg", 
            source:"https://media-cdn.tripadvisor.com/media/photo-s/10/cb/d7/df/mandi-chicken-is-one.jpg", 
            title:"Zaatar Arabian",
            desc:"Mandi (Arabic: مندي‎) is a traditional dish that originated from Hadhramaut, Yemen, consisting mainly of meat and rice with a special blend of spices, cooked in a pit underground. ",
        },
        {
            icon:"https://d1ilnltdtrvmj1.cloudfront.net/storeLogos/behrouz-biryani-cashback-and-coupon-offers-26849461.png",
            source:"https://content.jdmagicbox.com/comp/hyderabad/z5/040pxx40.xx40.170211171014.v1z5/catalogue/behrouz-biryani-kukatpally-hyderabad-biryani-restaurants-o6qhgydjbj.jpg", 
            title:"Behrouz - The Royal Biryani",
            desc:"Freshly Prepared with Premium Ingredients Fit for Royalty. Experience Now! Dum-Pukht with Premium Ingredients & made with 200+ Quality Checks. 2000 Year Old Recipe. Aromatic Spices.",
        },
        {
            icon:"https://content3.jdmagicbox.com/comp/bangalore/h7/080pxx80.xx80.160109173910.q5h7/catalogue/kritunga-restaurant-whitefield-bangalore-andhra-restaurants-ed6kh.jpg",
            source:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/va7h0fvc3f3ce51lesyi",
            title:"Kritunga",
            desc:"It is very famous for its traditional rayalaseema food and it is one of the special restaurant for food of that region.",
        },
    ]

    const [post,setPost]=useState(posts);

    const handleRemove=(index)=>{
        const values=[...posts];
        values.splice(index,1);
        setPost(values);
    }
    
    let {path,url} =useRouteMatch();
    return [
        <div className="row">
            <Router>
                <Nav/>
                <Switch>
                    <Route exact path={`${path}/:id`} component={Home}/>
                </Switch>
            </Router>
            <Helmet>
                <title>Home | Foodbook</title>
            </Helmet>
            
            <div className="col-3 jumbotron-fluid pt-4"><HomeSide/></div>
           
            <div className="col-5 jumbotron-fluid pt-5 my-4">
                <CreatePost/>
               {post.map((restro,index)=>(
                    <Post 
                    key={index}
                    icon={restro.icon} 
                    source={restro.source} 
                    title={restro.title}
                    desc={restro.desc}
                    remove={handleRemove}
                    />
               ))}
                <h3 className="m-5"><FcInspection size="50"/> You have covered all the posts.</h3>
            </div>
            <div className="col-2 jumbotron-fluid mt-5 p-4">
                <AdvSuggestions/>   
            </div>
            <div className="col-2 jumbotron bg-transparent h-100 mt-5" style={{position:"fixed",right:0}}> Yet To Code this portion

            </div>
        </div>
    ]
}

export default Home;
