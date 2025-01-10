import { Barrel } from "./tanksData";

export interface Boss {
  id?: number;
  name: string;
  level?: 0;
  sizeFactor: number;
  health: number;
  preAddon: string | null;
  postAddon: string | null;
  sides: number;
  barrels: Barrel[];  
  bodyColor: Array<number>
  barrelStats: {
    [key: string]: BossBarrelStats
  }
  key: string;
}


export interface BossBullet {
  type: string;
  sizeFactor: number;
  health: number;
  damage: number;
  targetSpeed: number;
  scatterFactor: number;
  lifeLengthFactor: number;
  absorbtionFactor: number;
}

export interface BossBarrelStats {
  name: string;
  reloadTicks: number;
  recoilFactor: number;
  droneCount?: number;
  bullet: BossBullet;
}

export interface BossesData {
  [key: string]: Boss;
}
/*
export const bossesData:BossesData = {
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
}
*/