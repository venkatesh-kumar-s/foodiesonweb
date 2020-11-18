import React from 'react';
import './Post.css';
import {FcLike,FcComments,FcShare} from 'react-icons/fc';
import {FiMoreHorizontal} from 'react-icons/fi';

function Post() {
    return (
                <div className="card text-left m-4 shadow-sm">
                    <div className="card-header">
                        <img className="avatar my-auto" src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" alt="user"/>
                        <div className="row avatar-data">
                            <span className="col-12">Demo User Name</span>
                            <small className="col-12 text-muted">25 Nov at 21:45 . </small>
                        </div>
                        <span className="offset-6"><FiMoreHorizontal size="30"/></span>
                    </div>

                    <div className="card-body bg-transparent p-0">
                        <img className="w-100" src="https://movies-b26f.kxcdn.com/wp-content/uploads/2019/10/Tom-and-Jerry-770x470.jpg" alt="post-avatar"/>
                        <div className="reaction-bar row px-4 py-2">
                                <span className="col-6">18k Likes</span>
                                <span  className="col-6 text-right">18k Comments 18k Shares</span> 
                        </div>

                        <hr className="m-0"/>
                        <div className="row m-auto p-2">
                            <button className="btn col py-0"><FcLike size="25"/> Like</button>
                            <button className="btn col py-0"><FcComments size="25"/> Comment</button>
                            <button className="btn col py-0"><FcShare size="25"/> Share</button>
                        </div>
                    </div>
                    
                </div>
               
          

        
    )
}

export default Post;
