
import { Tank, BarrelTypes} from "../tanksData";
import { renderColor } from "../functions/renderColor";
import { RenderGrid } from "./renderGrid";
import { rotateVector } from "../functions/rotateVector";

const BORDER_THICKNESS = 7.5;
const DEFAULT_VIEW_BOUNDARIES = 150
const HIGHLIGHT_FACTOR = 0.5

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
  highlight?: string | null;
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
  gridAlpha = 0,
  highlight = null
}: RenderTankProps) {
  
  const tankBaseRadius = tank.bodyDiameter ?? 50
  const sizeFactor = tank.sizeFactor ?? Math.pow(1.01, level - 1)
  const tankRadius = tankBaseRadius * sizeFactor;
  const viewBoundaries = DEFAULT_VIEW_BOUNDARIES * tankRadius / 50 / zoom;
  
  let maxX = tankRadius
  let minX = -tankRadius
  let maxY = tankRadius
  let minY = -tankRadius

  const polygons: JSX.Element[] = [];
  const overlayPolygons: Array<JSX.Element> = []

  // smasher, landmine and spike
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
  if (tank.postAddon == "spike") {
    const points = Array.from({ length: 24 }, (_, i) => {
      const angle = Math.PI * 2 * i / 24 + rotation
      const distance = i % 2 == 0 ? tankRadius * 1.3 : tankRadius * 0.925
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

  function applyHighlight(color: Array<number>, highlightGroup: string) {
    if (highlight == null) return color
    if (highlight == highlightGroup) return color
    return color.map(v => v * HIGHLIGHT_FACTOR)
  }
  
  // barrels
  function renderBarrelPolygon(points: Array<[number, number]>, highlightGroup: string) {
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
      fill={renderColor(applyHighlight(barrelColor, highlightGroup))}
      stroke={renderColor(applyHighlight(barrelColor.map(v => v * (1 - borderOpacity)), highlightGroup))}
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
    polygons.push(renderBarrelPolygon(points, "preAddon"))
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
    polygons.push(renderBarrelPolygon(points, "preAddon"))
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
      polygons.push(renderBarrelPolygon(points, barrel.barrelStats))
      
      polygons.push(
        <circle
          key={tank.id + "-barrel-" + Math.random()}
          cx={Math.cos(rotation + barrel.angle) * 40 * sizeFactor}
          cy={Math.sin(rotation + barrel.angle) * 40 * sizeFactor}
          r={25 * sizeFactor}
          fill={renderColor(applyHighlight(barrelColor, barrel.barrelStats))}
          stroke={renderColor(applyHighlight(barrelColor.map(v => v * (1 - borderOpacity)), barrel.barrelStats))}
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
        rotateVector([x, y], autoTurretRotation)
      );
      points = points.map(([x, y]) => [x + (barrel.basePosition ?? 0), y])
      points = points.map(([x, y]) =>
        rotateVector([x, y], barrel.angle)
      );
      overlayPolygons.push(renderBarrelPolygon(points, barrel.barrelStats))
      overlayPolygons.push(
        <circle
          key={tank.id + "-barrel-" + Math.random()}
          cx={Math.cos(rotation + barrel.angle) * (barrel.basePosition ?? 0) * sizeFactor}
          cy={Math.sin(rotation + barrel.angle) * (barrel.basePosition ?? 0) * sizeFactor}
          r={25 * (barrel.size / 55) * sizeFactor}
          fill={renderColor(applyHighlight(barrelColor, barrel.barrelStats))}
          stroke={renderColor(applyHighlight(barrelColor.map(v => v * (1 - borderOpacity)), barrel.barrelStats))}
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
      polygons.push(renderBarrelPolygon(points, barrel.barrelStats))
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
      polygons.push(renderBarrelPolygon(points, barrel.barrelStats))
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
    polygons.push(renderBarrelPolygon(points, "postAddon"))
  }
  if (tank.postAddon === "dominator") {
    const width = 5/6
    let points: Array<[number, number]> = [
      [61, width * 42 * 0.5],
      [61, -width * 42 * 0.5],
      [39, -width * 42 * 0.5 * 1.75],
      [39, width * 42 * 0.5 * 1.75],
    ]
    polygons.push(renderBarrelPolygon(points, "postAddon"))
  }

  // body
  if (tank.sides === 1) {
    polygons.push(
      <circle
        key={tank.id + "-body"}
        cx="0"
        cy="0"
        r={tankRadius}
        fill={renderColor(applyHighlight(color, "body"))}
        stroke={renderColor(applyHighlight(color.map(v => v * (1 - borderOpacity)), "body"))}
        strokeWidth={BORDER_THICKNESS}
        strokeLinejoin="round"
      />
    )
  } else {
    const offset = tank.sides == 4 ? 0.5 : 0
    polygons.push(
      <polygon
        key={tank.id + "-body"}
        points={Array.from({ length: tank.sides }, (_, i) => {
          const angle = (Math.PI * 2 * (i + offset)) / tank.sides + rotation;
          return `${tankRadius * Math.cos(angle)},${tankRadius * Math.sin(angle)}`;
        }).join(" ")}
        fill={renderColor(applyHighlight(color, "body"))}
        stroke={renderColor(applyHighlight(color.map(v => v * (1 - borderOpacity)), "body"))}
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
      data-view-boundaries={viewBoundaries}
    >
      <RenderGrid color={gridColor} alpha={gridAlpha} gridBoundaries={viewBoundaries * 1.5}/>
      {polygons}
      {overlayPolygons}
    </svg>
  );
};