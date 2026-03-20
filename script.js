// script.js for FunTube Pro+

// Firebase Initialization
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: 'YOUR_API_KEY',
    authDomain: 'YOUR_PROJECT_ID.firebaseapp.com',
    databaseURL: 'https://YOUR_PROJECT_ID.firebaseio.com',
    projectId: 'YOUR_PROJECT_ID',
    storageBucket: 'YOUR_PROJECT_ID.appspot.com',
    messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
    appId: 'YOUR_APP_ID'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Video Player Functionality
const videoPlayer = document.getElementById('videoPlayer');

function playVideo(videoUrl) {
    videoPlayer.src = videoUrl;
    videoPlayer.play();
}

// Event listener for play button
document.getElementById('playButton').addEventListener('click', () => {
    const selectedVideoUrl = 'URL_OF_THE_VIDEO'; // Replace with the actual video URL
    playVideo(selectedVideoUrl);
});

// Optional: Firebase authentication example
authenticateUser();

function authenticateUser() {
    // Example authentication logic
    firebase.auth().signInWithEmailAndPassword('user@example.com', 'password')
    .then((userCredential) => {
        console.log('User signed in: ', userCredential.user);
    })
    .catch((error) => {
        console.error('Error signing in: ', error);
    });
} 
