// テキスト「関数を作る(2) 値を戻す関数」～「総仕上げ：カレンダーを描画しよう」
function setup(){
  createCanvas(200, 200);


  for(let i = 2000; i <= 2100; i++){
    console.log(i+"年は"+daysInYear(i)+"日あります");
    if(isLeapYear(i)){
      console.log(i + "年はうるう年です");
    }
    else{
      console.log(i + "年はうるう年ではありません");
    }
  }
}

var y=2001;
var m=6;
var d=25;
console.log(y+"年"+m+"月"+d+"日は"+dayOfWeekAsString(dayOfWeek(y, m, d))+"曜日です" );
console.log(dayOfWeek(y, m, d));

function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
}

function daysInYear(y){
  if(isLeapYear(y)){
    return 366;
  }
  else{
    return 365;
  }
}

function dayOfWeek(y, m, d){
  let count=0, n=0, yans=0, mans=0, mtotal=0;
  n=y-1995;
  yans=n*365;
  pm=m-1;
  while(pm>0){
    if(pm==2)
  {
    mans=28;
  }
  else if(pm==4||pm==6||pm==9||pm==11)
  {
    mans=30;
  }
  else{
    mans=31;
  }
  mtotal=mtotal+mans;
  pm=pm-1;
}
  count=(yans+mtotal+d+(n/4-((n/4)%1)))%7;
  return count;
}

function dayOfWeekAsString(dow){
  const a=["日", "月", "火", "水", "木", "金", "土"];
  return a[dow];
}
