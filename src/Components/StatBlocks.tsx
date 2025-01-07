import { BarrelStats, Tank } from "../tanksData.";
import "./StatBlocks.css"

const TICK_RATE = 25
const GRID_SIZE = 50

function StatsBlock({rows}: {rows: Array<Array<string>>}) {
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

export function BarrelStatsDisplay({
  stats,
  level = 1,
  points = [0,0,0,0,0,0,0,0]
}: {
  stats: BarrelStats;
  level: number;
  points: Array<number>;
}) {
  const content: Array<JSX.Element> = []
  const rows: Array<Array<string>> = []
  
  function roundWithDecimals(value: number, decimals: number = 2) {
    const factor = 10 ** decimals
    return Math.round(value * factor) / factor
  }

  const reloadTicks = stats.reload * 15 * Math.pow(0.914, points[6])
  const reloadSecs = reloadTicks / TICK_RATE
  const fireRate = 1 / reloadSecs
  const baseFireRate = 1 / (15 / TICK_RATE)
  const recoil = stats.recoil * 2
  const baseBulletDamage = 7
  const baseBulletHealth = 1.5
  const bulletDamagePerTick = (7 + points[5] * 3) * stats.bullet.damage;
  const bulletHealth = (1.5 * points[4] + 2) * stats.bullet.health;
  const bulletLifeLength = stats.bullet.lifeLength * 72
  const bulletTargetSpeed = (20 + points[3] * 3) * stats.bullet.speed;
  const bulletInitialSpeed = bulletTargetSpeed + 30 - 0.5 * stats.bullet.scatterRate
  const bulletInitialSpeedVariation = 0.5 * stats.bullet.scatterRate
  // damage reduction 0.25 ???
  // only valid for normal bullets

  rows.push(["Reload Time", `${roundWithDecimals(reloadTicks)}t: ${roundWithDecimals(reloadSecs)}s`])
  rows.push(["Fire Rate", `${roundWithDecimals(fireRate)}/s (${roundWithDecimals(fireRate / baseFireRate)}x)`])
  rows.push(["Recoil", `${roundWithDecimals(recoil)} (${roundWithDecimals(stats.recoil)}x)`])
  rows.push(["Bullet Damage (/tick)", `${roundWithDecimals(bulletDamagePerTick)} (${roundWithDecimals(bulletDamagePerTick / baseBulletDamage)}x)`])
  rows.push(["Bullet Health", `${roundWithDecimals(bulletHealth)} (${roundWithDecimals(bulletHealth / baseBulletHealth)}x)`])
  rows.push(["Bullet Effective DMG", `${roundWithDecimals(bulletHealth * bulletDamagePerTick)} (${roundWithDecimals(bulletHealth * bulletDamagePerTick / baseBulletHealth / baseBulletDamage)}x)`])
  rows.push(["Bullet Life", `${roundWithDecimals(bulletLifeLength)}t: ${roundWithDecimals(bulletLifeLength / TICK_RATE)}s (${roundWithDecimals(stats.bullet.lifeLength)}x)`])
  rows.push(["Bullet Absorbtion Factor", `${roundWithDecimals(stats.bullet.absorbtionFactor)}`])
  rows.push(["Bullet Scatter Rate", `${roundWithDecimals(stats.bullet.scatterRate)} (±${roundWithDecimals(stats.bullet.scatterRate * 5)}deg)`])
  rows.push(["Bullet Initial Speed", `${roundWithDecimals(bulletInitialSpeed)}/t ±${roundWithDecimals(bulletInitialSpeedVariation)}/t`])
  rows.push(["Bullet Stable Speed", `${roundWithDecimals(bulletTargetSpeed)}/t: ${roundWithDecimals(bulletTargetSpeed * TICK_RATE)}/s`])
  if (stats.droneCount) rows.push(["Drone Count (/spawner)", `${stats.droneCount}`])
  
  return <StatsBlock rows={rows}/>
}



export function TankStatsDisplay({
  tank,
  level = 1,
  points = [0,0,0,0,0,0,0,0]
}: {
  tank: Tank;
  level: number;
  points: Array<number>;
}) {
  const rows: Array<Array<string>> = []
  
  function roundWithDecimals(value: number, decimals: number = 2) {
    const factor = 10 ** decimals
    return Math.round(value * factor) / factor
  }

  const health = tank.maxHealth + 2 * (level - 1) + points[1] * 20
  const baseHealth = 50
  const damagePerTick = points[2] * 4 + 20 + tank.key == "spike" ? 8 : 0
  const baseDamagePerTick = 20
  const effectiveHealth = health * damagePerTick
  const baseEffectiveHealth = baseHealth * baseDamagePerTick
  const regenPerTick = health * (1 + 4 * points[0]) / 25000;
  const baseRegenPerTick = baseHealth / 25000 
  const viewZoom = (.55 * tank.fieldFactor) / Math.pow(1.01, 0.5 * (level - 1));
  const baseViewZoom = 0.55
  const viewWidth = (1920 / viewZoom) / 1.5;
  const viewHeight = (1080 / viewZoom) / 1.5;
  const movementAccel = tank.speed * 2.55 * Math.pow(1.07, points[7]) / Math.pow(1.015, level - 1)
  const movementSpeed = movementAccel * 10
  const baseMovementAccel = 2.55
  const baseMovementSpeed = baseMovementAccel * 10

  rows.push(["Max Health", `${roundWithDecimals(health)} (${roundWithDecimals(health / baseHealth)}x)`])
  rows.push(["Body Damage", `${roundWithDecimals(damagePerTick)}/t (${roundWithDecimals(damagePerTick / baseDamagePerTick)}x)`])
  rows.push(["Effective Health", `${roundWithDecimals(effectiveHealth)} (${roundWithDecimals(effectiveHealth / baseEffectiveHealth)}x)`])
  rows.push(["Health Regen", `${roundWithDecimals(regenPerTick, 5)}/t (${roundWithDecimals(regenPerTick / baseRegenPerTick)}x)`])
  rows.push(["Fov", `${roundWithDecimals(viewWidth, 0)} x ${roundWithDecimals(viewHeight, 0)} (${roundWithDecimals(1 / (viewZoom / baseViewZoom))}x)`])
  rows.push(["Speed", `${roundWithDecimals(movementSpeed)}/t: ${roundWithDecimals(movementSpeed * TICK_RATE, 0)}/s (${roundWithDecimals(movementSpeed / baseMovementSpeed)}x)`])
  rows.push(["Acceleration", `${roundWithDecimals(movementAccel)}/t² (${roundWithDecimals(movementAccel / baseMovementAccel)}x)`])
  rows.push(["Absorbtion Factor", `${roundWithDecimals(tank.absorbtionFactor)}`])
  
  if (tank.flags.invisibility) {
    const timeToGoInvisible = 1 / tank.invisibilityRate
    const timeToGoInvisibleSeconds = 1 / tank.invisibilityRate
    rows.push(["Time To Go Invisible", `${roundWithDecimals(timeToGoInvisible)}t: ${roundWithDecimals(timeToGoInvisible / TICK_RATE)}s`])
  }
  if (tank.flags.zoomAbility) {
    const zoomRange = 1500
    rows.push(["Zoom Range", `${roundWithDecimals(zoomRange)}: ${roundWithDecimals(zoomRange / GRID_SIZE)} grid squares`])
  }

  return <StatsBlock rows={rows}/>
}