import React from 'react';
import '../style.css';

class ChatFeed extends React.Component {
  render() {
    return (
      <div className="rounded mb-4 h-100">
        <div className="chat-feed-current-user w-100 p-4 rounded mb-3" style={{background: 'rgba(0,0,0,0.025)'}}>
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
        <div className="chat-feed overflow-auto">
        <div className="chat-msg-recieve d-flex flex-row my-3">
          <div style={{backgroundImage: `url('https://johnuberbacher.com/wp-content/uploads/2021/03/flutter-calculator.jpg')`}}
              className="avatar rounded-circle me-3">
          </div>
          <div className="bg-white rounded py-2 px-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className="chat-msg-recieve d-flex flex-row justify-content-end my-3">
          <div className="bg-primary rounded py-2 px-3 text-white">
            Lorem ipsum dolor sit amet.
          </div>
          <div style={{backgroundImage: `url('https://johnuberbacher.com/wp-content/uploads/2021/03/flutter-calculator.jpg')`}}
              className="avatar rounded-circle ms-3">
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default ChatFeed;
