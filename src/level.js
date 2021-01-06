export default class Level {
   constructor(dimensions) {
       this.dimensions = dimensions;
   } 

    // drawBackground(ctx) {
    //     ctx.fillStyle = "black";
    //     ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
    // }

    drawGround(ctx) {
        var ground = new Image();
        ground.src = '../images/haunted_ground.png';

        ground.onload = function () {

            ctx.drawImage(ground, 0, 400, 1100, 400)
        } 
    }

    drawHouse(ctx) {
        var house = new Image();
        house.src = '../images/haunted_house.png';
        ctx.drawImage(house, 80, 550, 250, 250)
        house.onload = function () {

            ctx.drawImage(house, 80, 550, 250, 250)
        }
    }
    animate(ctx) {
        // this.drawBackground(ctx);
        // this.drawGround(ctx);
        this.drawHouse(ctx);
    }
}