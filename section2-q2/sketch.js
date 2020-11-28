// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  fill(196)
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if((i + j) % 2 == 0){
        fill(255);

      }

      else{fill(123);}


      rect(size*i ,size*j ,size , size);
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)

      if((i + j) % 2 == 1)
      if(size*j<70){
      fill(255,0,0)
      ellipse(size*i+12, size*j+12, size/2+10, size/2+10)}

      if((i + j) % 2 == 1)
      if(size*j>100){
      fill(0)
      ellipse(size*i+12, size*j+12, size/2+10, size/2+10)}
    }
  }
}
