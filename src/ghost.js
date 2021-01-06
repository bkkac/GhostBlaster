import { ContextExclusionPlugin } from "webpack";

export default class Ghost {

    constructor(dimensions) {
        this.velocity = 5;
        this.dimensions = dimensions;
        this.x = dimensions.width / 3;
        this.y = this.dimensions.height / 2;
        this.ghost_x = 635;
    }

    newGhost(ctx) {

        var unshotGhost = new Image();
        unshotGhost.src = '../images/unshot_ghost.png';

        unshotGhost.onload = function() {

            ctx.drawImage(unshotGhost, 50, this.ghost_x, 63, 70)
        }
    }

    shotGhost(ctx) {

        var shotGhost = new Image();
        shotGhost.src = '../images/shot_ghost.png';

        shotGhost.onload = function () {

            ctx.drawImage(shotGhost, 50, 35, this.ghost_x, 70)
        }
    }

    moveGhost(ctx) {
        this.ghost_x -= this.velocity;
    }

    animate(ctx) {
        this.newGhost(ctx);
        this.moveGhost(ctx);
        // this.shotGhost(ctx);
    }


}