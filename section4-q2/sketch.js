// テキスト「アニメーション」
let x, y, vx, vy;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 8;
  vy = 8;
  angle = 0;
  }


function draw(){
  background(0, 38, 70);
  // BLANK[2] (hint: 作った star 関数を使います)
  noStroke()
  fill(255, 179, 0)

  for(let i = 0; i < 10; i++){
  for(let j = 0; j < 10; j++){
    console.log(i, j);
    star(i*100, j*100, 10, angle);
  }}
  star(x, y, 100, angle);
  angle+= 0.1;
  x += vx;
  y += vy;
  // 端の処理パターン (1) 反対側から出てくる
  if(x > width){ x = 0; }
  else if(x < 0){ x = width; }
  if(y > height){ y = 0; }
  if(y < 0){ y = height; }
}


function star(cx, cy, r, angle){

  beginShape();
  for(var i = 0; i < 20; i++){
    var theta = TWO_PI * i * 2 / 5 - HALF_PI+angle;
    // BLANK[1] (hint: angle 分だけ星を回転させるには？)
    var x = cx + cos(theta) * r;
    var y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}

function mouseClicked(){
  x = mouseX
  y = mouseY
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
