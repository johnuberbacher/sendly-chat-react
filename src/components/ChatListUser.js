import React from 'react';
import '../style.css';

class ChatListUser extends React.Component {
  render() {
    return (
      <a href="#" className="chat-list-user p-3 mb-3 bg-white rounded d-flex flex-row align-items-start justify-content-start">
        <div className="d-flex flex-row align-items-center justify-content-start w-100 overflow-hidden">
          <div style={{backgroundImage: `url('https://johnuberbacher.com/wp-content/uploads/2021/03/flutter-calculator.jpg')`}}
              className="avatar rounded-circle me-3">
          </div>
          <div className="avatar-user overflow-hidden">
            <span className="fw-bold text-primary">Username</span>
            <div className="text-muted chat-list-user-preview small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            </div>
          </div>
        </div>
        <div className="chat-list-user-timestamp ms-3 small text-muted">
          <span className="small fw-bold">10:00pm</span>
        </div>
      </a>
    );
  }
}

export default ChatListUser;
