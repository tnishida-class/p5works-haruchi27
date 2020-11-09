// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon(" I love nogizaka46 ");
  //regularPolygon(10,10,10,10)
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
