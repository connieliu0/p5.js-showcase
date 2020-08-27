import wordcloud from './wordcloud.csv';
export default function sketch (p) {
  var lines;
  var rotDeg;
  var counter=0;
  var currentNumber=1;
  var x_position;
  var y_position;
  var size=25;
  var starter=0;
  var g=50;
  var b=96;
  var transform="-15px 15px";
p.preload = function() {
    lines = p.loadStrings(wordcloud);
    p.angleMode(p.DEGREES);
  }
  
p.setup= function() {
    x_position=p.windowWidth/2;
    y_position=200;
    p.createCanvas(p.windowWidth,200);
    p.drawFlower();
  }
p.draw=function(){
    rotDeg+=1;
  }
p.drawFlower=function(){
   for (let i = 0; i < 5; i++) {
      rotDeg = (starter+(i%5)* 72);
      let elem = p.createDiv("");
      let span = p.createDiv(lines[currentNumber+i]);
      elem.style("font-size", size+"px");  
      elem.position(x_position, y_position);
      elem.style("width", "300px");
      elem.style("font-family", "sans-serif");
      elem.style("color", "rgb(255,"+g+","+b+")");
      elem.style("transform-origin", transform);
      //elem.style("border", "1px black solid");
      let transforms = [];
      if (rotDeg > 90 && rotDeg < 270) {
        transforms.push("scaleY(-1)");
        span.style("transform", "scaleX(-1)");
        span.style("text-align", "right");
      }
      transforms.push("perspective(400px)");
      transforms.push("rotateZ("+rotDeg+"deg)");
      elem.style("transform", transforms.join(" "));
      elem.child(span);
      }
   }
p.mousePressed=function(){
        size=15;
      starter=p.random(0,100);
    transform="-10px 10px";
       if (counter%5==0){
          x_position=p.mouseX;
          y_position=p.mouseY;
         currentNumber+=5;
          b=p.random(90,236);
         g=p.random(50,200);
         if (currentNumber==lines.length){
           currentNumber=1;
        }
       }
    p.drawFlower();
  }
  };