import React from 'react';
import ChatInput from './ChatInput';
import {BiPaperPlane} from "react-icons/bi";
import {BiSmile} from "react-icons/bi";

class ChatFeed extends React.Component {
  render() {
    return (
      <div className="p-3 ps-md-0 d-flex align-items-stretch justify-content-stretch h-100 flex-column">
        <div className="d-flex align-items-stretch justify-content-end flex-column position-relative rounded h-100 pt-5">
          <div className="chat-feed-current-user bg-white hover-shadow w-100 p-4 rounded position-absolute top-0 start-0 end-0" >
            <div className="d-flex flex-row align-items-center justify-content-start">
              <div style={{backgroundImage: `url('https://johnuberbacher.com/wp-content/uploads/2021/03/flutter-calculator.jpg')`}}
                  className="avatar rounded-circle me-3">
              </div>
              <div class="d-flex flex-column">
                <span className="fw-bold">Username</span>
                <span className="fw-bold small text-muted">@username</span>
              </div>
            </div>
          </div>
          <div className="chat-feed overflow-auto pt-5">
            <div class="chat-msg chat-msg-recieve d-flex flex-row justify-content-start">
              <div className="d-flex flex-row my-3 w-75 w-lg-50">
                <div style={{backgroundImage: `url('https://johnuberbacher.com/wp-content/uploads/2021/03/flutter-calculator.jpg')`}}
                    className="avatar rounded-circle me-3">
                </div>
                <div className="bg-white rounded hover-shadow py-2 px-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            </div>
            <div class="chat-msg chat-msg-send d-flex flex-row justify-content-end">
              <div className="d-flex flex-row justify-content-end my-3 w-75 w-md-50">
                <div className="bg-primary rounded hover-shadow py-2 px-3 text-white">
                  Lorem ipsum dolor sit amet.
                </div>
                <div style={{backgroundImage: `url('https://johnuberbacher.com/wp-content/uploads/2021/03/flutter-calculator.jpg')`}}
                    className="avatar rounded-circle ms-3">
                </div>
              </div>
            </div>
            <ChatInput/>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatFeed;
