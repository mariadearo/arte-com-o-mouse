function setup() {
    createCanvas(400, 400);
     background("pink");
  }
  
  function draw() {
   fill("purple");
  stroke("pink");
    
  //console.log(mouseIsPressed)
    
   if(mouseIsPressed){
    rect(mouseX, mouseY, 30, 40);
   }
  }
  