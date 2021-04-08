import React from 'react';
import './CharBot.css';

function ChatBot() {
    return (
        <div className="chatbot">
             <div className="dropup">
             <a className="btn btn-link" role="button" id="ChatBotContent" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img 
                src="https://icons.iconarchive.com/icons/xenatt/the-circle/256/App-Messages-icon.png" 
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
