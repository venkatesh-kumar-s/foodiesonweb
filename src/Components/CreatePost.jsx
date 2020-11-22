import React from 'react';
import {FcCamcorderPro,FcCamera,FcVoicePresentation} from 'react-icons/fc';
import './CreatePost.css';

function CreatePost() {
    return (
        <div className="create-post shadow-sm my-2 mx-5 p-4">
            <div className="row pt-0 pr-3">
                <span className="col-2">
                    <img className="img-fluid adjust shadow-sm" src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" alt="user"/>
                </span>
                <input type="text" className="col-10 form-control shadow-sm" placeholder="What's on your mind, Username ?"/>
            </div>
            <hr className=""/>
            <div className="row">
                <a className="btn col mx-2 p-0"><FcCamcorderPro size="25"/> Live Video</a>
                <a className="btn col mx-2 p-0"><FcCamera size="25"/> Photo / Video</a>
                <a className="btn col mx-2 p-0"><FcVoicePresentation size="25"/> Share</a>
            </div>
        </div>
    )
}

export default CreatePost;
