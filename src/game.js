import Level from "./level";
import Shooter from "./shooter";
import Bullet from "./bullet";
import Ghost from "./ghost";

export default class GhostBlasters {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.interval = 2300;
        this.bullets = [];
        this.ghosts = [];
        this.count = 1;
        this.score = 0;
        this.gameEnd = false;
        this.creepster = new FontFace(
            "Creepster",
            "url(./images/Creepster-Regular.ttf)"
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
        this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
        this.running = false;
        this.gameEnd = false;
        this.interval = 2300;
        this.level = new Level(this.dimensions);
        this.shooter = new Shooter (this.dimensions);
        this.bullet = new Bullet(this.dimensions);
        this.score = 0;
        
        
        this.animate(); 
        
    }
    
    play() {
        this.running = true;
        this.ghosts = [];
       this.animate(); 
       this.ghostInterval();
    }

    click(e) {
        if (!this.running) {
            this.play();
        }

        this.level.moveHouse();

         
    }

    shoot(e) {
        if (this.running) {

            if (this.bullets.length > 15) {
                this.bullets.shift();
            }
            
            const bullet = new Bullet();
            this.bullets.push(bullet);
    
     
            const x = e.clientX - this.canvas.offsetLeft;
            const y = e.clientY - this.canvas.offsetTop;
            bullet.moveBullet(x, y); 
        }
    }

    ghostInterval() {
        if (this.running) {

           setInterval(this.addGhost.bind(this), this.interval)

        }
    }

    increaseInterval() {
        if ((this.score / 2) % 5 === 0 && this.interval > 500 && this.score !== 0) {
               this.interval -= 400
               console.log("interval", this.interval)
        }
           
 
    }



    addGhost() {

        const ghost = new Ghost(this.dimensions) 
        this.ghosts.push(ghost);
        ghost.animate(this.ctx);
        
    }


    drawSparkles(ctx) {
        var sparkles = new Image();
        sparkles.src = './images/stars.png';
        ctx.drawImage(sparkles, 180, 725, 100, 100)
        sparkles.onload = function () {

            ctx.drawImage(sparkles, 180, 725, 100, 100)
        }
    }
 
    animate() {
        this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
        this.level.animate(this.ctx);
        this.shooter.animate(this.ctx);
;
        
        
        if (!this.running) {
            this.howToPlay();
            this.instructions();
            this.highScore();
            this.lose();
            this.startGame();
        }
        if (this.running) {
            this.drawScore();
            this.bullets.forEach(bullet => bullet.animate(this.ctx));
            this.ghosts.forEach(ghost => ghost.animate(this.ctx));
            this.hitGhost(this.ctx);
            requestAnimationFrame(this.animate.bind(this));
            this.drawSparkles(this.ctx);
            this.gameOver();
            this.increaseInterval();
            
        }
    }

    hitGhost(ctx) {

        this.ghosts.forEach((ghost, i) => {
            if (this.collidesWith(ghost)) {
                this.score += 1;
                ghost.velocity = 0;
                this.score += 1;
                ghost.dead = true;
                setTimeout(() => this.ghosts = this.ghosts.filter(ghost => !ghost.dead), 1000)
            }
        })
    }





    collidesWith(ghost) {
 
        const _overlap = (bullet, ghost) => {
            if (ghost.dead) {
                return false;
            }
            if (bullet.position[0] > ghost.x + 63 || bullet.position[0]+ 100 < ghost.x) {
                return false;
            }
            if (bullet.position[1] > ghost.y + 70 || bullet.position[1] + 100 < ghost.y) {
                return false;
            }
            return true;
        };
        let collision = false;
        this.bullets.forEach((bullet, j) => {
            if (

                _overlap(bullet, ghost)
            ) { collision = true; 
                bullet.speed = [0, 0];
                this.bullets.splice(j, j+1)
            }
        });
        return collision;
    }



    startGame() {
        this.creepster.load().then((font) => {
            document.fonts.add(font);
            this.ctx.font = "20pt Creepster";
            this.ctx.fillStyle = "#b30000";
            this.ctx.fillText("Press any key to start", 365, 400);
        })
    }

    instructions() {
        this.creepster.load().then((font) => {
            document.fonts.add(font);
            this.ctx.font = "20pt Creepster";
            this.ctx.fillStyle = "#b30000";
            this.ctx.fillText("Click on ghosts to shoot them", 315, 250);
        })
    }

    highScore() {
        this.creepster.load().then((font) => {
            document.fonts.add(font);
            this.ctx.font = "20pt Creepster";
            this.ctx.fillStyle = "#b30000";
            this.ctx.fillText("Shoot as many ghosts as you can", 305, 300);
        })
    }
    lose() {
        this.creepster.load().then((font) => {
            document.fonts.add(font);
            this.ctx.font = "20pt Creepster";
            this.ctx.fillStyle = "#b30000";
            this.ctx.fillText("If a ghost makes it across the screen, you lose", 245, 350);
        })
    }

    howToPlay() {
        this.creepster.load().then((font) => {
            document.fonts.add(font);
            this.ctx.font = "30pt Creepster";
            this.ctx.fillStyle = "#b30000";
            this.ctx.fillText("How to play:", 395, 200);
        })
    }

    drawScore() {
        this.ctx.font = "30pt Creepster";
        this.ctx.fillStyle = "#b30000";
        this.ctx.fillText((this.score / 2), 10, 790);
    }

    gameOver() {
        this.ghosts.forEach(ghost => {
            if (ghost.x + 63 <= 0) {
                this.gameEnd = true;
            }
        })

        if (this.gameEnd) {

            // this.ghosts = [];
            // this.score = 0;
            alert(`game over, score: ${this.score / 2}`);
            this.restart();
        }   
    }
}