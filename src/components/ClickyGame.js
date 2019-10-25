import React, { Component } from 'react';
import Navbar from './Navbar';
import Container from './Container';
import Footer from './Footer';
import Banner from './Banner';
import images from '../images';

class ClickyGame extends Component {
  state = {
    score: 0,
    highScore: 0,
    
// stores the class value to assign to navMessage based on a good or bad click
navMsgColor: '',

// contains intro, success, and failure message
navMessage: 'Click an image to begin!',

// contains an array of image urls
allCharacters: this.shuffleArray(),

// will track  each clicked element.
wasClicked: [],

// shakes the container on an incorrect guess if set to true
shake: false
};
