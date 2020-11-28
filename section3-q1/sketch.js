// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon(" I love nogizaka46 ");
  triangle(10, 40, 14, 20, 24, 22);
  push();
  stroke(255);
  strokeWeight(2)
  line(15, 20, 22, 22);
  pop();
  //regularPolygon(1 0,10,10,10)
}


function balloon(t){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  push();
  strokeWeight(1)
  noFill();
  ellipse(53, 13, w + p * 3, h + p * 3);
  fill(0);
  text(t, p, h + p);
  pop();

}

function triangle(){
  triangle(x1, y1, x2, y2, x3, y3);
  push();
  strokeWeight(1)
  noFill();
  pop();

}



//function regularPolygon(n,cx, cy, r){
  strokeWeight(1)
  beginShape();
  for(var i = 0; i < 5; i++){
    let theta = TWO_PI * i * 2 / 6 ;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);
  }
