import Level from "./level";
import Shooter from "./shooter";
import Bullet from "./bullet";
import Ghost from "./ghost";

export default class GhostBlasters {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.interval = 5000;
        this.bullets = [];
        this.ghosts = [];
        this.creepster = new FontFace(
            "Creepster",
            "url(images/Creepster-Regular.ttf)"
        )
        this.registerEvents();
        this.restart();
    }
    
    registerEvents() {
        this.boundClickHandler = this.click.bind(this);
        document.addEventListener("keydown", this.boundClickHandler);
        this.boundShootHandler = this.shoot.bind(this);
        this.canvas.addEventListener("mousedown", this.boundShootHandler);
    }

    restart() {
        this.running = false;
        this.level = new Level(this.dimensions);
        this.shooter = new Shooter (this.dimensions);
        this.bullet = new Bullet(this.dimensions);
        this.ghost = new Ghost(this.dimensions);
        this.ghosts.push(this.ghost);
 
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

        this.level.moveHouse();
        this.ghostInterval();
        // this.ghosts.forEach(ghost => ghost.animate(this.ctx))
        
        // this.level.ghostInterval();
        // this.ghost.moveGhost();
        
        
    }

    shoot(e) {
        if (!this.running) {
            this.play();
        }
        console.log(this.bullets.length);
        if (this.bullets.length > 15) {
            this.bullets.shift();
        }
        
        const bullet = new Bullet();
        this.bullets.push(bullet);

 
        const x = e.clientX;
        const y = e.clientY;
       
        bullet.moveBullet(x, y); 
    }

    ghostInterval() {
        if (this.ghosts.length % 7 === 0) {
            this.ghosts.shift();
            this.interval -= 500;
        }

        setInterval(this.addGhost.bind(this), this.interval)
        
        // console.log(this.ghos ts);


    }

    addGhost(count) {
        for (let ghost = 0; ghost < count; ghost++) {
            const ghost = new Ghost(this.dimensions)
            this.ghosts.push(ghost)
            
        }
        const ghost = new Ghost(this.dimensions) 
        this.ghosts.push(ghost);
        ghost.animate(this.ctx);
        console.log(this.ghosts);
        
    }


    drawSparkles(ctx) {
        var sparkles = new Image();
        sparkles.src = './images/stars.png';
        ctx.drawImage(sparkles, 180, 725  , 100, 100)
        sparkles.onload = function () {

            ctx.drawImage(sparkles, 180, 725, 100, 100)
        }
    }
 
    animate() {
        this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
        this.level.animate(this.ctx);
        this.shooter.animate(this.ctx);
        this.ghost.animate(this.ctx);
        
        
        if (!this.running) {
            this.howToPlay();
            this.instructions();
            this.highScore();
            this.startGame();
        }
        if (this.running) {
            // this.ghostInterval();
            this.bullets.forEach(bullet => bullet.animate(this.ctx));
            this.ghosts.forEach(ghost => ghost.animate(this.ctx));
            requestAnimationFrame(this.animate.bind(this));
            this.drawSparkles(this.ctx);
            
        }
    }

    startGame() {
        this.creepster.load().then((font) => {

            this.ctx.font = "20pt Creepster";
            this.ctx.fillStyle = "#b30000";
            this.ctx.fillText("Press any key to start", 365, 350);
        })
    }

    instructions() {
        this.creepster.load().then((font) => {
            this.ctx.font = "20pt Creepster";
            this.ctx.fillStyle = "#b30000";
            this.ctx.fillText("Click on ghosts to shoot them.", 315, 250);
        })
    }

    highScore() {
        this.creepster.load().then((font) => {

            this.ctx.font = "20pt Creepster";
            this.ctx.fillStyle = "#b30000";
            this.ctx.fillText("Shoot as many ghosts as possible to get a high score!", 225, 300);
        })
    }

    howToPlay() {
        this.creepster.load().then((font) => {

            this.ctx.font = "30pt Creepster";
            this.ctx.fillStyle = "#b30000";
            this.ctx.fillText("How to play:", 395, 200);
        })
    }
}