let myXPos = 100;
let myYPos = 100;
let mySize;

let EnemyX = 300
let EnemyY = 300
let EnemySize = 300

function setup() {
  createCanvas(500, 500);
  noStroke();

  mySize = random(50, 100);
  EnemySize = random(50,100)
}

function draw() {
  background(0);

  fill(0, 0, 255);
  ellipse(myXPos, myYPos, mySize, mySize);

  fill(255, 0, 0);
  ellipse(EnemyX, EnemyY, EnemySize, EnemySize);


  if (keyIsDown(LEFT_ARROW)) {
    myXPos -= 3;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    myXPos += 3;
  }

  if (keyIsDown(UP_ARROW)) {
    myYPos -= 3;
  }

  if (keyIsDown(DOWN_ARROW)) {
    myYPos += 3;
  }

  let distance = dist(myXPos, myYPos, EnemyX, EnemyY)

  if(distance <= (mySize / 2) + (EnemySize / 2) + 20){
    textSize(22)
    text('hello adventurer, I have a quest for you.', 140, 480)
  }
  
}
