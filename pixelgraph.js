var pixelgraph = {};

onload = function () {
  var screen; var Pixel; var pixel; var element; var i;

  Pixel = function (element) {
    this.element = element;
    this.red = 0;
    this.green = 0;
    this.blue = 0;
    this.hex = function () {
      var r; var g; var b;
      r = this.red.toString(16);
      g = this.green.toString(16);
      b = this.blue.toString(16);
      r = (r.length < 2) ? '0'+r : r;
      g = (g.length < 2) ? '0'+g : g;
      b = (b.length < 2) ? '0'+b : b;
      return '#'+r+g+b;
    };
    this.color = function (r, g, b) {
      this.red = r;
      this.green = g;
      this.blue = b;
      this.render();
    };
    this.render = function () {
      this.element.style.background = this.hex();
    };
  };

  // Populate screen element with pixels:
  screen = document.getElementById('screen');
  screen.x = 234;
  screen.y = 144;
  screen.pixels = [];
  for (i=0 ; i<screen.x*screen.y ; i++) {
    element = document.createElement('div');
    pixel = new Pixel (element);
    element.pixel = pixel;
    element.className = 'pixel';
    screen.appendChild(element);
    screen.pixels.push(pixel);
  }
  pixelgraph.screen = screen;

  // Set elements to the colors of their corresponding pixels:
  for (i=0 ; i<screen.pixels.length ; i++) {
    screen.pixels[i].render();
  }

  pixelgraph.binaryDraw = function (image, color, x, y) {
    var pixel;
    var row = image[0].length;
    var col = image.length;
    var area = row*col;
    for (i=0 ; i<area ; i++) {
      pixel = screen.pixels[(y + Math.floor(i/row))*screen.x + (x + i%row)];
      if (x + (i%row) < 0 || x > screen.x - (i%row) - 1) {
        continue;
      }
      if (pixel && image[Math.floor(i/row)][i%row] === '1') {
        pixel.color(color[0], color[1], color[2]);
      }
    }
  };

  initializeGame();
};
