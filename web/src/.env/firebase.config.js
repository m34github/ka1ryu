import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/firestore';

const config = {
  apiKey: "AIzaSyBVPt1Y8sQqLsJpuIcbcwm5YUqE-zqoPDo",
  authDomain: "ka1ryu.firebaseapp.com",
  databaseURL: "https://ka1ryu.firebaseio.com",
  projectId: "ka1ryu",
  storageBucket: "ka1ryu.appspot.com",
  messagingSenderId: "218217114230"
};

const app = firebase.initializeApp(config);
export const providerFacebook = new firebase.auth.FacebookAuthProvider();
export const auth = app.auth();
export const db = app.firestore();
