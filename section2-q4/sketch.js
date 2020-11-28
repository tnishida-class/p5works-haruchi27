// ギリシャ国旗
function setup() {
  const blue = color(13, 94, 175);
  createCanvas(270, 180);
  noStroke();
  background(255);

  let d = height / 9; // 縞1本の太さ

  for(let i = 0; i < 9; i++){
    // BLANK[1] (hint: 縞の色を交互に変えるには2で割った余りを使おう)
    if(i%2==0){
      fill(blue);
      rect(0, i * d, width, d);
    }
    else{fill(255);}
  }

  fill(blue);
  let size = d * 5;
  rect(0, 0, size, size);

  fill(255);

  rect(size/2-d/2,0,d, size)
  rect(0,size/2-d/2,size, d)
  // BLANK[2] (hint: 白い十字を描くには rect を二つ描こう)
}
//ルーレット応用したらインドの旗風ができるかなって思ったんですけど限界でした。
