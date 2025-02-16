import { Tank, BarrelTypes} from "../tanksData";
import { Color, multiplyColor } from "./Color";
import { DEFAULT_RENDERING_SETTINGS, RenderingSettings } from "./RenderingSettings";
import { Point, scalePoint, rotatePoint, AddPoints } from "./Vector";
import { RenderingObject } from "./RenderingObject";

const DEFAULT_VIEW_BOUNDARIES = 150
const HIGHLIGHT_FACTOR = 0.5


interface getTankRenderingObjectsProps {
  tank: Tank;
  level?: number;
  rotation?: number;
  autoTurretRotation?: number;
  color?: Color;
  borderOpacity?: number;
  barrelColor?: Color;
  smasherColor?: Color;
  highlight?: string | null;
  renderingSettings: RenderingSettings;
}

function getBarrelPoints(startX: number, endX: number, startWidth: number, endWidth: number): Array<Point> {
  return [
      [endX, endWidth * 0.5],
      [endX, -endWidth * 0.5],
      [startX, -startWidth * 0.5],
      [startX, startWidth * 0.5],
    ]
}

export function getTankRenderingObjects({
  tank,
  level = 1,
  rotation = 0,
  autoTurretRotation = 0,
  color = [0, 177, 222],
  barrelColor = [153, 153, 153],
  smasherColor = [85, 85, 85],
}: getTankRenderingObjectsProps) : Array<RenderingObject> {
  
  const tankBaseRadius = tank.bodyRadius ?? 50
  const sizeFactor = tank.sizeFactor ?? Math.pow(1.01, level - 1)
  const tankRadius = tankBaseRadius * sizeFactor;

  const tankApparentRadius =
    tank.sides === 3 ? (tankRadius * 0.7) :
    tank.sides === 4 ? (tankRadius / 65 * 50) :
    tankRadius
  
  const viewBoundaries = DEFAULT_VIEW_BOUNDARIES * tankApparentRadius / 50;

  const renderingObjects: Array<RenderingObject> = []


  enum layers {
    tankBase,
    tankPreAddons,
    barrels,
    tankPostAddons,
    body,
    overlays,
  }
  
  // transforms by the tank's rotation and scale
  function applyTankTransform(point: Point) {
    point = scalePoint(point, sizeFactor)
    point = rotatePoint(point, rotation)
    return point
  }
  
  // smasher, landmine and spike
  if (["smasher", "landmine"].includes(tank.postAddon || "")) {
    let offsets = [0]
    if ("landmine" === tank.postAddon) offsets.push(0.6)
    for (let offset of offsets) {
      let points = Array.from({ length: 6 }, (_, i) => {
        const angle = (Math.PI * 2 * (i + offset)) / 6;
        const distance = 50 / Math.cos(Math.PI / 6);
        return [distance * Math.cos(angle), distance * Math.sin(angle)] as Point;
      })
      points = points.map(point => applyTankTransform(point))
      renderingObjects.push({
        type: "polygon",
        points: points,
        color: smasherColor,
        highlightGroup: "body",
        layer: layers.tankBase
      })
    }
  }
  if (tank.postAddon == "spike") {
    const points = Array.from({ length: 24 }, (_, i) => {
      const angle = Math.PI * 2 * i / 24 + rotation
      const distance = i % 2 == 0 ? tankRadius * 1.3 : tankRadius * 0.925
      return [distance * Math.cos(angle), distance * Math.sin(angle)] as Point;
    });
    renderingObjects.push({
      type: "polygon",
      points: points,
      color: smasherColor,
      highlightGroup: "body",
      layer: layers.tankBase
    })
  }
  if (tank.preAddon === "dominator") {
    const points = Array.from({ length: 6 }, (_, i) => {
      const angle = (Math.PI * 2 * i) / 6;
      const distance = 62 * sizeFactor;
      return [distance * Math.cos(angle), distance * Math.sin(angle)] as Point;
    });
    renderingObjects.push({
      type: "polygon",
      points: points,
      color: smasherColor,
      highlightGroup: "body",
      layer: layers.tankBase
    })
  }
  
  // barrel decorations
  if (tank.preAddon === "skimmer-rocketeer") {
    const width = 0.8
    const size = 65 * Math.SQRT2
    let points = getBarrelPoints(0, size, width, width * 1.75)
    points = points.map(point => applyTankTransform(point))
    renderingObjects.push({
      type: "polygon",
      points: points,
      color: barrelColor,
      highlightGroup: "barrelDecorations",
      layer: layers.tankPreAddons,
    })
  }
  if (tank.preAddon === "glider") {
    const width = 0.8
    const size = 65 * Math.SQRT2
    let points = getBarrelPoints(0, size, width * 1.75, width)
    points = points.map(point => applyTankTransform(point))
    renderingObjects.push({
      type: "polygon",
      points: points,
      color: barrelColor,
      highlightGroup: "barrelDecorations",
      layer: layers.tankPreAddons,
    })
  }

  // barrels
  for (const barrel of tank.barrels) {
    if (barrel.type == BarrelTypes.autoCannon) {
      let points = getBarrelPoints(0, barrel.size, barrel.width, barrel.width)
      points = points.map(point => rotatePoint(point, autoTurretRotation));
      points = points.map(point => AddPoints(point, [40, 0]))
      points = points.map(point => rotatePoint(point, barrel.angle));
      points = points.map(point => applyTankTransform(point))
      renderingObjects.push({
        type: "polygon",
        points: points,
        color: barrelColor,
        highlightGroup: barrel.barrelStats,
        layer: layers.barrels,
      })
      const barrelBase = rotatePoint([40 * sizeFactor, 0], rotation + barrel.angle)
      renderingObjects.push({
        type: "circle",
        position: barrelBase,
        radius: 25 * sizeFactor,
        color: barrelColor,
        highlightGroup: barrel.barrelStats,
        layer: layers.barrels
      })
    }

    if (barrel.type == BarrelTypes.autoTurret) {
      let points = getBarrelPoints(0, barrel.size, barrel.width, barrel.width)
      points = points.map(point => rotatePoint(point, autoTurretRotation));
      points = points.map(point => AddPoints(point, [barrel.basePosition ?? 0, 0]))
      points = points.map(point => rotatePoint(point, barrel.angle));
      points = points.map(point => applyTankTransform(point))
      renderingObjects.push({
        type: "polygon",
        points: points,
        color: barrelColor,
        highlightGroup: barrel.barrelStats,
        layer: layers.overlays,
      })
      const barrelBase = rotatePoint([(barrel.basePosition ?? 0) * sizeFactor, 0], rotation + barrel.angle)
      renderingObjects.push({
        type: "circle",
        position: barrelBase,
        radius: 25 * sizeFactor,
        color: barrelColor,
        highlightGroup: barrel.barrelStats,
        layer: layers.overlays
      })
    }
    
    if (barrel.type == BarrelTypes.trapLauncher) {
      let points = getBarrelPoints(barrel.size, barrel.size + 20 * barrel.width, barrel.width * 42, barrel.width * 42 * 1.75)
      points = points.map(point => AddPoints(point, [0, barrel.offset]));
      points = points.map(point => rotatePoint(point, barrel.angle));
      points = points.map(point => applyTankTransform(point))
      renderingObjects.push({
        type: "polygon",
        points: points,
        color: barrelColor,
        highlightGroup: barrel.barrelStats,
        layer: layers.barrels,
      })
    }

    if (([
      BarrelTypes.normal,
      BarrelTypes.trapLauncher,
      BarrelTypes.swarmSpawner,
      BarrelTypes.droneSpawner,
      BarrelTypes.minionSpawner
    ] as Array<string>).includes(barrel.type ?? "")) {
      const startWidthFactor = (barrel.isTrapezoid && !(barrel.trapezoidDirection === 0)) ? 1.75 : 0
      const endWidthFactor = (barrel.isTrapezoid && barrel.trapezoidDirection === 0) ? 1.75 : 0
      let points = getBarrelPoints(0, barrel.size, barrel.width * 42 * startWidthFactor, barrel.width * 42 * endWidthFactor)
      points = points.map(point => AddPoints(point, [0, barrel.offset]));
      points = points.map(point => rotatePoint(point, barrel.angle));
      points = points.map(point => applyTankTransform(point))
      renderingObjects.push({
        type: "polygon",
        points: points,
        color: barrelColor,
        highlightGroup: barrel.barrelStats,
        layer: layers.barrels,
      })
    }
  }

  // post addons
  if (tank.postAddon === "ranger") {
    const width = 1
    const points = getBarrelPoints(12.5, 67.5, width * 42 * 1.75, width * 42)
    renderingObjects.push({
      type: "polygon",
      points: points,
      color: color,
      layer: layers.tankPostAddons
    })
  }
  if (tank.postAddon === "dominator") {
    const width = 5/6
    const points = getBarrelPoints(39, 61, width * 42 * 1.75, width * 42)
    renderingObjects.push({
      type: "polygon",
      points: points,
      color: color,
      layer: layers.tankPostAddons
    })
  }

  // body
  if (tank.sides === 1) {
    renderingObjects.push({
      type: "circle",
      position: [0,0],
      radius: tankRadius,
      color: color,
      highlightGroup: "body",
      layer: layers.body
    })
  } else {
    const offset = tank.sides == 4 ? 0.5 : 0
    const points = Array.from({ length: tank.sides }, (_, i) => {
      const angle = (Math.PI * 2 * (i + offset)) / tank.sides + rotation;
      return [tankRadius * Math.cos(angle), tankRadius * Math.sin(angle)] as Point
    })
    renderingObjects.push({
      type: "polygon",
      points: points,
      color: color,
      highlightGroup: "body",
      layer: layers.body
    })
  }

  return renderingObjects;
};