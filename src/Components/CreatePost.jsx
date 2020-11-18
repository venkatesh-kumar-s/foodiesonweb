import React from 'react';
import {FcCamcorderPro,FcCamera,FcVoicePresentation} from 'react-icons/fc';
import './CreatePost.css';

function CreatePost() {
    return (
        <div className="card jumbotron m-4 p-4">
            <div className="row pt-0">
                <span className="col-2">
                    <img className="img-fluid adjust" src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" alt="user"/>
                </span>
                <input type="text" className="col-10 form-control m-0" placeholder="What's on your mind, Username ?"/>
            </div>
            <hr className=""/>
            <div className="row">
                <button className="btn col py-0"><FcCamcorderPro size="25"/> Live Video</button>
                <button className="btn col py-0"><FcCamera size="25"/> Photo / Video</button>
                <button className="btn col py-0"><FcVoicePresentation size="25"/> Share</button>
            </div>
        </div>
    )
}

export default CreatePost;
