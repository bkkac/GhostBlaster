
export default class Shooter {

    constructor(dimensions) {
        this.dimensions = dimensions;
        this.velocity = 5;
        // this.x = 300;
        // this.y = 685;
    }

    drawShooter(ctx) {
        var shooter = new Image();
        shooter.src = '../images/squirtle.png';
        let that = this;
        ctx.drawImage(shooter, 300, 673, 115, 115)
        shooter.onload = function () {
            // console.log(this)
            ctx.drawImage(shooter, 300, 673, 115, 115)
        }
    }

    drawSkateboard(ctx) {
        var skateboard = new Image();
        skateboard.src = '../images/2d_skateboard.png';
        let that = this;
        ctx.drawImage(skateboard, 280, 770, 130, 30)
        skateboard.onload = function () {
            // console.log(this)
            ctx.drawImage(skateboard, 280, 770, 130, 30)
        } 
    }

    animate(ctx) {
        this.drawSkateboard(ctx)
        this.drawShooter(ctx);


    }
}