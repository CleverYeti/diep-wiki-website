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
            "score": 4300000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Animal"
        },
        "2tdm": {
            "score": 7680000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Legit Developer"
        },
        "4tdm": {
            "score": 6630000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Mohsen"
        },
        "maze": {
            "score": 2320000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "JB Columbia"
        }
    },
    "twin-flank": {
        "ffa": {
            "score": 1220000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Arsalan"
        },
        "2tdm": {
            "score": 2000000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Mr Cheeky"
        },
        "4tdm": {
            "score": 1460000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Peregrine"
        },
        "maze": {
            "score": 1390000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "exo"
        }
    },
    "penta-shot": {
        "ffa": {
            "score": 2910000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Potatoboi"
        },
        "2tdm": {
            "score": 3300000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Bela"
        },
        "4tdm": {
            "score": 2670000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Emerson"
        },
        "maze": {
            "score": 2000000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "exo"
        }
    },
    "assassin": {
        "ffa": {
            "score": 1250000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Overr"
        },
        "2tdm": {
            "score": 1880000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Lambo"
        },
        "4tdm": {
            "score": 1540000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Wash"
        },
        "maze": {
            "score": 1000000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Baller"
        }
    },
    "necromancer": {
        "ffa": {
            "score": 1780000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "JB Columbia"
        },
        "2tdm": {
            "score": 3610000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Saeko"
        },
        "4tdm": {
            "score": 3730000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "d2xy.0"
        },
        "maze": {
            "score": 1070000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Baller"
        }
    },
    "triple-twin": {
        "ffa": {
            "score": 1530000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Sunset"
        },
        "2tdm": {
            "score": 1710000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Will"
        },
        "4tdm": {
            "score": 4190000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "exo"
        },
        "maze": {
            "score": 1950000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Dragonis"
        }
    },
    "hunter": {
        "ffa": {
            "score": 1000000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Mipha"
        },
        "2tdm": {
            "score": 1470000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Imagine"
        },
        "4tdm": {
            "score": 1610000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "JB Columbia"
        },
        "maze": {
            "score": 498000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Mipha"
        }
    },
    "gunner": {
        "ffa": {
            "score": 1680000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Knockout"
        },
        "2tdm": {
            "score": 1480000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Anti"
        },
        "4tdm": {
            "score": 1310000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Aeros"
        },
        "maze": {
            "score": 679000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Deniz"
        }
    },
    "stalker": {
        "ffa": {
            "score": 1030000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "JB Columbia"
        },
        "2tdm": {
            "score": 2500000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Rop"
        },
        "4tdm": {
            "score": 1710000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "f22 birkin"
        },
        "maze": {
            "score": 550000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Sunset"
        }
    },
    "ranger": {
        "ffa": {
            "score": 1480000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "JB Columbia"
        },
        "2tdm": {
            "score": 2270000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Aspect"
        },
        "4tdm": {
            "score": 2230000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Unnamed sniper"
        },
        "maze": {
            "score": 682000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Mipha"
        }
    },
    "booster": {
        "ffa": {
            "score": 3400000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "exo"
        },
        "2tdm": {
            "score": 1980000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Sprunk"
        },
        "4tdm": {
            "score": 3020000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Wash"
        },
        "maze": {
            "score": 1690000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "exo"
        }
    },
    "fighter": {
        "ffa": {
            "score": 3880000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Souka"
        },
        "2tdm": {
            "score": 3020000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Dragonis"
        },
        "4tdm": {
            "score": 3230000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Legit Developer"
        },
        "maze": {
            "score": 1880000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "exo"
        }
    },
    "hybrid": {
        "ffa": {
            "score": 3080000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "lagbreaker"
        },
        "2tdm": {
            "score": 2510000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "vado"
        },
        "4tdm": {
            "score": 2650000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "jorgito gamer"
        },
        "maze": {
            "score": 1610000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Tri-Trapper"
        }
    },
    "manager": {
        "ffa": {
            "score": 2260000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "JB Columbia"
        },
        "2tdm": {
            "score": 5940000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "T.wS"
        },
        "4tdm": {
            "score": 4430000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Mohsen"
        },
        "maze": {
            "score": 2180000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Mipha"
        }
    },
    "predator": {
        "ffa": {
            "score": 2250000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Unnamed sniper"
        },
        "2tdm": {
            "score": 3780000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "GLITCHER TM"
        },
        "4tdm": {
            "score": 4300000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "potatotomato"
        },
        "maze": {
            "score": 1040000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Astral"
        }
    },
    "sprayer": {
        "ffa": {
            "score": 3940000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "exo"
        },
        "2tdm": {
            "score": 1790000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Fallen"
        },
        "4tdm": {
            "score": 1950000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "NoName"
        },
        "maze": {
            "score": 1510000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Dragonis"
        }
    },
    "trapper": {
        "ffa": {
            "score": 441000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "RYS"
        },
        "2tdm": {
            "score": 1060000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Denied"
        },
        "4tdm": {
            "score": 618000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "EF 40"
        },
        "maze": {
            "score": 404000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Kratos"
        }
    },
    "gunner-trapper": {
        "ffa": {
            "score": 2160000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Oblivion"
        },
        "2tdm": {
            "score": 1640000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Snapwing"
        },
        "4tdm": {
            "score": 1630000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "Pekmen"
        },
        "maze": {
            "score": 1200000,
            "duration": 0,
            "formattedDuration": "",
            "scorer": "JB Columbia"
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