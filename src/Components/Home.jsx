import React from 'react';
import {Helmet} from 'react-helmet';
import './Home.css';
import HomeSide from './HomeSide';
import Post from './Post';
import {FcInspection} from 'react-icons/fc';
import AdvSuggestions from './AdvSuggestions';
import CreatePost from './CreatePost';

function Home() {
    return (
        <div className="row">
            <Helmet>
                <title>Home | Foodbook</title>
            </Helmet>
            
            <div className="col-3 jumbotron-fluid pt-4"><HomeSide/></div>
            <div className="col-5 jumbotron-fluid pt-5">
                <CreatePost/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <h3 className="m-5"><FcInspection size="50"/> You have covered all the posts.</h3>
            </div>
            <div className="col-2 jumbotron-fluid mt-5 pl-0 pr-4 py-4">
                <AdvSuggestions title="Suggestions panel"/>
                <hr/>
                <AdvSuggestions title="Advertisement one"/>
                <AdvSuggestions title="Advertisement two"/>
            </div>
            <div className="col-2 jumbotron mt-5"> chat section</div>
        </div>
    )
}

export default Home;
