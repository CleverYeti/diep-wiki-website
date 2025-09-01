import { TanksData } from "./Data/tanksData";
import { formulas } from "./formulas";
export const bossesData:TanksData = {
  "defender": {
    "name": "Defender",
    "isBoss": true,
    "health": 3000,
    "bodyDamagePerTick": 40,
    "absorbtionFactor": 0.05,
    "preAddon": null,
    "postAddon": null,
    "bodyColor": [252, 118, 119],
    "sizeFactor": 1,
    "bodyRadius": 150,
    "sides": 3,
    "movementSpeed": 0.35,
    "barrels": [
      {
        "angle": Math.PI * 2 * -1/6,
        "offset": 0,
        "size": 120,
        "width": 1.7,
        "isTrapezoid": false,
        "type": "trapLauncher",
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "traps"
      },
      {
        "angle": Math.PI * 2 * 1/6,
        "offset": 0,
        "size": 120,
        "width": 1.7,
        "isTrapezoid": false,
        "type": "trapLauncher",
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "traps"
      },
      {
        "angle": Math.PI * 2 * -3/6,
        "offset": 0,
        "size": 120,
        "width": 1.7,
        "isTrapezoid": false,
        "type": "trapLauncher",
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "traps"
      },
      {
        "angle": 0,
        "offset": 0,
        "basePosition": 60,
        "size": 55,
        "width": 0.7,
        "delay": 0.01,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "barrelStats": "autoTurrets",
        "type": "autoTurret"
      },
      {
        "angle": Math.PI * 2 / 3,
        "offset": 0,
        "basePosition": 60,
        "size": 55,
        "width": 0.7,
        "delay": 0.01,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "barrelStats": "autoTurrets",
        "type": "autoTurret"
      },
      {
        "angle": Math.PI * 4 / 3,
        "offset": 0,
        "basePosition": 60,
        "size": 55,
        "width": 0.7,
        "delay": 0.01,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "barrelStats": "autoTurrets",
        "type": "autoTurret"
      }
    ],

    "barrelStats": {
      "traps": {
        "name": "Trap Launcher Stats",
        "reloadTicks": formulas.barrelReloadTicks(4, 0),
        "recoilFactor": 2,
        "bullet": {
            "type": "trap",
            "sizeFactor": 0.8,
            "health": 25,
            "damagePerTick": 28,
            "targetSpeed": formulas.bulletTargetSpeed(5, 0),
            "scatterFactor": 1,
            "lifeLengthFactor": 8,
            "absorbtionFactor": 1,
        }
      },
      "autoTurrets": {
        "name": "Auto Turret Stats",
        "reloadTicks": formulas.barrelReloadTicks(1),
        "recoilFactor": 0.3,
        "bullet": {
          "type": "bullet",
          "health": 12.5,
          "damagePerTick": 8.4,
          "targetSpeed": formulas.bulletTargetSpeed(2.3),
          "scatterFactor": 1,
          "lifeLengthFactor": 1,
          "sizeFactor": 1,
          "absorbtionFactor": 1
        }
      }
    },
    "key": "defender",
  },
  "fallen-booster": {
    "name": "Fallen Booster",
    "isBoss": true,
    "health": 3000,
    "bodyDamagePerTick": 40,
    "absorbtionFactor": 0.05,
    "preAddon": null,
    "postAddon": null,
    "sizeFactor": Math.pow(1.01, 75 - 1),
    "bodyColor": [192, 192, 192],
    "sides": 1,
    "movementSpeed": 1,

    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 95,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "main",
        "type": "normal"
      },
      {
        "angle": 3.9269908169872414,
        "offset": 0,
        "size": 70,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0.66,
        "barrelStats": "diagonal",
        "type": "normal"
      },
      {
        "angle": 2.356194490192345,
        "offset": 0,
        "size": 70,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0.66,
        "barrelStats": "diagonal",
        "type": "normal"
      },
      {
        "angle": 3.665191429188092,
        "offset": 0,
        "size": 80,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0.33,
        "barrelStats": "back",
        "type": "normal"
      },
      {
        "angle": 2.6179938779914944,
        "offset": 0,
        "size": 80,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0.33,
        "barrelStats": "back",
        "type": "normal"
      }
    ],

    "barrelStats": {
      "main": {
        "name": "Front Cannon Stats",
        "reloadTicks": formulas.barrelReloadTicks(1),
        "recoilFactor": 0.2,
        "bullet": {
          "type": "bullet",
          "sizeFactor": 1,
          "health": 12.5,
          "damagePerTick": 5.6,
          "targetSpeed": formulas.bulletTargetSpeed(1.7, 0),
          "scatterFactor": 1,
          "lifeLengthFactor": 1,
          "absorbtionFactor": 1
        }
      },
      "diagonal": {
        "name": "Diagonal Cannon Stats",
        "reloadTicks": formulas.barrelReloadTicks(1),
        "recoilFactor": 0.2,
        "bullet": {
          "type": "bullet",
          "sizeFactor": 1,
          "health": 12.5,
          "damagePerTick": 1.12,
          "targetSpeed": formulas.bulletTargetSpeed(1.7, 0),
          "scatterFactor": 1,
          "lifeLengthFactor": 0.5,
          "absorbtionFactor": 1
        }
      },
      "back": {
        "name": "Back Cannon Stats",
        "reloadTicks": formulas.barrelReloadTicks(1),
        "recoilFactor": 2.5,
        "bullet": {
          "type": "bullet",
          "sizeFactor": 1,
          "health": 12.5,
          "damagePerTick": 1.12,
          "targetSpeed": formulas.bulletTargetSpeed(1.7, 0),
          "scatterFactor": 1,
          "lifeLengthFactor": 0.5,
          "absorbtionFactor": 1
        }
      }
    },
    "key": "fallen-booster"
  },
  "fallen-overlord": {
    "name": "Fallen Overlord",
    "isBoss": true,
    "health": 3000,
    "bodyDamagePerTick": 40,
    "absorbtionFactor": 0.05,
    "preAddon": null,
    "postAddon": null,
    "sizeFactor": Math.pow(1.01, 75 - 1),
    "bodyColor": [192, 192, 192],
    "sides": 1,
    "movementSpeed": 0.5,
    
    "barrels": [
      {
        "angle": -1.5707963267948966,
        "offset": 0,
        "size": 70,
        "width": 1,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "drones",
        "type": "droneSpawner"
      },
      {
        "angle": 1.5707963267948966,
        "offset": 0,
        "size": 70,
        "width": 1,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "drones",
        "type": "droneSpawner"
      },
      {
        "angle": 0,
        "offset": 0,
        "size": 70,
        "width": 1,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "drones",
        "type": "droneSpawner"
      },
      {
        "angle": 3.141592653589793,
        "offset": 0,
        "size": 70,
        "width": 1,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "drones",
        "type": "droneSpawner"
      }
    ],

    "barrelStats": {
      "drones": {
        "name": "Drone Spawner Stats",
        "reloadTicks": formulas.barrelReloadTicks(0.25, 0),
        "recoilFactor": 1,
        "bullet": {
          "type": "drone",
          "size": 56,
          "health": 25,
          "damagePerTick": 3.92,
          "targetSpeed": formulas.bulletTargetSpeed(1.7, 0),
          "scatterFactor": 1,
          "lifeLengthFactor": -1,
          "absorbtionFactor": 1
        },
        "droneCount": 7,
      }
    },

    "key": "fallen-overlord"
  },
  "guardian": {
    "name": "Guardian of the Pentagons",
    "isBoss": true,
    "health": 3000,
    "bodyDamagePerTick": 40,
    "absorbtionFactor": 0.05,
    "preAddon": null,
    "postAddon": null,
    "sizeFactor": 1,
    "bodyRadius": 135,
    "bodyColor": [241, 119, 221],
    "sides": 3,
    "movementSpeed": 0.5,

    "barrels": [
      {
        "angle": Math.PI,
        "offset": 0,
        "size": 100,
        "width": 1.7,
        "delay": 0,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "type": "droneSpawner",
        "barrelStats": "main"
      }
    ],

    "barrelStats": {
      "main": {
        "name": "Drone Spawner Stats",
        "reloadTicks": formulas.barrelReloadTicks(0.25, 0),
        "recoilFactor": 1,
        "droneCount": 24,
        "bullet": {
          "type": "drone",
          "sizeFactor": 1 / 1.7,
          "health": formulas.bulletHealth(12.5, 0),
          "damagePerTick": formulas.bulletDamagePerTick(0.5, 0),
          "targetSpeed": formulas.bulletTargetSpeed(1.7, 0),
          "scatterFactor": 1,
          "lifeLengthFactor": 1.5,
          "absorbtionFactor": 1
        }
      }
    },
    "key": "guardian"
  },
  "summoner": {
    "name": "Summoner",
    "isBoss": true,
    "health": 3000,
    "bodyDamagePerTick": 60,
    "absorbtionFactor": 0.05,
    "preAddon": null,
    "postAddon": null,
    "sizeFactor": 1,
    "bodyRadius": 150,
    "bodyColor": [255, 232, 105],
    "sides": 4,
    "movementSpeed": 0.5,

    "barrels": [
      {
        "angle": -1.5707963267948966,
        "offset": 0,
        "size": 135,
        "width": 1.7,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "drones",
        "type": "droneSpawner"
      },
      {
        "angle": 1.5707963267948966,
        "offset": 0,
        "size": 135,
        "width": 1.7,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "drones",
        "type": "droneSpawner"
      },
      {
        "angle": 0,
        "offset": 0,
        "size": 135,
        "width": 1.7,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "drones",
        "type": "droneSpawner"
      },
      {
        "angle": 3.141592653589793,
        "offset": 0,
        "size": 135,
        "width": 1.7,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "drones",
        "type": "droneSpawner"
      }
    ],

    "barrelStats": {
      "drones": {
        "name": "Square Spawner Stats",
        "recoilFactor": 1,
        "reloadTicks": formulas.barrelReloadTicks(0.25, 0),
        "droneCount": 7,
        "bullet": {
          "type": "necrodrone",
          "size": 110,
          "health": 25,
          "damagePerTick": 3.92,
          "targetSpeed": formulas.bulletTargetSpeed(1.7, 0),
          "scatterFactor": 1,
          "lifeLengthFactor": -1,
          "absorbtionFactor": 1,
        }
      }
    },
    "key": "summoner"
  },

