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
    //    this.ghost_count = 0;
       this.ghosts = [
        //    this.randomGhost()
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

   randomGhost() {
       let that = this;
       const height = Math.floor(Math.random() * 551) + 10; 
       const ghost = 
       {
           
           left: 1200,
           right: CONSTANTS.GHOST_WIDTH + 1200,
           top: height, 
           bottom: CONSTANTS.GHOST_HEIGHT + height,
           shot: false
        }
        

        return ghost;
    }

    generateGhosts() {
        setTimeout(this.randomGhost(), 5000)
    }

    drawGhosts(ctx) {
        this.eachGhost(function(ghost) {

            let unshotGhost = new Image();
            unshotGhost.src = './images/unshot_ghost.png';
            ctx.drawImage(unshotGhost, ghost.left, ghost.top, CONSTANTS.GHOST_WIDTH, CONSTANTS.GHOST_HEIGHT)

            unshotGhost.onload = function () {

                ctx.drawImage(unshotGhost, ghost.left, ghost.top, CONSTANTS.GHOST_WIDTH, CONSTANTS.GHOST_HEIGHT)
            }
        }
        )
    }


    shotGhost(ctx) {

        var shotGhost = new Image();
        shotGhost.src = './images/deadghost.png';
        ctx.drawImage(shotGhost, 50, 35, 120, 120)
        shotGhost.onload = function () {

            ctx.drawImage(shotGhost, 50, 35, 120, 120)
        }
    }

    moveGhosts() {
        // this.generateGhosts();
        this.eachGhost(function(ghost) {
           ghost.left -= 2 ;
           ghost.right -= 2 ; 
        })

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
        // this.shotGhost(ctx);
        // this.ghosts.push(this.drawGhosts(ctx));
        // console.log(this.ghosts)
    }
 }

// webpack --mode=development --watch