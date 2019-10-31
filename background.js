//let bgWindowWidth = 1500;

class Background {
    constructor() {

        //CITY
        this.xCity = 0;


    }


    preload() {
        //clouds
        this.bgCloud1 = loadImage("img/whitecloud5.png")
        this.bgCloud2 = loadImage("img/whitecloud5.png")
        this.bgCloud3 = loadImage("img/whitecloud5.png")
        this.bgCloud4 = loadImage("img/whitecloud5.png")


        //city
        this.bgCity = loadImage("img/lasttryyyCityFe.png")
    }

    setup() {
        this.xCloud1 = windowWidth
        this.xCloud2 = windowWidth
        this.xCloud3 = windowWidth
        this.xCloud4 = windowWidth
    }

    draw() {
        background(lerpColor(startColor, newColor, amt));
        amt += 0.001;
        if (amt >= 1) {
            amt = 0.0;
            startColor = newColor;
            newColor = color(random(255), random(255), random(255));
        }




        //DISPLAY cloud IMAGES
        this.xCloud1 -= 5;
        this.xCloud2 -= 4;
        this.xCloud3 -= 3;
        this.xCloud4 -= 4.3;


        image(this.bgCloud1, this.xCloud1, 10, 140, 100);

        image(this.bgCloud2, this.xCloud2, 10, 140, 100);

        image(this.bgCloud3, this.xCloud3, 40, 140, 100);

        image(this.bgCloud4, this.xCloud4, 60, 140, 100);


        if (this.xCloud1 <= -140) {
            this.xCloud1 = windowWidth;

        }
        if (this.xCloud2 <= -140) {
            this.xCloud2 = windowWidth;

        }
        if (this.xCloud3 <= -140) {
            this.xCloud3 = windowWidth;

        }
        if (this.xCloud4 <= -140) {
            this.xCloud4 = windowWidth;

        }



        //display city
        this.xCity -= 2.5;

        image(this.bgCity, this.xCity, 0, windowWidth, windowHeight)
        image(this.bgCity, this.xCity + windowWidth, 0, windowWidth, windowHeight);
        //this.bgCity.resize(0,1000)

        if (this.xCity <= -width) {
            this.xCity = 0;
        }


        stroke("black")
        line(0, height - 5, width, height - 5)



    }

}