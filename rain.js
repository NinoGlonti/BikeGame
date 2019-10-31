function createGrid(count, width, height) {

    let drops = []

    for (let i = 0; i < count; i++) {
        for (let j = 0; j < count; j++) {
            let drop = {
                x: (i + random(-0.5, 0.5)) * width / count,
                y: (j + random(-0.5, 0.5)) * height / count,
                size: noise(i, j) * 10,
                speed: random(150,250), // 150 + random() * 100 
                duration: random(1000,3000)
            }
            drops.push(drop)
        }
    }

    return drops;

}

class Rain {
    constructor() {
        this.drops = []
        this.raining = false
    }

    setup() {
        this.resize()
    }

    resize() {
        this.width = windowWidth
        this.height = windowHeight
        this.drops = createGrid(20, width, height)
    }

    start() {
        this.raining =true;
    }

    stop() {
        this.raining = false;

    }

    draw() {
        if (!this.raining)
            return

        this.drops.forEach((drop) => {
            let elapsed = millis() % drop.duration
            let x = drop.x - elapsed/1000 * drop.speed + drop.duration/2 / 1000 * drop.speed
            let y = drop.y + elapsed/1000 * drop.speed - drop.duration/2 / 1000 * drop.speed
            let opacity;
            if (elapsed < drop.duration/2) 
              {opacity = map(elapsed, 0, drop.duration/2, 0, 255)} 
            else 
              {opacity = map(elapsed, drop.duration/2, drop.duration, 255, 0)}
            
            stroke(0, opacity)
            line(x, y, x - drop.size, y + drop.size)
        })
    }
}
