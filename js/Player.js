class player {
    constructor() {
      var options = {
        isStatic: true
      };
    this.image = loadImage("assets/player.png");
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
  
    World.add(world, this.body);

    }
    display() {
     
    }
  }
  