class Obstacle {
    constructor() {
        this.x = width;
        this.y = height-74 ;
        this.width = 60;
        this.height = 70;
        this.obsImg = loadImage("img/whitetrash_02_02.png")

      
    }


    preload() {

    }
    setup() {

    }


    draw() {
        image(this.obsImg, this.x, this.y, this.width, this.height);
        this.x -= 3
 }

}