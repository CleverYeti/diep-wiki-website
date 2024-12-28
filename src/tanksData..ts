export interface Stats {
  name: string;
  max: number;
}

export interface Bullet {
  type: string;
  sizeRatio: number;
  health: number;
  damage: number;
  speed: number;
  scatterRate: number;
  lifeLength: number;
  absorbtionFactor: number;
}

export interface Barrel {
  angle: number;
  offset: number;
  size: number;
  width: number;
  delay: number;
  reload: number;
  recoil: number;
  isTrapezoid: boolean;
  trapezoidDirection: number;
  addon: string | null;
  bullet: Bullet;
  droneCount?: number;
  canControlDrones?: boolean;
  forceFire?: boolean;
}

export interface Flags {
  invisibility: boolean;
  zoomAbility: boolean;
  canClaimSquares: boolean;
  devOnly: boolean;
}

export interface Tank {
  id: number;
  name: string;
  upgradeMessage: string;
  levelRequirement: number;
  upgrades: string[];
  flags: Flags;
  visibilityRateShooting: number;
  visibilityRateMoving: number;
  invisibilityRate: number;
  fieldFactor: number;
  absorbtionFactor: number;
  speed: number;
  maxHealth: number;
  preAddon: string | null;
  postAddon: string | null;
  sides: number;
  borderWidth: number;
  barrels: Barrel[];
  stats: Stats[];
  key: string;
  upgradesFrom: string[];
  color: number;
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

export const tanksData:TanksData = {
  "basic": {
    "id": 0,
    "name": "Tank",
    "color": 0,
    "upgradeMessage": "",
    "levelRequirement": 0,
    "upgrades": [
      "twin",
      "sniper",
      "machine gun",
      "flank guard",
      "smasher"
    ],
    "flags": {
      "invisibility": false,
      "zoomAbility": false,
      "canClaimSquares": false,
      "devOnly": false
    },
    "visibilityRateShooting": 0.23,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 1,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 50,
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
        "delay": 0,
        "reload": 1,
        "recoil": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 1,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      }
    ],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "key": "basic",
    "upgradesFrom": []
  },
  "twin": {
    "id": 1,
    "name": "Twin",
    "upgradeMessage": "",
    "levelRequirement": 15,
    "upgrades": [
      "triple shot",
      "quad tank",
      "twin flank"
    ],
    "flags": {
      "invisibility": false,
      "zoomAbility": false,
      "canClaimSquares": false,
      "devOnly": false
    },
    "visibilityRateShooting": 0.23,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 1,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 50,
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
        "delay": 0,
        "reload": 1,
        "recoil": 0.75,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 0.9,
          "damage": 0.65,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 0,
        "offset": 26,
        "size": 95,
        "width": 1,
        "delay": 0.5,
        "reload": 1,
        "recoil": 0.75,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 0.9,
          "damage": 0.65,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      }
    ],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "key": "twin",
    "upgradesFrom": [
      "basic"
    ],
    "color": 0
  },
  "triplet": {
    "id": 2,
    "name": "Triplet",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {
      "invisibility": false,
      "zoomAbility": false,
      "canClaimSquares": false,
      "devOnly": false
    },
    "visibilityRateShooting": 0.23,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 1,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 50,
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
        "delay": 0.5,
        "reload": 1,
        "recoil": 0.5,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 0.7,
          "damage": 0.6,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 0,
        "offset": 26,
        "size": 80,
        "width": 1,
        "delay": 0.5,
        "reload": 1,
        "recoil": 0.5,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 0.7,
          "damage": 0.6,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 0,
        "offset": 0,
        "size": 95,
        "width": 1,
        "delay": 0,
        "reload": 1,
        "recoil": 0.5,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 0.7,
          "damage": 0.6,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      }
    ],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "key": "triplet",
    "upgradesFrom": [
      "triple shot"
    ],
    "color": 0
  },
  "triple shot": {
    "id": 3,
    "name": "Triple Shot",
    "upgradeMessage": "",
    "levelRequirement": 30,
    "upgrades": [
      "triplet",
      "penta shot",
      "spread shot"
    ],
    "flags": {
      "invisibility": false,
      "zoomAbility": false,
      "canClaimSquares": false,
      "devOnly": false
    },
    "visibilityRateShooting": 0.23,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 1,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 50,
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
        "delay": 0,
        "reload": 1,
        "recoil": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.7,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 0.7853981633974483,
        "offset": 0,
        "size": 95,
        "width": 1,
        "delay": 0,
        "reload": 1,
        "recoil": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.7,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 0,
        "offset": 0,
        "size": 95,
        "width": 1,
        "delay": 0,
        "reload": 1,
        "recoil": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.7,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      }
    ],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "key": "triple shot",
    "upgradesFrom": [
      "twin"
    ],
    "color": 0
  },
  "quad tank": {
    "id": 4,
    "name": "Quad Tank",
    "upgradeMessage": "",
    "levelRequirement": 30,
    "upgrades": [
      "octo tank",
      "auto-5"
    ],
    "flags": {
      "invisibility": false,
      "zoomAbility": false,
      "canClaimSquares": false,
      "devOnly": false
    },
    "visibilityRateShooting": 0.23,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 1,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 50,
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
        "delay": 0,
        "reload": 1,
        "recoil": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.75,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": -1.5707963267948966,
        "offset": 0,
        "size": 95,
        "width": 1,
        "delay": 0,
        "reload": 1,
        "recoil": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.75,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 1.5707963267948966,
        "offset": 0,
        "size": 95,
        "width": 1,
        "delay": 0,
        "reload": 1,
        "recoil": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.75,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 0,
        "offset": 0,
        "size": 95,
        "width": 1,
        "delay": 0,
        "reload": 1,
        "recoil": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.75,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      }
    ],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "key": "quad tank",
    "upgradesFrom": [
      "twin",
      "flank guard"
    ],
    "color": 1
  },
  "octo tank": {
    "id": 5,
    "name": "Octo Tank",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {
      "invisibility": false,
      "zoomAbility": false,
      "canClaimSquares": false,
      "devOnly": false
    },
    "visibilityRateShooting": 0.23,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 1,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 50,
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
        "delay": 0.5,
        "reload": 1,
        "recoil": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.65,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 0.7853981633974483,
        "offset": 0,
        "size": 95,
        "width": 1,
        "delay": 0.5,
        "reload": 1,
        "recoil": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.65,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": -2.356194490192345,
        "offset": 0,
        "size": 95,
        "width": 1,
        "delay": 0.5,
        "reload": 1,
        "recoil": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.65,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 2.356194490192345,
        "offset": 0,
        "size": 95,
        "width": 1,
        "delay": 0.5,
        "reload": 1,
        "recoil": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.65,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 3.141592653589793,
        "offset": 0,
        "size": 95,
        "width": 1,
        "delay": 0,
        "reload": 1,
        "recoil": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.65,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": -1.5707963267948966,
        "offset": 0,
        "size": 95,
        "width": 1,
        "delay": 0,
        "reload": 1,
        "recoil": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.65,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 1.5707963267948966,
        "offset": 0,
        "size": 95,
        "width": 1,
        "delay": 0,
        "reload": 1,
        "recoil": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.65,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 0,
        "offset": 0,
        "size": 95,
        "width": 1,
        "delay": 0,
        "reload": 1,
        "recoil": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.65,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      }
    ],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "key": "octo tank",
    "upgradesFrom": [
      "quad tank"
    ],
    "color": 0
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
    "flags": {
      "invisibility": false,
      "zoomAbility": false,
      "canClaimSquares": false,
      "devOnly": false
    },
    "visibilityRateShooting": 0.23,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 0.9,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 50,
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
        "delay": 0,
        "reload": 1.5,
        "recoil": 3,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 1,
          "speed": 1.5,
          "scatterRate": 0.3,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      }
    ],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "key": "sniper",
    "upgradesFrom": [
      "basic"
    ],
    "color": 1
  },
  "machine gun": {
    "id": 7,
    "name": "Machine Gun",
    "upgradeMessage": "",
    "levelRequirement": 15,
    "upgrades": [
      "destroyer",
      "gunner",
      "sprayer"
    ],
    "flags": {
      "invisibility": false,
      "zoomAbility": false,
      "canClaimSquares": false,
      "devOnly": false
    },
    "visibilityRateShooting": 0.23,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 1,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 50,
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
        "delay": 0,
        "reload": 0.5,
        "recoil": 1,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.7,
          "speed": 1,
          "scatterRate": 3,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      }
    ],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "key": "machine gun",
    "upgradesFrom": [
      "basic"
    ],
    "color": 2
  },
  "flank guard": {
    "id": 8,
    "name": "Flank Guard",
    "upgradeMessage": "",
    "levelRequirement": 15,
    "upgrades": [
      "tri-angle",
      "quad tank",
      "twin flank",
      "auto-3"
    ],
    "flags": {
      "invisibility": false,
      "zoomAbility": false,
      "canClaimSquares": false,
      "devOnly": false
    },
    "visibilityRateShooting": 0.23,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 1,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 50,
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
        "delay": 0,
        "reload": 1,
        "recoil": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 1,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 3.141592653589793,
        "offset": 0,
        "size": 80,
        "width": 1,
        "delay": 0,
        "reload": 1,
        "recoil": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 1,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      }
    ],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "key": "flank guard",
    "upgradesFrom": [
      "basic"
    ],
    "color": 3
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
    "flags": {
      "invisibility": false,
      "zoomAbility": false,
      "canClaimSquares": false,
      "devOnly": false
    },
    "visibilityRateShooting": 0.23,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 1,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 50,
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
        "delay": 0,
        "reload": 1,
        "recoil": 0.2,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 1,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 3.665191429188092,
        "offset": 0,
        "size": 80,
        "width": 1,
        "delay": 0.5,
        "reload": 1,
        "recoil": 2.5,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.2,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 0.5,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 2.6179938779914944,
        "offset": 0,
        "size": 80,
        "width": 1,
        "delay": 0.5,
        "reload": 1,
        "recoil": 2.5,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.2,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 0.5,
          "absorbtionFactor": 1
        }
      }
    ],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "key": "tri-angle",
    "upgradesFrom": [
      "flank guard"
    ],
    "color": 0
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
      "rocketeer"
    ],
    "flags": {
      "invisibility": false,
      "zoomAbility": false,
      "canClaimSquares": false,
      "devOnly": false
    },
    "visibilityRateShooting": 0.23,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 1,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 50,
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
        "delay": 0,
        "reload": 4,
        "recoil": 15,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 2,
          "damage": 3,
          "speed": 0.7,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 0.1
        }
      }
    ],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "key": "destroyer",
    "upgradesFrom": [
      "machine gun"
    ],
    "color": 0
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
    "flags": {
      "invisibility": false,
      "zoomAbility": false,
      "canClaimSquares": false,
      "devOnly": false
    },
    "visibilityRateShooting": 0.23,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 0.9,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 50,
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
        "delay": 0,
        "reload": 6,
        "recoil": 1,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "addon": null,
        "droneCount": 4,
        "canControlDrones": true,
        "bullet": {
          "type": "drone",
          "sizeRatio": 1,
          "health": 2,
          "damage": 0.7,
          "speed": 0.8,
          "scatterRate": 1,
          "lifeLength": -1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 1.5707963267948966,
        "offset": 0,
        "size": 70,
        "width": 1,
        "delay": 0,
        "reload": 6,
        "recoil": 1,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "addon": null,
        "droneCount": 4,
        "canControlDrones": true,
        "bullet": {
          "type": "drone",
          "sizeRatio": 1,
          "health": 2,
          "damage": 0.7,
          "speed": 0.8,
          "scatterRate": 1,
          "lifeLength": -1,
          "absorbtionFactor": 1
        }
      }
    ],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Drone Damage",
        "max": 7
      },
      {
        "name": "Drone Health",
        "max": 7
      },
      {
        "name": "Drone Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "key": "overseer",
    "upgradesFrom": [
      "sniper"
    ],
    "color": 1
  },
  "overlord": {
    "id": 12,
    "name": "Overlord",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {
      "invisibility": false,
      "zoomAbility": false,
      "canClaimSquares": false,
      "devOnly": false
    },
    "visibilityRateShooting": 0.23,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 0.9,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 50,
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
        "delay": 0,
        "reload": 6,
        "recoil": 1,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "addon": null,
        "droneCount": 2,
        "canControlDrones": true,
        "bullet": {
          "type": "drone",
          "sizeRatio": 1,
          "health": 2,
          "damage": 0.7,
          "speed": 0.8,
          "scatterRate": 1,
          "lifeLength": -1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 1.5707963267948966,
        "offset": 0,
        "size": 70,
        "width": 1,
        "delay": 0,
        "reload": 6,
        "recoil": 1,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "addon": null,
        "droneCount": 2,
        "canControlDrones": true,
        "bullet": {
          "type": "drone",
          "sizeRatio": 1,
          "health": 2,
          "damage": 0.7,
          "speed": 0.8,
          "scatterRate": 1,
          "lifeLength": -1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 0,
        "offset": 0,
        "size": 70,
        "width": 1,
        "delay": 0,
        "reload": 6,
        "recoil": 1,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "addon": null,
        "droneCount": 2,
        "canControlDrones": true,
        "bullet": {
          "type": "drone",
          "sizeRatio": 1,
          "health": 2,
          "damage": 0.7,
          "speed": 0.8,
          "scatterRate": 1,
          "lifeLength": -1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 3.141592653589793,
        "offset": 0,
        "size": 70,
        "width": 1,
        "delay": 0,
        "reload": 6,
        "recoil": 1,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "addon": null,
        "droneCount": 2,
        "canControlDrones": true,
        "bullet": {
          "type": "drone",
          "sizeRatio": 1,
          "health": 2,
          "damage": 0.7,
          "speed": 0.8,
          "scatterRate": 1,
          "lifeLength": -1,
          "absorbtionFactor": 1
        }
      }
    ],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Drone Damage",
        "max": 7
      },
      {
        "name": "Drone Health",
        "max": 7
      },
      {
        "name": "Drone Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "key": "overlord",
    "upgradesFrom": [
      "overseer"
    ],
    "color": 0
  },
  "twin flank": {
    "id": 13,
    "name": "Twin Flank",
    "upgradeMessage": "",
    "levelRequirement": 30,
    "upgrades": [
      "triple twin",
      "battleship"
    ],
    "flags": {
      "invisibility": false,
      "zoomAbility": false,
      "canClaimSquares": false,
      "devOnly": false
    },
    "visibilityRateShooting": 0.23,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 1,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 50,
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
        "delay": 0,
        "reload": 1,
        "recoil": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.5,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 0,
        "offset": 26,
        "size": 95,
        "width": 1,
        "delay": 0.5,
        "reload": 1,
        "recoil": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.5,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 3.141592653589793,
        "offset": -26,
        "size": 95,
        "width": 1,
        "delay": 0,
        "reload": 1,
        "recoil": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.5,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 3.141592653589793,
        "offset": 26,
        "size": 95,
        "width": 1,
        "delay": 0.5,
        "reload": 1,
        "recoil": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.5,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      }
    ],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "key": "twin flank",
    "upgradesFrom": [
      "twin",
      "flank guard"
    ],
    "color": 2
  },
  "penta shot": {
    "id": 14,
    "name": "Penta Shot",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {
      "invisibility": false,
      "zoomAbility": false,
      "canClaimSquares": false,
      "devOnly": false
    },
    "visibilityRateShooting": 0.23,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 1,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 50,
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
        "delay": 0.66,
        "reload": 1,
        "recoil": 0.7,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.55,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 0.7853981633974483,
        "offset": 0,
        "size": 80,
        "width": 1,
        "delay": 0.66,
        "reload": 1,
        "recoil": 0.7,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.55,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": -0.39269908169872414,
        "offset": 0,
        "size": 95,
        "width": 1,
        "delay": 0.33,
        "reload": 1,
        "recoil": 0.7,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.55,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 0.39269908169872414,
        "offset": 0,
        "size": 95,
        "width": 1,
        "delay": 0.33,
        "reload": 1,
        "recoil": 0.7,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.55,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 0,
        "offset": 0,
        "size": 110,
        "width": 1,
        "delay": 0,
        "reload": 1,
        "recoil": 0.7,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.55,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      }
    ],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "key": "penta shot",
    "upgradesFrom": [
      "triple shot"
    ],
    "color": 1
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
    "flags": {
      "invisibility": false,
      "zoomAbility": false,
      "canClaimSquares": false,
      "devOnly": false
    },
    "visibilityRateShooting": 0.23,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 0.8,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 50,
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
        "delay": 0,
        "reload": 2,
        "recoil": 3,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 1,
          "speed": 1.5,
          "scatterRate": 0.3,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      }
    ],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "key": "assassin",
    "upgradesFrom": [
      "sniper"
    ],
    "color": 0
  },
  "arena closer": {
    "id": 16,
    "name": "Arena Closer",
    "upgradeMessage": "",
    "levelRequirement": 0,
    "upgrades": [],
    "flags": {
      "invisibility": false,
      "zoomAbility": false,
      "canClaimSquares": false,
      "devOnly": false
    },
    "visibilityRateShooting": 0.23,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 1,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 50,
    "preAddon": null,
    "postAddon": null,
    "sides": 1,
    "borderWidth": 15,
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 75,
        "width": 1,
        "delay": 0,
        "reload": 1,
        "recoil": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 300,
          "damage": 7,
          "speed": 2,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      }
    ],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "key": "arena closer",
    "upgradesFrom": [],
    "color": 3,
  },
  "necromancer": {
    "id": 17,
    "name": "Necromancer",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {
      "invisibility": false,
      "zoomAbility": false,
      "canClaimSquares": true,
      "devOnly": false
    },
    "visibilityRateShooting": 0.23,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 0.9,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 50,
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
        "delay": 0,
        "reload": 6,
        "recoil": 1,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "addon": null,
        "droneCount": 0,
        "canControlDrones": true,
        "bullet": {
          "type": "necrodrone",
          "sizeRatio": 1,
          "health": 2,
          "damage": 0.42,
          "speed": 0.72,
          "scatterRate": 1,
          "lifeLength": -1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 1.5707963267948966,
        "offset": 0,
        "size": 70,
        "width": 1,
        "delay": 0,
        "reload": 6,
        "recoil": 1,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "addon": null,
        "droneCount": 0,
        "canControlDrones": true,
        "bullet": {
          "type": "necrodrone",
          "sizeRatio": 1,
          "health": 2,
          "damage": 0.42,
          "speed": 0.72,
          "scatterRate": 1,
          "lifeLength": -1,
          "absorbtionFactor": 1
        }
      }
    ],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Drone Count",
        "max": 7
      },
      {
        "name": "Drone Damage",
        "max": 7
      },
      {
        "name": "Drone Health",
        "max": 7
      },
      {
        "name": "Drone Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "key": "necromancer",
    "upgradesFrom": [
      "overseer"
    ],
    "color": 1
  },
  "triple twin": {
    "id": 18,
    "name": "Triple Twin",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {
      "invisibility": false,
      "zoomAbility": false,
      "canClaimSquares": false,
      "devOnly": false
    },
    "visibilityRateShooting": 0.23,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 1,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 50,
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
        "delay": 0,
        "reload": 1,
        "recoil": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.5,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 0,
        "offset": 26,
        "size": 95,
        "width": 1,
        "delay": 0.5,
        "reload": 1,
        "recoil": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.5,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 2.0943951023931953,
        "offset": -26,
        "size": 95,
        "width": 1,
        "delay": 0,
        "reload": 1,
        "recoil": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.5,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 2.0943951023931953,
        "offset": 26,
        "size": 95,
        "width": 1,
        "delay": 0.5,
        "reload": 1,
        "recoil": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.5,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": -2.0943951023931953,
        "offset": -26,
        "size": 95,
        "width": 1,
        "delay": 0,
        "reload": 1,
        "recoil": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.5,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": -2.0943951023931953,
        "offset": 26,
        "size": 95,
        "width": 1,
        "delay": 0.5,
        "reload": 1,
        "recoil": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.5,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      }
    ],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "key": "triple twin",
    "upgradesFrom": [
      "twin flank"
    ],
    "color": 0
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
    "flags": {
      "invisibility": false,
      "zoomAbility": false,
      "canClaimSquares": false,
      "devOnly": false
    },
    "visibilityRateShooting": 0.23,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 0.85,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 50,
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
        "delay": 0,
        "reload": 2.5,
        "recoil": 0.3,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 0.7,
          "health": 1,
          "damage": 0.75,
          "speed": 1.4,
          "scatterRate": 0.3,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 0,
        "offset": 0,
        "size": 95,
        "width": 1.35,
        "delay": 0.2,
        "reload": 2.5,
        "recoil": 0.3,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 0.7,
          "health": 1,
          "damage": 0.75,
          "speed": 1.4,
          "scatterRate": 0.3,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      }
    ],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "key": "hunter",
    "upgradesFrom": [
      "sniper"
    ],
    "color": 2
  },
  "gunner": {
    "id": 20,
    "name": "Gunner",
    "upgradeMessage": "",
    "levelRequirement": 30,
    "upgrades": [
      "auto gunner",
      "gunner trapper",
      "streamliner"
    ],
    "flags": {
      "invisibility": false,
      "zoomAbility": false,
      "canClaimSquares": false,
      "devOnly": false
    },
    "visibilityRateShooting": 0.23,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 1,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 50,
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
        "delay": 0.5,
        "reload": 1,
        "recoil": 0.2,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 0.45,
          "damage": 0.5,
          "speed": 1.1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 0,
        "offset": 32,
        "size": 65,
        "width": 0.6,
        "delay": 0.75,
        "reload": 1,
        "recoil": 0.2,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 0.45,
          "damage": 0.5,
          "speed": 1.1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 0,
        "offset": -17,
        "size": 85,
        "width": 0.6,
        "delay": 0,
        "reload": 1,
        "recoil": 0.2,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 0.45,
          "damage": 0.5,
          "speed": 1.1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 0,
        "offset": 17,
        "size": 85,
        "width": 0.6,
        "delay": 0.25,
        "reload": 1,
        "recoil": 0.2,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 0.45,
          "damage": 0.5,
          "speed": 1.1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      }
    ],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "key": "gunner",
    "upgradesFrom": [
      "machine gun"
    ],
    "color": 1
  },
  "stalker": {
    "id": 21,
    "name": "Stalker",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {
      "invisibility": true,
      "zoomAbility": false,
      "canClaimSquares": false,
      "devOnly": false
    },
    "visibilityRateShooting": 0.23,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 0.8,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 50,
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
        "delay": 0,
        "reload": 2,
        "recoil": 3,
        "isTrapezoid": true,
        "trapezoidDirection": 3.141592653589793,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 1,
          "speed": 1.5,
          "scatterRate": 0.3,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      }
    ],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "key": "stalker",
    "upgradesFrom": [
      "assassin"
    ],
    "color": 1
  },
  "ranger": {
    "id": 22,
    "name": "Ranger",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {
      "invisibility": false,
      "zoomAbility": false,
      "canClaimSquares": false,
      "devOnly": false
    },
    "visibilityRateShooting": 0.23,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 0.7,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 50,
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
        "delay": 0,
        "reload": 2,
        "recoil": 3,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 1,
          "speed": 1.5,
          "scatterRate": 0.3,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      }
    ],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "key": "ranger",
    "upgradesFrom": [
      "assassin"
    ],
    "color": 0
  },
  "booster": {
    "id": 23,
    "name": "Booster",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {
      "invisibility": false,
      "zoomAbility": false,
      "canClaimSquares": false,
      "devOnly": false
    },
    "visibilityRateShooting": 0.23,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 1,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 50,
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
        "delay": 0,
        "reload": 1,
        "recoil": 0.2,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 1,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 3.9269908169872414,
        "offset": 0,
        "size": 70,
        "width": 1,
        "delay": 0.66,
        "reload": 1,
        "recoil": 0.2,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.2,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 0.5,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 2.356194490192345,
        "offset": 0,
        "size": 70,
        "width": 1,
        "delay": 0.66,
        "reload": 1,
        "recoil": 0.2,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.2,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 0.5,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 3.665191429188092,
        "offset": 0,
        "size": 80,
        "width": 1,
        "delay": 0.33,
        "reload": 1,
        "recoil": 2.5,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.2,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 0.5,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 2.6179938779914944,
        "offset": 0,
        "size": 80,
        "width": 1,
        "delay": 0.33,
        "reload": 1,
        "recoil": 2.5,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.2,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 0.5,
          "absorbtionFactor": 1
        }
      }
    ],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "key": "booster",
    "upgradesFrom": [
      "tri-angle"
    ],
    "color": 0
  },
  "fighter": {
    "id": 24,
    "name": "Fighter",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {
      "invisibility": false,
      "zoomAbility": false,
      "canClaimSquares": false,
      "devOnly": false
    },
    "visibilityRateShooting": 0.23,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 1,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 50,
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
        "delay": 0,
        "reload": 1,
        "recoil": 0.2,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 1,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 1.5707963267948966,
        "offset": 0,
        "size": 80,
        "width": 1,
        "delay": 0,
        "reload": 1.5,
        "recoil": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.8,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": -1.5707963267948966,
        "offset": 0,
        "size": 80,
        "width": 1,
        "delay": 0,
        "reload": 1.5,
        "recoil": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.8,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 3.665191429188092,
        "offset": 0,
        "size": 80,
        "width": 1,
        "delay": 0.5,
        "reload": 1,
        "recoil": 2.5,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.2,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 0.5,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 2.6179938779914944,
        "offset": 0,
        "size": 80,
        "width": 1,
        "delay": 0.5,
        "reload": 1,
        "recoil": 2.5,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.2,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 0.5,
          "absorbtionFactor": 1
        }
      }
    ],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "key": "fighter",
    "upgradesFrom": [
      "tri-angle"
    ],
    "color": 1
  },
  "hybrid": {
    "id": 25,
    "name": "Hybrid",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {
      "invisibility": false,
      "zoomAbility": false,
      "canClaimSquares": false,
      "devOnly": false
    },
    "visibilityRateShooting": 0.23,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 1,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 50,
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
        "delay": 0,
        "reload": 4,
        "recoil": 15,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 2,
          "damage": 3,
          "speed": 0.7,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 0.1
        }
      },
      {
        "angle": 3.141592653589793,
        "offset": 0,
        "size": 70,
        "width": 1,
        "delay": 0,
        "reload": 6,
        "recoil": 1,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "addon": null,
        "droneCount": 2,
        "canControlDrones": false,
        "bullet": {
          "type": "drone",
          "sizeRatio": 1,
          "health": 1.4,
          "damage": 0.7,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": -1,
          "absorbtionFactor": 1
        }
      }
    ],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "key": "hybrid",
    "upgradesFrom": [
      "destroyer"
    ],
    "color": 0
  },
  "manager": {
    "id": 26,
    "name": "Manager",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {
      "invisibility": true,
      "zoomAbility": false,
      "canClaimSquares": false,
      "devOnly": false
    },
    "visibilityRateShooting": 0,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 0.9,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 50,
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
        "delay": 0,
        "reload": 3,
        "recoil": 1,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "addon": null,
        "droneCount": 8,
        "canControlDrones": true,
        "bullet": {
          "type": "drone",
          "sizeRatio": 1,
          "health": 2,
          "damage": 0.7,
          "speed": 0.8,
          "scatterRate": 1,
          "lifeLength": -1,
          "absorbtionFactor": 1
        }
      }
    ],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Drone Damage",
        "max": 7
      },
      {
        "name": "Drone Health",
        "max": 7
      },
      {
        "name": "Drone Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "key": "manager",
    "upgradesFrom": [
      "overseer"
    ],
    "color": 2
  },
  "mothership": {
    "id": 27,
    "name": "Mothership",
    "upgradeMessage": "",
    "levelRequirement": 0,
    "upgrades": [],
    "flags": {
      "invisibility": false,
      "zoomAbility": false,
      "canClaimSquares": false,
      "devOnly": false
    },
    "visibilityRateShooting": 0.23,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 1,
    "absorbtionFactor": 0.01,
    "speed": 1,
    "maxHealth": 50,
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
        "delay": 0,
        "reload": 6,
        "recoil": 0,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "addon": null,
        "droneCount": 2,
        "canControlDrones": true,
        "bullet": {
          "type": "drone",
          "sizeRatio": 1,
          "health": 2,
          "damage": 0.7,
          "speed": 0.48,
          "scatterRate": 1,
          "lifeLength": -1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 0.5890486225480862,
        "offset": 0,
        "size": 60,
        "width": 0.25,
        "delay": 0,
        "reload": 6,
        "recoil": 0,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "addon": null,
        "droneCount": 2,
        "canControlDrones": false,
        "bullet": {
          "type": "drone",
          "sizeRatio": 1,
          "health": 2,
          "damage": 0.7,
          "speed": 0.48,
          "scatterRate": 1,
          "lifeLength": -1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 0.9817477042468103,
        "offset": 0,
        "size": 60,
        "width": 0.25,
        "delay": 0,
        "reload": 6,
        "recoil": 0,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "addon": null,
        "droneCount": 2,
        "canControlDrones": true,
        "bullet": {
          "type": "drone",
          "sizeRatio": 1,
          "health": 2,
          "damage": 0.7,
          "speed": 0.48,
          "scatterRate": 1,
          "lifeLength": -1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 1.3744467859455345,
        "offset": 0,
        "size": 60,
        "width": 0.25,
        "delay": 0,
        "reload": 6,
        "recoil": 0,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "addon": null,
        "droneCount": 2,
        "canControlDrones": false,
        "bullet": {
          "type": "drone",
          "sizeRatio": 1,
          "health": 2,
          "damage": 0.7,
          "speed": 0.48,
          "scatterRate": 1,
          "lifeLength": -1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 1.7671458676442586,
        "offset": 0,
        "size": 60,
        "width": 0.25,
        "delay": 0,
        "reload": 6,
        "recoil": 0,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "addon": null,
        "droneCount": 2,
        "canControlDrones": true,
        "bullet": {
          "type": "drone",
          "sizeRatio": 1,
          "health": 2,
          "damage": 0.7,
          "speed": 0.48,
          "scatterRate": 1,
          "lifeLength": -1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 2.159844949342983,
        "offset": 0,
        "size": 60,
        "width": 0.25,
        "delay": 0,
        "reload": 6,
        "recoil": 0,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "addon": null,
        "droneCount": 2,
        "canControlDrones": false,
        "bullet": {
          "type": "drone",
          "sizeRatio": 1,
          "health": 2,
          "damage": 0.7,
          "speed": 0.48,
          "scatterRate": 1,
          "lifeLength": -1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 2.552544031041707,
        "offset": 0,
        "size": 60,
        "width": 0.25,
        "delay": 0,
        "reload": 6,
        "recoil": 0,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "addon": null,
        "droneCount": 2,
        "canControlDrones": true,
        "bullet": {
          "type": "drone",
          "sizeRatio": 1,
          "health": 2,
          "damage": 0.7,
          "speed": 0.48,
          "scatterRate": 1,
          "lifeLength": -1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 2.9452431127404313,
        "offset": 0,
        "size": 60,
        "width": 0.25,
        "delay": 0,
        "reload": 6,
        "recoil": 0,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "addon": null,
        "droneCount": 2,
        "canControlDrones": false,
        "bullet": {
          "type": "drone",
          "sizeRatio": 1,
          "health": 2,
          "damage": 0.7,
          "speed": 0.48,
          "scatterRate": 1,
          "lifeLength": -1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 3.3379421944391554,
        "offset": 0,
        "size": 60,
        "width": 0.25,
        "delay": 0,
        "reload": 6,
        "recoil": 0,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "addon": null,
        "droneCount": 2,
        "canControlDrones": true,
        "bullet": {
          "type": "drone",
          "sizeRatio": 1,
          "health": 2,
          "damage": 0.7,
          "speed": 0.48,
          "scatterRate": 1,
          "lifeLength": -1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 3.7306412761378795,
        "offset": 0,
        "size": 60,
        "width": 0.25,
        "delay": 0,
        "reload": 6,
        "recoil": 0,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "addon": null,
        "droneCount": 2,
        "canControlDrones": false,
        "bullet": {
          "type": "drone",
          "sizeRatio": 1,
          "health": 2,
          "damage": 0.7,
          "speed": 0.48,
          "scatterRate": 1,
          "lifeLength": -1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 4.12333992150429,
        "offset": 0,
        "size": 60,
        "width": 0.25,
        "delay": 0,
        "reload": 6,
        "recoil": 0,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "addon": null,
        "droneCount": 2,
        "canControlDrones": true,
        "bullet": {
          "type": "drone",
          "sizeRatio": 1,
          "health": 2,
          "damage": 0.7,
          "speed": 0.48,
          "scatterRate": 1,
          "lifeLength": -1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 4.516039439535327,
        "offset": 0,
        "size": 60,
        "width": 0.25,
        "delay": 0,
        "reload": 6,
        "recoil": 0,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "addon": null,
        "droneCount": 2,
        "canControlDrones": false,
        "bullet": {
          "type": "drone",
          "sizeRatio": 1,
          "health": 2,
          "damage": 0.7,
          "speed": 0.48,
          "scatterRate": 1,
          "lifeLength": -1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 4.908738521234052,
        "offset": 0,
        "size": 60,
        "width": 0.25,
        "delay": 0,
        "reload": 6,
        "recoil": 0,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "addon": null,
        "droneCount": 2,
        "canControlDrones": true,
        "bullet": {
          "type": "drone",
          "sizeRatio": 1,
          "health": 2,
          "damage": 0.7,
          "speed": 0.48,
          "scatterRate": 1,
          "lifeLength": -1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 5.301437166600463,
        "offset": 0,
        "size": 60,
        "width": 0.25,
        "delay": 0,
        "reload": 6,
        "recoil": 0,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "addon": null,
        "droneCount": 2,
        "canControlDrones": false,
        "bullet": {
          "type": "drone",
          "sizeRatio": 1,
          "health": 2,
          "damage": 0.7,
          "speed": 0.48,
          "scatterRate": 1,
          "lifeLength": -1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 5.6941366846315,
        "offset": 0,
        "size": 60,
        "width": 0.25,
        "delay": 0,
        "reload": 6,
        "recoil": 0,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "addon": null,
        "droneCount": 2,
        "canControlDrones": true,
        "bullet": {
          "type": "drone",
          "sizeRatio": 1,
          "health": 2,
          "damage": 0.7,
          "speed": 0.48,
          "scatterRate": 1,
          "lifeLength": -1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 6.086835766330224,
        "offset": 0,
        "size": 60,
        "width": 0.25,
        "delay": 0,
        "reload": 6,
        "recoil": 0,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "addon": null,
        "droneCount": 2,
        "canControlDrones": false,
        "bullet": {
          "type": "drone",
          "sizeRatio": 1,
          "health": 2,
          "damage": 0.7,
          "speed": 0.48,
          "scatterRate": 1,
          "lifeLength": -1,
          "absorbtionFactor": 1
        }
      }
    ],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Drone Damage",
        "max": 7
      },
      {
        "name": "Drone Health",
        "max": 7
      },
      {
        "name": "Drone Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "key": "mothership",
    "color": 4,
    "upgradesFrom": []
  },
  "predator": {
    "id": 28,
    "name": "Predator",
    "upgradeMessage": "Use your right mouse button to look further in the direction you're facing",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {
      "invisibility": false,
      "zoomAbility": true,
      "canClaimSquares": false,
      "devOnly": false
    },
    "visibilityRateShooting": 0.23,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 0.85,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 50,
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
        "delay": 0,
        "reload": 3,
        "recoil": 0.3,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 0.7,
          "health": 1,
          "damage": 0.75,
          "speed": 1.4,
          "scatterRate": 0.3,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 0,
        "offset": 0,
        "size": 95,
        "width": 1.35,
        "delay": 0.2,
        "reload": 3,
        "recoil": 0.3,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 0.7,
          "health": 1,
          "damage": 0.75,
          "speed": 1.4,
          "scatterRate": 0.3,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 0,
        "offset": 0,
        "size": 80,
        "width": 1.7,
        "delay": 0.4,
        "reload": 3,
        "recoil": 0.3,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 0.7,
          "health": 1,
          "damage": 0.75,
          "speed": 1.4,
          "scatterRate": 0.3,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      }
    ],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "key": "predator",
    "upgradesFrom": [
      "hunter"
    ],
    "color": 0
  },
  "sprayer": {
    "id": 29,
    "name": "Sprayer",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {
      "invisibility": false,
      "zoomAbility": false,
      "canClaimSquares": false,
      "devOnly": false
    },
    "visibilityRateShooting": 0.23,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 1,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 50,
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
        "delay": 0.5,
        "reload": 1,
        "recoil": 0,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 0.7,
          "health": 1,
          "damage": 0.1,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 0,
        "offset": 0,
        "size": 95,
        "width": 1,
        "delay": 0,
        "reload": 0.5,
        "recoil": 1,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.7,
          "speed": 1,
          "scatterRate": 3,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      }
    ],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "key": "sprayer",
    "upgradesFrom": [
      "machine gun"
    ],
    "color": 2
  },
  "trapper": {
    "id": 31,
    "name": "Trapper",
    "upgradeMessage": "",
    "levelRequirement": 30,
    "upgrades": [
      "tri-trapper",
      "gunner trapper",
      "overtrapper",
      "mega trapper",
      "auto trapper"
    ],
    "flags": {
      "invisibility": false,
      "zoomAbility": false,
      "canClaimSquares": false,
      "devOnly": false
    },
    "visibilityRateShooting": 0.23,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 0.9,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 50,
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
        "delay": 0,
        "reload": 1.5,
        "recoil": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": "trapLauncher",
        "bullet": {
          "type": "trap",
          "sizeRatio": 0.8,
          "health": 2,
          "damage": 1,
          "speed": 2,
          "scatterRate": 1,
          "lifeLength": 8,
          "absorbtionFactor": 1
        }
      }
    ],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "key": "trapper",
    "upgradesFrom": [
      "sniper"
    ],
    "color": 3
  },
  "gunner trapper": {
    "id": 32,
    "name": "Gunner Trapper",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {
      "invisibility": false,
      "zoomAbility": false,
      "canClaimSquares": false,
      "devOnly": false
    },
    "visibilityRateShooting": 0.23,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 0.9,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 50,
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
        "delay": 0.66,
        "reload": 1,
        "recoil": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.5,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 0,
        "offset": 16,
        "size": 75,
        "width": 0.5,
        "delay": 0.33,
        "reload": 1,
        "recoil": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.5,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 3.141592653589793,
        "offset": 0,
        "size": 60,
        "width": 1.3,
        "delay": 0,
        "reload": 3,
        "recoil": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": "trapLauncher",
        "bullet": {
          "type": "trap",
          "sizeRatio": 0.8,
          "health": 2,
          "damage": 1,
          "speed": 2,
          "scatterRate": 1,
          "lifeLength": 8,
          "absorbtionFactor": 1
        }
      }
    ],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "key": "gunner trapper",
    "upgradesFrom": [
      "gunner",
      "trapper"
    ],
    "color": 1
  },
  "overtrapper": {
    "id": 33,
    "name": "Overtrapper",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {
      "invisibility": false,
      "zoomAbility": false,
      "canClaimSquares": false,
      "devOnly": false
    },
    "visibilityRateShooting": 0.23,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 0.9,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 50,
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
        "delay": 0,
        "reload": 1.5,
        "recoil": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": "trapLauncher",
        "bullet": {
          "type": "trap",
          "sizeRatio": 0.8,
          "health": 2,
          "damage": 1,
          "speed": 2,
          "scatterRate": 1,
          "lifeLength": 8,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 2.0943951023931953,
        "offset": 0,
        "size": 70,
        "width": 1,
        "delay": 0,
        "reload": 6,
        "recoil": 1,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "addon": null,
        "droneCount": 1,
        "canControlDrones": false,
        "bullet": {
          "type": "drone",
          "sizeRatio": 1,
          "health": 1.4,
          "damage": 0.7,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": -1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 4.1887902047863905,
        "offset": 0,
        "size": 70,
        "width": 1,
        "delay": 0,
        "reload": 6,
        "recoil": 1,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "addon": null,
        "droneCount": 1,
        "canControlDrones": false,
        "bullet": {
          "type": "drone",
          "sizeRatio": 1,
          "health": 1.4,
          "damage": 0.7,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": -1,
          "absorbtionFactor": 1
        }
      }
    ],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "key": "overtrapper",
    "upgradesFrom": [
      "overseer",
      "trapper"
    ],
    "color": 3
  },
  "mega trapper": {
    "id": 34,
    "name": "Mega Trapper",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {
      "invisibility": false,
      "zoomAbility": false,
      "canClaimSquares": false,
      "devOnly": false
    },
    "visibilityRateShooting": 0.23,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 0.9,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 50,
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
        "delay": 0,
        "reload": 3.3,
        "recoil": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": "trapLauncher",
        "bullet": {
          "type": "trap",
          "sizeRatio": 1.28,
          "health": 3.2,
          "damage": 1.6,
          "speed": 2,
          "scatterRate": 1,
          "lifeLength": 8,
          "absorbtionFactor": 1
        }
      }
    ],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "key": "mega trapper",
    "upgradesFrom": [
      "trapper"
    ],
    "color": 3
  },
  "tri-trapper": {
    "id": 35,
    "name": "Tri-Trapper",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {
      "invisibility": false,
      "zoomAbility": false,
      "canClaimSquares": false,
      "devOnly": false
    },
    "visibilityRateShooting": 0.23,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 0.9,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 50,
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
        "delay": 0,
        "reload": 1.5,
        "recoil": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": "trapLauncher",
        "bullet": {
          "type": "trap",
          "sizeRatio": 0.8,
          "health": 2,
          "damage": 1,
          "speed": 2,
          "scatterRate": 1,
          "lifeLength": 3.2,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 2.0943951023931953,
        "offset": 0,
        "size": 60,
        "width": 1,
        "delay": 0,
        "reload": 1.5,
        "recoil": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": "trapLauncher",
        "bullet": {
          "type": "trap",
          "sizeRatio": 0.8,
          "health": 2,
          "damage": 1,
          "speed": 2,
          "scatterRate": 1,
          "lifeLength": 3.2,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 4.1887902047863905,
        "offset": 0,
        "size": 60,
        "width": 1,
        "delay": 0,
        "reload": 1.5,
        "recoil": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": "trapLauncher",
        "bullet": {
          "type": "trap",
          "sizeRatio": 0.8,
          "health": 2,
          "damage": 1,
          "speed": 2,
          "scatterRate": 1,
          "lifeLength": 3.2,
          "absorbtionFactor": 1
        }
      }
    ],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "key": "tri-trapper",
    "upgradesFrom": [
      "trapper"
    ],
    "color": 0
  },
  "smasher": {
    "id": 36,
    "name": "Smasher",
    "upgradeMessage": "",
    "levelRequirement": 30,
    "upgrades": [
      "landmine",
      "auto smasher",
      "spike"
    ],
    "flags": {
      "invisibility": false,
      "zoomAbility": false,
      "canClaimSquares": false,
      "devOnly": false
    },
    "visibilityRateShooting": 0.23,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 0.9,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 50,
    "preAddon": null,
    "postAddon": "smasher",
    "sides": 1,
    "borderWidth": 15,
    "barrels": [],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 10
      },
      {
        "name": "Reload",
        "max": 0
      },
      {
        "name": "Bullet Damage",
        "max": 0
      },
      {
        "name": "Bullet Penetration",
        "max": 0
      },
      {
        "name": "Bullet Speed",
        "max": 0
      },
      {
        "name": "Body Damage",
        "max": 10
      },
      {
        "name": "Max Health",
        "max": 10
      },
      {
        "name": "Health Regen",
        "max": 10
      }
    ],
    "key": "smasher",
    "upgradesFrom": [
      "basic"
    ],
    "color": 4
  },
  "landmine": {
    "id": 38,
    "name": "Landmine",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {
      "invisibility": true,
      "zoomAbility": false,
      "canClaimSquares": false,
      "devOnly": false
    },
    "visibilityRateShooting": 0,
    "visibilityRateMoving": 0.16,
    "invisibilityRate": 0.003,
    "fieldFactor": 0.9,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 50,
    "preAddon": null,
    "postAddon": "landmine",
    "sides": 1,
    "borderWidth": 15,
    "barrels": [],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 10
      },
      {
        "name": "Reload",
        "max": 0
      },
      {
        "name": "Bullet Damage",
        "max": 0
      },
      {
        "name": "Bullet Penetration",
        "max": 0
      },
      {
        "name": "Bullet Speed",
        "max": 0
      },
      {
        "name": "Body Damage",
        "max": 10
      },
      {
        "name": "Max Health",
        "max": 10
      },
      {
        "name": "Health Regen",
        "max": 10
      }
    ],
    "key": "landmine",
    "upgradesFrom": [
      "smasher"
    ],
    "color": 0
  },
  "auto gunner": {
    "id": 39,
    "name": "Auto Gunner",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {
      "invisibility": false,
      "zoomAbility": false,
      "canClaimSquares": false,
      "devOnly": false
    },
    "visibilityRateShooting": 0.23,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 1,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 50,
    "preAddon": null,
    "postAddon": "autoturret",
    "sides": 1,
    "borderWidth": 15,
    "barrels": [
      {
        "angle": 0,
        "offset": -32,
        "size": 65,
        "width": 0.6,
        "delay": 0.5,
        "reload": 1,
        "recoil": 0.2,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 0.45,
          "damage": 0.5,
          "speed": 1.1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 0,
        "offset": 32,
        "size": 65,
        "width": 0.6,
        "delay": 0.75,
        "reload": 1,
        "recoil": 0.2,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 0.45,
          "damage": 0.5,
          "speed": 1.1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 0,
        "offset": -17,
        "size": 85,
        "width": 0.6,
        "delay": 0,
        "reload": 1,
        "recoil": 0.2,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 0.45,
          "damage": 0.5,
          "speed": 1.1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 0,
        "offset": 17,
        "size": 85,
        "width": 0.6,
        "delay": 0.25,
        "reload": 1,
        "recoil": 0.2,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 0.45,
          "damage": 0.5,
          "speed": 1.1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      }
    ],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "key": "auto gunner",
    "upgradesFrom": [
      "gunner",
      "auto-3"
    ],
    "color": 0
  },
  "auto-5": {
    "id": 40,
    "name": "Auto 5",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {
      "invisibility": false,
      "zoomAbility": false,
      "canClaimSquares": false,
      "devOnly": false
    },
    "visibilityRateShooting": 0.23,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 1,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 50,
    "preAddon": null,
    "postAddon": "auto5",
    "sides": 1,
    "borderWidth": 15,
    "barrels": [],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "key": "auto-5",
    "upgradesFrom": [
      "quad tank",
      "auto-3"
    ],
    "color": 1
  },
  "auto-3": {
    "id": 41,
    "name": "Auto 3",
    "upgradeMessage": "",
    "levelRequirement": 30,
    "upgrades": [
      "auto-5",
      "auto gunner"
    ],
    "flags": {
      "invisibility": false,
      "zoomAbility": false,
      "canClaimSquares": false,
      "devOnly": false
    },
    "visibilityRateShooting": 0.23,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 1,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 50,
    "preAddon": null,
    "postAddon": "auto3",
    "sides": 1,
    "borderWidth": 15,
    "barrels": [],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "key": "auto-3",
    "upgradesFrom": [
      "flank guard"
    ],
    "color": 3
  },
  "spread shot": {
    "id": 42,
    "name": "Spread Shot",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {
      "invisibility": false,
      "zoomAbility": false,
      "canClaimSquares": false,
      "devOnly": false
    },
    "visibilityRateShooting": 0.23,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 1,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 50,
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
        "delay": 0.833325,
        "reload": 2,
        "recoil": 0.1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.6,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": -1.3089969389957472,
        "offset": 0,
        "size": 65,
        "width": 0.7,
        "delay": 0.833325,
        "reload": 2,
        "recoil": 0.1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.6,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 1.0471975511965976,
        "offset": 0,
        "size": 71,
        "width": 0.7,
        "delay": 0.666675,
        "reload": 2,
        "recoil": 0.1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.6,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": -1.0471975511965976,
        "offset": 0,
        "size": 71,
        "width": 0.7,
        "delay": 0.666675,
        "reload": 2,
        "recoil": 0.1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.6,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 0.7853981633974483,
        "offset": 0,
        "size": 77,
        "width": 0.7,
        "delay": 0.5,
        "reload": 2,
        "recoil": 0.1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.6,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": -0.7853981633974483,
        "offset": 0,
        "size": 77,
        "width": 0.7,
        "delay": 0.5,
        "reload": 2,
        "recoil": 0.1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.6,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 0.5235987755982988,
        "offset": 0,
        "size": 83,
        "width": 0.7,
        "delay": 0.333325,
        "reload": 2,
        "recoil": 0.1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.6,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": -0.5235987755982988,
        "offset": 0,
        "size": 83,
        "width": 0.7,
        "delay": 0.333325,
        "reload": 2,
        "recoil": 0.1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.6,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 0.2617993877991494,
        "offset": 0,
        "size": 89,
        "width": 0.7,
        "delay": 0.166675,
        "reload": 2,
        "recoil": 0.1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.6,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": -0.2617993877991494,
        "offset": 0,
        "size": 89,
        "width": 0.7,
        "delay": 0.166675,
        "reload": 2,
        "recoil": 0.1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 0.6,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 0,
        "offset": 0,
        "size": 95,
        "width": 1,
        "delay": 0,
        "reload": 2,
        "recoil": 0.1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 1,
          "damage": 1,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      }
    ],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "key": "spread shot",
    "upgradesFrom": [
      "triple shot"
    ],
    "color": 2
  },
  "streamliner": {
    "id": 43,
    "name": "Streamliner",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {
      "invisibility": false,
      "zoomAbility": false,
      "canClaimSquares": false,
      "devOnly": false
    },
    "visibilityRateShooting": 0.23,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 0.85,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 50,
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
        "delay": 0,
        "reload": 1,
        "recoil": 0.2,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 0.7,
          "health": 1,
          "damage": 0.2,
          "speed": 1.1,
          "scatterRate": 0.3,
          "lifeLength": 0.8,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 0,
        "offset": 0,
        "size": 100,
        "width": 1,
        "delay": 0.2,
        "reload": 1,
        "recoil": 0.2,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 0.7,
          "health": 1,
          "damage": 0.2,
          "speed": 1.1,
          "scatterRate": 0.3,
          "lifeLength": 0.8,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 0,
        "offset": 0,
        "size": 90,
        "width": 1,
        "delay": 0.4,
        "reload": 1,
        "recoil": 0.2,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 0.7,
          "health": 1,
          "damage": 0.2,
          "speed": 1.1,
          "scatterRate": 0.3,
          "lifeLength": 0.8,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 0,
        "offset": 0,
        "size": 80,
        "width": 1,
        "delay": 0.6,
        "reload": 1,
        "recoil": 0.2,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 0.7,
          "health": 1,
          "damage": 0.2,
          "speed": 1.1,
          "scatterRate": 0.3,
          "lifeLength": 0.8,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 0,
        "offset": 0,
        "size": 70,
        "width": 1,
        "delay": 0.8,
        "reload": 1,
        "recoil": 0.2,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 0.7,
          "health": 1,
          "damage": 0.2,
          "speed": 1.1,
          "scatterRate": 0.3,
          "lifeLength": 0.8,
          "absorbtionFactor": 1
        }
      }
    ],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "key": "streamliner",
    "upgradesFrom": [
      "hunter",
      "gunner"
    ],
    "color": 1
  },
  "auto trapper": {
    "id": 44,
    "name": "Auto Trapper",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {
      "invisibility": false,
      "zoomAbility": false,
      "canClaimSquares": false,
      "devOnly": false
    },
    "visibilityRateShooting": 0.23,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 0.9,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 50,
    "preAddon": null,
    "postAddon": "autoturret",
    "sides": 1,
    "borderWidth": 15,
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 60,
        "width": 1,
        "delay": 0,
        "reload": 1.5,
        "recoil": 1,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": "trapLauncher",
        "bullet": {
          "type": "trap",
          "sizeRatio": 0.8,
          "health": 2,
          "damage": 1,
          "speed": 2,
          "scatterRate": 1,
          "lifeLength": 8,
          "absorbtionFactor": 1
        }
      }
    ],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "key": "auto trapper",
    "upgradesFrom": [
      "trapper"
    ],
    "color": 4
  },
  "destroyer-dominator": {
    "id": 45,
    "name": "Destroyer Dominator",
    "upgradeMessage": "",
    "levelRequirement": 0,
    "upgrades": [],
    "flags": {
      "invisibility": false,
      "zoomAbility": false,
      "canClaimSquares": false,
      "devOnly": false
    },
    "visibilityRateShooting": 0.23,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 1,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 6000,
    "preAddon": "dominator",
    "postAddon": "dominator",
    "sides": 1,
    "borderWidth": 15,
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 80,
        "width": 0.83,
        "delay": 0.001,
        "reload": 3,
        "recoil": 0,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 100,
          "damage": 10,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 0.1
        }
      }
    ],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 0
      },
      {
        "name": "Reload",
        "max": 0
      },
      {
        "name": "Bullet Damage",
        "max": 0
      },
      {
        "name": "Bullet Penetration",
        "max": 0
      },
      {
        "name": "Bullet Speed",
        "max": 0
      },
      {
        "name": "Body Damage",
        "max": 0
      },
      {
        "name": "Max Health",
        "max": 0
      },
      {
        "name": "Health Regen",
        "max": 0
      }
    ],
    "key": "destroyer-dominator",
    "upgradesFrom": [],
    "color": 0,
  },
  "gunner-dominator": {
    "id": 46,
    "name": "Gunner Dominator",
    "upgradeMessage": "",
    "levelRequirement": 0,
    "upgrades": [],
    "flags": {
      "invisibility": false,
      "zoomAbility": false,
      "canClaimSquares": false,
      "devOnly": false
    },
    "visibilityRateShooting": 0.23,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 1,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 6000,
    "preAddon": "dominator",
    "postAddon": "dominator",
    "sides": 1,
    "borderWidth": 15,
    "barrels": [
      {
        "angle": 0,
        "offset": -6,
        "size": 75,
        "width": 0.415,
        "delay": 0.666,
        "reload": 0.3,
        "recoil": 0,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 0.6,
          "health": 5,
          "damage": 1,
          "speed": 1.2,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 0,
        "offset": 6,
        "size": 75,
        "width": 0.415,
        "delay": 0.333,
        "reload": 0.3,
        "recoil": 0,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 0.6,
          "health": 5,
          "damage": 1,
          "speed": 1.2,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 0,
        "offset": 0,
        "size": 80,
        "width": 0.415,
        "delay": 0.001,
        "reload": 0.3,
        "recoil": 0,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 0.6,
          "health": 5,
          "damage": 1,
          "speed": 1.2,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      }
    ],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 0
      },
      {
        "name": "Reload",
        "max": 0
      },
      {
        "name": "Bullet Damage",
        "max": 0
      },
      {
        "name": "Bullet Penetration",
        "max": 0
      },
      {
        "name": "Bullet Speed",
        "max": 0
      },
      {
        "name": "Body Damage",
        "max": 0
      },
      {
        "name": "Max Health",
        "max": 0
      },
      {
        "name": "Health Regen",
        "max": 0
      }
    ],
    "key": "gunner-dominator",
    "upgradesFrom": [],
    "color": 1,
  },
  "trapper-dominator": {
    "id": 47,
    "name": "Trapper Dominator",
    "upgradeMessage": "",
    "levelRequirement": 0,
    "upgrades": [],
    "flags": {
      "invisibility": false,
      "zoomAbility": false,
      "canClaimSquares": false,
      "devOnly": false
    },
    "visibilityRateShooting": 0.23,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 1,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 6000,
    "preAddon": "dominator",
    "postAddon": null,
    "sides": 1,
    "borderWidth": 15,
    "barrels": [
      {
        "angle": 0,
        "offset": 0,
        "size": 60,
        "width": 0.5,
        "delay": 0,
        "reload": 1.5,
        "recoil": 0,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": "trapLauncher",
        "forceFire": true,
        "bullet": {
          "type": "trap",
          "sizeRatio": 0.8,
          "health": 20,
          "damage": 3,
          "speed": 4,
          "scatterRate": 1,
          "lifeLength": 3.2,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 0.7853981633974483,
        "offset": 0,
        "size": 60,
        "width": 0.5,
        "delay": 0,
        "reload": 1.5,
        "recoil": 0,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": "trapLauncher",
        "forceFire": true,
        "bullet": {
          "type": "trap",
          "sizeRatio": 0.8,
          "health": 20,
          "damage": 3,
          "speed": 4,
          "scatterRate": 1,
          "lifeLength": 3.2,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 1.5707963267948966,
        "offset": 0,
        "size": 60,
        "width": 0.5,
        "delay": 0,
        "reload": 1.5,
        "recoil": 0,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": "trapLauncher",
        "forceFire": true,
        "bullet": {
          "type": "trap",
          "sizeRatio": 0.8,
          "health": 20,
          "damage": 3,
          "speed": 4,
          "scatterRate": 1,
          "lifeLength": 3.2,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 2.356194490192345,
        "offset": 0,
        "size": 60,
        "width": 0.5,
        "delay": 0,
        "reload": 1.5,
        "recoil": 0,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": "trapLauncher",
        "forceFire": true,
        "bullet": {
          "type": "trap",
          "sizeRatio": 0.8,
          "health": 20,
          "damage": 3,
          "speed": 4,
          "scatterRate": 1,
          "lifeLength": 3.2,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 3.141592653589793,
        "offset": 0,
        "size": 60,
        "width": 0.5,
        "delay": 0,
        "reload": 1.5,
        "recoil": 0,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": "trapLauncher",
        "forceFire": true,
        "bullet": {
          "type": "trap",
          "sizeRatio": 0.8,
          "health": 20,
          "damage": 3,
          "speed": 4,
          "scatterRate": 1,
          "lifeLength": 3.2,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 3.9269908169872414,
        "offset": 0,
        "size": 60,
        "width": 0.5,
        "delay": 0,
        "reload": 1.5,
        "recoil": 0,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": "trapLauncher",
        "forceFire": true,
        "bullet": {
          "type": "trap",
          "sizeRatio": 0.8,
          "health": 20,
          "damage": 3,
          "speed": 4,
          "scatterRate": 1,
          "lifeLength": 3.2,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 4.71238898038469,
        "offset": 0,
        "size": 60,
        "width": 0.5,
        "delay": 0,
        "reload": 1.5,
        "recoil": 0,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": "trapLauncher",
        "forceFire": true,
        "bullet": {
          "type": "trap",
          "sizeRatio": 0.8,
          "health": 20,
          "damage": 3,
          "speed": 4,
          "scatterRate": 1,
          "lifeLength": 3.2,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 5.497787143782138,
        "offset": 0,
        "size": 60,
        "width": 0.5,
        "delay": 0,
        "reload": 1.5,
        "recoil": 0,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": "trapLauncher",
        "forceFire": true,
        "bullet": {
          "type": "trap",
          "sizeRatio": 0.8,
          "health": 20,
          "damage": 3,
          "speed": 4,
          "scatterRate": 1,
          "lifeLength": 3.2,
          "absorbtionFactor": 1
        }
      }
    ],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 0
      },
      {
        "name": "Reload",
        "max": 0
      },
      {
        "name": "Bullet Damage",
        "max": 0
      },
      {
        "name": "Bullet Penetration",
        "max": 0
      },
      {
        "name": "Bullet Speed",
        "max": 0
      },
      {
        "name": "Body Damage",
        "max": 0
      },
      {
        "name": "Max Health",
        "max": 0
      },
      {
        "name": "Health Regen",
        "max": 0
      }
    ],
    "key": "trapper-dominator",
    "upgradesFrom": [],
    "color": 2
  },
  "battleship": {
    "id": 48,
    "name": "Battleship",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {
      "invisibility": false,
      "zoomAbility": false,
      "canClaimSquares": false,
      "devOnly": false
    },
    "visibilityRateShooting": 0.23,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 0.9,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 50,
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
        "delay": 0,
        "reload": 1,
        "recoil": 1,
        "isTrapezoid": true,
        "trapezoidDirection": 3.141592653589793,
        "addon": null,
        "droneCount": 4294967295,
        "canControlDrones": false,
        "bullet": {
          "type": "swarm",
          "sizeRatio": 0.7,
          "health": 1,
          "damage": 0.15,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 4.71238898038469,
        "offset": -20,
        "size": 75,
        "width": 0.7,
        "delay": 0,
        "reload": 1,
        "recoil": 1,
        "isTrapezoid": true,
        "trapezoidDirection": 3.141592653589793,
        "addon": null,
        "droneCount": 4294967295,
        "canControlDrones": false,
        "bullet": {
          "type": "swarm",
          "sizeRatio": 0.7,
          "health": 1,
          "damage": 0.15,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 1.5707963267948966,
        "offset": 20,
        "size": 75,
        "width": 0.7,
        "delay": 0,
        "reload": 1,
        "recoil": 1,
        "isTrapezoid": true,
        "trapezoidDirection": 3.141592653589793,
        "addon": null,
        "droneCount": 4294967295,
        "canControlDrones": true,
        "bullet": {
          "type": "swarm",
          "sizeRatio": 0.7,
          "health": 1,
          "damage": 0.15,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      },
      {
        "angle": 4.71238898038469,
        "offset": 20,
        "size": 75,
        "width": 0.7,
        "delay": 0,
        "reload": 1,
        "recoil": 1,
        "isTrapezoid": true,
        "trapezoidDirection": 3.141592653589793,
        "addon": null,
        "droneCount": 4294967295,
        "canControlDrones": true,
        "bullet": {
          "type": "swarm",
          "sizeRatio": 0.7,
          "health": 1,
          "damage": 0.15,
          "speed": 1,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 1
        }
      }
    ],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "key": "battleship",
    "upgradesFrom": [
      "overseer",
      "twin flank"
    ],
    "color": 4
  },
  "annihilator": {
    "id": 49,
    "name": "Annihilator",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {
      "invisibility": false,
      "zoomAbility": false,
      "canClaimSquares": false,
      "devOnly": false
    },
    "visibilityRateShooting": 0.23,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 1,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 50,
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
        "delay": 0,
        "reload": 4,
        "recoil": 17,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "bullet",
          "sizeRatio": 1,
          "health": 2,
          "damage": 3,
          "speed": 0.7,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 0.05
        }
      }
    ],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "key": "annihilator",
    "upgradesFrom": [
      "destroyer"
    ],
    "color": 1
  },
  "auto smasher": {
    "id": 50,
    "name": "Auto Smasher",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {
      "invisibility": false,
      "zoomAbility": false,
      "canClaimSquares": false,
      "devOnly": false
    },
    "visibilityRateShooting": 0.23,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 0.9,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 50,
    "preAddon": null,
    "postAddon": "autosmasher",
    "sides": 1,
    "borderWidth": 15,
    "barrels": [],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 10
      },
      {
        "name": "Reload",
        "max": 10
      },
      {
        "name": "Bullet Damage",
        "max": 10
      },
      {
        "name": "Bullet Penetration",
        "max": 10
      },
      {
        "name": "Bullet Speed",
        "max": 10
      },
      {
        "name": "Body Damage",
        "max": 10
      },
      {
        "name": "Max Health",
        "max": 10
      },
      {
        "name": "Health Regen",
        "max": 10
      }
    ],
    "key": "auto smasher",
    "upgradesFrom": [
      "smasher"
    ],
    "color": 1
  },
  "spike": {
    "id": 51,
    "name": "Spike",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {
      "invisibility": false,
      "zoomAbility": false,
      "canClaimSquares": false,
      "devOnly": false
    },
    "visibilityRateShooting": 0.23,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 0.9,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 50,
    "preAddon": null,
    "postAddon": "spike",
    "sides": 1,
    "borderWidth": 15,
    "barrels": [],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 10
      },
      {
        "name": "Reload",
        "max": 0
      },
      {
        "name": "Bullet Damage",
        "max": 0
      },
      {
        "name": "Bullet Penetration",
        "max": 0
      },
      {
        "name": "Bullet Speed",
        "max": 0
      },
      {
        "name": "Body Damage",
        "max": 10
      },
      {
        "name": "Max Health",
        "max": 10
      },
      {
        "name": "Health Regen",
        "max": 10
      }
    ],
    "key": "spike",
    "upgradesFrom": [
      "smasher"
    ],
    "color": 2
  },
  "factory": {
    "id": 52,
    "name": "Factory",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {
      "invisibility": false,
      "zoomAbility": false,
      "canClaimSquares": false,
      "devOnly": false
    },
    "visibilityRateShooting": 0.23,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 0.9,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 50,
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
        "delay": 0,
        "reload": 3,
        "recoil": 1,
        "isTrapezoid": true,
        "trapezoidDirection": 0,
        "addon": null,
        "droneCount": 6,
        "canControlDrones": true,
        "bullet": {
          "type": "minion",
          "sizeRatio": 1,
          "health": 4,
          "damage": 0.7,
          "speed": 0.56,
          "scatterRate": 1,
          "lifeLength": -1,
          "absorbtionFactor": 1
        }
      }
    ],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Drone Damage",
        "max": 7
      },
      {
        "name": "Drone Health",
        "max": 7
      },
      {
        "name": "Drone Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "key": "factory",
    "upgradesFrom": [
      "overseer"
    ],
    "color": 5
  },
  "dev-tank": {
    "id": 53,
    "name": "Dev Tank",
    "upgradeMessage": "",
    "levelRequirement": 0,
    "upgrades": [],
    "flags": {
      "invisibility": false,
      "zoomAbility": false,
      "canClaimSquares": false,
      "devOnly": true
    },
    "visibilityRateShooting": 0.23,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 1,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 50,
    "preAddon": null,
    "postAddon": null,
    "sides": 1,
    "borderWidth": 15,
    "barrels": [],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "key": "dev-tank",
    "upgradesFrom": [],
    "color": 2
  },
  "skimmer": {
    "id": 54,
    "name": "Skimmer",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {
      "invisibility": false,
      "zoomAbility": false,
      "canClaimSquares": false,
      "devOnly": false
    },
    "visibilityRateShooting": 0.23,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 0.9,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 50,
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
        "delay": 0,
        "reload": 4,
        "recoil": 3,
        "isTrapezoid": false,
        "trapezoidDirection": 0,
        "addon": null,
        "bullet": {
          "type": "skimmer",
          "sizeRatio": 1,
          "health": 3,
          "damage": 1,
          "speed": 0.5,
          "scatterRate": 1,
          "lifeLength": 1.3,
          "absorbtionFactor": 0.1
        }
      }
    ],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "key": "skimmer",
    "upgradesFrom": [
      "destroyer"
    ],
    "color": 2
  },
  "rocketeer": {
    "id": 55,
    "name": "Rocketeer",
    "upgradeMessage": "",
    "levelRequirement": 45,
    "upgrades": [],
    "flags": {
      "invisibility": false,
      "zoomAbility": false,
      "canClaimSquares": false,
      "devOnly": false
    },
    "visibilityRateShooting": 0.23,
    "visibilityRateMoving": 0.08,
    "invisibilityRate": 0.03,
    "fieldFactor": 0.9,
    "absorbtionFactor": 1,
    "speed": 1,
    "maxHealth": 50,
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
        "delay": 0,
        "reload": 4,
        "recoil": 3,
        "isTrapezoid": true,
        "trapezoidDirection": 3.141592653589793,
        "addon": null,
        "bullet": {
          "type": "rocket",
          "sizeRatio": 1,
          "health": 5,
          "damage": 1,
          "speed": 0.3,
          "scatterRate": 1,
          "lifeLength": 1,
          "absorbtionFactor": 0.1
        }
      }
    ],
    "stats": [
      {
        "name": "Movement Speed",
        "max": 7
      },
      {
        "name": "Reload",
        "max": 7
      },
      {
        "name": "Bullet Damage",
        "max": 7
      },
      {
        "name": "Bullet Penetration",
        "max": 7
      },
      {
        "name": "Bullet Speed",
        "max": 7
      },
      {
        "name": "Body Damage",
        "max": 7
      },
      {
        "name": "Max Health",
        "max": 7
      },
      {
        "name": "Health Regen",
        "max": 7
      }
    ],
    "key": "rocketeer",
    "upgradesFrom": [
      "destroyer"
    ],
    "color": 3
  }
}