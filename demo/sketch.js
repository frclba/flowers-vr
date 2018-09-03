let sphere;
let plane;
let degrees = 0;
let theta = 0;

const shiftDegrees = (value) => (value + 1) % 360;

function setup() {
  sphere = select("#sphere");
  plane = select("#plane");
}


function draw() {
  degrees = shiftDegrees(degrees);

  const color = `hsl(${degrees}, 100%, 50%)`;
  // const color = "pink";
  const variation = sin(theta);
  const position = `-3 ${2.1 + variation} -2`;
  const rotation = `-90 0 ${degrees}`;

  sphere.attribute('color', color);
  sphere.attribute('position', position);

  plane.attribute('color', color);
  plane.attribute('rotation', rotation);

  theta += 0.1;
}