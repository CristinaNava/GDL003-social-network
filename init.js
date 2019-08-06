if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
firebase.initializeApp({
  "apiKey": "qwertyuiop_asdfghjklzxcvbnm1234568_90",
  "databaseURL": "https://friendlychat-1234.firebaseio.com",
  "storageBucket": "friendlychat-1234.appspot.com",
  "authDomain": "friendlychat-1234.firebaseapp.com",
  "messagingSenderId": "1234567890",
  "projectId": "friendlychat-1234",
  "appId": "1:1234567890:web:123456abcdef"
});