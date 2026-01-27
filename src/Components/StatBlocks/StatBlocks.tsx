import { BarrelStats, Tank, tanksData } from "../../Data/tanksData";
import "./StatBlocks.css"
import { formulas, TICK_RATE } from "../../Data/formulas";
import { Shape, shinyHealthFactor, shinyScoreFactor } from "../../Data/shapesData";

const GRID_SIZE = 50

export function StatsBlock({rows}: {rows: Array<{
  name: string,
  value: string,
  consoleValue: string,
}>}) {
  return (
    <>
      {
        rows.map((row, i) => (
          <div className="stat-row" onClick={() => console.log("exact value:", row.consoleValue)} key={i}>
            <div className="name">{row.name}:</div>
            <div className="line"></div>
            <div className="value">{row.value}</div>
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
  const rows: Array<{
    name: string,
    value: string,
    consoleValue: string
  }> = []

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
    returnValues.bulletRange = formulas.bulletRange(returnValues.bulletInitialSpeed, returnValues.bulletTargetSpeed, returnValues.bulletLifeLength);
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

  rows.push({name: "Reload Time",             value: `${roundWithDecimals(mainValues.reloadTicks)}t: ${roundWithDecimals(mainValues.reloadSecs)}s`,                             consoleValue: `${mainValues.reloadTicks}t: ${mainValues.reloadSecs}s`})
  rows.push({name: "Fire Rate",               value: `${roundWithDecimals(mainValues.fireRate)}/s (${roundWithDecimals(comparisonFactors.fireRate)}x)`,                         consoleValue: `${mainValues.fireRate}/s (${comparisonFactors.fireRate}x)`});
  rows.push({name: "Instant Recoil Speed",    value: `${roundWithDecimals(mainValues.instantRecoilSpeed)} (${roundWithDecimals(comparisonFactors.instantRecoilSpeed)}x)`,       consoleValue: `${mainValues.instantRecoilSpeed} (${comparisonFactors.instantRecoilSpeed}x)`})
  rows.push({name: "Peak Recoil Speed",       value: `${roundWithDecimals(mainValues.peakRecoilSpeed)} (${roundWithDecimals(comparisonFactors.peakRecoilSpeed)}x)`,             consoleValue: `${mainValues.peakRecoilSpeed} (${comparisonFactors.peakRecoilSpeed}x)`})
  rows.push({name: "Average Recoil Speed",    value: `${roundWithDecimals(mainValues.averageRecoilSpeed)} (${roundWithDecimals(comparisonFactors.averageRecoilSpeed)}x)`,       consoleValue: `${mainValues.averageRecoilSpeed} (${comparisonFactors.averageRecoilSpeed}x)`})
  rows.push({name: "Bullet Damage per tick",  value: `${roundWithDecimals(mainValues.bulletDamagePerTick)} (${roundWithDecimals(comparisonFactors.bulletDamagePerTick)}x)`,     consoleValue: `${mainValues.bulletDamagePerTick} (${comparisonFactors.bulletDamagePerTick}x)`})
  rows.push({name: "Bullet Health",           value: `${roundWithDecimals(mainValues.bulletHealth)} (${roundWithDecimals(comparisonFactors.bulletHealth)}x)`,                   consoleValue: `${mainValues.bulletHealth} (${comparisonFactors.bulletHealth}x)`})
  rows.push({name: "Bullet Effective DMG",    value: `${roundWithDecimals(mainValues.bulletEffectiveDamage)} (${roundWithDecimals(comparisonFactors.bulletEffectiveDamage)}x)`, consoleValue: `${mainValues.bulletEffectiveDamage} (${comparisonFactors.bulletEffectiveDamage}x)`})
  if (isFinite(mainValues.bulletLifeLength)) {
    rows.push({name: "Bullet Life",           value: `${roundWithDecimals(mainValues.bulletLifeLength)}t: ${roundWithDecimals(mainValues.bulletLifeLength / TICK_RATE)}s (${roundWithDecimals(comparisonFactors.bulletLifeLength)}x)`, consoleValue: `${mainValues.bulletLifeLength}t: ${mainValues.bulletLifeLength / TICK_RATE}s (${comparisonFactors.bulletLifeLength}x)`})
    rows.push({name: "Bullet Range",          value: `${roundWithDecimals(mainValues.bulletRange)} (${roundWithDecimals(comparisonFactors.bulletRange)}x)`,                     consoleValue: `${mainValues.bulletRange} (${comparisonFactors.bulletRange}x)`})
  } else {
    rows.push({name: "Bullet Life", value: `Infinite`, consoleValue: "Infinite"})
  }
  rows.push({name: "Bullet Absorbtion Factor",  value: `${roundWithDecimals(stats.bullet.absorbtionFactor)}`,                                                                   consoleValue: `${stats.bullet.absorbtionFactor}`})
  rows.push({name: "Bullet Scatter Rate",       value: `±${roundWithDecimals(mainValues.bulletScatterDegrees)}deg (${roundWithDecimals(stats.bullet.scatterFactor)}x)`,         consoleValue: `±${mainValues.bulletScatterDegrees}deg (${stats.bullet.scatterFactor}x)`})
  rows.push({name: "Bullet Initial Speed",      value: `${roundWithDecimals(mainValues.bulletInitialSpeed)}/t ±${roundWithDecimals(mainValues.bulletInitialSpeedVariation)}/t`, consoleValue: `${mainValues.bulletInitialSpeed}/t ±${mainValues.bulletInitialSpeedVariation}/t`})
  rows.push({name: "Bullet Speed",              value: `${roundWithDecimals(mainValues.bulletTargetSpeed)}/t: ${roundWithDecimals(mainValues.bulletTargetSpeed * TICK_RATE)}/s (${roundWithDecimals(comparisonFactors.bulletTargetSpeed)}x)`, consoleValue: `${mainValues.bulletTargetSpeed}/t: ${mainValues.bulletTargetSpeed * TICK_RATE}/s (${comparisonFactors.bulletTargetSpeed}x)`})
  if (stats.droneCount != null) {
    rows.push({name: "Drone Limit Per Spawner", value: `${stats.droneCount}`, consoleValue: `${stats.droneCount}`})
  }
  
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
  const rows: Array<{
    name: string,
    value: string,
    consoleValue: string
  }> = []

  interface Values {
    [key: string]: number
  }

  function getValues(tank: Tank, level: number, points: Array<number>) {
    const returnValues: Values = {}

    let averageRecoilSpeed = 0
    for (let barrel of tank.barrels) {
      const barrelStats = tank.barrelStats[barrel.barrelStats ?? ""];
      if (barrelStats == null) continue;
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

  rows.push({name: "Max Health",                    value: `${roundWithDecimals(mainValues.health)} (${roundWithDecimals(comparisonFactors.health)}x)`,                                                           consoleValue: `${mainValues.health} (${comparisonFactors.health}x)`})
  rows.push({name: "Body Damage",                   value: `${roundWithDecimals(mainValues.damagePerTick)}/t (${roundWithDecimals(comparisonFactors.damagePerTick)}x)`,                                           consoleValue: `${mainValues.damagePerTick}/t (${comparisonFactors.damagePerTick}x)`})
  rows.push({name: "Effective Health",              value: `${roundWithDecimals(mainValues.effectiveHealth)} (${roundWithDecimals(comparisonFactors.effectiveHealth)}x)`,                                         consoleValue: `${mainValues.effectiveHealth} (${comparisonFactors.effectiveHealth}x)`})
  rows.push({name: "Health Regen",                  value: `${roundWithDecimals(mainValues.regenPerTick, 5)}/t (${roundWithDecimals(comparisonFactors.regenPerTick)}x)`,                                          consoleValue: `${mainValues.regenPerTick}/t (${comparisonFactors.regenPerTick}x)`})
  rows.push({name: "Speed",                         value: `${roundWithDecimals(mainValues.movementSpeed)}/t: ${roundWithDecimals(mainValues.movementSpeed * TICK_RATE, 0)}/s (${roundWithDecimals(comparisonFactors.movementSpeed)}x)`, consoleValue:  `${mainValues.movementSpeed}/t: ${mainValues.movementSpeed * TICK_RATE}/s (${comparisonFactors.movementSpeed}x)`})
  rows.push({name: "Speed w/ recoil",               value: `${roundWithDecimals(mainValues.averageRecoilSpeed)}/t (${roundWithDecimals(comparisonFactors.averageRecoilSpeed)}x)`,                                 consoleValue: `${mainValues.averageRecoilSpeed}/t (${comparisonFactors.averageRecoilSpeed}x)`})
  if (mainValues.fovFactor) rows.push({name: "Fov", value: `${roundWithDecimals(mainValues.viewWidth, 0)} x ${roundWithDecimals(mainValues.viewHeight, 0)} (${roundWithDecimals(comparisonFactors.fovFactor)}x)`, consoleValue: `${mainValues.viewWidth} x ${mainValues.viewHeight} (${comparisonFactors.fovFactor}x)`})
  
  if (tank.flags && tank.flags.invisibility) {
    rows.push({name: "Time To Go Invisible",        value: `${roundWithDecimals(mainValues.timeToGoInvisible)}t: ${roundWithDecimals(mainValues.timeToGoInvisible / TICK_RATE)}s`,                                consoleValue: `${mainValues.timeToGoInvisible}t: ${mainValues.timeToGoInvisible / TICK_RATE}s`})
  }
  if (tank.flags && tank.flags.zoomAbility) {
    const zoomRange = 1500
    rows.push({name: "Zoom Range",                  value: `${roundWithDecimals(zoomRange)}: ${roundWithDecimals(zoomRange / GRID_SIZE)} grid squares`,                                                           consoleValue: `${zoomRange}: ${zoomRange / GRID_SIZE} grid squares`})
  }

  return <StatsBlock rows={rows}/>
}

export function ShapeStatsDisplay({shape, isShiny = false}: {shape: Shape; isShiny?: boolean}) {
  const rows: Array<{
    name: string,
    value: string,
    consoleValue: string
  }> = []
  rows.push({name: "Health",                  value: `${roundWithDecimals(isShiny ? shinyHealthFactor * shape.health : shape.health)}`,                       consoleValue: `${isShiny ? shinyHealthFactor * shape.health : shape.health}`})
  rows.push({name: "DMG Per Tick",            value: `${roundWithDecimals(shape.bodyDamage)}`,                                                                consoleValue: `${shape.bodyDamage}`})
  rows.push({name: "Eff. Health",             value: `${roundWithDecimals(shape.bodyDamage * (isShiny ? shinyHealthFactor * shape.health : shape.health))}`,  consoleValue: `${shape.bodyDamage * (isShiny ? shinyHealthFactor * shape.health : shape.health)}`})
  rows.push({name: "Score",                   value: `${roundWithDecimals(isShiny ? shinyScoreFactor * shape.score : shape.score)}`,                          consoleValue: `${isShiny ? shinyScoreFactor * shape.score : shape.score}`})
  if (shape.speed) rows.push({name: "Speed",  value: `${roundWithDecimals(shape.speed)}/t: ${roundWithDecimals(shape.speed * TICK_RATE)}/s`,                  consoleValue: `${shape.speed}/t: ${shape.speed * TICK_RATE}/s`})

  return <StatsBlock rows={rows}/>
}