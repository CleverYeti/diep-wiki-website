import { BarrelStats, Tank, tanksData } from "../tanksData";
import "./StatBlocks.css"
import { formulas, TICK_RATE } from "../formulas";
import { Shape, shinyHealthFactor, shinyScoreFactor } from "../shapesData";

const GRID_SIZE = 50

export function StatsBlock({rows}: {rows: Array<Array<string>>}) {
  return (
    <>
      {
        rows.map(row => (
          <div className="stat-row">
            <div className="name">{row[0]}:</div>
            <div className="line"></div>
            <div className="value">{row[1]}</div>
          </div>
        ))
      }
    </>
  )
}
  
function roundWithDecimals(value: number, decimals: number = 2) {
  if (!isFinite(value)) return "∞"
  const factor = 10 ** decimals
  return `${Math.round(value * factor) / factor}`
}

export function BarrelStatsDisplay({
  stats,
  level = 1,
  points = [0,0,0,0,0,0,0,0],
  comparisonStats = tanksData["basic"].barrelStats["main"],
  comparisonLevel = 1,
  comparisonPoints = [0,0,0,0,0,0,0,0]
}: {
  stats: BarrelStats;
  level: number;
  points: Array<number>;
  comparisonStats?: BarrelStats;
  comparisonLevel?: number;
  comparisonPoints?: Array<number>;
}) {
  const content: Array<JSX.Element> = []
  const rows: Array<Array<string>> = []

  interface Values {
    [key: string]: number
  }

  function getValues(stats: BarrelStats, level: number, points: Array<number>) {
    const returnValues: Values = {}
    returnValues.reloadTicks = stats.reloadTicks ?? formulas.barrelReloadTicks(stats.reloadFactor, points[6])
    returnValues.reloadSecs = returnValues.reloadTicks / TICK_RATE
    returnValues.fireRate = 1 / returnValues.reloadSecs
    returnValues.instantRecoilSpeed = formulas.barrelInstantRecoilSpeed(stats.recoilFactor)
    returnValues.bulletDamagePerTick = stats.bullet.damagePerTick ?? formulas.bulletDamagePerTick(stats.bullet.damageFactor, points[5])
    returnValues.bulletHealth = stats.bullet.health ?? formulas.bulletHealth(stats.bullet.healthFactor, points[4])
    returnValues.bulletEffectiveDamage = formulas.bulletEffectiveDamage(returnValues.bulletDamagePerTick, returnValues.bulletHealth)
    returnValues.bulletLifeLength = formulas.bulletLifeLength(stats.bullet.lifeLengthFactor)
    if (returnValues.bulletLifeLength <= 0) returnValues.bulletLifeLength = Infinity
    returnValues.bulletTargetSpeed = stats.bullet.targetSpeed ?? formulas.bulletTargetSpeed(stats.bullet.speedFactor, points[3])
    returnValues.bulletInitialSpeed = 0.5 * (formulas.bulletInitialSpeedMin(returnValues.bulletTargetSpeed) + formulas.bulletInitialSpeedMax(returnValues.bulletTargetSpeed))
    returnValues.bulletInitialSpeedVariation = 0.5 * (formulas.bulletInitialSpeedMax(returnValues.bulletTargetSpeed) - formulas.bulletInitialSpeedMin(returnValues.bulletTargetSpeed))
    returnValues.bulletScatterDegrees = formulas.bulletScatterDegrees(stats.bullet.scatterFactor)
    returnValues.peakRecoilSpeed = formulas.barrelPeakRecoilSpeed(returnValues.reloadTicks, returnValues.instantRecoilSpeed, 0, returnValues.bulletScatterDegrees)
    returnValues.averageRecoilSpeed = formulas.barrelAverageRecoilSpeed(returnValues.peakRecoilSpeed, returnValues.reloadTicks)
    return returnValues
  }

  const mainValues = getValues(stats, level, points)
  const comparisonValues = getValues(comparisonStats, comparisonLevel, comparisonPoints)
  const comparisonFactors:Values = {}
  for (let key in mainValues) {
    if (comparisonValues[key]) comparisonFactors[key] = mainValues[key] / comparisonValues[key]
  }

  
  // damage reduction 0.25 ???
  // only valid for normal bullets

  rows.push(["Reload Time", `${roundWithDecimals(mainValues.reloadTicks)}t: ${roundWithDecimals(mainValues.reloadSecs)}s`])
  rows.push(["Fire Rate", `${roundWithDecimals(mainValues.fireRate)}/s (${roundWithDecimals(comparisonFactors.fireRate)}x)`])
  rows.push(["Instant Recoil Speed", `${roundWithDecimals(mainValues.instantRecoilSpeed)} (${roundWithDecimals(comparisonFactors.instantRecoilSpeed)}x)`])
  rows.push(["Peak Recoil Speed", `${roundWithDecimals(mainValues.peakRecoilSpeed)} (${roundWithDecimals(comparisonFactors.peakRecoilSpeed)}x)`])
  rows.push(["Average Recoil Speed", `${roundWithDecimals(mainValues.averageRecoilSpeed)} (${roundWithDecimals(comparisonFactors.averageRecoilSpeed)}x)`])
  rows.push(["Bullet Damage per tick", `${roundWithDecimals(mainValues.bulletDamagePerTick)} (${roundWithDecimals(comparisonFactors.bulletDamagePerTick)}x)`])
  rows.push(["Bullet Health", `${roundWithDecimals(mainValues.bulletHealth)} (${roundWithDecimals(comparisonFactors.bulletHealth)}x)`])
  rows.push(["Bullet Effective DMG", `${roundWithDecimals(mainValues.bulletEffectiveDamage)} (${roundWithDecimals(comparisonFactors.bulletEffectiveDamage)}x)`])
  if (isFinite(mainValues.bulletLifeLength)) {
    rows.push(["Bullet Life", `${roundWithDecimals(mainValues.bulletLifeLength)}t: ${roundWithDecimals(mainValues.bulletLifeLength / TICK_RATE)}s (${roundWithDecimals(comparisonFactors.bulletLifeLength)}x)`])
  } else {
    rows.push(["Bullet Life", `Infinite`])
  }
  rows.push(["Bullet Absorbtion Factor", `${roundWithDecimals(stats.bullet.absorbtionFactor)}`])
  rows.push(["Bullet Scatter Rate", `±${roundWithDecimals(mainValues.bulletScatterDegrees)}deg (${roundWithDecimals(stats.bullet.scatterFactor)}x)`])
  rows.push(["Bullet Initial Speed", `${roundWithDecimals(mainValues.bulletInitialSpeed)}/t ±${roundWithDecimals(mainValues.bulletInitialSpeedVariation)}/t`])
  rows.push(["Bullet Speed", `${roundWithDecimals(mainValues.bulletTargetSpeed)}/t: ${roundWithDecimals(mainValues.bulletTargetSpeed * TICK_RATE)}/s (${comparisonFactors.bulletTargetSpeed}x)`])
  if (stats.droneCount) rows.push(["Drone Limit Per Spawner", `${stats.droneCount}`])
  
  return <StatsBlock rows={rows}/>
}



