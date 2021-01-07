const CONSTANTS = {
    GHOST_WIDTH: 63,
    GHOST_HEIGHT: 70,
    EDGE_BUFFER: 50,
    WARM_UP_SECONDS: 1
};


export default class Level {
   constructor(dimensions) {
       this.dimensions = dimensions;
       this.house_x = 80;
       this.house_y = 550;
       this.ghost_x = 635; 
       this.velocity = 5;
       this.ghosts = [
            this.randomGhost()
       ]
   } 


   moveHouse(ctx) {
        this.house_x -= this.velocity;
        let that = this;
        if (this.house_x < -200) {
            this.house_x = 950;
            this.drawHouse(ctx);
        }
   }

   randomGhost(x) {
        //     var unshotGhost = new Image();
            // unshotGhost.src = '../images/unshot_ghost.png';
            // ghost.drawImage(unshotGhost, 50, ghost.left, 63, 70)
            // console.log(unshotGhost.src);
            // unshotGhost.onload = function () {

            //     ghost.drawImage(unshotGhost, 50, ghost.left, 63, 70)
            // }
       const height = Math.floor(Math.random() * 551) + 10; 
    const ghost = {
        left: x,
        right: CONSTANTS.GHOST_WIDTH + x,
        top: height, 
        bottom: CONSTANTS.GHOST_HEIGHT + height,
        shot: false
        }
        return ghost;
    }

    drawGhosts(ctx) {
        this.eachGhost(function(ghost) {
            let unshotGhost = new Image();
            unshotGhost.src = './images/unshot_ghost.png';
            ctx.drawImage(unshotGhost, ghost.top, ghost.bottom, CONSTANTS.GHOST_WIDTH, CONSTANTS.GHOST_HEIGHT)
            console.log(unshotGhost.src);
            unshotGhost.onload = function () {

                ctx.drawImage(unshotGhost, ghost.top, ghost.bottom, CONSTANTS.GHOST_WIDTH, CONSTANTS.GHOST_HEIGHT)
            }
        }
        )
    }


    shotGhost(ctx) {

        var shotGhost = new Image();
        shotGhost.src = './images/shot_ghost.png';

        shotGhost.onload = function () {

            ctx.drawImage(shotGhost, 50, 35, this.ghost_x, 70)
        }
    }

    moveGhosts() {
        this.eachGhost(function(ghost) {
           ghost.left -= 5;
           ghost.right -= 5; 
        })

        if (this.ghosts[0].right <= 0 ) {
            this.ghosts.shift();
            const newGhost = this.ghosts[1].left + 700;
            this.ghosts.push(this.randomGhost(newGhost))
        }
    }

    eachGhost(callback) {
        this.ghosts.forEach(callback.bind(this));
    }

    drawHouse(ctx) {
        var house = new Image();
        house.src = './images/haunted_house.png';
        let that = this;
        ctx.drawImage(house, that.house_x, that.house_y, 250, 250)
        house.onload = function () {

            ctx.drawImage(house, that.house_x, that.house_y, 250, 250)
        }
    }
    animate(ctx) {
    
        this.drawHouse(ctx);
        this.moveHouse(ctx);
        this.moveGhosts();
        this.drawGhosts(ctx);
    }
}