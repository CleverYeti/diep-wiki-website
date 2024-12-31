
import { Tank, BarrelTypes} from "../tanksData.";
import { renderColor } from "../functions/renderColor";

const BORDER_THICKNESS = 7.5;
const DEFAULT_VIEW_BOUNDARIES = 150
const GRID_THICKNESS = 2
function GRID_GRADIENT(x: number, y: number) {return 1 - Math.min((x ** 2 + y ** 2) * 0.75, 1)} // 0-1 => 0-1

interface RenderTankProps {
  tank: Tank;
  level?: number;
  rotation?: number;
  autoTurretRotation?: number;
  color?: Array<number>;
  borderOpacity?: number;
  barrelColor?: Array<number>;
  smasherColor?: Array<number>;
  reCenter?: boolean;
  zoom?: number;
  gridColor?: Array<number>;
  gridAlpha?: number;
}

export function RenderTank({
  tank,
  level = 1,
  rotation = 0,
  autoTurretRotation = 0,
  color = [0, 177, 222],
  borderOpacity = 0.25,
  barrelColor = [153, 153, 153],
  smasherColor = [85, 85, 85],
  reCenter = true,
  zoom = 1,
  gridColor = [100, 100, 100],
  gridAlpha = 0
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
  const viewBoundaries = DEFAULT_VIEW_BOUNDARIES * sizeFactor / zoom;
  
  let maxX = 50 * sizeFactor
  let minX = -50 * sizeFactor
  let maxY = 50 * sizeFactor
  let minY = -50 * sizeFactor

  const polygons: JSX.Element[] = [];
  const overlayPolygons: Array<JSX.Element> = []

  // smasher and landmine
  if (["smasher", "landmine"].includes(tank.postAddon || "")) {
    let offsets = [0]
    if ("landmine" === tank.postAddon) offsets.push(0.6)
    for (let offset of offsets) {
      const points = Array.from({ length: 6 }, (_, i) => {
        const angle = (Math.PI * 2 * (i + offset)) / 6 + rotation;
        const distance = 50 * sizeFactor / Math.cos(Math.PI / 6);
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
  if (tank.preAddon === "dominator") {
    const points = Array.from({ length: 6 }, (_, i) => {
      const angle = (Math.PI * 2 * i) / 6;
      const distance = 62 * sizeFactor;
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

  
  
  // barrels
  function renderBarrelPolygon(points: Array<[number, number]>) {
    points = points.map(([x, y]) => [x * sizeFactor, y * sizeFactor])
    points = points.map(([x, y]) => rotateVector([x, y], rotation))
    
    for (let [x,y] of points) {
      maxX = Math.max(maxX, x)
      minX = Math.min(minX, x)
      maxY = Math.max(maxY, y)
      minY = Math.min(minY, y)
    }

    return <polygon
      key={tank.id + "-barrel-" + Math.random()}
      points={points.map((p) => p.join(",")).join(" ")}
      fill={renderColor(barrelColor)}
      stroke={renderColor(barrelColor.map(v => v * (1 - borderOpacity)))}
      strokeWidth={BORDER_THICKNESS}
      strokeLinejoin="round"
    />
  }
  
  // barrel decorations
  if (tank.preAddon === "skimmer-rocketeer") {
    const width = 0.8
    const size = 65 * Math.SQRT2
    let points: Array<[number, number]> = [
      [size, width * 42 * 0.5 * 1.75],
      [size, -width * 42 * 0.5 * 1.75],
      [0, -width * 42 * 0.5],
      [0, width * 42 * 0.5],
    ]
    polygons.push(renderBarrelPolygon(points))
  }
  if (tank.preAddon === "glider") {
    const width = 0.8
    const size = 65 * Math.SQRT2
    let points: Array<[number, number]> = [
      [size, width * 42 * 0.5],
      [size, -width * 42 * 0.5],
      [0, -width * 42 * 0.5 * 1.75],
      [0, width * 42 * 0.5 * 1.75],
    ]
    polygons.push(renderBarrelPolygon(points))
  }

  for (const barrel of tank.barrels) {

    if (barrel.type == BarrelTypes.autoCannon) {
      let points:Array<[number, number]> = [
        [barrel.size, barrel.width * 42 * 0.5],
        [barrel.size, -barrel.width * 42 * 0.5],
        [0, -barrel.width * 42 * 0.5],
        [0, barrel.width * 42 * 0.5],
      ];
      points = points.map(([x, y]) =>
        rotateVector([x, y], autoTurretRotation)
      );
      points = points.map(([x, y]) => [x + 40, y])
      points = points.map(([x, y]) =>
        rotateVector([x, y], barrel.angle)
      );
      polygons.push(renderBarrelPolygon(points))
      
      polygons.push(
        <circle
          key={tank.id + "-barrel-" + Math.random()}
          cx={Math.cos(rotation + barrel.angle) * 40 * sizeFactor}
          cy={Math.sin(rotation + barrel.angle) * 40 * sizeFactor}
          r={25 * sizeFactor}
          fill={renderColor(barrelColor)}
          stroke={renderColor(barrelColor.map(v => v * (1 - borderOpacity)))}
          strokeWidth={BORDER_THICKNESS}
          strokeLinejoin="round"
        />
      )
    }

    if (barrel.type == BarrelTypes.autoTurret) {
      let points:Array<[number, number]> = [
        [barrel.size, barrel.width * 42 * 0.5],
        [barrel.size, -barrel.width * 42 * 0.5],
        [0, -barrel.width * 42 * 0.5],
        [0, barrel.width * 42 * 0.5],
      ];
      points = points.map(([x, y]) =>
        rotateVector([x, y], autoTurretRotation + Math.PI + barrel.angle)
      );
      overlayPolygons.push(renderBarrelPolygon(points))
      overlayPolygons.push(
        <circle
          key={tank.id + "-barrel-" + Math.random()}
          cx="0"
          cy="0"
          r={25 * sizeFactor}
          fill={renderColor(barrelColor)}
          stroke={renderColor(barrelColor.map(v => v * (1 - borderOpacity)))}
          strokeWidth={BORDER_THICKNESS}
          strokeLinejoin="round"
        />
      )
    }
    
    if (barrel.type == BarrelTypes.trapLauncher) {
      let points: Array<[number, number]> = [
        [barrel.size, barrel.width * 42 * 0.5],
        [barrel.size + 20 * barrel.width, barrel.width * 42 * 0.5 * 1.75],
        [barrel.size + 20 * barrel.width, -barrel.width * 42 * 0.5 * 1.75],
        [barrel.size, -barrel.width * 42 * 0.5],
      ];
      points = points.map(([x, y]) => [x, y + barrel.offset]);
      points = points.map(([x, y]) => rotateVector([x, y], barrel.angle));
      polygons.push(renderBarrelPolygon(points))
    }

    if (([
      BarrelTypes.normal,
      BarrelTypes.trapLauncher,
      BarrelTypes.swarmSpawner,
      BarrelTypes.droneSpawner,
      BarrelTypes.minionSpawner
    ] as Array<string>).includes(barrel.type ?? "")) {
      let points: Array<[number, number]> = [
        [barrel.size, barrel.width * 42 * 0.5],
        [barrel.size, -barrel.width * 42 * 0.5],
        [0, -barrel.width * 42 * 0.5],
        [0, barrel.width * 42 * 0.5],
      ]
      if (barrel.isTrapezoid) {
        if (barrel.trapezoidDirection === 0) {
          points[0][1] *= 1.75
          points[1][1] *= 1.75
        } else {
          points[2][1] *= 1.75
          points[3][1] *= 1.75
        }
      }
      points = points.map(([x, y]) => [x, y + barrel.offset]);
      points = points.map(([x, y]) => rotateVector([x, y], barrel.angle));
      polygons.push(renderBarrelPolygon(points))
    }
  }

  // post addons
  if (tank.postAddon === "ranger") {
    const width = 1
    let points: Array<[number, number]> = [
      [67.5, width * 42 * 0.5],
      [67.5, -width * 42 * 0.5],
      [12.5, -width * 42 * 0.5 * 1.75],
      [12.5, width * 42 * 0.5 * 1.75],
    ]
    polygons.push(renderBarrelPolygon(points))
  }
  if (tank.postAddon === "dominator") {
    const width = 5/6
    let points: Array<[number, number]> = [
      [61, width * 42 * 0.5],
      [61, -width * 42 * 0.5],
      [39, -width * 42 * 0.5 * 1.75],
      [39, width * 42 * 0.5 * 1.75],
    ]
    polygons.push(renderBarrelPolygon(points))
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

  // grid
  const gridPolygons: JSX.Element[] = [];
  if (gridAlpha > 0) {
    const squareDimensions = 50
    const gridDimensions = Math.ceil(viewBoundaries * 1.5 / squareDimensions)
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
            stroke={renderColor(gridColor, gridAlpha * GRID_GRADIENT((position2 + 0.5 * squareDimensions) / viewBoundaries, position1 / viewBoundaries))}
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
            stroke={renderColor(gridColor, gridAlpha * GRID_GRADIENT((position1 + 0.5 * squareDimensions) / viewBoundaries, position2 / viewBoundaries))}
            strokeWidth={GRID_THICKNESS}
          />
        )
      }
    }
  }

  // return svg
  return (
    <svg
      key={tank.id}
      viewBox={`-${viewBoundaries + offsetX} -${viewBoundaries + offsetY} ${viewBoundaries * 2} ${viewBoundaries * 2}`}
      xmlns="http://www.w3.org/2000/svg"
      data-view-boundaries={viewBoundaries}
    >
      {gridPolygons}
      {polygons}
      {overlayPolygons}
    </svg>
  );
};