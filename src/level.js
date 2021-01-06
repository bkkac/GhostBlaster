// import Ghost from './ghost';

export default class Level {
   constructor(dimensions) {
       this.dimensions = dimensions;
       this.house_x = 80;
       this.house_y = 550;
       this.velocity = 5;
   } 


   moveHouse(ctx) {
        this.house_x -= this.velocity;
        let that = this;
        // let ghost = new Ghost(this.dimensions);
        if (this.house_x < -200) {
            this.house_x = 950;
            this.drawHouse(ctx);
            // let newGhost = ghost.newGhost(ctx)
            // ghost.moveGhost(newGhost)

        }
   }

//    startMenu() {
//         this.ctx.font = "30px Arial";
//        this.ctx.fillStyle = "#b30000";
//         this.ctx.fillText("Press any key to start", 200, 200)      
//    }


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