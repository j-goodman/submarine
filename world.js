var World = function () {
  this.buildOceanFloor();
};

World.prototype.buildOceanFloor = function () {
  this.oceanFloor = [];
  while (this.oceanFloor.length < pixelgraph.screen.x) {
    this.oceanFloor.push(Math.round(Math.random() * 20));
  }
};

World.prototype.act = function () {
  var i;
  for (i=0 ; i<pixelgraph.screen.x ; i++) {
    pixelgraph.screen.pixels[i + pixelgraph.screen.x * (pixelgraph.screen.y - 1)].color(120, 120, 120);
  }
};
