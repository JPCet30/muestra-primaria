function setup() {
    createCanvas(300, 300);
  }
  
  function draw() {
    background(134, 180, 4);
    
    let x = 75;
    let y = 75;
    let diameter = 150;
    fill(255, 128, 0);
    
    let i = 0;
    while (i <= 4) {
      circle(x, y, diameter);
      i++;
      
      if (i % 2 === 0) {
        x = 225;
      } else {
        x = 75;
      }
      
      if (i > 2) {
        y = 225;
      } else {
        y = 75;
      }
    }
    
    fill(255, 0, 0);
    circle(150, 150, diameter);
   // noLoop(); // Detenemos el bucle de dibujo
  }
  