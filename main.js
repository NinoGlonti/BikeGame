let game = new Game();
var mode;

function preload() {
  game.preload();
  music = loadSound("sound/mus_low_quality.mp3");
  rainsound = loadSound("sound/sfx_rain_low.mp3");
  jumpsound = loadSound("sound/sfx_biker_jump.mp3");
  collisionsound = loadSound("sound/sfx_collision.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  startColor = color(0, 255, 95);
  newColor = color(random(0), random(255), random(75));
  amt = 0;

  mode = 0; //GAME HAS NOT STARTED
  background(startColor);
  game.setup();
  textSize(20);

  //START SCREEN
  text = loadImage("img/startscreen_text_biker_01.png");
  music.loop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  game.resize();
}

function draw() {
  clear();
  if (mode == 0) {
    createCanvas(windowWidth, windowHeight);
    background("#518561");
    image(text, windowWidth / 3.5, windowHeight / 7, 800, 800);
  }

  if (mode == 1) {
    game.draw();
  }

  if (mode == 3) {
    push();
    fill("white");
    textSize(60);
    text("Game Over", windowWidth / 2.2, windowHeight / 2.5);
    text("Press [SPACE] to play again", windowWidth / 1.8, windowHeight / 3);
    pop();
  }
}

//START,JUMP,PLAYAGAIN

function keyPressed() {
  if (keyCode === 13) {
    mode = 1;
  }

  if (mode == 1 && keyCode === 32) {
    game.player.jump();
    jumpsound.play();
  }

  if (mode == 3 && keyCode === 32) {
    mode = 0;
    loop();
  }

  if (Rain) {
    rainsound.play();
  }
}
