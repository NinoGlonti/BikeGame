class Background {
    constructor() {
        this.xCloud1 = 0;
        this.xCloud2 = 10;
        this.xCloud3 = 10;
        this.xCloud4 = 20;
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



    draw() {

        background(lerpColor(startColor, newColor, amt));
        amt += 0.001;
        if (amt >= 1) {
            amt = 0.0;
            startColor = newColor;
            newColor = color(random(255), random(255), random(255));
        }


        

        //DISPLAY cloud IMAGES
        this.xCloud1 -= 1;
        this.xCloud2 -= 1.5;
        this.xCloud3 -= 0.5;
        this.xCloud4 -= 2.5;


        image(this.bgCloud1, this.xCloud1 + width, 10, 120, 90);
        
        image(this.bgCloud2, this.xCloud2 + width, 10, 120, 90);
        
        image(this.bgCloud3, this.xCloud3 + width, 40, 120, 90);

        image(this.bgCloud4, this.xCloud4 + width, 60, 120, 90);
        if (this.xCloud1 <= -width) {
            this.xCloud1 = 0;

        }
        if (this.xCloud2 <= -width) {
            this.xCloud2 = 0;

        }
        if (this.xCloud3 <= -width) {
            this.xCloud3 = 0;

        }
        if (this.xCloud4 <= -width) {
            this.xCloud4 = 0;

        }

        //display city
        image(this.bgCity, this.xCity, 0, width, height - 50)
        //this.bgCity.resize(0,1000)

        if (this.bgCity <= -width) {
            this.bgCity = 0;
        }


        stroke("black")
        line(0, height - 20, width, height - 20)



    }

}