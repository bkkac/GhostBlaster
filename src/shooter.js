
export default class Shooter {

    constructor(dimensions) {
        this.dimensions = dimensions;
        this.velocity = 5;
    }

    drawShooter(ctx) {
        var shooter = new Image();
        shooter.src = './images/squirtle.png';
        let that = this;
        ctx.drawImage(shooter, 300, 473, 115, 115)
        shooter.onload = function () {
        
            ctx.drawImage(shooter, 300, 473, 115, 115)
        }
    }

    drawSkateboard(ctx) {
        var skateboard = new Image();
        skateboard.src = './images/2d_skateboard.png';
        let that = this;
        ctx.drawImage(skateboard, 280, 570, 130, 30)
        skateboard.onload = function () {
        
            ctx.drawImage(skateboard, 280, 570, 130, 30)
        } 
    }

    animate(ctx) {
        this.drawSkateboard(ctx)
        this.drawShooter(ctx);


    }
}