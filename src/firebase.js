import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAHl6TWhqMb6I58BZPcjJHSD94vkubh7S0',
  authDomain: 'spake-a9a64.firebaseapp.com',
  databaseURL: 'https://spake-a9a64.firebaseio.com',
  projectId: 'spake-a9a64',
  storageBucket: 'spake-a9a64.appspot.com',
  messagingSenderId: '869542590999'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({
  prompt: 'select_account'
});
