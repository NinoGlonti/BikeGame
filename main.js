let game = new Game();

function preload() {
  game.preload();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  startColor = color(0, 255, 95);
  newColor = color(random(0), random(255), random(75));
  amt = 0;

  background(startColor);
  game.setup()

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  game.resize()
}

function draw() {
  game.draw()
}

function keyPressed() {
  if (keyCode === 32) {
    game.player.jump();
  }
}

function addScore() {
  if(!isCollision){

  }
}