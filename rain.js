let drops = [];

class Rain {
    constructor() {
        this.speed = 0
        this.x1 = 30 + this.speed;
        this.x2 = 25 + this.speed;
        this.y1 = 0 + this.speed;
        this.y2 = -.5 + this.speed;

}    


    draw() {
        this.speed += 2
        stroke("red")
        line(this.x1, this.y1, this.x2, this.y2)

    }
}


/*        for (let i = 0; i < 10000; i += 5) {
                    let newNumber = Number(`2.0${i}`)
                    let newNumber1 = Number(`${i}`)

                    line(this.x1+ i, this.y1, this.x2 - i, height / newNumber)
                }
        */
//line(20, height / 2.5, 20, height / 2.45)
// x1, y1, x2, h2