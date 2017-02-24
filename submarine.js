var Submarine = function (x, y) {
  this.obverseSprite = [
    '00000000000000000000000000000000',
    '00000000000000111111111111000000',
    '01100000000111111111111111110000',
    '01110000111111111111111111111000',
    '00111111111011011111111111111100',
    '00111111110110111111111111111100',
    '00011111110110111001100110011110',
    '00011111110110111001100110011110',
    '00111111110110111111111111111100',
    '00111111111011011111111111111100',
    '01110000111111111111111111111000',
    '01100000000111111111111111110000',
    '00000000000000111111111111000000',
    '00000000000000000000000000000000',
  ];
  this.reverseSprite = [
    '00000000000000000000000000000000',
    '00000011111111111100000000000000',
    '00001111111111111111100000000110',
    '00011111111111111111111100001110',
    '00111111111111111011011111111100',
    '00111111111111111101101111111100',
    '01111001100110011101101111111000',
    '01111001100110011101101111111000',
    '00111111111111111101101111111100',
    '00111111111111111011011111111100',
    '00011111111111111111111100001110',
    '00001111111111111111100000000110',
    '00000011111111111100000000000000',
    '00000000000000000000000000000000',
  ];
  this.sprite = this.obverseSprite;
  this.color = [10, 60, 140];
  this.pos = {x: x, y: y};
  this.time = 0;
  this.buoyantForce = 1;
  this.setupControls();
};

Submarine.prototype.setupControls = function () {
  this.leftPressed = false;
  this.rightPressed = false;
  this.upPressed = false;
  this.downPressed = false;
  onkeydown = function (event) {
    switch (event.keyCode) {
      case 40: //down
        this.downPressed = true;
        break;
      case 39: //right
        this.rightPressed = true;
        break;
      case 38: //up
        this.upPressed = true;
        break;
      case 37: //left
        this.leftPressed = true;
        break;
    }
  }.bind(this);
  onkeyup = function (event) {
    switch (event.keyCode) {
      case 40: //down
        this.downPressed = false;
        break;
      case 39: //right
        this.rightPressed = false;
        break;
      case 38: //up
        this.upPressed = false;
        break;
      case 37: //left
        this.leftPressed = false;
        break;
    }
  }.bind(this);
};

Submarine.prototype.act = function () {
  this.time += 1;
  if (this.buoyantForce > 0 && this.time % 6 === 0) {
    this.pos.y += 1;
  }
  if (this.time % 3 === 0) {
    this.pos.x -= 1;
  }
  if (this.rightPressed) {
    this.pos.x += 1;
    if (!this.leftPressed) {
      this.sprite = this.obverseSprite;
    }
  }
  if (this.leftPressed) {
    this.pos.x -= 1;
    if (!this.rightPressed) {
      this.sprite = this.reverseSprite;
    }
  }
  if (this.upPressed) {
    this.pos.y -= 1;
  }
  if (this.downPressed) {
    this.pos.y += 1;
  }
};
