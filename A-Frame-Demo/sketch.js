let scene;

let theta = 0, degrees = 0;
let sphere;
let box_arr = [];

const shiftDegrees = (value) => (value + 1) % 360;

function preload(){
   scene = select('a-scene');
}

function setup() {

  let left_row_pos = {
    x: 3,
    y: 1.5,
    z: -3
  };

  let right_row_pos = {
    x: -3,
    y: 1.5,
    z: -3
  }

  spawn_boxes(left_row_pos);
  spawn_boxes(right_row_pos);


  sphere = new Sphere();

  //TODO -> add lane, move axis
}


function draw() {
  const variation = sin(theta);
  degrees = shiftDegrees(degrees);

  sphere.move(variation);

  box_arr.forEach(box => {
    box.move(variation * 0.01);
  });

  theta += 0.1;
}

function spawn_boxes(position) {
  
  let box_position = position;

  for (let i = 0; i < 10; i++) {

    let newBox = new Box(box_position);
    box_arr.push(newBox);
    
    box_position.z -= 3;
  }
}


class Box {
  constructor(pos) {
    //TODO -> velocity
    this.x = pos.x;
    this.y = pos.y;
    this.z = pos.z;
    
    this.position = `${this.x} ${this.y} ${this.z}`;
    
    this.sourceId = floor(random(1, 6));
    this.color = color(random(0, 255), random(0, 255), random(0, 255), random(0, 1));

    this.element = createElement('a-box');
    this.element.attribute("position", );
    this.element.attribute("color", this.color);
    this.element.attribute("src", `#tile${this.sourceId}`);

    scene.child(this.element);
  }

  move(variation) {
    this.z += variation;
    this.element.attribute('position', `${this.x} ${this.y} ${this.z}`);
  }

  //TODO ->
  /*interface(){
    gaze for 3 seconds
    countdown
    move to the center
    desired - velocity
    popup balloon
    this plant is 20 % unhealthy
   } */
}

class Sphere {
  constructor() {
    this.color = color(0, 0, 0);
    this.position = `-1.5 2.1 -15`;

    this.element = createElement('a-sphere');
    this.element.attribute('color', color);
    this.element.attribute('position', this.position);

    scene.child(this.element);
  }


  move(variation) {
    const color = `hsl(${degrees}, 100%, 50%)`;
    const position = `0 ${2.1 + variation} -15`;

    this.element.attribute('position', position);
    this.element.attribute('color', color)
  }
}
