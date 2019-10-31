class Player {
    constructor() {
        this.x = 280;
        this.gravity = 0.25;
        this.jumpCount = 0;
        this.velocity = 0; 
    }
    preload() {
        this.imag = loadImage("img/bikk_white.png")
    }
    setup() {
        this.y = height-90
        ;
        this.originalY = this.y;
        this.width = this.imag.width / 3.2;
        this.height = this.imag.height / 3.2;
    }
 

    draw() {
        this.velocity += this.gravity;
        
        this.y += this.velocity;
        if (this.y > this.originalY) {
            this.y = this.originalY;
            this.jumpCount = 0;
        }
        image(this.imag, this.x, this.y, this.width, this.height)
    

    }
    jump() {
            if (this.jumpCount < 2) {
            this.velocity = -10;
            this.jumpCount++
        }
    }
}