/*
  "arena-closer": {
    "id": 16,
    "sizeFactor": 3.2,
    "bodyColor": [255,232,105],
    "health": 0,
    "name": "Arena Closer",
    "preAddon": null,
    "postAddon": null,
    "sides": 1,
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 75,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "delay": 0,
        "barrelStats": "main",
        "type": "normal"
      }
    ],
    "key": "arena-closer",
    "barrelStats": {
      "main": {
        "name": "Cannon Stats",
        "reloadTicks": 8,
        "recoilFactor": 0,
        "bullet": {
          "type": "bullet",
          "sizeFactor": 1,
          "health": 3750,
          "damage": 196,
          "targetSpeed": 61.5,
          "scatterFactor": 1,
          "lifeLengthFactor": 1,
          "absorbtionFactor": 1
        }
      }
    }
  },
  "destroyer-dominator": {
    "id": 45,
    "sizeFactor": 1,
    "bodyColor": [255,232,105],
    "name": "Destroyer Dominator",
    "health": 6148,
    "preAddon": "dominator",
    "postAddon": "dominator",
    "sides": 1,
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 80,
        "width": 0.83,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "delay": 0.001,
        "barrelStats": "main",
        "type": "normal"
      }
    ],
    "key": "destroyer-dominator",
    "barrelStats": {
      "main": {
        "name": "Cannon Stats",
        "reload": 3,
        "recoilFactor": 0,
        "bullet": {
          "type": "bullet",
          "sizeFactor": 1,
          "healthFactor": 100,
          "damageFactor": 10,
          "speedFactor": 1,
          "scatterFactor": 1,
          "lifeLengthFactor": 1,
          "absorbtionFactor": 0.1
        }
      }
    }
  },
  "gunner-dominator": {
    "id": 46,
    "bodyColor": [255,232,105],
    "name": "Gunner Dominator",
    "health": 6148,
    "preAddon": "dominator",
    "postAddon": "dominator",
    "sides": 1,
    "barrels": [
      {
        "angle": 0,
        "offset": -6,
        "size": 75,
        "width": 0.415,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "delay": 0.666,
        "barrelStats": "main",
        "type": "normal"
      },
      {
        "angle": 0,
        "offset": 6,
        "size": 75,
        "width": 0.415,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "delay": 0.333,
        "barrelStats": "main",
        "type": "normal"
      },
      {
        "angle": 0,
        "offset": 0,
        "size": 80,
        "width": 0.415,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "delay": 0.001,
        "barrelStats": "main",
        "type": "normal"
      }
    ],
    "key": "gunner-dominator",
    "barrelStats": {
      "main": {
        "name": "Cannon Stats",
        "reloadFactor": 0.3,
        "recoilFactor": 0,
        "bullet": {
          "type": "bullet",
          "sizeFactor": 0.6,
          "healthFactor": 5,
          "damageFactor": 1,
          "speedFactor": 1.2,
          "scatterFactor": 1,
          "lifeLengthFactor": 1,
          "absorbtionFactor": 1
        }
      }
    }
  },
  "trapper-dominator": {
    "id": 47,
    "bodyColor": [255,232,105],
    "name": "Trapper Dominator",
    "health": 6148,
    "preAddon": "dominator",
    "postAddon": null,
    "sides": 1,
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 60,
        "width": 0.5,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": "trapLauncher",
        "delay": 0,
        "barrelStats": "traps",
        "type": "trapLauncher"
      },
      {
        "angle": 0.7853981633974483,
        "offset": 0,
        "size": 60,
        "width": 0.5,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": "trapLauncher",
        "delay": 0,
        "barrelStats": "traps",
        "type": "trapLauncher"
      },
      {
        "angle": 1.5707963267948966,
        "offset": 0,
        "size": 60,
        "width": 0.5,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": "trapLauncher",
        "delay": 0,
        "barrelStats": "traps",
        "type": "trapLauncher"
      },
      {
        "angle": 2.356194490192345,
        "offset": 0,
        "size": 60,
        "width": 0.5,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": "trapLauncher",
        "delay": 0,
        "barrelStats": "traps",
        "type": "trapLauncher"
      },
      {
        "angle": 3.141592653589793,
        "offset": 0,
        "size": 60,
        "width": 0.5,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": "trapLauncher",
        "delay": 0,
        "barrelStats": "traps",
        "type": "trapLauncher"
      },
      {
        "angle": 3.9269908169872414,
        "offset": 0,
        "size": 60,
        "width": 0.5,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": "trapLauncher",
        "delay": 0,
        "barrelStats": "traps",
        "type": "trapLauncher"
      },
      {
        "angle": 4.71238898038469,
        "offset": 0,
        "size": 60,
        "width": 0.5,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": "trapLauncher",
        "delay": 0,
        "barrelStats": "traps",
        "type": "trapLauncher"
      },
      {
        "angle": 5.497787143782138,
        "offset": 0,
        "size": 60,
        "width": 0.5,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": "trapLauncher",
        "delay": 0,
        "barrelStats": "traps",
        "type": "trapLauncher"
      }
    ],
    "key": "trapper-dominator",
    "barrelStats": {
      "traps": {
        "name": "Trap Launcher Stats",
        "reloadFactor": 1.5,
        "recoilFactor": 0,
        "bullet": {
          "type": "trap",
          "sizeFactor": 0.8,
          "healthFactor": 20,
          "damageFactor": 3,
          "speedFactor": 4,
          "scatterFactor": 1,
          "lifeLengthFactor": 3.2,
          "absorbtionFactor": 1
        },
        "forceFire": true
      }
    }
  }
*/
}


// abstractBoss
// this.physicsData.values.absorbtionFactor = 0.05;
// this.scoreReward = 30000 * this.game.arena.shapeScoreRewardMultiplier;
// this.damagePerTick = 60;
// this.ai.viewRange = 2000;
// this.physicsData.values.size = 50 * Math.pow(1.01, 75 - 1);
// this.reloadTime = 15 * Math.pow(0.914, 7);
// health = 3000
// this.regenPerTick = this.healthData.values.maxHealth / 25000;

// defender 
// auto turret bullets
/*
bullet: {
...AutoTurretDefinition.bullet,
  speed: 2.3,
  damage: 0.75,
  health: 5.75,
  color: Color.Neutral
}
*/