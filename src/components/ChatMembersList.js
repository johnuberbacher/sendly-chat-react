import React from 'react';

class ChatMembersList extends React.Component {
  render() {
    return (
      <div className="d-flex flex-row border-bottom py-2">
        <div className="d-flex flex-column align-items-center justify-content-center px-3 small">
          <div style={{backgroundImage: `url('https://johnuberbacher.com/wp-content/uploads/2021/03/flutter-calculator.jpg')`}}
              className="avatar rounded-circle shadow"></div>
          <div className="avatar-user small pt-2">
            Username
          </div>
        </div>
          <div className="d-flex flex-column align-items-center justify-content-center px-3 small">
            <div style={{backgroundImage: `url('https://johnuberbacher.com/wp-content/uploads/2021/03/flutter-calculator.jpg')`}}
                className="avatar rounded-circle shadow"></div>
            <div className="avatar-user small pt-2">
              Username
            </div>
          </div>
        <div className="d-flex flex-column align-items-center justify-content-center px-3 small">
          <div style={{backgroundImage: `url('https://johnuberbacher.com/wp-content/uploads/2021/03/flutter-calculator.jpg')`}}
              className="avatar rounded-circle shadow"></div>
          <div className="avatar-user small pt-2">
            Username
          </div>
        </div>
      </div>
    );
  }
}

export default ChatMembersList;
