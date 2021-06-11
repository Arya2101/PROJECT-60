import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBJfJnH2D3l-RojYahfB90EPua2bmm_vZk",
    authDomain: "attendanceapp2-df0ba.firebaseapp.com",
    databaseURL: "https://attendanceapp2-df0ba-default-rtdb.firebaseio.com",
    projectId: "attendanceapp2-df0ba",
    storageBucket: "attendanceapp2-df0ba.appspot.com",
    messagingSenderId: "441416703802",
    appId: "1:441416703802:web:332fcdd0f1aa8102b83a03",
    measurementId: "G-ZFME48VC7R"
  };
  
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database();
