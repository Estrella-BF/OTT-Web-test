import { Component, OnInit } from '@angular/core';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Auth, getAuth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'fzth';

  constructor(public auth: AngularFireAuth) {

  }

  ngOnInit() {
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyDVJG7jUGOgr8fENv9UD08-oMZjWVvt-98",
      authDomain: "fzth-globant.firebaseapp.com",
      projectId: "fzth-globant",
      storageBucket: "fzth-globant.appspot.com",
      messagingSenderId: "294846167973",
      appId: "1:294846167973:web:10b4d8b8e984a14406064c"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

  } 
  
  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.auth.signOut();
  }
}
