var World = function () {
  this.buildOceanFloor();
  this.time = 0;
  this.unitTime = 0;
};

World.prototype.buildOceanFloor = function () {
  this.oceanFloor = [];
  elevation = Math.round(Math.random() * 20);
  while (this.oceanFloor.length < pixelgraph.screen.x) {
    this.oceanFloor.push(elevation);
    elevation += Math.floor(Math.random() * 7) - 3;
    if (elevation < 4) {
      elevation = 5;
    }
  }
  this.oceanFloor[0] = (this.oceanFloor[0] + this.oceanFloor[this.oceanFloor.length - 1]) / 2;
  this.oceanFloor[this.oceanFloor.length - 1] = (this.oceanFloor[0] + this.oceanFloor[this.oceanFloor.length - 2]) / 2;
  this.oceanFloor[1] = (this.oceanFloor[0] + this.oceanFloor[2]) / 2;
};

World.prototype.act = function () {
  var i; var y = 0;
  for (i=0 ; i<pixelgraph.screen.x ; i++) {
    while (y < this.oceanFloor[(i + this.unitTime) % pixelgraph.screen.x]) {
      pixelgraph.screen.pixels[i + pixelgraph.screen.x * (pixelgraph.screen.y - 1 - y)].color(0, 50, 70);
      y++;
    }
    y = 0;
  }
  this.time += 1;
  if (this.time % 3 === 0) {
    this.unitTime += 1;
  }
  this.time += 1;
  for (i=0 ; i<pixelgraph.screen.x ; i++) {
    while (y < this.oceanFloor[(i + this.unitTime) % pixelgraph.screen.x]) {
      pixelgraph.screen.pixels[i + pixelgraph.screen.x * (pixelgraph.screen.y - 1 - y)].color(120, 120, 120);
      y++;
    }
    y = 0;
  }
};
