import React from 'react';
import './Post.css';
import {FcLike,FcComments,FcShare} from 'react-icons/fc';
import PostMenu from "./PostMenu.jsx";

function Post(props) {
    return (
            <div className="post text-left my-3 mx-5 shadow">
                    <div className="row px-2 pt-3">
                        <img className="col-2 icon mr-1 ml-1" src={props.icon} alt={props.title}/>
                        <div className="col row p-1">
                            <span className="col-12 p-0">{props.title}</span>
                            <small className="col-12  p-0 text-muted">25 Nov at 21:45 . </small>
                        </div>
                        <span className="col-2 mr-3 text-right"><PostMenu key={props.key} func={props.remove}/></span>
                    </div>
                    <div className="desc m-3">{props.desc}</div>
                    <div className="p-0">
                        <img className="w-100 shadow-sm" src={props.source} alt="" style={{display:`${props.source===""?"none":"block"}`}}/>
                        <div className="reaction-bar row px-4 py-2">
                                <span className="col-6">18k Likes</span>
                                <span  className="col-6 text-right">18k Comments 18k Shares</span> 
                        </div>
                        <hr className="m-0"/>
                        <div className="row m-auto p-2">
                            <button className="btn col py-0"><FcLike size="22"/> Like</button>
                            <button className="btn col py-0"><FcComments size="22"/> Comment</button>
                            <button className="btn col py-0"><FcShare size="22"/> Share</button>
                        </div>
                    </div>
                    
            </div>
    )
}

export default Post;
