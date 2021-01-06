import Level from "./level";
import Ghost from "./ghost";
import Shooter from "./shooter"
// import '../stylesheets'

export default class GhostBlasters {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        // this.running = false;
        this.registerEvents();
        this.restart();
    }
    
    registerEvents() {
        this.boundClickHandler = this.click.bind(this);
        this.ctx.canvas.addEventListener("mousedown", this.boundClickHandler);
    }

    restart() {
        this.running = false;
        this.level = new Level(this.dimensions);
        this.shooter = new Shooter (this.dimensions);
        // this.ghost = new Ghost(this.dimensions);
        this.animate(); 
    }

    play() {
       this.running = true;
       this.animate(); 
    }

    // startGame(e) {
    //    if () 
    // }

    click(e) {
        if (!this.running) {
            this.play();
        }

        // if (e.keyCode === 32) {

            this.level.moveHouse();
        
        // this.animate();
        
    }
    // drawBackground(ctx) {
    //     ctx.fillStyle = "black";
    //     ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
    // } 
    
    animate() {
        // debugger
        // this.drawBackground(this.ctx);
        this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
        console.log(this);
        this.level.animate(this.ctx);
        this.shooter.animate(this.ctx);
        if (this.running) {
            requestAnimationFrame(this.animate.bind(this));
        }
    }
}