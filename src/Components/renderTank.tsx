
import { Tank } from "../tanksData.";
import { renderColor } from "../functions/renderColor";

const BORDER_THICKNESS = 10;
const DEFAULT_VIEW_BOUNDARIES = 150

interface RenderTankProps {
  tank: Tank;
  level?: number;
  rotation?: number;
  color?: Array<number>;
  borderOpacity?: number;
  barrelColor?: Array<number>;
  smasherColor?: Array<number>;
  reCenter?: boolean;
}

export function RenderTank({
  tank,
  level = 1,
  rotation = 0,
  color = [0, 177, 222],
  borderOpacity = 0.25,
  barrelColor = [153, 153, 153],
  smasherColor = [85, 85, 85],
  reCenter = true
}: RenderTankProps) {

  function rotateVector(vector: [number, number], angle: number): [number, number] {
    const [x, y] = vector;
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return [x * cos - y * sin, x * sin + y * cos];
  }
  
  const tankBaseSize =
    tank.sides === 4
      ? Math.SQRT2 * 32.5
      : tank.sides === 16
      ? Math.SQRT2 * 25
      : 50;
  const sizeFactor = Math.pow(1.01, level - 1);
  const tankSize = tankBaseSize * sizeFactor;
  const viewBoundaries = DEFAULT_VIEW_BOUNDARIES * sizeFactor;
  
  let maxX = 50 * sizeFactor
  let minX = -50 * sizeFactor
  let maxY = 50 * sizeFactor
  let minY = -50 * sizeFactor

  const polygons: JSX.Element[] = [];

  // smasher and landmine
  if (["smasher", "landmine"].includes(tank.postAddon || "")) {
    let offsets = [0]
    if ("landmine" === tank.postAddon) offsets.push(0.6)
    for (let offset of offsets) {
      const points = Array.from({ length: 6 }, (_, i) => {
        const angle = (Math.PI * 2 * (i + offset)) / 6 + rotation;
        const distance = tankSize / Math.cos(Math.PI / 6);
        return `${distance * Math.cos(angle)},${distance * Math.sin(angle)}`;
      }).join(" ");
      polygons.push(
        <polygon
          key={`${tank.id}-post-addon-${polygons.length}`}
          points={points}
          fill={renderColor(smasherColor)}
          stroke={renderColor(smasherColor.map(v => v * (1 - borderOpacity)))}
          strokeWidth={BORDER_THICKNESS}
          strokeLinejoin="round"
        />
      );
    }
  }

  // barrels
  for (const barrel of tank.barrels) {
    let points: Array<[number, number]> = []
    if (barrel.isTrapezoid) {
      if (barrel.trapezoidDirection === 0) {
        points = [
            [barrel.size, barrel.width * 0.5 * 1.75],
            [barrel.size, -barrel.width * 0.5 * 1.75],
            [0, -barrel.width * 0.5],
            [0, barrel.width * 0.5],
          ]
      } else {
        points = [
          [barrel.size, barrel.width * 0.5],
          [barrel.size, -barrel.width * 0.5],
          [0, -barrel.width * 0.5 * 1.75],
          [0, barrel.width * 0.5 * 1.75],
        ]
      }
    } else {
      points = [
        [barrel.size, barrel.width * 0.5],
        [barrel.size, -barrel.width * 0.5],
        [0, -barrel.width * 0.5],
        [0, barrel.width * 0.5],
      ];
    }

    if (barrel.addon === "trapLauncher") {
      points = [...points, 
        [barrel.size, barrel.width * 0.5],
        [barrel.size + (tank.id === 34 ? 26 : 20), barrel.width * 0.5 * 1.75],
        [barrel.size + (tank.id === 34 ? 26 : 20), -barrel.width * 0.5 * 1.75],
        [barrel.size, -barrel.width * 0.5],
      ];
    }

    points = points.map(([x, y]) => [x, y + barrel.offset]);
    points = points.map(([x, y]) => [x * sizeFactor, y * sizeFactor])
    points = points.map(([x, y]) =>
      rotateVector([x, y], barrel.angle + rotation)
    );

    for (let [x,y] of points) {
      maxX = Math.max(maxX, x)
      minX = Math.min(minX, x)
      maxY = Math.max(maxY, y)
      minY = Math.min(minY, y)
    }

    polygons.push(
      <polygon
        key={`${tank.id}-barrel-${polygons.length}`}
        points={points.map((p) => p.join(",")).join(" ")}
        fill={renderColor(barrelColor)}
        stroke={renderColor(barrelColor.map(v => v * (1 - borderOpacity)))}
        strokeWidth={BORDER_THICKNESS}
        strokeLinejoin="round"
      />
    );
  }

  // body
  if (tank.sides === 1) {
    polygons.push(
      <circle
        key={tank.id + "-body"}
        cx="0"
        cy="0"
        r={tankSize}
        fill={renderColor(color)}
        stroke={renderColor(color.map(v => v * (1 - borderOpacity)))}
        strokeWidth={BORDER_THICKNESS}
        strokeLinejoin="round"
      />
    )
  } else {
    polygons.push(
      <polygon
        key={tank.id + "-body"}
        points={Array.from({ length: tank.sides }, (_, i) => {
          const angle = (Math.PI * 2 * (i + 0.5)) / tank.sides + rotation;
          return `${tankSize * Math.SQRT2 * Math.cos(angle)},${tankSize * Math.SQRT2 * Math.sin(angle)}`;
        }).join(" ")}
        fill={renderColor(color)}
        stroke={renderColor(color.map(v => v * (1 - borderOpacity)))}
        strokeWidth={BORDER_THICKNESS}
        strokeLinejoin="round"
      />
    )
  }

  let offsetX = 0
  let offsetY = 0
  if (reCenter) {
    offsetX = -0.5 * (maxX + minX)
    offsetY = -0.5 * (maxY + minY)
  }

  // return svg
  return (
    <svg
      key={tank.id}
      viewBox={`-${viewBoundaries + offsetX} -${viewBoundaries + offsetY} ${viewBoundaries * 2} ${viewBoundaries * 2}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {polygons}
    </svg>
  );
};