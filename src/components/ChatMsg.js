import React from 'react';
import ChatInput from './ChatInput';
import {BiPaperPlane} from "react-icons/bi";
import {BiSmile} from "react-icons/bi";

function ChatMsg() {
  const { text, uid, photoURL } = props.message;
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  return (
    <div class="chat-msg chat-msg-recieve d-flex flex-row justify-content-start" id={`message ${messageClass}`}>
      <div className="d-flex flex-row my-3 w-75 w-lg-50">
        <div style={{backgroundImage: avatarURL || `url('https://johnuberbacher.com/wp-content/uploads/2021/03/flutter-calculator.jpg')`}}
            className="avatar rounded-circle me-3">
        </div>
        <div className="bg-white rounded hover-shadow py-2 px-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
    </div>
  )
}

export default ChatMsg
