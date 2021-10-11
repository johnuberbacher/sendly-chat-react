import React, { Component } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Feed from './components/Feed';
import Button from 'react-bootstrap/Button';
import db from './services/FirebaseConfig';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/analytics';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

function App() {

  const [user] = useAuthState(db.auth);
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    db.auth.signInWithPopup(provider);
  }

  return (
    <div className="App w-100 h-100">
      <Container fluid className="h-100 px-0">
        {user ? <Feed /> :
          <div className="d-flex flex-c olumn py-4 h-100 align-items-center justify-content-center">
            <div class="text-center">
              <h1 class="display-1 text-primary mb-5">Sendly</h1>
              <Button onClick={signInWithGoogle} class="btn btn-primary h-auto px-5">Sign In with Google</Button>
            </div>
          </div>}
      </Container>
    </div>
  );
}

export default App;
