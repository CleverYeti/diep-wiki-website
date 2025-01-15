
import { renderColor } from "../functions/renderColor";
import { Shape, shinyColor } from "../shapesData";
import { RenderGrid } from "./renderGrid";
import { rotateVector } from "../functions/rotateVector";

const BORDER_THICKNESS = 7.5;
const DEFAULT_VIEW_BOUNDARIES = 150
const HIGHLIGHT_FACTOR = 0.5

interface RenderShapeProps {
  shape: Shape;
  isShiny?: boolean;
  gridAlpha?: number;
  borderOpacity?: number;
  gridColor?: Array<number>;
  rotation?: number
}

export function RenderShape({
  shape,
  isShiny = false,
  gridAlpha = 0.1,
  borderOpacity = 0.25,
  gridColor = [255,255,255],
  rotation = 7 * Math.PI / 4
}: RenderShapeProps) {
  const viewBoundaries = DEFAULT_VIEW_BOUNDARIES + shape.size * 0.75 ;

  const points = Array.from({ length: shape.vertices }, (_, i) => {
    const angle = (Math.PI * 2 * i) / shape.vertices + rotation;
    const distance = shape.size
    return `${distance * Math.cos(angle)},${distance * Math.sin(angle)}`;
  }).join(" ");

  // return svg
  return (
    <svg
      key={shape.key}
      viewBox={`-${viewBoundaries} -${viewBoundaries} ${viewBoundaries * 2} ${viewBoundaries * 2}`}
      xmlns="http://www.w3.org/2000/svg"
      data-view-boundaries={viewBoundaries}
    >
      <RenderGrid color={gridColor} alpha={gridAlpha} gridBoundaries={viewBoundaries * 1.5}/>
      <polygon
          points={points}
          fill={renderColor(isShiny ? shinyColor : shape.color)}
          stroke={renderColor((isShiny ? shinyColor : shape.color).map(v => v * (1 - borderOpacity)))}
          strokeWidth={BORDER_THICKNESS}
          strokeLinejoin="round"
        />
    </svg>
  );
};