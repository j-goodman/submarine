var game = {};

var initializeGame = function () {
  game.objects = [];
  game.objects.push(new Submarine (30, 20));
  game.objects.push(new World ());
  renderWorld();
  setInterval(gameInterval, 30);
};

var renderWorld = function () {
  var i;
  var color = [0, 50, 70];
  for (i=0 ; i<(pixelgraph.screen.pixels.length) ; i++) {
    pixelgraph.screen.pixels[i].color(color[0], color[1], color[2]);
  }
};

var gameInterval = function () {
  var sub = game.objects[0];
  var world = game.objects[1];
  pixelgraph.binaryDraw(sub.sprite, [0, 50, 68], sub.pos.x, sub.pos.y);
  sub.act();
  world.act();
  pixelgraph.binaryDraw(sub.sprite, sub.color, sub.pos.x, sub.pos.y);
};
