import GhostBlasters from './game';
// import '../stylesheets/application.css';

// console.log("webpack is working")

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('game-canvas');
    new GhostBlasters(canvas);
 


    const sound = document.getElementById('sound');
    const soundOn = document.getElementById('sound-on')
    const soundOff = document.getElementById('sound-off')


    soundOn.addEventListener("click", () => {
        sound.play();
    })

    soundOff.addEventListener('click', () => {
        sound.pause();
    })



})