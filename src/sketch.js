import wordcloud from './wordcloud.csv';

export default function sketch(p) {
  var increment;
  let lines;
  let rotDeg;
  let currentNumber = 0;
  let y_position = 80;
  const starter = 0;
  const size = 18;
  let g = 50;
  let b = 96;
  let transform = "-15px 15px";
  let p5WrapperElement;
  let flowerRotatingStarter = 0;
  let flowers = []; // An array that holds all the flowers
  let changeFlower=false;
  p.preload = function () {
    lines = p.loadStrings(wordcloud);
    p.angleMode(p.DEGREES);
  }

  p.setup = function () {
    p5WrapperElement = p.select('#P5Wrapper');
    var cnv = p.createCanvas((p.windowWidth-400), 200);
    p.drawFour();
  }
  p.draw = function () {
    if (changeFlower==true){
      for (let i = 0; i < 4; i++) {
        flowers.pop();
      }
      p.drawFour();
      changeFlower=false;
    }
    flowerRotatingStarter += .9;
    if (flowerRotatingStarter >= 360) flowerRotatingStarter = 0;
    // Make flowers to rotate
    p.updateFlowers();
  }
  p.drawFour= () =>{
    // Draw 4 flowers
    for (let i = 0; i < 4; i++) {
      p.drawFlower(100 + i * 300, y_position, i);
    }
  }
  p.drawFlower = (x, y, index) => {
    let flower = p.createDiv("");
    flower.parent('#P5Wrapper');
    let flowerPetals = []; // An array that holds all 5 petals for a flower
    for (let i = 0; i < 5; i++) {
      rotDeg = (starter + (i % 5) * 72);
      let elem = p.createDiv("");
      const linesIndex = currentNumber + i + index * 5;
      // Make the first letter to be uppercase
      let span = p.createDiv(lines[linesIndex].charAt(0).toUpperCase() + lines[linesIndex].slice(1));
      elem.style("font-size", size + "px");
      elem.position(x, y);
      elem.style("width", "250px");
      elem.style("font-family", "sans-serif");
      elem.style("color", "rgb(255," + g + "," + b + ")");
      elem.style("transform-origin", transform);
      let transforms = [];
      transforms.push("perspective(400px)");
      transforms.push("rotateZ(" + rotDeg + "deg)");
      elem.style("transform", transforms.join(" "));
      elem.child(span);
      elem.parent(flower);
      flowerPetals.push(elem);
      if (i==4){
        b=p.random(90,236);	
        g=p.random(50,200);
      }
    }
    // Push the flower and flowerPetels into flowers
    flowers.push({flower, flowerPetals});
  }
  p.updateFlowers = () => {
    // Loop through all the flowers
    for (let j = 0; j < flowers.length; j++) {
      const flower = flowers[j];
      const flowerPetals = flower.flowerPetals;
      // Loop through all the petals in a flower
      for (let i = 0; i < flowerPetals.length; i++) {
        let flowerRotatingDeg = flowerRotatingStarter + (i % 5) * 72;
        flowerPetals[i].style("transform", "rotateZ(" + flowerRotatingDeg + "deg)");
      }
    }
  }
  p.keyPressed=()=>{
    if (p.key==' ') {
      changeFlower=true;
      if (currentNumber<40){
        currentNumber+=20;
      }
      else{
        currentNumber=0
      }
  }
}
};
