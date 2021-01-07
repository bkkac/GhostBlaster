export default class Bullet {
    constructor(dimensions) {

        this.radius = 2;
        this.speed = 15; 
        this.left = 300;
        this.top = 700;
        this.right = 302;
        this.bottom = 702;
        // this.bullets = [
        //     this.newBullet()
        // ]
        //  
    }

    // newBullet() {
    //     const bullet = {
    //         left: 300,
    //         right: 302,
    //         top: 700,
    //         bottom: 702 
    //     }
    //     console.log("new", bullet);
    //     return bullet;
    // }

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
        ctx.fillRect(
            this.left,
            this.top,
            this.right,
            this.bottom,
        );
    }



    animate(ctx) {
        // this.moveBullet();
        this.drawBullet(ctx);
    }

}