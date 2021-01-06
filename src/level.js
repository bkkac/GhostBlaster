export default class Level {
   constructor(dimensions) {
       this.dimensions = dimensions;
       this.house_x = 80;
       this.house_y = 550;
       this.ghost_x = 635; 
       this.velocity = 5;
   } 


   moveHouse(ctx) {
        this.house_x -= this.velocity;
        let that = this;
        if (this.house_x < -200) {
            this.house_x = 950;
            this.drawHouse(ctx);
        }
   }

    newGhost(ctx) {

        var unshotGhost = new Image();
        unshotGhost.src = '../images/unshot_ghost.png';

        unshotGhost.onload = function () {

            ctx.drawImage(unshotGhost, 50, this.ghost_x, 63, 70)
        }
    }

    shotGhost(ctx) {

        var shotGhost = new Image();
        shotGhost.src = '../images/shot_ghost.png';

        shotGhost.onload = function () {

            ctx.drawImage(shotGhost, 50, 35, this.ghost_x, 70)
        }
    }

    moveGhost(ctx) {
        this.ghost_x -= this.velocity;
    }

    drawHouse(ctx) {
        var house = new Image();
        house.src = '../images/haunted_house.png';
        let that = this;
        ctx.drawImage(house, that.house_x, that.house_y, 250, 250)
        house.onload = function () {

            ctx.drawImage(house, that.house_x, that.house_y, 250, 250)
        }
    }
    animate(ctx) {

        this.drawHouse(ctx);
        this.moveHouse(ctx)
    }
}