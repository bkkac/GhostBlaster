import Level from "./level";
import Shooter from "./shooter"

export default class GhostBlasters {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.ghost_gen = 1;
        this.registerEvents();
        this.restart();
    }
    
    registerEvents() {
        this.boundClickHandler = this.click.bind(this);
        document.addEventListener("keydown", this.boundClickHandler);
    }

    restart() {
        this.running = false;
        this.level = new Level(this.dimensions);
        this.shooter = new Shooter (this.dimensions);
        this.animate(); 
        this.howToPlay();
        this.instructions();
        this.highScore();
        this.startGame();
    }

    play() {
       this.running = true;
       this.animate(); 
    }

    click(e) {
        if (!this.running) {
            this.play();
        }

        this.level.moveHouse();
        this.level.moveGhosts();
        
        
    }


    drawSparkles(ctx) {
        var sparkles = new Image();
        sparkles.src = './images/stars.png';
        ctx.drawImage(sparkles, 180, 725  , 100, 100)
        sparkles.onload = function () {

            ctx.drawImage(sparkles, 180, 725  , 100, 100)
        }
    }
 
    animate() {
        this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
        this.level.animate(this.ctx);
        this.shooter.animate(this.ctx);
         
        if (this.running) {
            requestAnimationFrame(this.animate.bind(this));
            this.drawSparkles(this.ctx);
            // this.level.randomGhost(1000)
        }
    }

    startGame() {
        this.ctx.font = "20pt Creepster";
        this.ctx.fillStyle = "#b30000";
        this.ctx.fillText("Press any key to start", 365, 350);
    }

    instructions() {
        this.ctx.font = "20pt Creepster";
        this.ctx.fillStyle = "#b30000";
        this.ctx.fillText("Click on ghosts to shoot them.", 315, 250);
    }

    highScore() {
        this.ctx.font = "20pt Creepster";
        this.ctx.fillStyle = "#b30000";
        this.ctx.fillText("Shoot as many ghosts as possible to get a high score!", 225, 300);
    }

    howToPlay() {
        this.ctx.font = "30pt Creepster";
        this.ctx.fillStyle = "#b30000";
        this.ctx.fillText("How to play:", 395, 200);
    }
}