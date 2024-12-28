
import { Tank } from "../tanksData.";
import { renderColor } from "../functions/renderColor";

const BORDER_THICKNESS = 7.5;
const DEFAULT_VIEW_BOUNDARIES = 150

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
  const barrelPolygons: Array<Array<[number, number]>> = []
  
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
    barrelPolygons.push(points)
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
    barrelPolygons.push(points)
  }

  for (const barrel of tank.barrels) {
    let points: Array<[number, number]> = []
    
    if (barrel.isTrapezoid) {
      if (barrel.trapezoidDirection === 0) {
        points = [
          ...points,
          [barrel.size, barrel.width * 42 * 0.5 * 1.75],
          [barrel.size, -barrel.width * 42 * 0.5 * 1.75],
          [0, -barrel.width * 42 * 0.5],
          [0, barrel.width * 42 * 0.5],
        ]
      } else {
        points = [
          ...points,
          [barrel.size, barrel.width * 42 * 0.5],
          [barrel.size, -barrel.width * 42 * 0.5],
          [0, -barrel.width * 42 * 0.5 * 1.75],
          [0, barrel.width * 42 * 0.5 * 1.75],
        ]
      }
    } else {
      points = [
        ...points,
        [barrel.size, barrel.width * 42 * 0.5],
        [barrel.size, -barrel.width * 42 * 0.5],
        [0, -barrel.width * 42 * 0.5],
        [0, barrel.width * 42 * 0.5],
      ];
    }

    if (barrel.addon === "trapLauncher") {
      points = [...points, 
        [barrel.size, barrel.width * 42 * 0.5],
        [barrel.size + (tank.id === 34 ? 26 : 20), barrel.width * 42 * 0.5 * 1.75],
        [barrel.size + (tank.id === 34 ? 26 : 20), -barrel.width * 42 * 0.5 * 1.75],
        [barrel.size, -barrel.width * 42 * 0.5],
      ];
    }
    
    points = points.map(([x, y]) => [x, y + barrel.offset]);
    points = points.map(([x, y]) =>
      rotateVector([x, y], barrel.angle)
    );

    barrelPolygons.push(points)
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
    barrelPolygons.push(points)
  }
  if (tank.postAddon === "dominator") {
    const width = 5/6
    let points: Array<[number, number]> = [
      [61, width * 42 * 0.5],
      [61, -width * 42 * 0.5],
      [39, -width * 42 * 0.5 * 1.75],
      [39, width * 42 * 0.5 * 1.75],
    ]
    barrelPolygons.push(points)
  }

  // auto 3/5 turret barrels
  if (["auto3", "auto5"].includes(tank.postAddon ?? "")) {
    const cannonCount = tank.postAddon === "auto5" ? 5 : 3
    for (let i = 0; i < cannonCount; i++) {
      const angle = i / cannonCount * Math.PI * 2
      const size = 55
      const width = 0.7
      let points:Array<[number, number]> = [
        [size, width * 42 * 0.5],
        [size, -width * 42 * 0.5],
        [0, -width * 42 * 0.5],
        [0, width * 42 * 0.5],
      ];
      points = points.map(([x, y]) =>
        rotateVector([x, y], autoTurretRotation)
      );
      points = points.map(([x, y]) => [x + 40, y])
      points = points.map(([x, y]) =>
        rotateVector([x, y], angle)
      );
      barrelPolygons.push(points)
    }
  }


  // rendering
  for (let points of barrelPolygons) {
    points = points.map(([x, y]) => [x * sizeFactor, y * sizeFactor])
    points = points.map(([x, y]) =>
      rotateVector([x, y], rotation)
    )

    for (let [x,y] of points) {
      maxX = Math.max(maxX, x)
      minX = Math.min(minX, x)
      maxY = Math.max(maxY, y)
      minY = Math.min(minY, y)
    }

    for (let pointGroupStart = 0; pointGroupStart < points.length; pointGroupStart += 4) {
      polygons.push(
        <polygon
          key={`${tank.id}-barrel-${polygons.length}`}
          points={points.slice(pointGroupStart, pointGroupStart + 4).map((p) => p.join(",")).join(" ")}
          fill={renderColor(barrelColor)}
          stroke={renderColor(barrelColor.map(v => v * (1 - borderOpacity)))}
          strokeWidth={BORDER_THICKNESS}
          strokeLinejoin="round"
        />
      );
    }
  }

  // auto circles
  if (["auto3", "auto5"].includes(tank.postAddon ?? "")) {
    const cannonCount = tank.postAddon === "auto5" ? 5 : 3
    for (let i = 0; i < cannonCount; i++) {
      const angle = i / cannonCount * Math.PI * 2
      polygons.push(
        <circle
          key={tank.id + "-barrel-" + polygons.length}
          cx={Math.cos(rotation + angle) * 40 * sizeFactor}
          cy={Math.sin(rotation + angle) * 40 * sizeFactor}
          r={25 * sizeFactor}
          fill={renderColor(barrelColor)}
          stroke={renderColor(barrelColor.map(v => v * (1 - borderOpacity)))}
          strokeWidth={BORDER_THICKNESS}
          strokeLinejoin="round"
        />
      )
    }
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


  // auto turret
  if (tank.postAddon == "autoturret") {
    const size = 55
    const width = 0.7
    let points = [
      [size, width * 42 * 0.5],
      [size, -width * 42 * 0.5],
      [0, -width * 42 * 0.5],
      [0, width * 42 * 0.5],
    ];
    points = points.map(([x, y]) => [x * sizeFactor, y * sizeFactor])
    points = points.map(([x, y]) =>
      rotateVector([x, y], autoTurretRotation)
    );
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
    
    polygons.push(
      <circle
        key={tank.id + "-barrel-" + polygons.length}
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

  // return svg
  return (
    <svg
      key={tank.id}
      viewBox={`-${viewBoundaries + offsetX} -${viewBoundaries + offsetY} ${viewBoundaries * 2} ${viewBoundaries * 2}`}
      xmlns="http://www.w3.org/2000/svg"
      data-view-boundaries={viewBoundaries}
    >
      {polygons}
    </svg>
  );
};