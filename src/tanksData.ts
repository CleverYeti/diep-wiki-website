export interface Bullet {
  type: string;
  sizeFactor?: number;
  size?: number; // overrides sizeFactor
  healthFactor?: number;
  health?: number; // overrides healthFactor
  damageFactor?: number;
  damagePerTick?: number; // overrides damageFactor
  speedFactor?: number;
  targetSpeed?: number; // overrides speedFactor
  scatterFactor: number;
  lifeLengthFactor: number;
  absorbtionFactor: number;
}

export enum BarrelTypes {
  normal = "normal",
  autoCannon = "autoCannon",
  autoTurret = "autoTurret",
  trapLauncher = "trapLauncher",
  droneSpawner = "droneSpawner",
  swarmSpawner = "swarmSpawner",
  minionSpawner = "minionSpawner",
}

export interface Barrel {
  angle: number;
  offset: number;
  size: number;
  width: number;
  isTrapezoid: boolean;
  type?: BarrelTypes | string;
  trapezoidDirection: number;
  delay: number;
  barrelStats: string;
  basePosition?: number;
}

export interface BarrelStats {
  name: string;
  reloadFactor?: number;
  reloadTicks?: number; // overrides reloadFactor
  recoilFactor: number;
  droneCount?: number;
  canControlDrones?: boolean;
  forceFire?: boolean;
  bullet: Bullet;
}

export interface Flags {
  invisibility?: boolean;
  zoomAbility?: boolean;
  canClaimSquares?: boolean;
  devOnly?: boolean;
}

export interface Tank {
  id?: number;
  isBoss?: boolean;
  name: string;
  displayScale?: number;
  sizeFactor?: number;
  bodyRadius?: number; // overrides the default 50
  upgradeMessage?: string;
  levelRequirement?: number;
  health?: number; // override
  bodyDamagePerTick?: number; // override
  regenPerTick?: number; // override
  upgrades?: string[];
  flags?: Flags;
  visibilityRateShooting?: number;
  visibilityRateMoving?: number;
  invisibilityRate?: number;
  fieldFactor?: number;
  preAddon: string | null;
  postAddon: string | null;
  sides: number;
  borderWidth?: number;
  barrels: Barrel[];
  statPointSetup?: string;
  key: string;
  upgradesFrom?: string[];
  color?: number;
  bodyColor?: Array<number>
  barrelStats: {
    [key: string]: BarrelStats
  }
  movementSpeed?: number;
  absorbtionFactor?: number;
}

export interface TanksData {
  [key: string]: Tank;
}

export const tankColors: Array<Array<number>> = [
  [143, 255, 251], // aqua
  [180, 255, 143], // green
  [255, 142, 142], // red
  [254, 235, 141], // yellow
  [142, 178, 254], // blue
  [181, 142, 255], // purple
]

export interface StatPointSetup {
  names: Array<string>;
  limits: Array<number>;
}
export const statPointColors: Array<Array<number>> = [
  [252, 173, 118],
  [249, 67, 255],
  [133, 67, 255],
  [67, 127, 255],
  [255, 222, 67],
  [255, 67, 67],
  [130, 255, 67],
  [67, 255, 249]
]
export const statPointSetups: {
  [key: string]: StatPointSetup
} = {
  "normal": {
    names: [
      "Health Regen",
      "Max Health",
      "Body Damage",
      "Bullet Speed",
      "Bullet Penetration",
      "Bullet Damage",
      "Reload",
      "Movement Speed"
    ],
    limits: [7,7,7,7,7,7,7,7]
  },
  "drone-class": {
    names: [
      "Health Regen",
      "Max Health",
      "Body Damage",
      "Drone Speed",
      "Drone Penetration",
      "Drone Damage",
      "Reload",
      "Movement Speed"
    ],
    limits: [7,7,7,7,7,7,7,7]
  },
  "necromancer": {
    names: [
      "Health Regen",
      "Max Health",
      "Body Damage",
      "Drone Speed",
      "Drone Penetration",
      "Drone Damage",
      "Drone Count",
      "Movement Speed"
    ],
    limits: [7,7,7,7,7,7,7,7]
  },
  "smasher-class": {
    names: [
      "Health Regen",
      "Max Health",
      "Body Damage",
      "",
      "",
      "",
      "",
      "Movement Speed"
    ],
    limits: [10,10,10,0,0,0,0,10]
  },
  "auto-smasher": {
    names: [
      "Health Regen",
      "Max Health",
      "Body Damage",
      "Bullet Speed",
      "Bullet Penetration",
      "Bullet Damage",
      "Reload",
      "Movement Speed"
    ],
    limits: [10,10,10,10,10,10,10,10]
  }
}

