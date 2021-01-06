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
        this.shooter = new Shooter (this.dimensions);
        this.level = new Level(this.dimensions);
        // this.ghost = new Ghost(this.dimensions);
        this.animate(); 
    }

    play() {
       this.running = true;
       this.animate(); 
    }

    click(e) {
        if (!this.running) {
            this.play();
        }
        this.shooter.moveShooter();
        
    }
    // drawBackground(ctx) {
    //     ctx.fillStyle = "black";
    //     ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
    // } 
    
    animate() {
        // debugger
        // this.drawBackground(this.ctx);
        this.level.animate(this.ctx);
        this.shooter.animate(this.ctx);
        if (this.running) {
            requestAnimationFrame(this.animate.bind(this));
        }
    }
}