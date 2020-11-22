import React,{useState} from 'react';
import {FiMoreHorizontal} from 'react-icons/fi';
import {BsBookmarksFill} from 'react-icons/bs';
import {AiFillStop} from 'react-icons/ai';
import {BiHide} from 'react-icons/bi';

function PostMenu(props) {
        
    return (
        <div key={props.key} className="dropdown">
            <a id="postmenu" className="btn p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <FiMoreHorizontal size="20"/>
            </a>
            <div className="dropdown-menu dropdown-menu-right shadow" style={{borderRadius:"10px"}} aria-labelledby="postmenu">
                <button className="dropdown-item"><BsBookmarksFill/> Save This Post</button>
                <button className="dropdown-item"><AiFillStop/> Turn On Notifications for this Post</button>
                <button className="dropdown-item" onClick={props.func}><BiHide/> Hide this Post From News Feed</button>
            </div>
        </div>
    )
}

export default PostMenu;
