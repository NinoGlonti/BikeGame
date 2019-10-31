class Player {
    constructor() {
        this.x = 280;
        this.gravity = 0.2;
        this.jumpCount = 0;
        this.velocity = 0; 
    }
    preload() {
        this.imag = loadImage("img/bikk.png")
    }
    setup() {
        this.y = height - 80;
        this.originalY = this.y;
        this.width = this.imag.width / 4.5;
        this.height = this.imag.height / 4.5;
    }
 

    draw() {
        this.velocity += this.gravity;
        
        this.y += this.velocity;
        if (this.y > this.originalY) {
            this.y = this.originalY;
            this.jumpCount = 0;
        }
        image(this.imag, this.x, this.y, this.width, this.height)
        //image(this.imag, this.x, this.y, 70, 60)
    

    }
    jump() {
            if (this.jumpCount < 2) {
            this.velocity = -10;
            this.jumpCount++
        }
    }
}