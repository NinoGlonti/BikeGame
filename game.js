class Game {
    constructor() {
        this.background = new Background();
        this.player = new Player();
        this.obstacles = [];
        this.drops = []
        this.rain = new Rain();
    }

    preload() {
        this.background.preload()
        this.player.preload();
    }

    setup() {
        this.player.setup();
    }

    draw() {
        this.background.draw();
        this.player.draw();
        this.rain.draw()

        if (frameCount > 240 && frameCount % 120 === 0) {
            this.obstacles.push(new Obstacle());
        }


        if (frameCount > 300 && frameCount % 10 === 0) {
            this.drops.push(new Rain());
        }


        this.obstacles.forEach(
            (obstacle, index) => {
                obstacle.preload()
                obstacle.draw();
                if (obstacle.x + obstacle.width <= 0) {

                    this.obstacles.splice(index, 1);

                }

                if (this.isCollision(obstacle, this.player)) {
                    console.log("nooo");
                    //   noLoop();
                }
            }
        );


        this.drops.forEach(
            (drop, index) => {
                //drop.preload()
                drop.draw();
                if (drop.y > window.HEIGHT) {

                    this.drops.splice(index, 1);

                }

            }
        );

    }

    isCollision(obstacle, player) {
        return !(
            player.x + player.width < obstacle.x ||
            player.x > obstacle.x + obstacle.width ||
            player.y + player.height < obstacle.y
        )
    }



}