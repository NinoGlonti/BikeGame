let game = new Game();
var mode;



function preload() {
  game.preload();
  music = loadSound("sound/sfx_mus_all.mp3")
  rainsound = loadSound("sound/sfx_rain_low.mp3")
  jumpsound = loadSound("sound/sfx_biker_jump.mp3")
  collisionsound = loadSound("sound/sfx_collision.mp3")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  startColor = color(0, 255, 95);
  newColor = color(random(0), random(255), random(75));
  amt = 0;
  mode = 0; //game has not started
  background(startColor);
  game.setup()
  textSize(20);
  bike = loadImage("img/bikk.png")
  music.loop()

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  game.resize()
}




function draw() {
  clear();
  if (mode == 0) {
    createCanvas(windowWidth, windowHeight);
  //startColor = color(0, 255, 95);
  //newColor = color(random(0), random(255), random(75));
  //amt = 0;
  background("#518561");
   // background("#C1FFC1");

    //image(bike, windowWidth / 2.5, windowHeight / 5.2, 60, 60)
    //fill('rgba(0,255,0, 0.25)')

    //rect(windowWidth / 3.2, windowHeight / 3.5, 500, 350, 20)
    fill('black')
    text("Hello World!", windowWidth / 2.2, windowHeight / 2.5)
    textStyle(ITALIC);
    text("Jump over the trash bag to clean your town", windowWidth / 2.8, windowHeight / 2)

    fill("black")
    text("Press Enter to start", windowWidth / 2.3, windowHeight / 1.5);
    textStyle('italic 2em "Open Sans", sans-serif')

  }
  


  if (mode == 1) {
    game.draw()

  }

  if (mode == 3) {
    fill('black')
    text("Game Over", windowWidth / 2.2, windowHeight / 2.5)
    //collisionsound.play()

  }
}


function keyPressed() {
  if (keyCode === 13) {
    console.log("switch to mode 1");
    mode = 1;  
  }

  if (mode == 1 && keyCode === 32) {
    game.player.jump();
    jumpsound.play()
  }

  if (mode == 3 && keyCode === 32) {
    mode = 0;
    loop()
  }

  if(Rain)
  {
    rainsound.play()
  }





}


