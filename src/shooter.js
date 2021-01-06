
export default class Shooter {

    constructor(dimensions) {
        this.dimensions = dimensions;
        this.velocity = 5;
        this.x = 300;
        this.y = 685;
    }

    drawShooter(ctx) {
        var shooter = new Image();
        shooter.src = '../images/squirtle.png';
        let that = this;
        shooter.onload = function () {
            // console.log(this)
            ctx.drawImage(shooter, that.x, that.y, 115, 115)
        }
    }

    moveShooter() {
        this.x += this.velocity;
    }

    animate(ctx) {
        this.moveShooter();
        this.drawShooter(ctx);

    }
}