
export default class Level {
   constructor(dimensions) {
       this.dimensions = dimensions;
       this.house_x = 80;
       this.house_y = 350;
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

    }
 }

// webpack --mode=development --watch