export interface WorldRecord {
    score: number // score
    duration?: number // seconds
    formattedDuration?: string // hours:minutes:seconds - for ease of entry. i will auto convert them into seconds
    scorer: string // name of the scorer

}

export const recordData: {
    [key: string]: {
        [key: string]: WorldRecord
    }
} = {
    "basic": {
        "ffa": {
            "score": 1080000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "JB columbia"
        },
        "2tdm": {
            "score": 1410000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Quarks"
        },
        "4tdm": {
            "score": 1360000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Mr Cheeky"
        },
        "maze": {
            "score": 701000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Baller"
        }
    },
    "twin": {
        "ffa": {
            "score": 1970000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "☢"
        },
        "2tdm": {
            "score": 1530000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Deniz"
        },
        "4tdm": {
            "score": 1710000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "☢"
        },
        "maze": {
            "score": 1420000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Kesler"
        }
    },
    "triplet": {
        "ffa": {
            "score": 2680000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Deniz"
        },
        "2tdm": {
            "score": 2330000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Ricardo"
        },
        "4tdm": {
            "score": 2000000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "RipDreams"
        },
        "maze": {
            "score": 1720000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Kyo"
        }
    },
    "triple-shot": {
        "ffa": {
            "score": 1390000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "RYS"
        },
        "2tdm": {
            "score": 1960000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "i'm back"
        },
        "4tdm": {
            "score": 1480000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "MG PRO"
        },
        "maze": {
            "score": 699000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "xTriangleSquare"
        }
    },
    "quad-tank": {
        "ffa": {
            "score": 1240000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Alberich"
        },
        "2tdm": {
            "score": 1590000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Fallen"
        },
        "4tdm": {
            "score": 1580000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Fallen"
        },
        "maze": {
            "score": 818000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Astral"
        }
    },
    "octo-tank": {
        "ffa": {
            "score": 2620000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Fallen"
        },
        "2tdm": {
            "score": 3010000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Boner Alert"
        },
        "4tdm": {
            "score": 2610000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "UltraXile"
        },
        "maze": {
            "score": 1380000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "JB Columbia"
        }
    },
    "sniper": {
        "ffa": {
            "score": 1990000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Akraisa"
        },
        "2tdm": {
            "score": 2140000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "exo"
        },
        "4tdm": {
            "score": 1970000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Werewolf"
        },
        "maze": {
            "score": 625000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Diamind"
        }
    },
    "machine-gun": {
        "ffa": {
            "score": 2120000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "JB Columbia"
        },
        "2tdm": {
            "score": 1500000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "dragos"
        },
        "4tdm": {
            "score": 2500000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "dragos"
        },
        "maze": {
            "score": 1400000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "JB Columbia"
        }
    },
    "flank-guard": {
        "ffa": {
            "score": 1520000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Deimos"
        },
        "2tdm": {
            "score": 1340000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Legit Developer"
        },
        "4tdm": {
            "score": 2050000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Slade"
        },
        "maze": {
            "score": 719000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Deimos"
        }
    },
    "tri-angle": {
        "ffa": {
            "score": 2150000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "RYS"
        },
        "2tdm": {
            "score": 2080000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Minty"
        },
        "4tdm": {
            "score": 1910000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "RYS"
        },
        "maze": {
            "score": 1250000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "RYS"
        }
    },
    "destroyer": {
        "ffa": {
            "score": 1450000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Wadjet"
        },
        "2tdm": {
            "score": 2450000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "T.wS"
        },
        "4tdm": {
            "score": 2960000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Tri-Trapper"
        },
        "maze": {
            "score": 1040000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "JB Columbia"
        }
    },
    "overseer": {
        "ffa": {
            "score": 3070000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "JB Columbia"
        },
        "2tdm": {
            "score": 4960000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "T.wS"
        },
        "4tdm": {
            "score": 4080000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Anti"
        },
        "maze": {
            "score": 2110000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "JB Columbia"
        }
    },
    "overlord": {
        "ffa": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "2tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "4tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "maze": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        }
    },
    "twin-flank": {
        "ffa": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "2tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "4tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "maze": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        }
    },
    "penta-shot": {
        "ffa": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "2tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "4tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "maze": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        }
    },
    "assassin": {
        "ffa": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "2tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "4tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "maze": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        }
    },
    "necromancer": {
        "ffa": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "2tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "4tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "maze": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        }
    },
    "triple-twin": {
        "ffa": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "2tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "4tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "maze": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        }
    },
    "hunter": {
        "ffa": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "2tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "4tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "maze": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        }
    },
    "gunner": {
        "ffa": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "2tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "4tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "maze": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        }
    },
    "stalker": {
        "ffa": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "2tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "4tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "maze": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        }
    },
    "ranger": {
        "ffa": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "2tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "4tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "maze": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        }
    },
    "booster": {
        "ffa": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "2tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "4tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "maze": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        }
    },
    "fighter": {
        "ffa": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "2tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "4tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "maze": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        }
    },
    "hybrid": {
        "ffa": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "2tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "4tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "maze": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        }
    },
    "manager": {
        "ffa": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "2tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "4tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "maze": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        }
    },
    "mothership": {
        "ffa": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "2tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "4tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "maze": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        }
    },
    "predator": {
        "ffa": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "2tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "4tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "maze": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        }
    },
    "sprayer": {
        "ffa": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "2tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "4tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "maze": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        }
    },
    "trapper": {
        "ffa": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "2tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "4tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "maze": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        }
    },
    "gunner-trapper": {
        "ffa": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "2tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "4tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "maze": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        }
    },
    "overtrapper": {
        "ffa": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "2tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "4tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "maze": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        }
    },
    "mega-trapper": {
        "ffa": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "2tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "4tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "maze": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        }
    },
    "tri-trapper": {
        "ffa": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "2tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "4tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "maze": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        }
    },
    "smasher": {
        "ffa": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "2tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "4tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "maze": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        }
    },
    "landmine": {
        "ffa": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "2tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "4tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "maze": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        }
    },
    "auto-gunner": {
        "ffa": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "2tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "4tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "maze": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        }
    },
    "auto-5": {
        "ffa": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "2tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "4tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "maze": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        }
    },
    "auto-3": {
        "ffa": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "2tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "4tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "maze": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        }
    },
    "spread-shot": {
        "ffa": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "2tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "4tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "maze": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        }
    },
    "streamliner": {
        "ffa": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "2tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "4tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "maze": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        }
    },
    "auto-trapper": {
        "ffa": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "2tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "4tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "maze": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        }
    },
    "battleship": {
        "ffa": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "2tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "4tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "maze": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        }
    },
    "annihilator": {
        "ffa": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "2tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "4tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "maze": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        }
    },
    "auto-smasher": {
        "ffa": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "2tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "4tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "maze": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        }
    },
    "spike": {
        "ffa": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "2tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "4tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "maze": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        }
    },
    "factory": {
        "ffa": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "2tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "4tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "maze": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        }
    },
    "dev-tank": {
        "ffa": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "2tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "4tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "maze": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        }
    },
    "skimmer": {
        "ffa": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "2tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "4tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "maze": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        }
    },
    "rocketeer": {
        "ffa": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "2tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "4tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "maze": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        }
    },
    "glider": {
        "ffa": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "2tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "4tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "maze": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        }
    },
    "auto-tank": {
        "ffa": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "2tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "4tdm": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        },
        "maze": {
            "score": 0,
            "duration": 0,
            "formattedDuration": "",
            "scorer": ""
        }
    }
}