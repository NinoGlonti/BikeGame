//let bgWindowWidth = 1500;

class Background {
    constructor() {

        //CITY
        this.xCity = 0;


    }


    preload() {
        //clouds
        this.bgCloud1 = loadImage("img/cloud5.png")
        this.bgCloud2 = loadImage("img/cloud5.png")
        this.bgCloud3 = loadImage("img/cloud5.png")
        this.bgCloud4 = loadImage("img/cloud5.png")


        //city
        this.bgCity = loadImage("img/fancy_city.png ")
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
        this.xCloud1 -= 4;
        this.xCloud2 -= 4.5;
        this.xCloud3 -= 3.5;
        this.xCloud4 -= 5.5;


        image(this.bgCloud1, this.xCloud1, 10, 120, 90);

        image(this.bgCloud2, this.xCloud2, 10, 120, 90);

        image(this.bgCloud3, this.xCloud3, 40, 120, 90);

        image(this.bgCloud4, this.xCloud4, 60, 120, 90);


        if (this.xCloud1 <= -120) {
            this.xCloud1 = windowWidth;

        }
        if (this.xCloud2 <= -120) {
            this.xCloud2 = windowWidth;

        }
        if (this.xCloud3 <= -120) {
            this.xCloud3 = windowWidth;

        }
        if (this.xCloud4 <= -120) {
            this.xCloud4 = windowWidth;

        }



        //display city
        this.xCity -= 2.5;

        image(this.bgCity, this.xCity, 0, windowWidth, windowHeight - 50)
        image(this.bgCity, this.xCity + windowWidth, 0, windowWidth, windowHeight - 50);
        //this.bgCity.resize(0,1000)

        if (this.xCity <= -width) {
            this.xCity = 0;
        }


        stroke("black")
        line(0, height - 20, width, height - 20)



    }

}