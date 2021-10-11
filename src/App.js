import React, { Component } from 'react';
import './App.scss';
import Container from 'react-bootstrap/Container';
import Feed from './components/Feed';

class App extends Component {
  render() {
  return (
    <div className="App w-100 h-100">
      <Container fluid className="h-100 px-0">
        <Feed/>
      </Container>
    </div>
  );
}}

export default App;