export function TankStatsDisplay({
  tank,
  level = 1,
  points = [0,0,0,0,0,0,0,0],
  comparisonTank = tanksData["basic"],
  comparisonLevel = 1,
  comparisonPoints = [0,0,0,0,0,0,0,0]
}: {
  tank: Tank;
  level: number;
  points: Array<number>;
  comparisonTank?: Tank;
  comparisonLevel?: number;
  comparisonPoints?: Array<number>;
}) {
  const rows: Array<Array<string>> = []

  interface Values {
    [key: string]: number
  }

  function getValues(tank: Tank, level: number, points: Array<number>) {
    const returnValues: Values = {}

    let averageRecoilSpeed = 0
    for (let barrel of tank.barrels) {
      const barrelStats = tank.barrelStats[barrel.barrelStats]
      const reloadTicks = formulas.barrelReloadTicks(barrelStats.reloadFactor, points[6])
      const instantRecoilSpeed = formulas.barrelInstantRecoilSpeed(barrelStats.recoilFactor)
      const scatterDegrees = formulas.bulletScatterDegrees(barrelStats.bullet.scatterFactor)
      const peakRecoilSpeed = formulas.barrelPeakRecoilSpeed(reloadTicks, instantRecoilSpeed, barrel.angle, scatterDegrees)
      console.log(barrel, reloadTicks, instantRecoilSpeed, scatterDegrees, peakRecoilSpeed)
      averageRecoilSpeed += formulas.barrelAverageRecoilSpeed(peakRecoilSpeed, reloadTicks)
    }

    
    returnValues.health = tank.health ?? formulas.tankHealth(level, points[1])
    returnValues.damagePerTick = tank.bodyDamagePerTick ?? formulas.tankDamagePerTick(points[2], tank.key == "spike")
    returnValues.effectiveHealth = formulas.tankEffectiveHealth(returnValues.health, returnValues.damagePerTick)
    returnValues.regenPerTick = tank.regenPerTick ?? formulas.tankRegenPerTick(returnValues.health, points[0])
    returnValues.movementSpeed = formulas.tankMovementSpeed(level, points[7])
    returnValues.averageRecoilSpeed = returnValues.movementSpeed + Math.abs(averageRecoilSpeed)
    if (!tank.isBoss) {
      returnValues.fovFactor = formulas.tankFovFactor(level, tank.fieldFactor)
      returnValues.viewWidth = formulas.tankViewWidth(returnValues.fovFactor)
      returnValues.viewHeight = formulas.tankViewHeight(returnValues.fovFactor)
    }
    if (tank.flags && tank.flags.invisibility) returnValues.ticksToGoInvisible = formulas.ticksToGoInvisible(tank.invisibilityRate)
    return returnValues
  }

  const mainValues = getValues(tank, level, points)
  const comparisonValues = getValues(comparisonTank, comparisonLevel, comparisonPoints)
  const comparisonFactors:Values = {}
  for (let key in mainValues) {
    if (comparisonValues[key]) comparisonFactors[key] = mainValues[key] / (comparisonValues[key] ?? 0)
  }

  rows.push(["Max Health", `${roundWithDecimals(mainValues.health)} (${roundWithDecimals(comparisonFactors.health)}x)`])
  rows.push(["Body Damage", `${roundWithDecimals(mainValues.damagePerTick)}/t (${roundWithDecimals(comparisonFactors.damagePerTick)}x)`])
  rows.push(["Effective Health", `${roundWithDecimals(mainValues.effectiveHealth)} (${roundWithDecimals(comparisonFactors.effectiveHealth)}x)`])
  rows.push(["Health Regen", `${roundWithDecimals(mainValues.regenPerTick, 5)}/t (${roundWithDecimals(comparisonFactors.regenPerTick)}x)`])
  rows.push(["Speed", `${roundWithDecimals(mainValues.movementSpeed)}/t: ${roundWithDecimals(mainValues.movementSpeed * TICK_RATE, 0)}/s (${roundWithDecimals(comparisonFactors.movementSpeed)}x)`])
  rows.push(["Speed w/ recoil", `${roundWithDecimals(mainValues.averageRecoilSpeed)}/t (${roundWithDecimals(comparisonFactors.averageRecoilSpeed)}x)`])
  if (mainValues.fovFactor) rows.push(["Fov", `${roundWithDecimals(mainValues.viewWidth, 0)} x ${roundWithDecimals(mainValues.viewHeight, 0)} (${roundWithDecimals(comparisonFactors.fovFactor)}x)`])
  
  if (tank.flags && tank.flags.invisibility) {
    rows.push(["Time To Go Invisible", `${roundWithDecimals(mainValues.timeToGoInvisible)}t: ${roundWithDecimals(mainValues.timeToGoInvisible / TICK_RATE)}s`])
  }
  if (tank.flags && tank.flags.zoomAbility) {
    const zoomRange = 1500
    rows.push(["Zoom Range", `${roundWithDecimals(zoomRange)}: ${roundWithDecimals(zoomRange / GRID_SIZE)} grid squares`])
  }

  return <StatsBlock rows={rows}/>
}

export function ShapeStatsDisplay({shape, isShiny = false}: {shape: Shape; isShiny?: boolean}) {
  const rows: Array<Array<string>> = []
  rows.push(["Health", `${roundWithDecimals(isShiny ? shinyHealthFactor * shape.health : shape.health)}`])
  rows.push(["DMG Per Tick", `${roundWithDecimals(shape.bodyDamage)}`])
  rows.push(["Eff. Health", `${roundWithDecimals(shape.bodyDamage * (isShiny ? shape.health : shinyHealthFactor * shape.health))}`])
  rows.push(["Score", `${roundWithDecimals(isShiny ? shinyScoreFactor * shape.score : shape.score)}`])
  if (shape.speed) rows.push(["Speed", `${roundWithDecimals(shape.speed)}/t: ${roundWithDecimals(shape.speed * TICK_RATE)}/s`])

  return <StatsBlock rows={rows}/>
}