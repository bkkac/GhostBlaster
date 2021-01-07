export default class Bullet {
    constructor(dimensions) {

        this.radius = 2;
        this.speed = 15; 
        this.left = 300;
        this.top = 700;
        this.right = 302;
        this.bottom = 702;

    }


    moveBullet(x, y) {


            const a = x - this.right;
            const b = y - this.top;
            const c = (a * a) + (b * b); 
            if (x < this.left) {
               this.left -= (a + this.speed); 
               this.right -= (a + this.speed); 
               this.top += b + this.speed;
               this.bottom += b + this.speed;
            } else {
                this.left += (a + this.speed);
                this.right += (a + this.speed);
                this.top += b + this.speed;
                this.bottom += b + this.speed;
            }
            console.log("move", this);
    }

    drawBullet(ctx) {
        console.log(ctx, this)
        // ctx.fillRect(
        //     this.left,
        //     this.top,
        //     this.right,
        //     this.bottom,
        // );

        let bullet = new Image();
        bullet.src = "./images/bullet.png";
        ctx.drawImage(bullet, this.left, this.top, 100, 100)
        bullet.onload = function () {
            ctx.drawImage(bullet, this.left, this.top, 100, 100) 
        }
    }



    animate(ctx) {
        // this.moveBullet();
        this.drawBullet(ctx);
    }

}