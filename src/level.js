export default class Level {
   constructor(dimensions) {
       this.dimensions = dimensions;
       this.x = 80;
       this.y = 550;
       this.velocity = 5;
   } 



    moveLevel() {
        this.x -= this.velocity;
    }


    drawHouse(ctx) {
        var house = new Image();
        house.src = '../images/haunted_house.png';
        let that = this;
        ctx.drawImage(house, that.x, that.y, 250, 250)
        house.onload = function () {

            ctx.drawImage(house, that.x, that.y, 250, 250)
        }
    }
    animate(ctx) {
        // this.drawBackground(ctx);
        // this.drawGround(ctx);
        this.drawHouse(ctx);
    }
}