export const tanksData:TanksData = {
  "basic": {
    "id": 0,
    "name": "Tank",
    "color": 0,
    "upgradeMessage": "",
    "upgrades": [
      "twin",
      "sniper",
      "machine-gun",
      "flank-guard",
      "smasher",
      "auto-tank"
    ],
    "flags": {},
    "fieldFactor": 1,
    "preAddon": null,
    "postAddon": null,
    "sides": 1,
    "borderWidth": 15,
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
      }
    ],
    "statPointSetup": "normal",
    "key": "basic",
    "upgradesFrom": [],
    "barrelStats": {
      "main": {
        "name": "Cannon Stats",
        "reloadFactor": 1,
        "recoilFactor": 1,
        "bullet": {
          "type": "bullet",
          "sizeFactor": 1,
          "healthFactor": 1,
          "damageFactor": 1,
          "speedFactor": 1,
          "scatterFactor": 1,
          "lifeLengthFactor": 1,
          "absorbtionFactor": 1
        }
      }
    }
  },
  "twin": {
    "id": 1,
    "name": "Twin",
    "upgradeMessage": "",
    "levelRequirement": 15,
    "upgrades": [
      "triple-shot",
      "quad-tank",
      "twin-flank"
    ],
    "flags": {},
    "fieldFactor": 1,
    "preAddon": null,
    "postAddon": null,
    "sides": 1,
    "borderWidth": 15,
    "barrels": [
      {
        "angle": 0,
        "offset": -26,
        "size": 95,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "main",
        "type": "normal"
      },
      {
        "angle": 0,
        "offset": 26,
        "size": 95,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0.5,
        "barrelStats": "main",
        "type": "normal"
      }
    ],
    "statPointSetup": "normal",
    "key": "twin",
    "upgradesFrom": [
      "basic"
    ],
    "color": 0,
    "barrelStats": {
      "main": {
        "name": "Cannon Stats",
        "reloadFactor": 1,
        "recoilFactor": 0.75,
        "bullet": {
          "type": "bullet",
          "sizeFactor": 1,
          "healthFactor": 0.9,
          "damageFactor": 0.65,
          "speedFactor": 1,
          "scatterFactor": 1,
          "lifeLengthFactor": 1,
          "absorbtionFactor": 1
        }
      }
    }
  },
  "triplet": {
    "id": 2,
    "name": "Triplet",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {},
    "fieldFactor": 1,
    "preAddon": null,
    "postAddon": null,
    "sides": 1,
    "borderWidth": 15,
    "barrels": [
      {
        "angle": 0,
        "offset": -26,
        "size": 80,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0.5,
        "barrelStats": "main",
        "type": "normal"
      },
      {
        "angle": 0,
        "offset": 26,
        "size": 80,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0.5,
        "barrelStats": "main",
        "type": "normal"
      },
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
      }
    ],
    "statPointSetup": "normal",
    "key": "triplet",
    "upgradesFrom": [
      "triple-shot"
    ],
    "color": 0,
    "barrelStats": {
      "main": {
        "name": "Cannon Stats",
        "reloadFactor": 1,
        "recoilFactor": 0.5,
        "bullet": {
          "type": "bullet",
          "sizeFactor": 1,
          "healthFactor": 0.7,
          "damageFactor": 0.6,
          "speedFactor": 1,
          "scatterFactor": 1,
          "lifeLengthFactor": 1,
          "absorbtionFactor": 1
        }
      }
    }
  },
  "triple-shot": {
    "id": 3,
    "name": "Triple Shot",
    "upgradeMessage": "",
    "levelRequirement": 30,
    "upgrades": [
      "triplet",
      "penta-shot",
      "spread-shot"
    ],
    "flags": {},
    "fieldFactor": 1,
    "preAddon": null,
    "postAddon": null,
    "sides": 1,
    "borderWidth": 15,
    "barrels": [
      {
        "angle": -0.7853981633974483,
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
        "angle": 0.7853981633974483,
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
        "angle": 0,
        "offset": 0,
        "size": 95,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "main",
        "type": "normal"
      }
    ],
    "statPointSetup": "normal",
    "key": "triple-shot",
    "upgradesFrom": [
      "twin"
    ],
    "color": 0,
    "barrelStats": {
      "main": {
        "name": "Cannon Stats",
        "reloadFactor": 1,
        "recoilFactor": 1,
        "bullet": {
          "type": "bullet",
          "sizeFactor": 1,
          "healthFactor": 1,
          "damageFactor": 0.7,
          "speedFactor": 1,
          "scatterFactor": 1,
          "lifeLengthFactor": 1,
          "absorbtionFactor": 1
        }
      }
    }
  },
  "quad-tank": {
    "id": 4,
    "name": "Quad Tank",
    "upgradeMessage": "",
    "levelRequirement": 30,
    "upgrades": [
      "octo-tank",
      "auto-5"
    ],
    "flags": {},
    "fieldFactor": 1,
    "preAddon": null,
    "postAddon": null,
    "sides": 1,
    "borderWidth": 15,
    "barrels": [
      {
        "angle": 3.141592653589793,
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
        "angle": -1.5707963267948966,
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
        "angle": 1.5707963267948966,
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
        "angle": 0,
        "offset": 0,
        "size": 95,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "main",
        "type": "normal"
      }
    ],
    "statPointSetup": "normal",
    "key": "quad-tank",
    "upgradesFrom": [
      "twin",
      "flank-guard"
    ],
    "color": 1,
    "barrelStats": {
      "main": {
        "name": "Cannon Stats",
        "reloadFactor": 1,
        "recoilFactor": 1,
        "bullet": {
          "type": "bullet",
          "sizeFactor": 1,
          "healthFactor": 1,
          "damageFactor": 0.75,
          "speedFactor": 1,
          "scatterFactor": 1,
          "lifeLengthFactor": 1,
          "absorbtionFactor": 1
        }
      }
    }
  },
  "octo-tank": {
    "id": 5,
    "name": "Octo Tank",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {},
    "fieldFactor": 1,
    "preAddon": null,
    "postAddon": null,
    "sides": 1,
    "borderWidth": 15,
    "barrels": [
      {
        "angle": -0.7853981633974483,
        "offset": 0,
        "size": 95,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0.5,
        "barrelStats": "main",
        "type": "normal"
      },
      {
        "angle": 0.7853981633974483,
        "offset": 0,
        "size": 95,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0.5,
        "barrelStats": "main",
        "type": "normal"
      },
      {
        "angle": -2.356194490192345,
        "offset": 0,
        "size": 95,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0.5,
        "barrelStats": "main",
        "type": "normal"
      },
      {
        "angle": 2.356194490192345,
        "offset": 0,
        "size": 95,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0.5,
        "barrelStats": "main",
        "type": "normal"
      },
      {
        "angle": 3.141592653589793,
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
        "angle": -1.5707963267948966,
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
        "angle": 1.5707963267948966,
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
        "angle": 0,
        "offset": 0,
        "size": 95,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "main",
        "type": "normal"
      }
    ],
    "statPointSetup": "normal",
    "key": "octo-tank",
    "upgradesFrom": [
      "quad-tank"
    ],
    "color": 0,
    "barrelStats": {
      "main": {
        "name": "Barrels",
        "reloadFactor": 1,
        "recoilFactor": 1,
        "bullet": {
          "type": "bullet",
          "sizeFactor": 1,
          "healthFactor": 1,
          "damageFactor": 0.65,
          "speedFactor": 1,
          "scatterFactor": 1,
          "lifeLengthFactor": 1,
          "absorbtionFactor": 1
        }
      }
    }
  },
  "sniper": {
    "id": 6,
    "name": "Sniper",
    "upgradeMessage": "",
    "levelRequirement": 15,
    "upgrades": [
      "assassin",
      "overseer",
      "hunter",
      "trapper"
    ],
    "flags": {},
    "fieldFactor": 0.9,
    "preAddon": null,
    "postAddon": null,
    "sides": 1,
    "borderWidth": 15,
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 110,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "main",
        "type": "normal"
      }
    ],
    "statPointSetup": "normal",
    "key": "sniper",
    "upgradesFrom": [
      "basic"
    ],
    "color": 1,
    "barrelStats": {
      "main": {
        "name": "Cannon Stats",
        "reloadFactor": 1.5,
        "recoilFactor": 3,
        "bullet": {
          "type": "bullet",
          "sizeFactor": 1,
          "healthFactor": 1,
          "damageFactor": 1,
          "speedFactor": 1.5,
          "scatterFactor": 0.3,
          "lifeLengthFactor": 1,
          "absorbtionFactor": 1
        }
      }
    }
  },
  "machine-gun": {
    "id": 7,
    "name": "Machine Gun",
    "upgradeMessage": "",
    "levelRequirement": 15,
    "upgrades": [
      "destroyer",
      "gunner",
      "sprayer"
    ],
    "flags": {},
    "fieldFactor": 1,
    "preAddon": null,
    "postAddon": null,
    "sides": 1,
    "borderWidth": 15,
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 95,
        "width": 1,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "main",
        "type": "normal"
      }
    ],
    "statPointSetup": "normal",
    "key": "machine-gun",
    "upgradesFrom": [
      "basic"
    ],
    "color": 2,
    "barrelStats": {
      "main": {
        "name": "Cannon Stats",
        "reloadFactor": 0.5,
        "recoilFactor": 1,
        "bullet": {
          "type": "bullet",
          "sizeFactor": 1,
          "healthFactor": 1,
          "damageFactor": 0.7,
          "speedFactor": 1,
          "scatterFactor": 3,
          "lifeLengthFactor": 1,
          "absorbtionFactor": 1
        }
      }
    }
  },
  "flank-guard": {
    "id": 8,
    "name": "Flank Guard",
    "upgradeMessage": "",
    "levelRequirement": 15,
    "upgrades": [
      "tri-angle",
      "quad-tank",
      "twin-flank",
      "auto-3"
    ],
    "flags": {},
    "fieldFactor": 1,
    "preAddon": null,
    "postAddon": null,
    "sides": 1,
    "borderWidth": 15,
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
        "angle": 3.141592653589793,
        "offset": 0,
        "size": 80,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "main",
        "type": "normal"
      }
    ],
    "statPointSetup": "normal",
    "key": "flank-guard",
    "upgradesFrom": [
      "basic"
    ],
    "color": 3,
    "barrelStats": {
      "main": {
        "name": "Cannon Stats",
        "reloadFactor": 1,
        "recoilFactor": 1,
        "bullet": {
          "type": "bullet",
          "sizeFactor": 1,
          "healthFactor": 1,
          "damageFactor": 1,
          "speedFactor": 1,
          "scatterFactor": 1,
          "lifeLengthFactor": 1,
          "absorbtionFactor": 1
        }
      }
    }
  },
  "tri-angle": {
    "id": 9,
    "name": "Tri-Angle",
    "upgradeMessage": "",
    "levelRequirement": 30,
    "upgrades": [
      "booster",
      "fighter"
    ],
    "flags": {},
    "fieldFactor": 1,
    "preAddon": null,
    "postAddon": null,
    "sides": 1,
    "borderWidth": 15,
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
        "angle": 3.665191429188092,
        "offset": 0,
        "size": 80,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0.5,
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
        "delay": 0.5,
        "barrelStats": "back",
        "type": "normal"
      }
    ],
    "statPointSetup": "normal",
    "key": "tri-angle",
    "upgradesFrom": [
      "flank-guard"
    ],
    "color": 0,
    "barrelStats": {
      "main": {
        "name": "Front Cannon Stats",
        "reloadFactor": 1,
        "recoilFactor": 0.2,
        "bullet": {
          "type": "bullet",
          "sizeFactor": 1,
          "healthFactor": 1,
          "damageFactor": 1,
          "speedFactor": 1,
          "scatterFactor": 1,
          "lifeLengthFactor": 1,
          "absorbtionFactor": 1
        }
      },
      "back": {
        "name": "Back Cannon Stats",
        "reloadFactor": 1,
        "recoilFactor": 2.5,
        "bullet": {
          "type": "bullet",
          "sizeFactor": 1,
          "healthFactor": 1,
          "damageFactor": 0.2,
          "speedFactor": 1,
          "scatterFactor": 1,
          "lifeLengthFactor": 0.5,
          "absorbtionFactor": 1
        }
      }
    }
  },
  "destroyer": {
    "id": 10,
    "name": "Destroyer",
    "upgradeMessage": "",
    "levelRequirement": 30,
    "upgrades": [
      "hybrid",
      "annihilator",
      "skimmer",
      "rocketeer",
      "glider"
    ],
    "flags": {},
    "fieldFactor": 1,
    "preAddon": null,
    "postAddon": null,
    "sides": 1,
    "borderWidth": 15,
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 95,
        "width": 1.7,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "main",
        "type": "normal"
      }
    ],
    "statPointSetup": "normal",
    "key": "destroyer",
    "upgradesFrom": [
      "machine-gun"
    ],
    "color": 0,
    "barrelStats": {
      "main": {
        "name": "Cannon Stats",
        "reloadFactor": 4,
        "recoilFactor": 15,
        "bullet": {
          "type": "bullet",
          "sizeFactor": 1,
          "healthFactor": 2,
          "damageFactor": 3,
          "speedFactor": 0.7,
          "scatterFactor": 1,
          "lifeLengthFactor": 1,
          "absorbtionFactor": 0.1
        }
      }
    }
  },
  "overseer": {
    "id": 11,
    "name": "Overseer",
    "upgradeMessage": "Use your left mouse button to control the drones",
    "levelRequirement": 30,
    "upgrades": [
      "overlord",
      "necromancer",
      "manager",
      "overtrapper",
      "battleship",
      "factory"
    ],
    "flags": {},
    "fieldFactor": 0.9,
    "preAddon": null,
    "postAddon": null,
    "sides": 1,
    "borderWidth": 15,
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
      }
    ],
    "statPointSetup": "drone-class",
    "key": "overseer",
    "upgradesFrom": [
      "sniper"
    ],
    "color": 1,
    "barrelStats": {
      "drones": {
        "name": "Drone Spawner Stats",
        "reloadFactor": 6,
        "recoilFactor": 1,
        "bullet": {
          "type": "drone",
          "sizeFactor": 1,
          "healthFactor": 2,
          "damageFactor": 0.7,
          "speedFactor": 0.8,
          "scatterFactor": 1,
          "lifeLengthFactor": -1,
          "absorbtionFactor": 1
        },
        "droneCount": 4,
        "canControlDrones": true
      }
    }
  },
  "overlord": {
    "id": 12,
    "name": "Overlord",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {},
    "fieldFactor": 0.9,
    "preAddon": null,
    "postAddon": null,
    "sides": 1,
    "borderWidth": 15,
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
    "statPointSetup": "drone-class",
    "key": "overlord",
    "upgradesFrom": [
      "overseer"
    ],
    "color": 0,
    "barrelStats": {
      "drones": {
        "name": "Drone Spawner Stats",
        "reloadFactor": 6,
        "recoilFactor": 1,
        "bullet": {
          "type": "drone",
          "sizeFactor": 1,
          "healthFactor": 2,
          "damageFactor": 0.7,
          "speedFactor": 0.8,
          "scatterFactor": 1,
          "lifeLengthFactor": -1,
          "absorbtionFactor": 1
        },
        "droneCount": 2,
        "canControlDrones": true
      }
    }
  },
  "twin-flank": {
    "id": 13,
    "name": "Twin Flank",
    "upgradeMessage": "",
    "levelRequirement": 30,
    "upgrades": [
      "triple-twin",
      "battleship"
    ],
    "flags": {},
    "fieldFactor": 1,
    "preAddon": null,
    "postAddon": null,
    "sides": 1,
    "borderWidth": 15,
    "barrels": [
      {
        "angle": 0,
        "offset": -26,
        "size": 95,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "main",
        "type": "normal"
      },
      {
        "angle": 0,
        "offset": 26,
        "size": 95,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0.5,
        "barrelStats": "main",
        "type": "normal"
      },
      {
        "angle": 3.141592653589793,
        "offset": -26,
        "size": 95,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "main",
        "type": "normal"
      },
      {
        "angle": 3.141592653589793,
        "offset": 26,
        "size": 95,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0.5,
        "barrelStats": "main",
        "type": "normal"
      }
    ],
    "statPointSetup": "normal",
    "key": "twin-flank",
    "upgradesFrom": [
      "twin",
      "flank-guard"
    ],
    "color": 2,
    "barrelStats": {
      "main": {
        "name": "Cannon Stats",
        "reloadFactor": 1,
        "recoilFactor": 1,
        "bullet": {
          "type": "bullet",
          "sizeFactor": 1,
          "healthFactor": 1,
          "damageFactor": 0.5,
          "speedFactor": 1,
          "scatterFactor": 1,
          "lifeLengthFactor": 1,
          "absorbtionFactor": 1
        }
      }
    }
  },
  "penta-shot": {
    "id": 14,
    "name": "Penta Shot",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {},
    "fieldFactor": 1,
    "preAddon": null,
    "postAddon": null,
    "sides": 1,
    "borderWidth": 15,
    "barrels": [
      {
        "angle": -0.7853981633974483,
        "offset": 0,
        "size": 80,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0.66,
        "barrelStats": "main",
        "type": "normal"
      },
      {
        "angle": 0.7853981633974483,
        "offset": 0,
        "size": 80,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0.66,
        "barrelStats": "main",
        "type": "normal"
      },
      {
        "angle": -0.39269908169872414,
        "offset": 0,
        "size": 95,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0.33,
        "barrelStats": "main",
        "type": "normal"
      },
      {
        "angle": 0.39269908169872414,
        "offset": 0,
        "size": 95,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0.33,
        "barrelStats": "main",
        "type": "normal"
      },
      {
        "angle": 0,
        "offset": 0,
        "size": 110,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "main",
        "type": "normal"
      }
    ],
    "statPointSetup": "normal",
    "key": "penta-shot",
    "upgradesFrom": [
      "triple-shot"
    ],
    "color": 1,
    "barrelStats": {
      "main": {
        "name": "Cannon Stats",
        "reloadFactor": 1,
        "recoilFactor": 0.7,
        "bullet": {
          "type": "bullet",
          "sizeFactor": 1,
          "healthFactor": 1,
          "damageFactor": 0.55,
          "speedFactor": 1,
          "scatterFactor": 1,
          "lifeLengthFactor": 1,
          "absorbtionFactor": 1
        }
      }
    }
  },
  "assassin": {
    "id": 15,
    "name": "Assassin",
    "upgradeMessage": "",
    "levelRequirement": 30,
    "upgrades": [
      "ranger",
      "stalker"
    ],
    "flags": {},
    "fieldFactor": 0.8,
    "preAddon": null,
    "postAddon": null,
    "sides": 1,
    "borderWidth": 15,
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 120,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "main",
        "type": "normal"
      }
    ],
    "statPointSetup": "normal",
    "key": "assassin",
    "upgradesFrom": [
      "sniper"
    ],
    "color": 0,
    "barrelStats": {
      "main": {
        "name": "Cannon Stats",
        "reloadFactor": 2,
        "recoilFactor": 3,
        "bullet": {
          "type": "bullet",
          "sizeFactor": 1,
          "healthFactor": 1,
          "damageFactor": 1,
          "speedFactor": 1.5,
          "scatterFactor": 0.3,
          "lifeLengthFactor": 1,
          "absorbtionFactor": 1
        }
      }
    }
  },
  "necromancer": {
    "id": 17,
    "name": "Necromancer",
    "bodyRadius": 65,
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {
      "canClaimSquares": true,
    },
    "fieldFactor": 0.9,
    "preAddon": null,
    "postAddon": null,
    "sides": 4,
    "borderWidth": 15,
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
        "type": "normal"
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
        "type": "normal"
      }
    ],
    "statPointSetup": "necromancer",
    "key": "necromancer",
    "upgradesFrom": [
      "overseer"
    ],
    "color": 1,
    "barrelStats": {
      "drones": {
        "name": "Drone Spawner Stats",
        "reloadFactor": 6,
        "recoilFactor": 1,
        "bullet": {
          "type": "necrodrone",
          "sizeFactor": 1,
          "healthFactor": 2,
          "damageFactor": 1.68,
          "speedFactor": 0.72,
          "scatterFactor": 1,
          "lifeLengthFactor": -1,
          "absorbtionFactor": 1
        },
        "droneCount": 0,
        "canControlDrones": true
      }
    }
  },
  "triple-twin": {
    "id": 18,
    "name": "Triple Twin",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {},
    "fieldFactor": 1,
    "preAddon": null,
    "postAddon": null,
    "sides": 1,
    "borderWidth": 15,
    "barrels": [
      {
        "angle": 0,
        "offset": -26,
        "size": 95,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "main",
        "type": "normal"
      },
      {
        "angle": 0,
        "offset": 26,
        "size": 95,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0.5,
        "barrelStats": "main",
        "type": "normal"
      },
      {
        "angle": 2.0943951023931953,
        "offset": -26,
        "size": 95,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "main",
        "type": "normal"
      },
      {
        "angle": 2.0943951023931953,
        "offset": 26,
        "size": 95,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0.5,
        "barrelStats": "main",
        "type": "normal"
      },
      {
        "angle": -2.0943951023931953,
        "offset": -26,
        "size": 95,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "main",
        "type": "normal"
      },
      {
        "angle": -2.0943951023931953,
        "offset": 26,
        "size": 95,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0.5,
        "barrelStats": "main",
        "type": "normal"
      }
    ],
    "statPointSetup": "normal",
    "key": "triple-twin",
    "upgradesFrom": [
      "twin-flank"
    ],
    "color": 0,
    "barrelStats": {
      "main": {
        "name": "Cannon Stats",
        "reloadFactor": 1,
        "recoilFactor": 1,
        "bullet": {
          "type": "bullet",
          "sizeFactor": 1,
          "healthFactor": 1,
          "damageFactor": 0.5,
          "speedFactor": 1,
          "scatterFactor": 1,
          "lifeLengthFactor": 1,
          "absorbtionFactor": 1
        }
      }
    }
  },
  "hunter": {
    "id": 19,
    "name": "Hunter",
    "upgradeMessage": "",
    "levelRequirement": 30,
    "upgrades": [
      "predator",
      "streamliner"
    ],
    "flags": {},
    "fieldFactor": 0.85,
    "preAddon": null,
    "postAddon": null,
    "sides": 1,
    "borderWidth": 15,
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 110,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "main",
        "type": "normal"
      },
      {
        "angle": 0,
        "offset": 0,
        "size": 95,
        "width": 1.35,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0.2,
        "barrelStats": "main",
        "type": "normal"
      }
    ],
    "statPointSetup": "normal",
    "key": "hunter",
    "upgradesFrom": [
      "sniper"
    ],
    "color": 2,
    "barrelStats": {
      "main": {
        "name": "Cannon Stats",
        "reloadFactor": 2.5,
        "recoilFactor": 0.3,
        "bullet": {
          "type": "bullet",
          "sizeFactor": 0.7,
          "healthFactor": 1,
          "damageFactor": 0.75,
          "speedFactor": 1.4,
          "scatterFactor": 0.3,
          "lifeLengthFactor": 1,
          "absorbtionFactor": 1
        }
      }
    }
  },
  "gunner": {
    "id": 20,
    "name": "Gunner",
    "upgradeMessage": "",
    "levelRequirement": 30,
    "upgrades": [
      "auto-gunner",
      "gunner-trapper",
      "streamliner"
    ],
    "flags": {},
    "fieldFactor": 1,
    "preAddon": null,
    "postAddon": null,
    "sides": 1,
    "borderWidth": 15,
    "barrels": [
      {
        "angle": 0,
        "offset": -32,
        "size": 65,
        "width": 0.6,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0.5,
        "barrelStats": "main",
        "type": "normal"
      },
      {
        "angle": 0,
        "offset": 32,
        "size": 65,
        "width": 0.6,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0.75,
        "barrelStats": "main",
        "type": "normal"
      },
      {
        "angle": 0,
        "offset": -17,
        "size": 85,
        "width": 0.6,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "main",
        "type": "normal"
      },
      {
        "angle": 0,
        "offset": 17,
        "size": 85,
        "width": 0.6,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0.25,
        "barrelStats": "main",
        "type": "normal"
      }
    ],
    "statPointSetup": "normal",
    "key": "gunner",
    "upgradesFrom": [
      "machine-gun"
    ],
    "color": 1,
    "barrelStats": {
      "main": {
        "name": "Cannon Stats",
        "reloadFactor": 1,
        "recoilFactor": 0.2,
        "bullet": {
          "type": "bullet",
          "sizeFactor": 1,
          "healthFactor": 0.45,
          "damageFactor": 0.5,
          "speedFactor": 1.1,
          "scatterFactor": 1,
          "lifeLengthFactor": 1,
          "absorbtionFactor": 1
        }
      }
    }
  },
  "stalker": {
    "id": 21,
    "name": "Stalker",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {
      "invisibility": true,
    },
    "fieldFactor": 0.8,
    "preAddon": null,
    "postAddon": null,
    "sides": 1,
    "borderWidth": 15,
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 120,
        "width": 1,
        "isTrapezoid": true,
        "trapezoidDirection": 3.141592653589793,
        "delay": 0,
        "barrelStats": "main",
        "type": "normal"
      }
    ],
    "statPointSetup": "normal",
    "key": "stalker",
    "upgradesFrom": [
      "assassin"
    ],
    "color": 1,
    "barrelStats": {
      "main": {
        "name": "Cannon Stats",
        "reloadFactor": 2,
        "recoilFactor": 3,
        "bullet": {
          "type": "bullet",
          "sizeFactor": 1,
          "healthFactor": 1,
          "damageFactor": 1,
          "speedFactor": 1.5,
          "scatterFactor": 0.3,
          "lifeLengthFactor": 1,
          "absorbtionFactor": 1
        }
      }
    }
  },
  "ranger": {
    "id": 22,
    "name": "Ranger",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {},
    "fieldFactor": 0.7,
    "preAddon": null,
    "postAddon": "ranger",
    "sides": 1,
    "borderWidth": 15,
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 120,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "main",
        "type": "normal"
      }
    ],
    "statPointSetup": "normal",
    "key": "ranger",
    "upgradesFrom": [
      "assassin"
    ],
    "color": 0,
    "barrelStats": {
      "main": {
        "name": "Cannon Stats",
        "reloadFactor": 2,
        "recoilFactor": 3,
        "bullet": {
          "type": "bullet",
          "sizeFactor": 1,
          "healthFactor": 1,
          "damageFactor": 1,
          "speedFactor": 1.5,
          "scatterFactor": 0.3,
          "lifeLengthFactor": 1,
          "absorbtionFactor": 1
        }
      }
    }
  },
  "booster": {
    "id": 23,
    "name": "Booster",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {},
    "fieldFactor": 1,
    "preAddon": null,
    "postAddon": null,
    "sides": 1,
    "borderWidth": 15,
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
    "statPointSetup": "normal",
    "key": "booster",
    "upgradesFrom": [
      "tri-angle"
    ],
    "color": 0,
    "barrelStats": {
      "main": {
        "name": "Front Cannon Stats",
        "reloadFactor": 1,
        "recoilFactor": 0.2,
        "bullet": {
          "type": "bullet",
          "sizeFactor": 1,
          "healthFactor": 1,
          "damageFactor": 1,
          "speedFactor": 1,
          "scatterFactor": 1,
          "lifeLengthFactor": 1,
          "absorbtionFactor": 1
        }
      },
      "diagonal": {
        "name": "Diagonal Cannon Stats",
        "reloadFactor": 1,
        "recoilFactor": 0.2,
        "bullet": {
          "type": "bullet",
          "sizeFactor": 1,
          "healthFactor": 1,
          "damageFactor": 0.2,
          "speedFactor": 1,
          "scatterFactor": 1,
          "lifeLengthFactor": 0.5,
          "absorbtionFactor": 1
        }
      },
      "back": {
        "name": "Back Cannon Stats",
        "reloadFactor": 1,
        "recoilFactor": 2.5,
        "bullet": {
          "type": "bullet",
          "sizeFactor": 1,
          "healthFactor": 1,
          "damageFactor": 0.2,
          "speedFactor": 1,
          "scatterFactor": 1,
          "lifeLengthFactor": 0.5,
          "absorbtionFactor": 1
        }
      }
    }
  },
  "fighter": {
    "id": 24,
    "name": "Fighter",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {},
    "fieldFactor": 1,
    "preAddon": null,
    "postAddon": null,
    "sides": 1,
    "borderWidth": 15,
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
        "angle": 1.5707963267948966,
        "offset": 0,
        "size": 80,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "side",
        "type": "normal"
      },
      {
        "angle": -1.5707963267948966,
        "offset": 0,
        "size": 80,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "side",
        "type": "normal"
      },
      {
        "angle": 3.665191429188092,
        "offset": 0,
        "size": 80,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0.5,
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
        "delay": 0.5,
        "barrelStats": "back",
        "type": "normal"
      }
    ],
    "statPointSetup": "normal",
    "key": "fighter",
    "upgradesFrom": [
      "tri-angle"
    ],
    "color": 1,
    "barrelStats": {
      "main": {
        "name": "Front Cannon Stats",
        "reloadFactor": 1,
        "recoilFactor": 0.2,
        "bullet": {
          "type": "bullet",
          "sizeFactor": 1,
          "healthFactor": 1,
          "damageFactor": 1,
          "speedFactor": 1,
          "scatterFactor": 1,
          "lifeLengthFactor": 1,
          "absorbtionFactor": 1
        }
      },
      "side": {
        "name": "Side Cannon Stats",
        "reloadFactor": 1.5,
        "recoilFactor": 1,
        "bullet": {
          "type": "bullet",
          "sizeFactor": 1,
          "healthFactor": 1,
          "damageFactor": 0.8,
          "speedFactor": 1,
          "scatterFactor": 1,
          "lifeLengthFactor": 1,
          "absorbtionFactor": 1
        }
      },
      "back": {
        "name": "Back Cannon Stats",
        "reloadFactor": 1,
        "recoilFactor": 2.5,
        "bullet": {
          "type": "bullet",
          "sizeFactor": 1,
          "healthFactor": 1,
          "damageFactor": 0.2,
          "speedFactor": 1,
          "scatterFactor": 1,
          "lifeLengthFactor": 0.5,
          "absorbtionFactor": 1
        }
      }
    }
  },
  "hybrid": {
    "id": 25,
    "name": "Hybrid",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {},
    "fieldFactor": 1,
    "preAddon": null,
    "postAddon": null,
    "sides": 1,
    "borderWidth": 15,
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 95,
        "width": 1.7,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "main",
        "type": "normal"
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
    "statPointSetup": "normal",
    "key": "hybrid",
    "upgradesFrom": [
      "destroyer"
    ],
    "color": 0,
    "barrelStats": {
      "main": {
        "name": "Cannon Stats",
        "reloadFactor": 4,
        "recoilFactor": 15,
        "bullet": {
          "type": "bullet",
          "sizeFactor": 1,
          "healthFactor": 2,
          "damageFactor": 3,
          "speedFactor": 0.7,
          "scatterFactor": 1,
          "lifeLengthFactor": 1,
          "absorbtionFactor": 0.1
        }
      },
      "drones": {
        "name": "Drone Spawner Stats",
        "reloadFactor": 6,
        "recoilFactor": 1,
        "bullet": {
          "type": "drone",
          "sizeFactor": 1,
          "healthFactor": 1.4,
          "damageFactor": 0.7,
          "speedFactor": 1,
          "scatterFactor": 1,
          "lifeLengthFactor": -1,
          "absorbtionFactor": 1
        },
        "droneCount": 2,
        "canControlDrones": false
      }
    }
  },
  "manager": {
    "id": 26,
    "name": "Manager",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {
      "invisibility": true,
    },
    "visibilityRateShooting": 0,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 0.9,
    "preAddon": null,
    "postAddon": null,
    "sides": 1,
    "borderWidth": 15,
    "barrels": [
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
      }
    ],
    "statPointSetup": "drone-class",
    "key": "manager",
    "upgradesFrom": [
      "overseer"
    ],
    "color": 2,
    "barrelStats": {
      "drones": {
        "name": "Drone Spawner Stats",
        "reloadFactor": 3,
        "recoilFactor": 1,
        "bullet": {
          "type": "drone",
          "sizeFactor": 1,
          "healthFactor": 2,
          "damageFactor": 0.7,
          "speedFactor": 0.8,
          "scatterFactor": 1,
          "lifeLengthFactor": -1,
          "absorbtionFactor": 1
        },
        "droneCount": 8,
        "canControlDrones": true
      }
    }
  },
  "mothership": {
    "id": 27,
    "name": "Mothership",
    "upgradeMessage": "",
    "levelRequirement": 140,
    "upgrades": [],
    "flags": {},
    "fieldFactor": 1,
    // "absorbtionFactor": 0.01,
    "preAddon": null,
    "postAddon": null,
    "sides": 16,
    "borderWidth": 140,
    "barrels": [
      {
        "angle": 0.19634954084936207,
        "offset": 0,
        "size": 60,
        "width": 0.25,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "controllableDrones",
        "type": "droneSpawner"
      },
      {
        "angle": 0.5890486225480862,
        "offset": 0,
        "size": 60,
        "width": 0.25,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "autoDrones",
        "type": "droneSpawner"
      },
      {
        "angle": 0.9817477042468103,
        "offset": 0,
        "size": 60,
        "width": 0.25,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "controllableDrones",
        "type": "droneSpawner"
      },
      {
        "angle": 1.3744467859455345,
        "offset": 0,
        "size": 60,
        "width": 0.25,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "autoDrones",
        "type": "droneSpawner"
      },
      {
        "angle": 1.7671458676442586,
        "offset": 0,
        "size": 60,
        "width": 0.25,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "controllableDrones",
        "type": "droneSpawner"
      },
      {
        "angle": 2.159844949342983,
        "offset": 0,
        "size": 60,
        "width": 0.25,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "autoDrones",
        "type": "droneSpawner"
      },
      {
        "angle": 2.552544031041707,
        "offset": 0,
        "size": 60,
        "width": 0.25,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "controllableDrones",
        "type": "droneSpawner"
      },
      {
        "angle": 2.9452431127404313,
        "offset": 0,
        "size": 60,
        "width": 0.25,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "autoDrones",
        "type": "droneSpawner"
      },
      {
        "angle": 3.3379421944391554,
        "offset": 0,
        "size": 60,
        "width": 0.25,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "controllableDrones",
        "type": "droneSpawner"
      },
      {
        "angle": 3.7306412761378795,
        "offset": 0,
        "size": 60,
        "width": 0.25,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "autoDrones",
        "type": "droneSpawner"
      },
      {
        "angle": 4.12333992150429,
        "offset": 0,
        "size": 60,
        "width": 0.25,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "controllableDrones",
        "type": "droneSpawner"
      },
      {
        "angle": 4.516039439535327,
        "offset": 0,
        "size": 60,
        "width": 0.25,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "autoDrones",
        "type": "droneSpawner"
      },
      {
        "angle": 4.908738521234052,
        "offset": 0,
        "size": 60,
        "width": 0.25,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "controllableDrones",
        "type": "droneSpawner"
      },
      {
        "angle": 5.301437166600463,
        "offset": 0,
        "size": 60,
        "width": 0.25,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "autoDrones",
        "type": "droneSpawner"
      },
      {
        "angle": 5.6941366846315,
        "offset": 0,
        "size": 60,
        "width": 0.25,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "controllableDrones",
        "type": "droneSpawner"
      },
      {
        "angle": 6.086835766330224,
        "offset": 0,
        "size": 60,
        "width": 0.25,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "autoDrones",
        "type": "droneSpawner"
      }
    ],
    "statPointSetup": "drone-class",
    "key": "mothership",
    "color": 4,
    "upgradesFrom": [],
    "barrelStats": {
      "controllableDrones": {
        "name": "Controllable Drone Spawner Stats",
        "reloadFactor": 6,
        "recoilFactor": 0,
        "bullet": {
          "type": "drone",
          "sizeFactor": 1,
          "healthFactor": 2,
          "damageFactor": 0.7,
          "speedFactor": 0.48,
          "scatterFactor": 1,
          "lifeLengthFactor": -1,
          "absorbtionFactor": 1
        },
        "droneCount": 2,
        "canControlDrones": true
      },
      "autoDrones": {
        "name": "Automatic Drone Spawner Stats",
        "reloadFactor": 6,
        "recoilFactor": 0,
        "bullet": {
          "type": "drone",
          "sizeFactor": 1,
          "healthFactor": 2,
          "damageFactor": 0.7,
          "speedFactor": 0.48,
          "scatterFactor": 1,
          "lifeLengthFactor": -1,
          "absorbtionFactor": 1
        },
        "droneCount": 2,
        "canControlDrones": false
      }
    }
  },
  "predator": {
    "id": 28,
    "name": "Predator",
    "upgradeMessage": "Use your right mouse button to look further in the direction you're facing",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {
      "zoomAbility": true,
    },
    "fieldFactor": 0.85,
    "preAddon": null,
    "postAddon": null,
    "sides": 1,
    "borderWidth": 15,
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 110,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "dc9843d5bb85417dad5dd8a13292868a",
        "type": "normal"
      },
      {
        "angle": 0,
        "offset": 0,
        "size": 95,
        "width": 1.35,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0.2,
        "barrelStats": "dc9843d5bb85417dad5dd8a13292868a",
        "type": "normal"
      },
      {
        "angle": 0,
        "offset": 0,
        "size": 80,
        "width": 1.7,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0.4,
        "barrelStats": "dc9843d5bb85417dad5dd8a13292868a",
        "type": "normal"
      }
    ],
    "statPointSetup": "normal",
    "key": "predator",
    "upgradesFrom": [
      "hunter"
    ],
    "color": 0,
    "barrelStats": {
      "dc9843d5bb85417dad5dd8a13292868a": {
        "name": "Main",
        "reloadFactor": 3,
        "recoilFactor": 0.3,
        "bullet": {
          "type": "bullet",
          "sizeFactor": 0.7,
          "healthFactor": 1,
          "damageFactor": 0.75,
          "speedFactor": 1.4,
          "scatterFactor": 0.3,
          "lifeLengthFactor": 1,
          "absorbtionFactor": 1
        }
      }
    }
  },
  "sprayer": {
    "id": 29,
    "name": "Sprayer",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {},
    "fieldFactor": 1,
    "preAddon": null,
    "postAddon": null,
    "sides": 1,
    "borderWidth": 15,
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 110,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0.5,
        "barrelStats": "small",
        "type": "normal"
      },
      {
        "angle": 0,
        "offset": 0,
        "size": 95,
        "width": 1,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "main",
        "type": "normal"
      }
    ],
    "statPointSetup": "normal",
    "key": "sprayer",
    "upgradesFrom": [
      "machine-gun"
    ],
    "color": 2,
    "barrelStats": {
      "small": {
        "name": "Small Cannon Stats",
        "reloadFactor": 1,
        "recoilFactor": 0,
        "bullet": {
          "type": "bullet",
          "sizeFactor": 0.7,
          "healthFactor": 1,
          "damageFactor": 0.1,
          "speedFactor": 1,
          "scatterFactor": 1,
          "lifeLengthFactor": 1,
          "absorbtionFactor": 1
        }
      },
      "main": {
        "name": "Main Cannon Stats",
        "reloadFactor": 0.5,
        "recoilFactor": 1,
        "bullet": {
          "type": "bullet",
          "sizeFactor": 1,
          "healthFactor": 1,
          "damageFactor": 0.7,
          "speedFactor": 1,
          "scatterFactor": 3,
          "lifeLengthFactor": 1,
          "absorbtionFactor": 1
        }
      }
    }
  },
  "trapper": {
    "id": 31,
    "name": "Trapper",
    "upgradeMessage": "",
    "levelRequirement": 30,
    "upgrades": [
      "tri-trapper",
      "gunner-trapper",
      "overtrapper",
      "mega-trapper",
      "auto-trapper"
    ],
    "flags": {},
    "fieldFactor": 0.9,
    "preAddon": null,
    "postAddon": null,
    "sides": 1,
    "borderWidth": 15,
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 60,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "traps",
        "type": "trapLauncher"
      }
    ],
    "statPointSetup": "normal",
    "key": "trapper",
    "upgradesFrom": [
      "sniper"
    ],
    "color": 3,
    "barrelStats": {
      "traps": {
        "name": "Trap Launcher Stats",
        "reloadFactor": 1.5,
        "recoilFactor": 1,
        "bullet": {
          "type": "trap",
          "sizeFactor": 0.8,
          "healthFactor": 2,
          "damageFactor": 1,
          "speedFactor": 2,
          "scatterFactor": 1,
          "lifeLengthFactor": 8,
          "absorbtionFactor": 1
        }
      }
    }
  },
  "gunner-trapper": {
    "id": 32,
    "name": "Gunner Trapper",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {},
    "fieldFactor": 0.9,
    "preAddon": null,
    "postAddon": null,
    "sides": 1,
    "borderWidth": 15,
    "barrels": [
      {
        "angle": 0,
        "offset": -16,
        "size": 75,
        "width": 0.5,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0.66,
        "barrelStats": "main",
        "type": "normal"
      },
      {
        "angle": 0,
        "offset": 16,
        "size": 75,
        "width": 0.5,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0.33,
        "barrelStats": "main",
        "type": "normal"
      },
      {
        "angle": 3.141592653589793,
        "offset": 0,
        "size": 60,
        "width": 1.3,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "traps",
        "type": "trapLauncher"
      }
    ],
    "statPointSetup": "normal",
    "key": "gunner-trapper",
    "upgradesFrom": [
      "gunner",
      "trapper"
    ],
    "color": 1,
    "barrelStats": {
      "main": {
        "name": "Cannon Stats",
        "reloadFactor": 1,
        "recoilFactor": 1,
        "bullet": {
          "type": "bullet",
          "sizeFactor": 1,
          "healthFactor": 1,
          "damageFactor": 0.5,
          "speedFactor": 1,
          "scatterFactor": 1,
          "lifeLengthFactor": 1,
          "absorbtionFactor": 1
        }
      },
      "traps": {
        "name": "Trap Launcher Stats",
        "reloadFactor": 3,
        "recoilFactor": 1,
        "bullet": {
          "type": "trap",
          "sizeFactor": 0.8,
          "healthFactor": 2,
          "damageFactor": 1,
          "speedFactor": 2,
          "scatterFactor": 1,
          "lifeLengthFactor": 8,
          "absorbtionFactor": 1
        }
      }
    }
  },
  "overtrapper": {
    "id": 33,
    "name": "Overtrapper",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {},
    "fieldFactor": 0.9,
    "preAddon": null,
    "postAddon": null,
    "sides": 1,
    "borderWidth": 15,
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 60,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "traps",
        "type": "trapLauncher"
      },
      {
        "angle": 2.0943951023931953,
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
        "angle": 4.1887902047863905,
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
    "statPointSetup": "normal",
    "key": "overtrapper",
    "upgradesFrom": [
      "overseer",
      "trapper"
    ],
    "color": 3,
    "barrelStats": {
      "traps": {
        "name": "Trap Launcher Stats",
        "reloadFactor": 1.5,
        "recoilFactor": 1,
        "bullet": {
          "type": "trap",
          "sizeFactor": 0.8,
          "healthFactor": 2,
          "damageFactor": 1,
          "speedFactor": 2,
          "scatterFactor": 1,
          "lifeLengthFactor": 8,
          "absorbtionFactor": 1
        }
      },
      "drones": {
        "name": "Drone Spawner Stats",
        "reloadFactor": 6,
        "recoilFactor": 1,
        "bullet": {
          "type": "drone",
          "sizeFactor": 1,
          "healthFactor": 1.4,
          "damageFactor": 0.7,
          "speedFactor": 1,
          "scatterFactor": 1,
          "lifeLengthFactor": -1,
          "absorbtionFactor": 1
        },
        "droneCount": 1,
        "canControlDrones": false
      }
    }
  },
  "mega-trapper": {
    "id": 34,
    "name": "Mega Trapper",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {},
    "fieldFactor": 0.9,
    "preAddon": null,
    "postAddon": null,
    "sides": 1,
    "borderWidth": 15,
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 60,
        "width": 1.3,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "traps",
        "type": "trapLauncher"
      }
    ],
    "statPointSetup": "normal",
    "key": "mega-trapper",
    "upgradesFrom": [
      "trapper"
    ],
    "color": 3,
    "barrelStats": {
      "traps": {
        "name": "Trap Launcher Stats",
        "reloadFactor": 3.3,
        "recoilFactor": 1,
        "bullet": {
          "type": "trap",
          "sizeFactor": 1.28,
          "healthFactor": 3.2,
          "damageFactor": 1.6,
          "speedFactor": 2,
          "scatterFactor": 1,
          "lifeLengthFactor": 8,
          "absorbtionFactor": 1
        }
      }
    }
  },
  "tri-trapper": {
    "id": 35,
    "name": "Tri-Trapper",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {},
    "fieldFactor": 0.9,
    "preAddon": null,
    "postAddon": null,
    "sides": 1,
    "borderWidth": 15,
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 60,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "traps",
        "type": "trapLauncher"
      },
      {
        "angle": 2.0943951023931953,
        "offset": 0,
        "size": 60,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "traps",
        "type": "trapLauncher"
      },
      {
        "angle": 4.1887902047863905,
        "offset": 0,
        "size": 60,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "traps",
        "type": "trapLauncher"
      }
    ],
    "statPointSetup": "normal",
    "key": "tri-trapper",
    "upgradesFrom": [
      "trapper"
    ],
    "color": 0,
    "barrelStats": {
      "traps": {
        "name": "Trap Launcher Stats",
        "reloadFactor": 1.5,
        "recoilFactor": 1,
        "bullet": {
          "type": "trap",
          "sizeFactor": 0.8,
          "healthFactor": 2,
          "damageFactor": 1,
          "speedFactor": 2,
          "scatterFactor": 1,
          "lifeLengthFactor": 3.2,
          "absorbtionFactor": 1
        }
      }
    }
  },
  "smasher": {
    "id": 36,
    "name": "Smasher",
    "upgradeMessage": "",
    "levelRequirement": 30,
    "upgrades": [
      "landmine",
      "auto-smasher",
      "spike"
    ],
    "flags": {},
    "fieldFactor": 0.9,
    "preAddon": null,
    "postAddon": "smasher",
    "sides": 1,
    "borderWidth": 15,
    "barrels": [],
    "statPointSetup": "smasher-class",
    "key": "smasher",
    "upgradesFrom": [
      "basic"
    ],
    "color": 4,
    "barrelStats": {}
  },
  "landmine": {
    "id": 38,
    "name": "Landmine",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {
      "invisibility": true,
    },
    "visibilityRateShooting": 0,
    "visibilityRateMoving": 0.16,
    "invisibilityRate": 0.003,
    "fieldFactor": 0.9,
    "preAddon": null,
    "postAddon": "landmine",
    "sides": 1,
    "borderWidth": 15,
    "barrels": [],
    "statPointSetup": "smasher-class",
    "key": "landmine",
    "upgradesFrom": [
      "smasher"
    ],
    "color": 0,
    "barrelStats": {}
  },
  "auto-gunner": {
    "id": 39,
    "name": "Auto Gunner",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {},
    "fieldFactor": 1,
    "preAddon": null,
    "postAddon": null,
    "sides": 1,
    "borderWidth": 15,
    "barrels": [
      {
        "angle": 0,
        "offset": -32,
        "size": 65,
        "width": 0.6,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0.5,
        "barrelStats": "main",
        "type": "normal"
      },
      {
        "angle": 0,
        "offset": 32,
        "size": 65,
        "width": 0.6,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0.75,
        "barrelStats": "main",
        "type": "normal"
      },
      {
        "angle": 0,
        "offset": -17,
        "size": 85,
        "width": 0.6,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "main",
        "type": "normal"
      },
      {
        "angle": 0,
        "offset": 17,
        "size": 85,
        "width": 0.6,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0.25,
        "barrelStats": "main",
        "type": "normal"
      },
      {
        "angle": Math.PI,
        "offset": 0,
        "basePosition": 0,
        "size": 55,
        "width": 0.7,
        "delay": 0.01,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "barrelStats": "autoTurret",
        "type": "autoTurret"
      }
    ],
    "statPointSetup": "normal",
    "key": "auto-gunner",
    "upgradesFrom": [
      "gunner",
      "auto-3"
    ],
    "color": 0,
    "barrelStats": {
      "main": {
        "name": "Main Cannon Stats",
        "reloadFactor": 1,
        "recoilFactor": 0.2,
        "bullet": {
          "type": "bullet",
          "sizeFactor": 1,
          "healthFactor": 0.45,
          "damageFactor": 0.5,
          "speedFactor": 1.1,
          "scatterFactor": 1,
          "lifeLengthFactor": 1,
          "absorbtionFactor": 1
        }
      },
      "autoTurret": {
        "name": "Auto Turret Stats",
        "recoilFactor": 0.3,
        "reloadFactor": 1,
        "bullet": {
          "type": "bullet",
          "healthFactor": 1,
          "damageFactor": 0.3,
          "speedFactor": 1.2,
          "scatterFactor": 1,
          "lifeLengthFactor": 1,
          "sizeFactor": 1,
          "absorbtionFactor": 1
        }
      }
    }
  },
  "auto-5": {
    "id": 40,
    "name": "Auto 5",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {},
    "fieldFactor": 1,
    "preAddon": null,
    "postAddon": null,
    "sides": 1,
    "borderWidth": 15,
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 55,
        "width": 0.7,
        "delay": 0.01,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "barrelStats": "autoCannons",
        "type": "autoCannon"
      },
      {
        "angle": Math.PI * 2 / 5 * 1,
        "offset": 0,
        "size": 55,
        "width": 0.7,
        "delay": 0.01,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "barrelStats": "autoCannons",
        "type": "autoCannon"
      },
      {
        "angle": Math.PI * 2 / 5 * 2,
        "offset": 0,
        "size": 55,
        "width": 0.7,
        "delay": 0.01,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "barrelStats": "autoCannons",
        "type": "autoCannon"
      },
      {
        "angle": Math.PI * 2 / 5 * 3,
        "offset": 0,
        "size": 55,
        "width": 0.7,
        "delay": 0.01,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "barrelStats": "autoCannons",
        "type": "autoCannon"
      },
      {
        "angle": Math.PI * 2 / 5 * 4,
        "offset": 0,
        "size": 55,
        "width": 0.7,
        "delay": 0.01,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "barrelStats": "autoCannons",
        "type": "autoCannon"
      },
    ],
    "statPointSetup": "normal",
    "key": "auto-5",
    "upgradesFrom": [
      "quad-tank",
      "auto-3"
    ],
    "color": 1,
    "barrelStats": {
      "autoCannons": {
        "name": "Auto Cannon Stats",
        "recoilFactor": 0.3,
        "reloadFactor": 1,
        "bullet": {
          "type": "bullet",
          "healthFactor": 1,
          "damageFactor": 0.3,
          "speedFactor": 1.2,
          "scatterFactor": 1,
          "lifeLengthFactor": 1,
          "sizeFactor": 1,
          "absorbtionFactor": 1
        }
      }
    }
  },
  "auto-3": {
    "id": 41,
    "name": "Auto 3",
    "upgradeMessage": "",
    "levelRequirement": 30,
    "upgrades": [
      "auto-5",
      "auto-gunner"
    ],
    "flags": {},
    "fieldFactor": 1,
    "preAddon": null,
    "postAddon": null,
    "sides": 1,
    "borderWidth": 15,
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 55,
        "width": 0.7,
        "delay": 0.01,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "barrelStats": "autoCannons",
        "type": "autoCannon"
      },
      {
        "angle": Math.PI * 2 / 3 * 1,
        "offset": 0,
        "size": 55,
        "width": 0.7,
        "delay": 0.01,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "barrelStats": "autoCannons",
        "type": "autoCannon"
      },
      {
        "angle": Math.PI * 2 / 3 * 2,
        "offset": 0,
        "size": 55,
        "width": 0.7,
        "delay": 0.01,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "barrelStats": "autoCannons",
        "type": "autoCannon"
      },
    ],
    "statPointSetup": "normal",
    "key": "auto-3",
    "upgradesFrom": [
      "flank-guard"
    ],
    "color": 3,
    "barrelStats": {
      "autoCannons": {
        "name": "Auto Cannon Stats",
        "recoilFactor": 0.3,
        "reloadFactor": 1,
        "bullet": {
          "type": "bullet",
          "healthFactor": 1,
          "damageFactor": 0.3,
          "speedFactor": 1.2,
          "scatterFactor": 1,
          "lifeLengthFactor": 1,
          "sizeFactor": 1,
          "absorbtionFactor": 1
        }
      }
    }
  },
  "spread-shot": {
    "id": 42,
    "name": "Spread Shot",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {},
    "fieldFactor": 1,
    "preAddon": null,
    "postAddon": null,
    "sides": 1,
    "borderWidth": 15,
    "barrels": [
      {
        "angle": 1.3089969389957472,
        "offset": 0,
        "size": 65,
        "width": 0.7,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0.833325,
        "barrelStats": "small",
        "type": "normal"
      },
      {
        "angle": -1.3089969389957472,
        "offset": 0,
        "size": 65,
        "width": 0.7,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0.833325,
        "barrelStats": "small",
        "type": "normal"
      },
      {
        "angle": 1.0471975511965976,
        "offset": 0,
        "size": 71,
        "width": 0.7,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0.666675,
        "barrelStats": "small",
        "type": "normal"
      },
      {
        "angle": -1.0471975511965976,
        "offset": 0,
        "size": 71,
        "width": 0.7,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0.666675,
        "barrelStats": "small",
        "type": "normal"
      },
      {
        "angle": 0.7853981633974483,
        "offset": 0,
        "size": 77,
        "width": 0.7,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0.5,
        "barrelStats": "small",
        "type": "normal"
      },
      {
        "angle": -0.7853981633974483,
        "offset": 0,
        "size": 77,
        "width": 0.7,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0.5,
        "barrelStats": "small",
        "type": "normal"
      },
      {
        "angle": 0.5235987755982988,
        "offset": 0,
        "size": 83,
        "width": 0.7,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0.333325,
        "barrelStats": "small",
        "type": "normal"
      },
      {
        "angle": -0.5235987755982988,
        "offset": 0,
        "size": 83,
        "width": 0.7,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0.333325,
        "barrelStats": "small",
        "type": "normal"
      },
      {
        "angle": 0.2617993877991494,
        "offset": 0,
        "size": 89,
        "width": 0.7,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0.166675,
        "barrelStats": "small",
        "type": "normal"
      },
      {
        "angle": -0.2617993877991494,
        "offset": 0,
        "size": 89,
        "width": 0.7,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0.166675,
        "barrelStats": "small",
        "type": "normal"
      },
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
      }
    ],
    "statPointSetup": "normal",
    "key": "spread-shot",
    "upgradesFrom": [
      "triple-shot"
    ],
    "color": 2,
    "barrelStats": {
      "small": {
        "name": "Small Cannon Stats",
        "reloadFactor": 2,
        "recoilFactor": 0.1,
        "bullet": {
          "type": "bullet",
          "sizeFactor": 1,
          "healthFactor": 1,
          "damageFactor": 0.6,
          "speedFactor": 1,
          "scatterFactor": 1,
          "lifeLengthFactor": 1,
          "absorbtionFactor": 1
        }
      },
      "main": {
        "name": "Main Cannon Stats",
        "reloadFactor": 2,
        "recoilFactor": 0.1,
        "bullet": {
          "type": "bullet",
          "sizeFactor": 1,
          "healthFactor": 1,
          "damageFactor": 1,
          "speedFactor": 1,
          "scatterFactor": 1,
          "lifeLengthFactor": 1,
          "absorbtionFactor": 1
        }
      }
    }
  },
  "streamliner": {
    "id": 43,
    "name": "Streamliner",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {},
    "fieldFactor": 0.85,
    "preAddon": null,
    "postAddon": null,
    "sides": 1,
    "borderWidth": 15,
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 110,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "main",
        "type": "normal"
      },
      {
        "angle": 0,
        "offset": 0,
        "size": 100,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0.2,
        "barrelStats": "main",
        "type": "normal"
      },
      {
        "angle": 0,
        "offset": 0,
        "size": 90,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0.4,
        "barrelStats": "main",
        "type": "normal"
      },
      {
        "angle": 0,
        "offset": 0,
        "size": 80,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0.6,
        "barrelStats": "main",
        "type": "normal"
      },
      {
        "angle": 0,
        "offset": 0,
        "size": 70,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0.8,
        "barrelStats": "main",
        "type": "normal"
      }
    ],
    "statPointSetup": "normal",
    "key": "streamliner",
    "upgradesFrom": [
      "hunter",
      "gunner"
    ],
    "color": 1,
    "barrelStats": {
      "main": {
        "name": "Cannon Stats",
        "reloadFactor": 1,
        "recoilFactor": 0.2,
        "bullet": {
          "type": "bullet",
          "sizeFactor": 0.7,
          "healthFactor": 1,
          "damageFactor": 0.2,
          "speedFactor": 1.1,
          "scatterFactor": 0.3,
          "lifeLengthFactor": 0.8,
          "absorbtionFactor": 1
        }
      }
    }
  },
  "auto-trapper": {
    "id": 44,
    "name": "Auto Trapper",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {},
    "fieldFactor": 0.9,
    "preAddon": null,
    "postAddon": null,
    "sides": 1,
    "borderWidth": 15,
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 60,
        "width": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "traps",
        "type": "trapLauncher"
      },
      {
        "angle": Math.PI,
        "offset": 0,
        "size": 55,
        "width": 0.7,
        "delay": 0.01,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "barrelStats": "autoTurret",
        "type": "autoTurret"
      }
    ],
    "statPointSetup": "normal",
    "key": "auto-trapper",
    "upgradesFrom": [
      "trapper"
    ],
    "color": 4,
    "barrelStats": {
      "traps": {
        "name": "Trap Launcher Stats",
        "reloadFactor": 1.5,
        "recoilFactor": 1,
        "bullet": {
          "type": "trap",
          "sizeFactor": 0.8,
          "healthFactor": 2,
          "damageFactor": 1,
          "speedFactor": 2,
          "scatterFactor": 1,
          "lifeLengthFactor": 8,
          "absorbtionFactor": 1
        }
      },
      "autoTurret": {
        "name": "Auto Turret Stats",
        "recoilFactor": 0.3,
        "reloadFactor": 1,
        "bullet": {
          "type": "bullet",
          "healthFactor": 1,
          "damageFactor": 0.3,
          "speedFactor": 1.2,
          "scatterFactor": 1,
          "lifeLengthFactor": 1,
          "sizeFactor": 1,
          "absorbtionFactor": 1
        }
      }
    }
  },
  "battleship": {
    "id": 48,
    "name": "Battleship",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {},
    "fieldFactor": 0.9,
    "preAddon": null,
    "postAddon": null,
    "sides": 1,
    "borderWidth": 15,
    "barrels": [
      {
        "angle": 1.5707963267948966,
        "offset": -20,
        "size": 75,
        "width": 0.7,
        "isTrapezoid": true,
        "trapezoidDirection": 3.141592653589793,
        "delay": 0,
        "barrelStats": "autoDrones",
        "type": "swarmSpawner"
      },
      {
        "angle": 4.71238898038469,
        "offset": -20,
        "size": 75,
        "width": 0.7,
        "isTrapezoid": true,
        "trapezoidDirection": 3.141592653589793,
        "delay": 0,
        "barrelStats": "autoDrones",
        "type": "swarmSpawner"
      },
      {
        "angle": 1.5707963267948966,
        "offset": 20,
        "size": 75,
        "width": 0.7,
        "isTrapezoid": true,
        "trapezoidDirection": 3.141592653589793,
        "delay": 0,
        "barrelStats": "controllableDrones",
        "type": "swarmSpawner"
      },
      {
        "angle": 4.71238898038469,
        "offset": 20,
        "size": 75,
        "width": 0.7,
        "isTrapezoid": true,
        "trapezoidDirection": 3.141592653589793,
        "delay": 0,
        "barrelStats": "controllableDrones",
        "type": "swarmSpawner"
      }
    ],
    "statPointSetup": "normal",
    "key": "battleship",
    "upgradesFrom": [
      "overseer",
      "twin-flank"
    ],
    "color": 4,
    "barrelStats": {
      "autoDrones": {
        "name": "Automatic Drone Spawner Stats",
        "reloadFactor": 1,
        "recoilFactor": 1,
        "bullet": {
          "type": "swarm",
          "sizeFactor": 0.7,
          "healthFactor": 1,
          "damageFactor": 0.15,
          "speedFactor": 1,
          "scatterFactor": 1,
          "lifeLengthFactor": 1,
          "absorbtionFactor": 1
        },
        "droneCount": 4294967295,
        "canControlDrones": false
      },
      "controllableDrones": {
        "name": "Controllable Drone Spawner Stats",
        "reloadFactor": 1,
        "recoilFactor": 1,
        "bullet": {
          "type": "swarm",
          "sizeFactor": 0.7,
          "healthFactor": 1,
          "damageFactor": 0.15,
          "speedFactor": 1,
          "scatterFactor": 1,
          "lifeLengthFactor": 1,
          "absorbtionFactor": 1
        },
        "droneCount": 4294967295,
        "canControlDrones": true
      }
    }
  },
  "annihilator": {
    "id": 49,
    "name": "Annihilator",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {},
    "fieldFactor": 1,
    "preAddon": null,
    "postAddon": null,
    "sides": 1,
    "borderWidth": 15,
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 95,
        "width": 2.3,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "main",
        "type": "normal"
      }
    ],
    "statPointSetup": "normal",
    "key": "annihilator",
    "upgradesFrom": [
      "destroyer"
    ],
    "color": 1,
    "barrelStats": {
      "main": {
        "name": "Cannon Stats",
        "reloadFactor": 4,
        "recoilFactor": 17,
        "bullet": {
          "type": "bullet",
          "sizeFactor": 1,
          "healthFactor": 2,
          "damageFactor": 3,
          "speedFactor": 0.7,
          "scatterFactor": 1,
          "lifeLengthFactor": 1,
          "absorbtionFactor": 0.05
        }
      }
    }
  },
  "auto-smasher": {
    "id": 50,
    "name": "Auto Smasher",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {},
    "fieldFactor": 0.9,
    "preAddon": null,
    "postAddon": "smasher",
    "sides": 1,
    "borderWidth": 15,
    "barrels": [
      {
        "angle": Math.PI,
        "offset": 0,
        "size": 55,
        "width": 0.7,
        "delay": 0.01,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "barrelStats": "autoTurret",
        "type": "autoTurret"
      }
    ],
    "statPointSetup": "auto-smasher",
    "key": "auto-smasher",
    "upgradesFrom": [
      "smasher"
    ],
    "color": 1,
    "barrelStats": {
      "autoTurret": {
        "name": "Auto Turret Stats",
        "recoilFactor": 0.3,
        "reloadFactor": 1,
        "bullet": {
          "type": "bullet",
          "healthFactor": 1,
          "damageFactor": 0.3,
          "speedFactor": 1.2,
          "scatterFactor": 1,
          "lifeLengthFactor": 1,
          "sizeFactor": 1,
          "absorbtionFactor": 1
        }
      }
    }
  },
  "spike": {
    "id": 51,
    "name": "Spike",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {},
    "fieldFactor": 0.9,
    "preAddon": null,
    "postAddon": "spike",
    "sides": 1,
    "borderWidth": 15,
    "barrels": [],
    "statPointSetup": "smasher-class",
    "key": "spike",
    "upgradesFrom": [
      "smasher"
    ],
    "color": 2,
    "barrelStats": {}
  },
  "factory": {
    "id": 52,
    "name": "Factory",
    "bodyRadius": 65,
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {},
    "fieldFactor": 0.9,
    "preAddon": null,
    "postAddon": null,
    "sides": 4,
    "borderWidth": 15,
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 70,
        "width": 1,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "drones",
        "type": "normal"
      }
    ],
    "statPointSetup": "drone-class",
    "key": "factory",
    "upgradesFrom": [
      "overseer"
    ],
    "color": 5,
    "barrelStats": {
      "drones": {
        "name": "Drone Spawner Stats",
        "reloadFactor": 3,
        "recoilFactor": 1,
        "bullet": {
          "type": "minion",
          "sizeFactor": 1,
          "healthFactor": 4,
          "damageFactor": 0.7,
          "speedFactor": 0.56,
          "scatterFactor": 1,
          "lifeLengthFactor": -1,
          "absorbtionFactor": 1
        },
        "droneCount": 6,
        "canControlDrones": true
      },
      "minionMain": {
        "name": "Minion Cannons",
        "reloadFactor": 1,
        "recoilFactor": 1.35,
        "bullet": {
          "type": "bullet",
          "healthFactor": 0.4,
          "damageFactor": 0.4,
          "speedFactor": 0.8,
          "scatterFactor": 1,
          "lifeLengthFactor": 1,
          "sizeFactor": 1,
          "absorbtionFactor": 1
        }
      }
    },
  },
  "dev-tank": {
    "id": 53,
    "name": "Dev Tank",
    "upgradeMessage": "",
    "levelRequirement": 0,
    "upgrades": [],
    "flags": {
      "devOnly": true
    },
    "fieldFactor": 1,
    "preAddon": null,
    "postAddon": null,
    "sides": 1,
    "borderWidth": 15,
    "barrels": [],
    "statPointSetup": "normal",
    "key": "dev-tank",
    "upgradesFrom": [],
    "color": 2,
    "barrelStats": {}
  },
  "skimmer": {
    "id": 54,
    "name": "Skimmer",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {},
    "fieldFactor": 0.9,
    "preAddon": "skimmer-rocketeer",
    "postAddon": null,
    "sides": 1,
    "borderWidth": 15,
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 80,
        "width": 1.7,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "delay": 0,
        "barrelStats": "main",
        "type": "normal"
      }
    ],
    "statPointSetup": "normal",
    "key": "skimmer",
    "upgradesFrom": [
      "destroyer"
    ],
    "color": 2,
    "barrelStats": {
      "main": {
        "name": "Main Cannon Stats",
        "reloadFactor": 4,
        "recoilFactor": 3,
        "bullet": {
          "type": "skimmer",
          "sizeFactor": 1,
          "healthFactor": 3,
          "damageFactor": 1,
          "speedFactor": 0.5,
          "scatterFactor": 1,
          "lifeLengthFactor": 1.3,
          "absorbtionFactor": 0.1
        }
      },
      "bulletCannons": {
        "name": "Bullet Cannon Stats",
        "reloadFactor": 0.35,
        "recoilFactor": 0,
        "bullet": {
          "type": "bullet",
          "healthFactor": 0.3,
          "damageFactor": 3 / 5,
          "speedFactor": 1.1,
          "scatterFactor": 1,
          "lifeLengthFactor": 0.25,
          "sizeFactor": 1,
          "absorbtionFactor": 1
        }
      }
    }
  },
  "rocketeer": {
    "id": 55,
    "name": "Rocketeer",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {},
    "fieldFactor": 0.9,
    "preAddon": "skimmer-rocketeer",
    "postAddon": null,
    "sides": 1,
    "borderWidth": 15,
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 80,
        "width": 1.25,
        "isTrapezoid": true,
        "trapezoidDirection": 3.141592653589793,
        "delay": 0,
        "barrelStats": "main",
        "type": "normal"
      }
    ],
    "statPointSetup": "normal",
    "key": "rocketeer",
    "upgradesFrom": [
      "destroyer"
    ],
    "color": 3,
    "barrelStats": {
      "main": {
        "name": "Main Cannon Stats",
        "reloadFactor": 4,
        "recoilFactor": 3,
        "bullet": {
          "type": "rocket",
          "sizeFactor": 1,
          "healthFactor": 5,
          "damageFactor": 1,
          "speedFactor": 0.3,
          "scatterFactor": 1,
          "lifeLengthFactor": 1,
          "absorbtionFactor": 0.1
        },
      },
      "bulletCannon": {
        "name": "Bullet Cannon Stats",
        "reloadFactor": 0.15,
        "recoilFactor": 3.3,
        "bullet": {
          "type": "bullet",
          "healthFactor": 0.3,
          "damageFactor": 3 / 5,
          "speedFactor": 1.5,
          "scatterFactor": 5,
          "lifeLengthFactor": 0.1,
          "sizeFactor": 1,
          "absorbtionFactor": 1
        }
      }
    }
  },
  "glider": {
    "id": 56,
    "name": "Glider",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {},
    "fieldFactor": 0.9,
    "preAddon": "glider",
    "postAddon": null,
    "sides": 1,
    "borderWidth": 15,
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 80,
        "width": 1.35,
        "isTrapezoid": true,
        "trapezoidDirection": 3.141592653589793,
        "delay": 0,
        "barrelStats": "main",
        "type": "normal"
      }
    ],
    "statPointSetup": "normal",
    "key": "glider",
    "upgradesFrom": [
      "destroyer"
    ],
    "color": 4,
    "barrelStats": {
      "main": {
        "name": "Main Cannon Stats",
        "reloadFactor": 4,
        "recoilFactor": 3,
        "bullet": {
          "type": "glider",
          "sizeFactor": 1,
          "healthFactor": 3,
          "damageFactor": 1,
          "speedFactor": 0.3,
          "scatterFactor": 1,
          "lifeLengthFactor": 1.3,
          "absorbtionFactor": 0.1
        }
      },
      "bulletCannons": {
        "name": "Bullet Cannon Stats",
        "reloadFactor": 0.7,
        "recoilFactor": 3.8,
        "bullet": {
          "type": "bullet",
          "healthFactor": 0.6,
          "damageFactor": 3 / 5,
          "speedFactor": 0.5,
          "scatterFactor": 1,
          "lifeLengthFactor": 0.5,
          "sizeFactor": 1,
          "absorbtionFactor": 1
        }
      }
    }
  },
  "auto-tank": {
    "id": 57,
    "name": "Auto-Tank",
    "color": 5,
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {},
    "fieldFactor": 1,
    "preAddon": null,
    "postAddon": null,
    "sides": 1,
    "borderWidth": 15,
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
        "angle": Math.PI,
        "offset": 0,
        "basePosition": 0,
        "size": 55,
        "width": 0.7,
        "delay": 0.01,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "barrelStats": "autoTurret",
        "type": "autoTurret"
      }
    ],
    "statPointSetup": "normal",
    "key": "auto-tank",
    "upgradesFrom": ["basic"],
    "barrelStats": {
      "main": {
        "name": "Cannon Stats",
        "reloadFactor": 1,
        "recoilFactor": 1,
        "bullet": {
          "type": "bullet",
          "sizeFactor": 1,
          "healthFactor": 1,
          "damageFactor": 1,
          "speedFactor": 1,
          "scatterFactor": 1,
          "lifeLengthFactor": 1,
          "absorbtionFactor": 1
        }
      },
      "autoTurret": {
        "name": "Auto Turret Stats",
        "recoilFactor": 0.3,
        "reloadFactor": 1,
        "bullet": {
          "type": "bullet",
          "healthFactor": 1,
          "damageFactor": 0.3,
          "speedFactor": 1.2,
          "scatterFactor": 1,
          "lifeLengthFactor": 1,
          "sizeFactor": 1,
          "absorbtionFactor": 1
        }
      }
    }
  },
}