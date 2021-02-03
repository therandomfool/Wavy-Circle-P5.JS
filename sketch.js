let angle = 0;
let r;
let phase = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  r = width/3;
}

function draw() {
  background(0);
  translate(width/2, height/2);
  stroke(random(255), random(255), random(255));
  strokeWeight(8);
  fill(0,23,45);

  let increment = TWO_PI/32;
  beginShape();
  for (let a = 0; a < TWO_PI; a += increment) {
    let r1 = r + sin(a*10+phase)*50 + random(3,69);
    let x = r1 * cos(a)+ random(3,13);
    let y = r1 * sin(a) + random(3,13);
    curveVertex(x,y);
  }
  endShape(CLOSE);
  phase += 0.05;
}