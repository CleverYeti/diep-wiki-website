export const TICK_RATE = 25
export const swarmLifeLength = 88
export const formulas = {
    tankHealth: (tankLevel = 1, maxHealthPoints = 0) => 50 + 2 * (tankLevel - 1) + maxHealthPoints * 20,
    tankDamagePerTick: (bodyDamagePoints = 0, isSpike = false) => 20 + 4 * bodyDamagePoints + (isSpike ? 8 : 0),
    tankRegenPerTick: (tankHealth = 50, healthRegenPoints = 0) => tankHealth * (1 + 4 * healthRegenPoints) / 25000,
    tankEffectiveHealth: (tankHealth = 50, tankDamagePerTick = 20) => tankHealth * tankDamagePerTick,
    tankFovFactor: (tankLevel = 1, tankFieldFactorStat = 1) => 1.01 ** (0.5 * (tankLevel - 1)) / tankFieldFactorStat,
    tankViewWidth: (tankFovFactor = 1) => 1920 * tankFovFactor / 0.825,
    tankViewHeight: (tankFovFactor = 1) => 1080 * tankFovFactor / 0.825,
    tankMovementSpeed: (tankLevel = 1, movementSpeedPoints = 0) => 25.5 * 1.07 ** movementSpeedPoints / 1.015 ** (tankLevel - 1),
    ticksToGoInvisible: (tankInvisibilityRate = 1) => 1 / tankInvisibilityRate,

    barrelReloadTicks: (barrelReloadFactor = 1, reloadPoints = 0) => 15 * barrelReloadFactor * 0.914 ** reloadPoints,
    barrelRecoilVelocity: (barrelRecoilFactor = 1) => barrelRecoilFactor * 2,
    bulletDamagePerTick: (bulletDamageFactor = 1, bulletDamagePoints = 0) => bulletDamageFactor * (7 + 3 * bulletDamagePoints),
    bulletHealth: (bulletHealthFactor = 1, bulletPenetrationPoints = 0) => bulletHealthFactor * (1.5 + 2 * bulletPenetrationPoints),
    bulletEffectiveDamage: (bulletDamagePerTick = 7, bulletHealth = 1.5) => bulletDamagePerTick * bulletHealth,
    bulletLifeLength: (bulletLifeLengthFactor = 1) => bulletLifeLengthFactor * 72,
    bulletTargetSpeed: (bulletSpeedFactor = 1, bulletSpeedPoints = 0) => bulletSpeedFactor * (20 + 3 * bulletSpeedPoints),
    bulletInitialSpeedMax: (bulletTargetSpeed = 20) => bulletTargetSpeed + 30,
    bulletInitialSpeedMin: (bulletScatterFactor = 1, bulletTargetSpeed = 20) => bulletTargetSpeed + 30 - bulletScatterFactor,
    bulletScatterDegrees: (bulletScatterFactor = 1) => bulletScatterFactor * 5,

    droneInitialSpeedMax: (bulletTargetSpeed = 20) => bulletTargetSpeed / 3 + 10,
    droneInitialSpeedMin: (bulletScatterFactor = 1, bulletTargetSpeed = 20) => (bulletTargetSpeed - bulletScatterFactor) / 3 + 10,

}

