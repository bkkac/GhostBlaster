export default class Bullet {
    constructor(dimensions) {

        this.radius = 2;
        this.speed = 15; 
    }

    newBullet() {
        const bullet = {
            left: 300,
            right: 302,
            top: 700,
            bottom: 702 
        }
        console.log(bullet);
        return bullet;
    }

    moveBullet(ghost) {
        const a = ghost.left - this.right;
        const b = ghost.bottom - this.top;
        const c = (a * a) + (b * b); 
        if (ghost.left < this.left) {
           this.left -= (a + this.speed); 
           this.top += b + this.speed;
        } else {
            this.left += (a + this.speed);
            this.top += b + this.speed;
        }
    }
}