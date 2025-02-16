export {}
export type Point = [number, number]
export function AddPoints(...points: Array<Point>): Point {
  const result:Point = [0,0]
  for (let point of points) {
    result[0] += point[0];
    result[1] += point[1]
  }
  return result
}
export function rotatePoint(point: Point, angle: number): Point {
  const [x, y] = point;
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return [x * cos - y * sin, x * sin + y * cos];
}
export function scalePoint(point: Point, scale: number): Point {
  return point.map(v => v * scale) as Point;
}