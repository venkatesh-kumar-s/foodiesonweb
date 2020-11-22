import React from 'react';
import './CharBot.css';

function ChatBot() {
    return (
        <div className="chatbot">
             <div className="dropup">
             <a className="btn btn-link" role="button" id="ChatBotContent" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img 
                src="https://images.squarespace-cdn.com/content/v1/595d69672e69cf27605f00ba/1500581458507-VENSIRVTVGOM3H77NZ0K/ke17ZwdGBToddI8pDm48kGfiFqkITS6axXxhYYUCnlRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxQ1ibo-zdhORxWnJtmNCajDe36aQmu-4Z4SFOss0oowgxUaachD66r8Ra2gwuBSqM/facebook-messenger-logo-preview.png?format=500w" 
                alt="chatbot"
                style={{objectFit:"contain",height:"50px"}}
                /> 
             </a>
            
            <div className="dropdown-menu dropdown-menu-right p-0" aria-labelledby="ChatBotContent">
                <div className="bg-transparent">
                    <button type="button" className="btn-block btn-primary m-0">Complaint</button>
                    <button type="button" className="btn-block btn-primary m-0">Enquiry</button>
                    <button type="button" className="btn-block btn-primary m-0">Request</button>
                </div>
            </div>
             </div>
        </div>
    )
}

export default ChatBot;
