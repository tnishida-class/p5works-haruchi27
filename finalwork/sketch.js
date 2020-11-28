// 最終課題を制作しよう
let balls;
let count;
let cycle;


function setup(){
  createCanvas(windowWidth, windowHeight)
  textSize(70);
  textAlign(CENTER, CENTER);
  balls = [];
  count = 0;
  cycle = 100;
}

function draw(){
  background(204, 153, 255);
  push()
  noFill()
  strokeWeight(20)
  rect(20, 20, windowWidth-40, windowHeight-40)
  pop()
  push()
  noStroke()
  fill(204, 153, 255)
  rect(10,10, 20, 60)
  rect(windowWidth-40, windowHeight-60, windowWidth, windowHeight)
  pop()
  fill(0)
  push()
  debut()
  text('入所', 20, 50)
  pop()
  strokeWeight(20)
  fill(0)
  line(windowWidth/7+20, windowHeight/7+20, windowWidth/7+20, windowHeight/3-20)
  line(windowWidth/3-20, 20, windowWidth/3-20, windowHeight/3-20)
  line(20, windowHeight/2-20, windowWidth/3-20, windowHeight/2-20)
  line(windowWidth/7+20, windowHeight/3-20, windowWidth/2-20, windowHeight/3-20)
  line(windowWidth/2-20, windowHeight/7+20, windowWidth-20, windowHeight/7+20)
  line(windowWidth/2-20, windowHeight/3-20,windowWidth/2-20,windowHeight/6*5)
  line(windowWidth/7+20, windowHeight/3*2-20, windowWidth/2-20, windowHeight/3*2-20)
  line(windowWidth/7+20, windowHeight/3*2-20, windowWidth/7+20, windowHeight/7*6-20)
  line(windowWidth/3-20, windowHeight/6*5-20, windowWidth/3-20, windowHeight-20)
  line(windowWidth/3*2-20, windowHeight/3-20, windowWidth/3*2-20, windowHeight-20)
  line(windowWidth/3*2-20, windowHeight/3-20, windowWidth/7*6-20, windowHeight/3-20)
  line(windowWidth/7*6-20, windowHeight/2-20, windowWidth/7*6-20, windowHeight-20)
  push()
  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    fill(random((0,0,225),(255, 102, 0)))
    text('松', b.x, b.y, b.size);
  pop()
  }

  // 画面外に出たボールを配列から削除する（関数を引数として渡す書き方を使っています）
  balls = balls.filter(isInTheWindow);
}

function mouseDragged(){
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  if(mag(dx, dy) > 4){
    const b = { x: mouseX, y: mouseY, vx: dx, vy: dy };
    balls.push(b);
  }
}

function debut(){
  count = (count + 1) % cycle;
  // BLANK[1]
  if(count<50){
    textSize(count/2)
    text('デビュー', windowWidth-40, windowHeight-40);
  }
  if (count>50)
  {
    textSize(50-count/2)
    text('デビュー', windowWidth-40, windowHeight-40);
  }
}

function iroshitei(){
  const blue = color(0, 0, 255);
  const orange = color(255, 102, 0);
}

function colour(){
  let colors = {blue, orange};
  let colour = random(colors)
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function isInTheWindow(b){
  return b.x > 0 && b.x < width && b.y > 0 && b.y < height;
}
