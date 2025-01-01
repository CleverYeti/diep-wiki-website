import { BarrelStats } from "../tanksData.";
import "./barrelStats.css"

const TICK_RATE = 25

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
  rows.push(["Reload Time", `${roundWithDecimals(reloadTicks)}t: ${roundWithDecimals(reloadSecs)}s`])
  rows.push(["Fire Rate", `${roundWithDecimals(fireRate)} /sec (${roundWithDecimals(fireRate / baseFireRate)}x)`])
  rows.push(["Recoil", `${roundWithDecimals(recoil)} (${roundWithDecimals(stats.recoil)}x)`])
  rows.push(["Bullet Damage (/tick)", `${roundWithDecimals(bulletDamagePerTick)} (${roundWithDecimals(bulletDamagePerTick / baseBulletDamage)}x)`])
  rows.push(["Bullet Health", `${roundWithDecimals(bulletHealth)} (${roundWithDecimals(bulletHealth / baseBulletHealth)}x)`])
  rows.push(["Bullet Effective Damage", `${roundWithDecimals(bulletHealth * bulletDamagePerTick)} (${roundWithDecimals(bulletHealth * bulletDamagePerTick / baseBulletHealth / baseBulletDamage)}x)`])
  rows.push(["Bullet Speed Factor", `${stats.bullet.speed}`])
  rows.push(["Bullet Life Length", `${roundWithDecimals(bulletLifeLength)}t: ${roundWithDecimals(bulletLifeLength / TICK_RATE)}s (${roundWithDecimals(stats.bullet.lifeLength)}x)`])
  rows.push(["Bullet Absorbtion Factor", `${roundWithDecimals(stats.bullet.absorbtionFactor)}`])
  rows.push(["Bullet Scatter Rate", `${roundWithDecimals(stats.bullet.scatterRate)} (±${roundWithDecimals(stats.bullet.scatterRate * 5)}deg)`])
  if (stats.droneCount) rows.push(["Drone Count (/spawner)", `${stats.droneCount}`])

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