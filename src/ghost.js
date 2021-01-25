
export default class Ghost {
  constructor(dimensions) {
    this.velocity = 4;
    this.dimensions = dimensions;
    this.dead = false;
    this.y = Math.floor(Math.random() * 551) + 10;
    this.x = 1200;
  }

  newGhost(ctx) {
    var unshotGhost = new Image();
    unshotGhost.src = "./images/unshot_ghost.png";
    ctx.drawImage(unshotGhost, this.x, this.y, 63, 70);

    let that = this;
    unshotGhost.onload = function () {
      ctx.drawImage(unshotGhost, that.x, that.y, 63, 70);
    };

    if (this.dead) {
      ctx.clearRect(this.x, this.y, 63, 70);
      this.shotGhost(ctx);
      this.deadGhost(ctx);
    }
  }

  shotGhost(ctx, pos) {
    var shotGhost = new Image();
    shotGhost.src = "./images/shot_ghost.png";
    ctx.drawImage(shotGhost, this.x, this.y, 63, 70);
    let that = this;
    shotGhost.onload = function () {
      ctx.drawImage(shotGhost, that.x, that.y, 63, 70);
    };
  }

  deadGhost(ctx) {
    var deadGhost = new Image();
    deadGhost.src = "./images/deadghost.png";
    ctx.drawImage(deadGhost, this.x, this.y + 15, 70, 70);
    let that = this;
    deadGhost.onload = function () {
      ctx.drawImage(deadGhost, that.x, that.y + 15, 70, 70);
    };
  }

  moveGhost(ctx) {
    this.x -= this.velocity;
    // console.log("vel", this.velocity)
  }



  animate(ctx) {
    this.newGhost(ctx);
    this.moveGhost(ctx);
    // this.increaseSpeed();
  }
}