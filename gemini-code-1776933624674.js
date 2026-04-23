importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDnQ5fQFmx1-48lJwcaJhSKq2Y8MAaNAcY",
  projectId: "meuturno-d7d1a",
  messagingSenderId: "634840990788",
  appId: "1:634840990788:web:3b7b0e8d1d051959d86811"
});

const messaging = firebase.messaging();