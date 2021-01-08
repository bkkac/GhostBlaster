export default class Bullet {
    constructor() {

        this.radius = 2;
        this.speed = [0, 0]; 
        this.position = [350, 650]

    }

    // newBullet() {
    //     const bullet = {
    //         left: 300,
    //         top: 700,
    //         right: 302,
    //         bottom: 702
    //     }

    //     return bullet;
    // }

    moveBullet(x, y) {

            if (x) {

                this.speed[0] = (x - this.position[0]);
                this.speed[1] = (y - this.position[1]);
            // } else {
            }
            this.position[0] += (this.speed[0] / 20);
            this.position[1] += (this.speed[1] / 20);


    }

    drawBullet(ctx) {
        // this.eachBullet(function(bullet) {
            // console.log(this);
            
            let newbullet = new Image();
            newbullet.src = "./images/bullet.png";
            ctx.drawImage(newbullet, this.position[0], this.position[1], 100, 100)
            let that = this;
            newbullet.onload = function () {
                ctx.drawImage(newbullet, that.position[0], that.position[1], 100, 100) 
            }
        // })
        // console.log(ctx, this)
    }

    // eachBullet(callback) {
    //     this.bullets.forEach(callback.bind(this));
    // }

    animate(ctx) {
        
        this.drawBullet(ctx);
        this.moveBullet();
    }

}