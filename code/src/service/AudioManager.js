import { Component } from 'react';

export class AudioManager extends Component {
  static getAudio() {
      if (!window.audioManager) {
            window.audioManager = new Audio();
      }
      
      return window.audioManager;
  }
  
  render() {
    return undefined;
  }
}