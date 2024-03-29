import React from 'react';
import './App.css';

//firebase SDK for auth and firebase database
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//firebase hooks to work with react
import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  // app initialization
})

//global variable for reference for auth and firestore SDK
const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
    </div>
  );
}

export default App;
