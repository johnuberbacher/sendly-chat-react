import React, { useState, useEffect } from "react";
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
import {BiUpArrow} from "react-icons/bi";
import ChatListUser from './ChatListUser';
import ChatMembersList from './ChatMembersList';
import ChatFeed from './ChatFeed';
import SignOut from './SignOut';

class Chat extends React.Component {
  render() {
    return (
      <Row className="h-md-100 gx-0 align-items-stretch">
        <Col className="col-pixel-width-100">
          <div className="d-flex flex-column align-items-stretch justify-content-stretch h-md-100 p-3 pb-0 pb-md-2">
          <Navbar className="flex-row flex-md-column align-items-start justify-content-stretch h-md-100" expand ="md">
            <div className="w-100 mb-3 d-flex flex-row align-items-center justify-content-between">
              <div className="d-flex flex-row align-items-center justify-content-start">
                <div style={{backgroundImage: `url('https://johnuberbacher.com/wp-content/uploads/2021/03/flutter-calculator.jpg')`}}
                    className="avatar rounded-circle me-3">
                </div>
                <div className="d-flex flex-column">
                  <span className="fw-bold">Username</span>
                  <span className="fw-bold small text-muted">@username</span>
                </div>
              </div>
              <SignOut/>
            </div>
            <Navbar.Toggle aria-controls="chat-navbar-nav" className="btn btn-primary bg-primary rounded btn-send d-flex d-md-none align-items-center justify-content-center">
              <BiUpArrow className="text-white"/>
            </Navbar.Toggle>
            <Navbar.Collapse className="flex-column align-items-stretch justify-content-stretch w-100 shadow rounded bg-white" id="chat-navbar-nav">
              <div className="chat-list d-flex flex-column align-items-start h-100">
                <div className="position-relative w-100 p-3">
                  <input type="text" placeholder="Send a message..." className="form-control border-0 bg-light w-100 rounded-pill pe-5"/>
                  <div className="position-absolute top-50 translate-middle" style={{right: '1rem'}}>
                    <a href="#" className="btn btn-primary rounded-circle btn-send d-flex align-items-center justify-content-center p-1">
                      <BiSearchAlt className="text-white" size="bx-sm"/>
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
          <ChatFeed/>
        </Col>
      </Row>
    );

  }

}

export default Chat;
