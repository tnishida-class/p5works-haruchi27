// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;


function setup(){
  createCanvas(200, 200);

  x = width / 2;
  y = height / 2;
  count = 0;
  cycle = 100;
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;
  // BLANK[1]
  if(count<50){
    ellipse(x, y, count);
  }
  if (count>50)
  {
    ellipse(x, y, 100-count);
  }
  if (keyIsDown(" ".charCodeAt(0))){count+=5;}

}
