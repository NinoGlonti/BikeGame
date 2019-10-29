class Obstacle {
    constructor() {
        this.x = width;
        this.y = height-65 ;
        this.width = 60;
        this.height = 50;
        this.obsImg = loadImage("img/trash3.png")

      
    }


    preload() {

    }
    setup() {

    }


    draw() {


        image(this.obsImg, this.x, this.y, this.width, this.height);
        this.x -= 2
        //rect(this.x, this.y, this.width, this.height);


    }

}