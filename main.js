let game = new Game();
var mode;

function preload() {
  game.preload();
  music = loadSound("sound/mus_low_quality.mp3");
  rainsound = loadSound("sound/sfx_rain_low.mp3");
  jumpsound = loadSound("sound/sfx_biker_jump.mp3");
  collisionsound = loadSound("sound/sfx_collision.mp3");

  text1 = loadImage("img/startscreen_text_biker_01.png");
  text2 = loadImage("img/endscreen_text.png");
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
    image(text1, windowWidth / 3.5, windowHeight/600, 800, 800);
  }

  if (mode == 1) {
    game.draw();
  }

  if (mode == 3) {
    background("#518561");
    image(text2, windowWidth / 3.5, windowHeight/600, 800, 800);
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
    mode = 1;
    loop();
  }

  if (Rain) {
    rainsound.play();
  }
}
