function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
  
    let x = 20;
    let y = 20;
    let squareSize = 30;
    let spacing = 10;
  
    // Primera fila
    fill(255, 0, 0);
    rect(x, y, squareSize, squareSize);
    x += squareSize + spacing;
    rect(x, y, squareSize, squareSize);
    x += squareSize + spacing;
    rect(x, y, squareSize, squareSize);
    x += squareSize + spacing;
    rect(x, y, squareSize, squareSize);
  
    // Segunda fila
    x = 20;
    y += squareSize + spacing;
    fill(0, 255, 0);
    rect(x, y, squareSize, squareSize);
    x += squareSize + spacing;
    rect(x, y, squareSize, squareSize);
    x += squareSize + spacing;
    rect(x, y, squareSize, squareSize);
    x += squareSize + spacing;
    rect(x, y, squareSize, squareSize);
  
    // Tercera fila
    x = 20;
    y += squareSize + spacing;
    fill(0, 0, 255);
    rect(x, y, squareSize, squareSize);
    x += squareSize + spacing;
    rect(x, y, squareSize, squareSize);
    x += squareSize + spacing;
    rect(x, y, squareSize, squareSize);
    x += squareSize + spacing;
    rect(x, y, squareSize, squareSize);
  
    // Cuarta fila
    x = 20;
    y += squareSize + spacing;
    fill(255, 255, 0);
    rect(x, y, squareSize, squareSize);
    x += squareSize + spacing;
    rect(x, y, squareSize, squareSize);
    x += squareSize + spacing;
    rect(x, y, squareSize, squareSize);
    x += squareSize + spacing;
    rect(x, y, squareSize, squareSize);
  }
  