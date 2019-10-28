class Game {
    constructor() {
        this.background = new Background();
        this.player = new Player();
        this.obstacles = [];
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

        if (frameCount > 240 && frameCount % 120 === 0) {
            this.obstacles.push(new Obstacle());
            //   this.obstacles.push()
        }


        this.obstacles.forEach(
            (obstacle, index) => {
                obstacle.preload()
                obstacle.draw();

                if (obstacle.x + obstacle.width <= 0) {
                    //   remove obstacle
                    this.obstacles.splice(index, 1);
                }


            }
        );

    }


}