let scene;

const variation = 0.09;
let theta = 0, degrees = 0;

let box_arr = [];

const shiftDegrees = (value) => (value + 1) % 360;

/*
  RUN BEFORE EVERYTHING
*/
function preload(){
   scene = select('a-scene');
}


/*
 SETUP 
 RUN ONCE
*/
 function setup() {

  let left_row_initial_pos = {
    x: 6,
    y: 0.81,
    z: -3
  };

  let right_row_initial_pos = {
    x: -6,
    y: 0.81,
    z: -3
  }

  spawn_boxes(left_row_initial_pos);
  spawn_boxes(right_row_initial_pos);
}


/* 
  DRAW  
  WHILE(1) LOOP
*/
function draw() {
  let frames = frameRate();
  box_arr.forEach(box => {
    // box.move(variation * 0.001 * frames);
  });
}


/*
 CREATE BOXES
 PUSH TO ARRAY
*/
function spawn_boxes(position) {  
  let box_position = position;
 
  for (let i = 0; i < 1; i++) {
    let newBox = new Box(box_position);
    box_arr.push(newBox);
    box_position.z -= 3;
  }
}

/* 
  BOX CLASS DEFINITION
*/
class Box {
  constructor(pos) {
    this.pos = {
      x: pos.x,
      y: pos.y,
      z: pos.z
    };
    
    this.sourceId = floor(random(1, 6));
    this.color = color(random(0, 255), random(0, 255), random(0, 255), random(0, 1));

    this.element = createElement('a-box');
    this.element.attribute("color", this.color);
    this.element.attribute("src", `#tile${this.sourceId}`);

    scene.child(this.element);
  }
  
  move(variation) {
    this.pos.z += variation;
    this.positionString = `${this.pos.x} ${this.pos.y} ${this.pos.z}`;
    this.element.attribute('position', this.positionString);
    
    if(this.pos.z >= 33) {
      this.pos.z *= -1;
    }
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
