import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {BiPaperPlane} from "react-icons/bi";
import {BiSearchAlt} from "react-icons/bi";
import {BiSmile} from "react-icons/bi";
import ChatListUser from './ChatListUser';
import ChatMembersList from './ChatMembersList';
import ChatFeed from './ChatFeed';
import '../style.css';
class Feed extends React.Component {
  render() {
    return (
      <Row className="h-md-100 gx-0 align-items-stretch">
        <Col className="col-pixel-width-100">
          <div className="d-flex flex-column align-items-stretch justify-content-stretch h-md-100 p-3 pb-0 pb-md-3">
          <Navbar className="flex-row flex-md-column align-items-start justify-content-stretch h-md-100" expand ="md">
            <div className="mb-3 d-flex flex-row align-items-center justify-content-start">
              <div style={{backgroundImage: `url('https://johnuberbacher.com/wp-content/uploads/2021/03/flutter-calculator.jpg')`}}
                  className="avatar rounded-circle me-3">
              </div>
              <div class="d-flex flex-column">
                <span className="fw-bold">Username</span>
                <span className="fw-bold small text-muted">@username</span>
              </div>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="btn btn-primary bg-primary rounded btn-send d-flex d-md-none align-items-center justify-content-center">
              <BiSearchAlt className="text-white"/>
            </Navbar.Toggle>
            <Navbar.Collapse className="flex-column align-items-stretch justify-content-stretch w-100" id="basic-navbar-nav">
              <div className="chat-list d-flex flex-column align-items-start rounded bg-white h-100">
                <div className="position-relative w-100 p-3">
                  <input type="text" placeholder="Send a message..." className="form-control border-0 bg-light w-100 rounded-pill pe-5"/>
                  <div className="position-absolute top-50 translate-middle" style={{right: '1rem'}}>
                    <a href="#" className="btn btn-primary rounded-circle btn-send d-flex align-items-center justify-content-center">
                      <BiSearchAlt className="text-white"/>
                    </a>
                  </div>
                </div>
                <div className="chat-list w-100 px-2">
                  <ChatListUser/>
                  <ChatListUser/>
                  <ChatListUser/>
                </div>
              </div>
            </Navbar.Collapse>
            </Navbar>
          </div>
        </Col>
        <Col>
          <div className="p-3 d-flex align-items-stretch justify-content-stretch h-100 flex-column">
            <ChatFeed/>
            <div className="position-relative">
              <input type="text" placeholder="Send a message..." className="form-control border-0 bg-white rounded-pill pe-5"/>
              <div className="position-absolute top-50 end-0 translate-middle-y d-flex flex-row justify-content-end">
                <a href="#" className="btn btn-light rounded-circle btn-send d-flex align-items-center justify-content-center">
                  <BiSmile className="text-primary"/>
                </a>
                <a href="#" className="btn btn-primary rounded-circle btn-send d-flex align-items-center justify-content-center mx-3">
                  <BiPaperPlane className="text-white"/>
                </a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    );

  }

}

export default Feed;
