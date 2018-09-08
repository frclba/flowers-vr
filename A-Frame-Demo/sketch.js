let sphere;
let scene;
let box_arr = [];

let theta = 0;
let degrees = 0;

const $ = (query) => document.querySelector(query);
const shiftDegrees = (value) => (value + 1) % 360;

function preload(){
   scene = select('a-scene');
}

function setup() {
  spawn_boxes();
  sphere = new Sphere(color(0, 0, 0), `-3 2.1 -3`);
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

function spawn_boxes() {
  let box_position = 0;

  for (let i = 0; i < 33; i++) {
    // let box_color = color(random(0, 255), random(0, 255), random(0, 255));

    let newBox = new Box("#FFF", box_position);
    box_arr.push(newBox);
    
    box_position += 3;
  }
}


class Box {
  constructor(color, position) {

    this.color = color;
    this.position = position;
    this.sourceId = floor(random(1, 6));

    this.element = createElement('a-box');
    this.element.attribute("position", `3 1.5 -${this.position}`);
    this.element.attribute("color", this.color);
    this.element.attribute("src", `#tile${this.sourceId}`);

    scene.child(this.element);
  }

  move(variation) {
    this.position += variation;
    this.element.attribute('position', `3 1.5 -${this.position}`);
  }
}

class Sphere {
  constructor(color, position) {
    this.color = color || color(0, 0, 0);
    this.position = position || `-3 ${2.1} -3`;

    this.element = createElement('a-sphere');
    this.element.attribute('color', color);
    this.element.attribute('position', position);

    scene.child(this.element);
  }


  move(variation) {
    const color = `hsl(${degrees}, 100%, 50%)`;
    const position = `-3 ${2.1 + variation} -3`;

    this.element.attribute('position', position);
    this.element.attribute('color', color)
  }
}
