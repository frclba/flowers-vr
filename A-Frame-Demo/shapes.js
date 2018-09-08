class Box {
  constructor(color, position) {
    
    this.color = '#FFF';
    this.position = position;
    this.sourceId = floor(random(1, 6));
    
    this.element = createElement('a-box');
    this.element.attribute("position", `${this.position} 1.5  -3`);
    this.element.attribute("color", this.color);
    this.element.attribute("src", `#tile${this.sourceId}`);

    scene.child(this.element);
  }

  move(variation) {
    this.position += variation;
    this.element.attribute('position', `${this.position} 1.5  -3`);
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