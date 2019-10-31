class Game {
    constructor() {
        this.background = new Background();
        this.player = new Player();
        this.obstacles = [];
        this.rain = new Rain()
        this.nextObstacle = 140;
        this.score = 0;
    }

    preload() {
        this.background.preload()
        this.player.preload();
    }

    setup() {
        this.player.setup();
        this.rain.setup();
        this.background.setup();
    }

    resize() {
        this.rain.resize()
    }

    draw() {
        this.background.draw();
        this.player.draw();
        this.rain.draw()

        if (frameCount > this.nextObstacle) {
            this.nextObstacle = this.nextObstacle + random(100, 200)
            this.obstacles.push(new Obstacle());
        }



        if (millis() % 10000 > 5000) {
            this.rain.start()
        } else {
            this.rain.stop()
        }


        this.obstacles.forEach(
            (obstacle, index) => {
                obstacle.preload()
                obstacle.draw();
                


                if (obstacle.x + obstacle.width < this.player.x - 20) {

                    this.obstacles.splice(index, 1);
                    this.score++
                    fill("black")
                    


                }
                text(`Score: ${this.score}`, 10, 30)

               if (this.isCollision(obstacle, this.player)) {
                   mode = 3;
                    this.obstacles = []
                    this.score = 0;
                  noLoop();
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




