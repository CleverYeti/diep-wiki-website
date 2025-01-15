import { renderColor } from "../functions/renderColor";

const GRID_THICKNESS = 2
function GRID_GRADIENT(x: number, y: number) {return 1 - Math.min((x ** 2 + y ** 2) * 0.75, 1)} // 0-1 => 0-1
const squareDimensions = 50

export function RenderGrid({alpha, color, gridBoundaries} : {alpha:number; color:Array<number>; gridBoundaries:number}) {
  const gridPolygons: JSX.Element[] = [];
  if (alpha > 0) {
    const gridDimensions = Math.ceil(gridBoundaries / squareDimensions)
    for (let i = -gridDimensions; i < gridDimensions; i++) {
      for (let j = -gridDimensions; j < gridDimensions; j++) {
        const position1 = squareDimensions * i
        const position2 = squareDimensions * j
        gridPolygons.push(
          <line
            key={`grid-${Math.random()}`}
            x1={position1}
            y1={position2}
            x2={position1}
            y2={position2 + squareDimensions}
            stroke={renderColor(color, alpha * GRID_GRADIENT((position2 + 0.5 * squareDimensions) / gridBoundaries, position1 / gridBoundaries))}
            strokeWidth={GRID_THICKNESS}
          />
        )
        gridPolygons.push(
          <line
            key={`grid-${Math.random()}`}
            x1={position1}
            y1={position2}
            x2={position1 + squareDimensions}
            y2={position2}
            stroke={renderColor(color, alpha * GRID_GRADIENT((position1 + 0.5 * squareDimensions) / gridBoundaries, position2 / gridBoundaries))}
            strokeWidth={GRID_THICKNESS}
          />
        )
      }
    }
  }
  return <>{gridPolygons}</>
}