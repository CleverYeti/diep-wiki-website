export interface Shape {
  name: string;
  health: number;
  bodyDamage: number;
  size: number;
  vertices: number;
  color: Array<number>;
  score: number
  key: string;
  speed?: number;
}

export interface ShapesData {
  [key: string]: Shape;
}

export const shinyColor: Array<number> = [138,255,105]
export const shinyHealthFactor = 10
export const shinyScoreFactor = 100

export const shapesData:ShapesData = {
  "square": {
    "name": "Square",
    "size": 55,
    "health": 10,
    "bodyDamage": 8,
    "score": 10,
    "color": [255,232,105],
    "vertices": 4,
    "key": "square"
  },
  "triangle": {
    "name": "Triangle",
    "size": 55,
    "health": 30,
    "bodyDamage": 8,
    "score": 25,
    "color": [252,118,119],
    "vertices": 3,
    "key": "triangle"
  },
  "pentagon": {
    "name": "Pentagon",
    "size": 75,
    "health": 100,
    "bodyDamage": 12,
    "score": 130,
    "color": [118,141,252],
    "vertices": 5,
    "key": "pentagon"
  },
  "alpha-pentagon": {
    "name": "Alpha Pentagon",
    "size": 200,
    "health": 3000,
    "bodyDamage": 20,
    "score": 3000,
    "color": [118,141,252],
    "vertices": 5,
    "key": "alpha-pentagon"
  },
  "crasher": {
    "name": "Small Crasher",
    "size": 35,
    "health": 10,
    "bodyDamage": 8,
    "score": 15,
    "color": [237,118,221],
    "vertices": 3,
    "key": "crasher",
    "speed": 20
  },
  "large-crasher": {
    "name": "Large Crasher",
    "size": 55,
    "health": 30,
    "bodyDamage": 8,
    "score": 25,
    "color": [237,118,221],
    "vertices": 3,
    "key": "large-crasher",
    "speed": 20
  }
}