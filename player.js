class Player {
    constructor() {
        this.x = 50;
        this.gravity = 0.15;
        this.jumpCount = 0;
        this.velocity = 0; 
    }
    preload() {
        this.imag = loadImage("img/bikk.png")
    }
    setup() {
        this.y = height - 80;
        this.originalY = this.y;
        this.width = this.imag.width;
        this.height = this.imag.height;
    }


    draw() {
        this.velocity += this.gravity;
        
        this.y += this.velocity;

        if (this.y > this.originalY) {
            this.y = this.originalY;
            this.jumpCount = 0;
        }
        image(this.imag, this.x, this.y, 60, 60)
        image(this.imag, this.x, this.y, 60, 60)

    }
    jump() {
            if (this.jumpCount < 2) {
            this.velocity = -10;
            this.jumpCount++
        }
    }
}