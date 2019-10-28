class Obstacle {
    constructor() {
        this.x = 1500;
        this.y = 520
        //this.width = 10;
        //this.height = 50;
        this.obsImg = loadImage("img/trash3.png")

    }


    preload() {

    }
    setup() {

    }


    draw() {


        image(this.obsImg, this.x, this.y, 60, 50);
        this.x -= 2
        //rect(this.x, this.y, this.width, this.height);


    }

}