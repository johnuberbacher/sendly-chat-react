import React from 'react';
import '../style.css';

class ChatFeed extends React.Component {
  render() {
    return (
      <div className="rounded mb-4 h-100">
        <div className="w-100 p-4 rounded" style={{background: 'rgba(0,0,0,0.025)'}}>
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
      </div>
    );
  }
}

export default ChatFeed;
