export default class Level {
   constructor(dimensions) {
       this.dimensions = dimensions;
       this.house_x = 80;
       this.house_y = 550;
       this.velocity = 5;
   } 


   moveHouse() {
        this.house_x -= this.velocity;
   }
    // moveLevel() {
    //     this.x -= this.velocity;
    // }


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
        // this.drawBackground(ctx);
        // this.drawGround(ctx);
        this.drawHouse(ctx);
        this.moveHouse(ctx)
    }
}