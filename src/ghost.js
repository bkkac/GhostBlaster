import { ContextExclusionPlugin } from "webpack";

const CONSTANTS = {
    GHOST_WIDTH: 63,
    GHOST_HEIGHT: 70,
    EDGE_BUFFER: 50,
    WARM_UP_SECONDS: 1
};

export default class Ghost {

    constructor(dimensions) {
        this.velocity = 2;
        this.dimensions = dimensions;
        this.y = Math.floor(Math.random() * 551) + 10;
        this.x = Math.floor(Math.random() * 1601) + 1200;
    }


    newGhost(ctx) {

        var unshotGhost = new Image();
        unshotGhost.src = '../images/unshot_ghost.png';
        ctx.drawImage(unshotGhost, this.x, this.y, 63, 70)

        let that = this;
        unshotGhost.onload = function() {

            ctx.drawImage(unshotGhost, that.x, that.y, 63, 70)
        }
    }

    shotGhost(ctx, pos) {

        var shotGhost = new Image();
        shotGhost.src = '../images/shot_ghost.png';
        ctx.drawImage(shotGhost, this.x, this.y, 63, 70)
        let that = this;
        shotGhost.onload = function () {

            ctx.drawImage(shotGhost, that.x, that.y, 63, 70)
        }
    }

    deadGhost(ctx, pos) {
        var deadGhost = new Image();
        deadGhost.src = '../images/deadghost.png';
        ctx.drawImage(deadGhost, this.x, this.y, 63, 70)
        let that = this;
        deadGhost.onload = function () {

            ctx.drawImage(deadGhost, that.x, that.y, 63, 70)
        } 
     }


    moveGhost(ctx) {
        this.x -= this.velocity;
    }

    animate(ctx) {
        this.newGhost(ctx);
        this.moveGhost(ctx);
    }


}