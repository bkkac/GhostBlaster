import { ContextExclusionPlugin } from "webpack";

export default class Ghost {

    constructor(dimensions) {
        this.velocity = 0;
        this.dimensions = dimensions;
        this.x = dimensions.width / 3;
        this.y = this.dimensions.height / 2;
    }

    newGhost(ctx) {
        // document.getElementById("unshot-ghost");
        var unshotGhost = new Image();
        unshotGhost.src = '../images/unshot_ghost.png';
        // unshotGhost.alt = 'alt';
        // document.body.appendChild(unshotGhost);
        unshotGhost.onload = function() {

            ctx.drawImage(unshotGhost, 50, 35, 63, 70)
        }
    }

    shotGhost(ctx) {
        // document.getElementById("unshot-ghost");
        var shotGhost = new Image();
        shotGhost.src = '../images/shot_ghost.png';
        // unshotGhost.alt = 'alt';
        // document.body.appendChild(unshotGhost);
        shotGhost.onload = function () {

            ctx.drawImage(shotGhost, 50, 35, 63, 70)
        }
    }

    animate(ctx) {
        this.newGhost(ctx);
        // this.shotGhost(ctx);
    }
}