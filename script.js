(async function () {
    const Fonts = [
        await opentype.load("fonts/destiny_symbols_common.otf"),
        await opentype.load("fonts/destiny_symbols_pc.otf"),
        await opentype.load("fonts/destiny_symbols_ps4.otf")
    ];
    const Colors = Object.freeze({
        VOID: "#B283CC",
        SOLAR: "#F16F27",
        ARC: "#7AECF3",
        STASIS: "#4D87FF",
        STRAND: "#35E366",
        EXPERIENCE: "#00E4DE",
        MOD_BG: "#2A7275",

        QUEST: "#1A2044",
        PS_CONTROL: "#E6E6E6",
        PS_BUTTON: "#444444",
        PS_CROSS: "#749AF4",
        PS_CIRCLE: "#FF6460",
        PS_SQUARE: "#D884B8",
        PS_TRIANGLE: "#80B080",
        PS_TOUCH_FG: "#222222",
        PS_TOUCH_BG: "#606060",
        XBOX_CONTROL: "#F2F2F2",
        XBOX_BUTTON: "#444444",
        XBOX_A: "#73A46C",
        XBOX_B: "#CE5959",
        XBOX_X: "#5D7BD2",
        XBOX_Y: "#E3C22D",
        KEY_FG: "#FFFFFF",
        KEY_BG: "#333333",
        MOUSE_FG: "#BBBBBB",
        MOUSE_BG: "#3396DA",
        PRIMARY: "#FFFFFF",
        SPECIAL: "#7AF48B",
        HEAVY: "#B286FF",
        EXOTIC_LABEL: "#B09C4F",
        LEGENDARY_LABEL: "#644D71",
        MOD_FG: "#0AF3F3",
        GILDED_FG: "#F3E8B0",
        GILDED_BG: "#EDB15E99",

        EMOJI_SKIN_FILL: "#FFBE3F",
        EMOJI_SKIN_STROKE: "#C28B1F",
        EMOJI_MOUTH_FILL: "#171717",
        EMOJI_MOUTH_STROKE: "#3B311D",
        EMOJI_BLOOD: "#FF6895",
        EMOJI_WATER: "#40C4FF",
        EMOJI_HEART: "#F23131",
        EMOJI_LEAF: "#53DC71",
        EMOJI_WHITE: "#FFFFFF",
    });

    class Glyph {
        static unicodes = [];
        constructor(unicode, name, color = null, background = null) {
            this.unicode = unicode.toString(16).padStart(4, 0).toUpperCase();
            this.glyph = String.fromCharCode(unicode);
            this.name = name;
            this.color = color;
            this[background instanceof Glyph ? "backgroundGlyph" : "backgroundColor"] = background;
            for (const font of Fonts) {
                const glyph = font.charToGlyph(String.fromCharCode(unicode));
                if (glyph?.path.commands.length) {
                    this.glyphName = glyph.name;
                    this.glyphWidth = glyph.advanceWidth;
                    break;
                }
            }
            Glyph.unicodes.push(unicode);
        }
    }

    const FontGlyphs = {
        "Void": [
            [
                new Glyph(0XE144, "Void", Colors.VOID)
            ],
            [
                new Glyph(0XE094, "Controlled Demolition", Colors.VOID)
            ]
        ],
        "Sentinel": [
            [
                new Glyph(0XE061, "Banner Shield", Colors.VOID),
                new Glyph(0XE128, "Sentinel Shield", Colors.VOID)
            ],
            [
                new Glyph(0XE095, "Shield Throw", Colors.VOID)
            ]
        ],
        "Nightstalker": [
            [
                new Glyph(0XE057, "Spectral Blades", Colors.VOID),
                new Glyph(0XE127, "Shadowshot", Colors.VOID)
            ],
            [
                new Glyph(0XE112, "Smoke", Colors.VOID),
                new Glyph(0XE097, "Quickfall", Colors.VOID)
            ]
        ],
        "Voidwalker": [
            [
                new Glyph(0XE064, "Nova Warp", Colors.VOID),
                new Glyph(0XE120, "Nova Bomb", Colors.VOID)
            ],
            [
                new Glyph(0XE093, "Child of the Old Gods", Colors.VOID),
                new Glyph(0XE096, "Pocket Singularity", Colors.VOID)
            ]
        ],
        "Solar": [
            [
                new Glyph(0XE140, "Solar", Colors.SOLAR)],
            [

            ]
        ],
        "Sunbreaker": [
            [
                new Glyph(0XE060, "Burning Maul", Colors.SOLAR),
                new Glyph(0XE126, "Hammer of Sol", Colors.SOLAR)
            ],
            [
                new Glyph(0XE067, "Throwing Hammer", Colors.SOLAR),
                new Glyph(0XE114, "Consecration", Colors.SOLAR)
            ]
        ],
        "Gunslinger": [
            [
                new Glyph(0XE062, "Blade Barrage", Colors.SOLAR),
                new Glyph(0XE123, "Golden Gun", Colors.SOLAR)
            ],
            [
                new Glyph(0XE124, "Throwing Knife", Colors.SOLAR),
                new Glyph(0XE115, "Gunpowder Gamble", Colors.SOLAR)
            ]
        ],
        "Dawnblade": [
            [
                new Glyph(0XE056, "Well of Radiance", Colors.SOLAR),
                new Glyph(0XE119, "Daybreak", Colors.SOLAR)
            ],
            [
                new Glyph(0XE116, "Incinerator Snap", Colors.SOLAR)
            ]
        ],
        "Arc": [
            [
                new Glyph(0XE143, "Arc", Colors.ARC)
            ],
            [
                new Glyph(0XEEFE, "Arc Jolt", Colors.ARC)
            ]
        ],
        "Striker": [
            [
                new Glyph(0XE058, "Thundercrash", Colors.ARC),
                new Glyph(0XE122, "Fists of Havoc", Colors.ARC)
            ],
            [
                new Glyph(0XEEFB, "Thunderclap", Colors.ARC)
            ]
        ],
        "Arcstrider": [
            [
                new Glyph(0XE063, "Whirlwind Guard", Colors.ARC),
                new Glyph(0XE121, "Arc Staff", Colors.ARC),
                new Glyph(0XEEFD, "Gathering Storm", Colors.ARC)
            ],
            [

            ]
        ],
        "Stormcaller": [
            [
                new Glyph(0XE065, "Chaos Reach", Colors.ARC),
                new Glyph(0XE125, "Stormtrance", Colors.ARC)
            ],
            [
                new Glyph(0XE118, "Arc Soul", Colors.ARC),
                new Glyph(0XEEFC, "Lightning Surge", Colors.ARC)
            ]
        ],

        "Stasis": [
            [
                new Glyph(0XE139, "Stasis", Colors.STASIS)
            ],
            [
                new Glyph(0XE080, "Coldsnap Grenade", Colors.STASIS),
                new Glyph(0XE081, "Duskfield Grenade", Colors.STASIS),
                new Glyph(0XE082, "Glacier Grenade", Colors.STASIS),
                new Glyph(0XE089, "Encasement Shatter", Colors.STASIS),
                new Glyph(0XE090, "Crystal Shatter", Colors.STASIS)
            ]
        ],
        "Behemoth": [
            [
                new Glyph(0XE083, "Glacial Quake", Colors.STASIS)
            ],
            [
                new Glyph(0XE086, "Shiver Strike", Colors.STASIS),
                new Glyph(0XE092, "Diamond Lance", Colors.STASIS)
            ]
        ],
        "Revenant": [
            [
                new Glyph(0XE084, "Silence and Squall", Colors.STASIS)
            ],
            [
                new Glyph(0XE087, "Withering Blade", Colors.STASIS)
            ]
        ],
        "Shadebinder": [
            [
                new Glyph(0XE085, "Winter's Wrath", Colors.STASIS)
            ],
            [
                new Glyph(0XE091, "Bleak Watcher", Colors.STASIS),
                new Glyph(0XE088, "Penumbral Blast", Colors.STASIS)
            ]
        ],
        "Strand": [
            [
                new Glyph(0XEF0E, "Strand Kill", Colors.STRAND)
            ],
            [
                new Glyph(0XEEFF, "Threadling", Colors.STRAND),
                new Glyph(0XEF00, "Infest", Colors.STRAND),
                new Glyph(0XEF01, "Tangle", Colors.STRAND),
                new Glyph(0XEF02, "Suspend Grenade", Colors.STRAND),
                new Glyph(0XEF03, "Threadling Grenade", Colors.STRAND),
                new Glyph(0XEF04, "Grappling Hook", Colors.STRAND),
                new Glyph(0XEF05, "Grapple Melee", Colors.STRAND)
            ]
        ],
        "Berserker": [
            [
                new Glyph(0XEF0C, "Bladefury", Colors.STRAND)
            ],
            [
                new Glyph(0XEF07, "Frenzied Blade", Colors.STRAND),
                new Glyph(0XEF0A, "Drengr's Lash", Colors.STRAND),
                new Glyph(0XEF2E, "Flechette Storm", Colors.STRAND)
            ]
        ],
        "Threadrunner": [
            [
                new Glyph(0XEF0B, "Silkstrike", Colors.STRAND)
            ],
            [
                new Glyph(0XEF06, "Threaded Spike", Colors.STRAND),
                new Glyph(0XEF09, "Ensnaring Slam", Colors.STRAND),
                new Glyph(0XEF2D, "Threaded Specter", Colors.STRAND),
                new Glyph(0XEF30, "Whirling Maelstrom", Colors.STRAND)
            ]
        ],
        "Broodweaver": [
            [
                new Glyph(0XEF0D, "Needlestorm", Colors.STRAND)
            ],
            [
                new Glyph(0XEF08, "Arcane Needle", Colors.STRAND),
                new Glyph(0XEF2C, "The Wanderer", Colors.STRAND)
            ]
        ],
        "Primary": [
            [
                new Glyph(0XE099, "Bow", Colors.PRIMARY),
                new Glyph(0XE100, "Auto Rifle", Colors.PRIMARY),
                new Glyph(0XE101, "Pulse Rifle", Colors.PRIMARY),
                new Glyph(0XE102, "Scout Rifle", Colors.PRIMARY),
                new Glyph(0XE103, "Hand Cannon", Colors.PRIMARY),
                new Glyph(0XE107, "Submachine Gun", Colors.PRIMARY),
                new Glyph(0XE109, "Sidearm", Colors.PRIMARY)
            ]
        ],
        "Special": [
            [
                new Glyph(0XE104, "Shotgun", Colors.SPECIAL),
                new Glyph(0XE105, "Sniper Rifle", Colors.SPECIAL),
                new Glyph(0XE106, "Fusion Rifle", Colors.SPECIAL),
                new Glyph(0XE155, "Light Grenade Launcher", Colors.SPECIAL),
                new Glyph(0XE156, "Glaive", Colors.SPECIAL)
            ]
        ],
        "Heavy": [
            [
                new Glyph(0XE108, "Rocket Launcher", Colors.HEAVY),
                new Glyph(0XE113, "Heavy Grenade Launcher", Colors.HEAVY),
                new Glyph(0XE152, "Linear Fusion Rifle", Colors.HEAVY),
                new Glyph(0XE153, "Sword", Colors.HEAVY),
                new Glyph(0XE154, "Machine Gun", Colors.HEAVY)
            ]
        ],
        "Unique": [
            [
                new Glyph(0XE066, "Valkyrie Javelin", Colors.EXOTIC_LABEL),
                new Glyph(0XE136, "Scorch Cannon", Colors.EXOTIC_LABEL),
                new Glyph(0XE138, "Trace Rifle", Colors.EXOTIC_LABEL),
                new Glyph(0XE150, "Skyburner's Oath", Colors.EXOTIC_LABEL),
                new Glyph(0XE151, "Lord of Wolves", Colors.EXOTIC_LABEL)
            ]
        ],
        "Attacks": [
            [
                new Glyph(0XE142, "Headshot")
            ],
            [
                new Glyph(0XE110, "Melee"),
                new Glyph(0XE111, "Grenade"),
                new Glyph(0XE141, "Environment Hazard / Misadventure")
            ]
        ],
        "Vehicles": [
            [
                new Glyph(0XE130, "Turret"),
                new Glyph(0XE131, "Pike"),
                new Glyph(0XE132, "Interceptor"),
                new Glyph(0XE133, "Sparrow"),
                new Glyph(0XE134, "Shield Artifact"),
                new Glyph(0XE135, "Loader Tank"),
                new Glyph(0XE137, "Drake")
            ]
        ],
        "Mods / Seals": [
            [
                new Glyph(0XE070, "Shield-Piercing (Barrier)", Colors.MOD_FG, Colors.MOD_BG),
                new Glyph(0XE071, "Disruption (Overload)", Colors.MOD_FG, Colors.MOD_BG),
                new Glyph(0XE072, "Stagger (Unstoppable)", Colors.MOD_FG, Colors.MOD_BG)
            ],
            [
                new Glyph(0XE076, "Stasis: Glyph 0", Colors.STASIS),
                new Glyph(0XE077, "Stasis: Glyph 1", Colors.STASIS),
                new Glyph(0XE078, "Stasis: Glyph 2", Colors.STASIS),
                new Glyph(0XE079, "Stasis: Glyph 3", Colors.STASIS)
            ]
        ],
        "Other": [
            [
                new Glyph(0XE052, "Light", Colors.EXPERIENCE),
                new Glyph(0XE059, "Settings"),
                new Glyph(0XE147, "Gilded", Colors.GILDED_FG, Colors.GILDED_BG),
                new Glyph(0XE148, "Cabal Gold", Colors.LEGENDARY_LABEL),
                new Glyph(0XEF2F, "Region Chest"),
                new Glyph(0XE053, "Small Blocker"),
                new Glyph(0XE054, "Medium Blocker"),
                new Glyph(0XE055, "Large Blocker"),
                new Glyph(0XE068, "Giant Blocker"),
                new Glyph(0XE069, "Invasion"),
                new Glyph(0XE075, "Quest", null, Colors.QUEST),
                new Glyph(0XE145, "Lost Sector", null, Colors.QUEST),
                new Glyph(0XE146, "Revive Token", Colors.EXOTIC_LABEL)
            ]
        ],
        "Emojis": [
            [
                new Glyph(0XEF25, "Emoji Hands Waving", Colors.EMOJI_SKIN_FILL),
                new Glyph(0XEF26, "Emoji Hands Waving Details", Colors.EMOJI_SKIN_STROKE, new Glyph(0XEF25, "Emoji Hands Waving", Colors.EMOJI_SKIN_FILL))
            ],
            [
                new Glyph(0XEF27, "Emoji Hands Clapping", Colors.EMOJI_SKIN_FILL),
                new Glyph(0XEF28, "Emoji Hands Clapping Other Hand", Colors.EMOJI_SKIN_STROKE, new Glyph(0XEF27, "Emoji Hands Clapping", Colors.EMOJI_SKIN_FILL)),
                new Glyph(0XEF29, "Emoji Hands Clapping Details", Colors.EMOJI_WHITE, new Glyph(0XEF27, "Emoji Hands Clapping", Colors.EMOJI_SKIN_FILL))
            ],
            [
                new Glyph(0XEF2A, "Emoji Hands Flexing", Colors.EMOJI_SKIN_FILL),
                new Glyph(0XEF2B, "Emoji Hands Flexing Details", Colors.EMOJI_SKIN_STROKE, new Glyph(0XEF2A, "Emoji Hands Flexing", Colors.EMOJI_SKIN_FILL))
            ],
            [
                new Glyph(0XEF21, "Emoji Symbols Heart", Colors.EMOJI_HEART)
            ],
            [
                new Glyph(0XEF22, "Emoji Symbols Flower Petals", Colors.EMOJI_WHITE),
                new Glyph(0XEF23, "Emoji Symbols Flower Center", Colors.EMOJI_SKIN_STROKE, new Glyph(0XEF22, "Emoji Symbols Flower Petals", Colors.EMOJI_WHITE)),
                new Glyph(0XEF24, "Emoji Symbols Flower Leaves", Colors.EMOJI_LEAF, new Glyph(0XEF22, "Emoji Symbols Flower Petals", Colors.EMOJI_WHITE))
            ]
        ],
        "Faces": [
            [
                new Glyph(0XEF13, "Emoji Shocked Inner Eyes", Colors.EMOJI_WHITE, new Glyph(0XEF0F, "Emoji Standard Background", Colors.EMOJI_SKIN_FILL)),
                new Glyph(0XEF14, "Emoji Shocked Outer Eyes", Colors.EMOJI_MOUTH_STROKE, new Glyph(0XEF0F, "Emoji Standard Background", Colors.EMOJI_SKIN_FILL)),
                new Glyph(0XEF10, "Emoji Dotted Eyes", Colors.EMOJI_MOUTH_STROKE, new Glyph(0XEF0F, "Emoji Standard Background", Colors.EMOJI_SKIN_FILL)),
                new Glyph(0XEF11, "Emoji Curled Eyes", Colors.EMOJI_MOUTH_STROKE, new Glyph(0XEF0F, "Emoji Standard Background", Colors.EMOJI_SKIN_FILL)),
                new Glyph(0XEF12, "Emoji Linear Eyes", Colors.EMOJI_MOUTH_STROKE, new Glyph(0XEF0F, "Emoji Standard Background", Colors.EMOJI_SKIN_FILL))
            ],
            [
                new Glyph(0XEF15, "Emoji Smile Mouth", Colors.EMOJI_MOUTH_STROKE, new Glyph(0XEF0F, "Emoji Standard Background", Colors.EMOJI_SKIN_FILL)),
                new Glyph(0XEF19, "Emoji Tongue Mouth", Colors.EMOJI_BLOOD, new Glyph(0XEF0F, "Emoji Standard Background", Colors.EMOJI_SKIN_FILL)),
                new Glyph(0XEF1C, "Emoji Shocked Mouth", Colors.EMOJI_MOUTH_STROKE, new Glyph(0XEF0F, "Emoji Standard Background", Colors.EMOJI_SKIN_FILL)),
                new Glyph(0XEF16, "Emoji Excited Mouth", Colors.EMOJI_MOUTH_STROKE, new Glyph(0XEF0F, "Emoji Standard Background", Colors.EMOJI_SKIN_FILL)),
                new Glyph(0XEF1A, "Emoji Grimacing Mouth", Colors.EMOJI_MOUTH_STROKE, new Glyph(0XEF0F, "Emoji Standard Background", Colors.EMOJI_SKIN_FILL)),
                new Glyph(0XEF1B, "Emoji Grimacing Teeth Mouth", Colors.EMOJI_WHITE, new Glyph(0XEF0F, "Emoji Standard Background", Colors.EMOJI_SKIN_FILL)),
                new Glyph(0XEF18, "Emoji Lower Teeth Mouth", Colors.EMOJI_WHITE, new Glyph(0XEF0F, "Emoji Standard Background", Colors.EMOJI_SKIN_FILL)),
                new Glyph(0XEF17, "Emoji Upper Teeth Mouth", Colors.EMOJI_WHITE, new Glyph(0XEF0F, "Emoji Standard Background", Colors.EMOJI_SKIN_FILL))
            ],
            [
                new Glyph(0XEF1D, "Emoji Traits Freezing", Colors.EMOJI_WHITE, new Glyph(0XEF0F, "Emoji Standard Background", Colors.EMOJI_SKIN_FILL)),
                new Glyph(0XEF1E, "Emoji Traits Loving", Colors.EMOJI_HEART, new Glyph(0XEF0F, "Emoji Standard Background", Colors.EMOJI_SKIN_FILL)),
                new Glyph(0XEF1F, "Emoji Traits Crying", Colors.EMOJI_WATER, new Glyph(0XEF0F, "Emoji Standard Background", Colors.EMOJI_SKIN_FILL)),
                new Glyph(0XEF20, "Emoji Traits Blushing", Colors.EMOJI_BLOOD, new Glyph(0XEF0F, "Emoji Standard Background", Colors.EMOJI_SKIN_FILL))
            ],
            [
                new Glyph(0XEF0F, "Emoji Standard Background", Colors.EMOJI_SKIN_FILL)
            ]
        ],
        "Playstation": [
            [
                new Glyph(0XE025, "Playstation Cross Button", Colors.PS_BUTTON, new Glyph(0XE045, null, Colors.PS_CROSS)),
                new Glyph(0XE026, "Playstation Circle Button", Colors.PS_BUTTON, new Glyph(0XE045, null, Colors.PS_CIRCLE)),
                new Glyph(0XE027, "Playstation Square Button", Colors.PS_BUTTON, new Glyph(0XE045, null, Colors.PS_SQUARE)),
                new Glyph(0XE028, "Playstation Triangle Button", Colors.PS_BUTTON, new Glyph(0XE045, null, Colors.PS_TRIANGLE)),
                new Glyph(0XE029, "Playstation Share Button", Colors.PS_CONTROL),
                new Glyph(0XE030, "Playstation Touch Button", Colors.PS_TOUCH_FG, new Glyph(0XE046, null, Colors.PS_TOUCH_BG)),
                new Glyph(0XE031, "Playstation R2", Colors.PS_CONTROL),
                new Glyph(0XE032, "Playstation L2", Colors.PS_CONTROL),
                new Glyph(0XE033, "Playstation L1", Colors.PS_CONTROL),
                new Glyph(0XE034, "Playstation R1", Colors.PS_CONTROL),
                new Glyph(0XE035, "Playstation Right Stick", Colors.PS_CONTROL),
                new Glyph(0XE036, "Playstation Right Click", Colors.PS_CONTROL),
                new Glyph(0XE037, "Playstation Left Stick", Colors.PS_CONTROL),
                new Glyph(0XE038, "Playstation Left Click", Colors.PS_CONTROL),
                new Glyph(0XE039, "Playstation D-Pad Up", Colors.PS_CONTROL),
                new Glyph(0XE040, "Playstation D-Pad Right", Colors.PS_CONTROL),
                new Glyph(0XE041, "Playstation D-Pad Down", Colors.PS_CONTROL),
                new Glyph(0XE042, "Playstation D-Pad Left", Colors.PS_CONTROL),
                new Glyph(0XE044, "Playstation Options", Colors.PS_CONTROL),
                new Glyph(0XE047, "Playstation D-Pad All", Colors.PS_CONTROL),
                new Glyph(0XE048, "Playstation D-Pad Left + Right", Colors.PS_CONTROL),
                new Glyph(0XE049, "Playstation D-Pad Up + Down", Colors.PS_CONTROL)
            ],
            [
                new Glyph(0XE045, "Playstation Black Background", Colors.PS_CONTROL),
                new Glyph(0XE046, "Playstation Touch Background", Colors.PS_CONTROL)
            ]
        ],
        "Xbox": [
            [
                new Glyph(0XE157, "Xbox D-Pad Left + Right", Colors.XBOX_CONTROL),
                new Glyph(0XE158, "Xbox D-Pad Up + Down", Colors.XBOX_CONTROL),
                new Glyph(0XE159, "Xbox D-Pad All", Colors.XBOX_CONTROL),
                new Glyph(0XE160, "Xbox A Button", Colors.PS_BUTTON, new Glyph(0XE177, null, Colors.XBOX_A)),
                new Glyph(0XE161, "Xbox B Button", Colors.PS_BUTTON, new Glyph(0XE177, null, Colors.XBOX_B)),
                new Glyph(0XE162, "Xbox X Button", Colors.PS_BUTTON, new Glyph(0XE177, null, Colors.XBOX_X)),
                new Glyph(0XE163, "Xbox Y Button", Colors.PS_BUTTON, new Glyph(0XE177, null, Colors.XBOX_Y)),
                new Glyph(0XE164, "Xbox Menu Button", Colors.XBOX_BUTTON, new Glyph(0XE178, null, Colors.XBOX_CONTROL)),
                new Glyph(0XE165, "Xbox View Button", Colors.XBOX_BUTTON, new Glyph(0XE178, null, Colors.XBOX_CONTROL)),
                new Glyph(0XE166, "Xbox Right Trigger", Colors.XBOX_CONTROL),
                new Glyph(0XE167, "Xbox Left Bumper", Colors.XBOX_CONTROL),
                new Glyph(0XE168, "Xbox Right Bumper", Colors.XBOX_CONTROL),
                new Glyph(0XE169, "Xbox Right Stick", Colors.XBOX_CONTROL),
                new Glyph(0XE170, "Xbox Right Click", Colors.XBOX_CONTROL),
                new Glyph(0XE171, "Xbox Left Stick", Colors.XBOX_CONTROL),
                new Glyph(0XE172, "Xbox Left Click", Colors.XBOX_CONTROL),
                new Glyph(0XE173, "Xbox D-Pad Up", Colors.XBOX_CONTROL),
                new Glyph(0XE174, "Xbox D-Pad Right", Colors.XBOX_CONTROL),
                new Glyph(0XE175, "Xbox D-Pad Down", Colors.XBOX_CONTROL),
                new Glyph(0XE176, "Xbox D-Pad Left", Colors.XBOX_CONTROL),
                new Glyph(0XE179, "Xbox Back Button", Colors.XBOX_CONTROL),
                new Glyph(0XE180, "Xbox Start Button", Colors.XBOX_CONTROL),
                new Glyph(0XE181, "Xbox Left Trigger", Colors.XBOX_CONTROL)
            ],
            [
                new Glyph(0XE177, "Xbox Black Background", Colors.XBOX_CONTROL),
                new Glyph(0XE178, "Xbox Burger Background", Colors.XBOX_CONTROL)
            ]
        ],
        "Nintendo": [
            [
                new Glyph(0XE230, "Nintendo B Button", Colors.PS_BUTTON, new Glyph(0XE250, null, Colors.XBOX_A)),
                new Glyph(0XE231, "Nintendo A Button", Colors.PS_BUTTON, new Glyph(0XE250, null, Colors.XBOX_B)),
                new Glyph(0XE232, "Nintendo Y Button", Colors.PS_BUTTON, new Glyph(0XE250, null, Colors.XBOX_X)),
                new Glyph(0XE233, "Nintendo X Button", Colors.PS_BUTTON, new Glyph(0XE250, null, Colors.XBOX_Y)),
                new Glyph(0XE234, "Nintendo Plus Button", Colors.XBOX_BUTTON, new Glyph(0XE250, null, Colors.XBOX_CONTROL)),
                new Glyph(0XE235, "Nintendo Minus Button", Colors.XBOX_BUTTON, new Glyph(0XE250, null, Colors.XBOX_CONTROL)),
                new Glyph(0XE236, "Nintendo R", Colors.XBOX_CONTROL),
                new Glyph(0XE237, "Nintendo L", Colors.XBOX_CONTROL),
                new Glyph(0XE238, "Nintendo ZL", Colors.XBOX_CONTROL),
                new Glyph(0XE239, "Nintendo ZR", Colors.XBOX_CONTROL),
                new Glyph(0XE240, "Nintendo Right Stick", Colors.XBOX_CONTROL),
                new Glyph(0XE241, "Nintendo Right Click", Colors.XBOX_CONTROL),
                new Glyph(0XE242, "Nintendo Left Stick", Colors.XBOX_CONTROL),
                new Glyph(0XE243, "Nintendo Left Click", Colors.XBOX_CONTROL),
                new Glyph(0XE244, "Nintendo D-Pad Up", Colors.XBOX_CONTROL),
                new Glyph(0XE245, "Nintendo D-Pad Right", Colors.XBOX_CONTROL),
                new Glyph(0XE246, "Nintendo D-Pad Down", Colors.XBOX_CONTROL),
                new Glyph(0XE247, "Nintendo D-Pad Left", Colors.XBOX_CONTROL),
                new Glyph(0XE252, "Nintendo D-Pad All", Colors.XBOX_CONTROL),
                new Glyph(0XE253, "Nintendo D-Pad Left + Right", Colors.XBOX_CONTROL),
                new Glyph(0XE254, "Nintendo D-Pad Up + Down", Colors.XBOX_CONTROL)
            ],
            [
                new Glyph(0XE248, "Nintendo Share Button", Colors.XBOX_CONTROL),
                new Glyph(0XE249, "Nintendo Options Button", Colors.XBOX_CONTROL),
                new Glyph(0XE250, "Nintendo Black Background", Colors.XBOX_CONTROL),
                new Glyph(0XE251, "Nintendo Touch Background", Colors.XBOX_CONTROL)
            ]
        ],
        "Mouse": [
            [
                new Glyph(0XEECD, "Mouse 1", Colors.MOUSE_FG, new Glyph(0XEEF3, null, Colors.MOUSE_BG)),
                new Glyph(0XEECE, "Mouse 2", Colors.MOUSE_FG, new Glyph(0XEEF4, null, Colors.MOUSE_BG)),
                new Glyph(0XEECF, "Mouse 3", Colors.MOUSE_FG, new Glyph(0XEEF5, null, Colors.MOUSE_BG)),
                new Glyph(0XEED0, "Mouse 4", Colors.MOUSE_FG, new Glyph(0XEEF6, null, Colors.MOUSE_BG)),
                new Glyph(0XEED1, "Mouse 5", Colors.MOUSE_FG, new Glyph(0XEEF7, null, Colors.MOUSE_BG)),
                new Glyph(0XEED2, "Mouse Wheel Up", Colors.MOUSE_FG, new Glyph(0XEEF8, null, Colors.MOUSE_BG)),
                new Glyph(0XEED3, "Mouse Wheel Down", Colors.MOUSE_FG, new Glyph(0XEEF9, null, Colors.MOUSE_BG))
            ],
            [
                new Glyph(0XEEF3, "Mouse Button 1", Colors.MOUSE_BG),
                new Glyph(0XEEF4, "Mouse Button 2", Colors.MOUSE_BG),
                new Glyph(0XEEF5, "Mouse Button 3", Colors.MOUSE_BG),
                new Glyph(0XEEF6, "Mouse Button 4", Colors.MOUSE_BG),
                new Glyph(0XEEF7, "Mouse Button 5", Colors.MOUSE_BG),
                new Glyph(0XEEF8, "Mouse Wheel Up Button", Colors.MOUSE_BG),
                new Glyph(0XEEF9, "Mouse Wheel Down Button", Colors.MOUSE_BG)
            ]
        ],
        "Old Playstation": [
            [
                new Glyph(0XE000, "Playstation Cross Button", Colors.PS_BUTTON, new Glyph(0XE020, null, Colors.PS_CROSS)),
                new Glyph(0XE001, "Playstation Circle Button", Colors.PS_BUTTON, new Glyph(0XE020, null, Colors.PS_CIRCLE)),
                new Glyph(0XE002, "Playstation Square Button", Colors.PS_BUTTON, new Glyph(0XE020, null, Colors.PS_SQUARE)),
                new Glyph(0XE003, "Playstation Triangle Button", Colors.PS_BUTTON, new Glyph(0XE020, null, Colors.PS_TRIANGLE)),
                new Glyph(0XE004, "Playstation Start Button", Colors.PS_TOUCH_FG, new Glyph(0XE021, null, Colors.PS_TOUCH_BG)),
                new Glyph(0XE005, "Playstation Select Button", Colors.PS_TOUCH_FG, new Glyph(0XE021, null, Colors.PS_TOUCH_BG)),
                new Glyph(0XE006, "Playstation R2", Colors.PS_CONTROL),
                new Glyph(0XE007, "Playstation L2", Colors.PS_CONTROL),
                new Glyph(0XE008, "Playstation L1", Colors.PS_CONTROL),
                new Glyph(0XE009, "Playstation R1", Colors.PS_CONTROL),
                new Glyph(0XE010, "Playstation Right Stick", Colors.PS_CONTROL),
                new Glyph(0XE011, "Playstation Right Click", Colors.PS_CONTROL),
                new Glyph(0XE012, "Playstation Left Stick", Colors.PS_CONTROL),
                new Glyph(0XE013, "Playstation Left Click", Colors.PS_CONTROL),
                new Glyph(0XE014, "Playstation D-Pad Up", Colors.PS_CONTROL),
                new Glyph(0XE015, "Playstation D-Pad Right", Colors.PS_CONTROL),
                new Glyph(0XE016, "Playstation D-Pad Down", Colors.PS_CONTROL),
                new Glyph(0XE017, "Playstation D-Pad Left", Colors.PS_CONTROL),
                new Glyph(0XE018, "Playstation Share", Colors.PS_CONTROL),
                new Glyph(0XE019, "Playstation Options", Colors.PS_CONTROL),
                new Glyph(0XE022, "Playstation D-Pad All", Colors.PS_CONTROL),
                new Glyph(0XE023, "Playstation D-Pad Left + Right", Colors.PS_CONTROL),
                new Glyph(0XE024, "Playstation D-Pad Up + Down", Colors.PS_CONTROL)
            ],
            [
                new Glyph(0XE020, "Playstation Black Background", Colors.PS_CONTROL),
                new Glyph(0XE021, "Playstation Touch Background", Colors.PS_CONTROL)
            ]
        ],
        "Capital Keys": [
            [
                new Glyph(0XE208, "Key Captial O with diaeresis", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XE209, "Key Captial A with diaeresis", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XE214, "Key Capital I with Grave", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XE215, "Key Capital E with Grave", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XE216, "Key Capital I with Acute", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XE217, "Key Capital Sharp S", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XE218, "Key Capital C with Cedilla", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XE219, "Key Capital O with Grave", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XE220, "Key Capital A with Grave", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XE221, "Key Capital U with Grave", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE41, "Key Capital A", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE42, "Key Capital B", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE43, "Key Capital C", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE44, "Key Capital D", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE45, "Key Capital E", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE46, "Key Capital F", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE47, "Key Capital G", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE48, "Key Capital H", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE49, "Key Capital I", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE4A, "Key Capital J", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE4B, "Key Capital K", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE4C, "Key Capital L", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE4D, "Key Capital M", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE4E, "Key Capital N", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE4F, "Key Capital O", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE50, "Key Capital P", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE51, "Key Capital Q", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE52, "Key Capital R", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE53, "Key Capital S", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE54, "Key Capital T", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE55, "Key Capital U", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE56, "Key Capital V", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE57, "Key Capital W", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE58, "Key Capital X", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE59, "Key Capital Y", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE5A, "Key Capital Z", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEEDC, "Key Capital O with Diaeresis", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG))
            ]
        ],
        "Lowercase Keys": [
            [
                new Glyph(0XE182, "Key Small N with Tilde", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XE184, "Key Small Z with Dot Above", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XE185, "Key Small S with Acute", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XE186, "Key Small L with Stroke", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XE187, "Key Small A with Ogonek", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XE188, "Key Small O with Ogonek", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE61, "Key Small a", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE62, "Key Small b", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE63, "Key Small c", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE64, "Key Small d", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE65, "Key Small e", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE66, "Key Small f", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE67, "Key Small g", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE68, "Key Small h", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE69, "Key Small i", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE6A, "Key Small j", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE6B, "Key Small k", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE6C, "Key Small l", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE6D, "Key Small m", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE6E, "Key Small n", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE6F, "Key Small o", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE70, "Key Small p", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE71, "Key Small q", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE72, "Key Small r", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE73, "Key Small s", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE74, "Key Small t", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE75, "Key Small u", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE76, "Key Small v", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE77, "Key Small w", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE78, "Key Small x", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE79, "Key Small y", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE7A, "Key Small z", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG))
            ]
        ],
        "Number Pad Keys": [
            [
                new Glyph(0XEEBC, "Key Numpad Lock", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEEBD, "Key Numpad Divide", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEEBE, "Key Numpad Multiply", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEEBF, "Key Numpad Zero", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEEC0, "Key Numpad One", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEEC1, "Key Numpad Two", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEEC2, "Key Numpad Three", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEEC3, "Key Numpad Four", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEEC4, "Key Numpad Five", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEEC5, "Key Numpad Six", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEEC6, "Key Numpad Seven", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEEC7, "Key Numpad Eight", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEEC8, "Key Numpad Nine", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEEC9, "Key Numpad Subtract", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEECA, "Key Numpad Add", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEECB, "Key Numpad Enter", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEECC, "Key Numpad Decimal", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG))
            ]
        ],
        "Symbol Keys": [
            [
                new Glyph(0XE183, "Key Ordinal Indicator", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XE189, "Key Ogonek", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XE202, "Key Superscript Two", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XE203, "Key Degree Sign", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XE204, "Key Pound Sign", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XE205, "Key Diaeresis", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XE206, "Key Micro Sign", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XE207, "Key Section Sign", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XE211, "Key Broken Bar", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XE212, "Key Inverted Exclamation Mark", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XE213, "Key Inverted Question Mark", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE21, "Key Exclamation Mark", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE22, "Key Quotation Mark", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE23, "Key Number Sign", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE24, "Key Dollar Sign", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE25, "Key Percent Sign", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE26, "Key Ampersand", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE27, "Key Apostrophe", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE28, "Key Left Parenthesis", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE29, "Key Right Parenthesis", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE2A, "Key Asterisk", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE2B, "Key Plus Sign", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE2C, "Key Comma", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE2D, "Key Minus", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE2E, "Key Period", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE2F, "Key Slash", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE30, "Key Zero", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE31, "Key One", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE32, "Key Two", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE33, "Key Three", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE34, "Key Four", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE35, "Key Five", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE36, "Key Six", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE37, "Key Seven", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE38, "Key Eight", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE39, "Key Nine", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE3A, "Key Colon", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE3B, "Key Semicolon", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE3C, "Key Less-Than Sign", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE3D, "Key Equals Sign", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE3E, "Key Greater-Than Sign", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE3F, "Key Question Mark", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE40, "Key At", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE5B, "Key Left Square Bracket", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE5C, "Key Backslash", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE5D, "Key Right Square Bracket", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE5E, "Key Circumflex Accent", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE5F, "Key Underscore", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE60, "Key Grave Accent", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE7B, "Key Left Curly Bracket", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE7C, "Key Vertical Bar", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE7D, "Key Right Curly Bracket", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEE7E, "Key Tilde", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEEA1, "Key Spacebar", Colors.KEY_FG, new Glyph(0XEEF1, null, Colors.KEY_BG))
            ]
        ],
        "Control Keys": [
            [
                new Glyph(0XEEA2, "Key Print Screen", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEEA3, "Key Scroll Lock", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEEA4, "Key Pause", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEEA5, "Key Backspace", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEEA6, "Key Tab", Colors.KEY_FG, new Glyph(0XEEF1, null, Colors.KEY_BG)),
                new Glyph(0XEEA7, "Key Caps Lock", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEEA8, "Key Return", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEEA9, "Key Left Shift", Colors.KEY_FG, new Glyph(0XEEF1, null, Colors.KEY_BG)),
                new Glyph(0XEEAA, "Key Right Shift", Colors.KEY_FG, new Glyph(0XEEF1, null, Colors.KEY_BG)),
                new Glyph(0XEEAB, "Key Control Left", Colors.KEY_FG, new Glyph(0XEEF1, null, Colors.KEY_BG)),
                new Glyph(0XEEAC, "Key Left Windows", Colors.KEY_FG, new Glyph(0XEEF1, null, Colors.KEY_BG)),
                new Glyph(0XEEAD, "Key Left Alt", Colors.KEY_FG, new Glyph(0XEEF1, null, Colors.KEY_BG)),
                new Glyph(0XEEAE, "Key Right Alt", Colors.KEY_FG, new Glyph(0XEEF1, null, Colors.KEY_BG)),
                new Glyph(0XEEAF, "Key Right Windows", Colors.KEY_FG, new Glyph(0XEEF1, null, Colors.KEY_BG)),
                new Glyph(0XEEB0, "Key Menu", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEEB1, "Key Right Control", Colors.KEY_FG, new Glyph(0XEEF1, null, Colors.KEY_BG)),
                new Glyph(0XEEB2, "Key Up Arrow", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEEB3, "Key Down Arrow", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEEB4, "Key Left Arrow", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEEB5, "Key Right Arrow", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEEB6, "Key Insert", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEEB7, "Key Home", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEEB8, "Key Page Up", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEEB9, "Key Delete", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEEBA, "Key End", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEEBB, "Key Page Down", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEED4, "Key F1", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEED5, "Key F2", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEED6, "Key F3", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEED7, "Key F4", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEED8, "Key F5", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEED9, "Key F6", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEEDA, "Key Escape", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEEDF, "Key Forward Slash", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEEE0, "Key F7", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEEE1, "Key F8", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEEE2, "Key F9", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEEE3, "Key F10", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEEE4, "Key F11", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEEE5, "Key F12", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEEE6, "Key Bind", Colors.KEY_FG)
            ],
            [
                new Glyph(0XEEF0, "Key Standard Background", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG)),
                new Glyph(0XEEF1, "Key Large Background", Colors.KEY_FG, new Glyph(0XEEF0, null, Colors.KEY_BG))
            ]
        ],
        "Special Characters": [
            [
                new Glyph(0X0020, "Space"),
                new Glyph(0X000D, "CR"),
                new Glyph(0X036C, "Superscript r"),
                new Glyph(0X1D49, "Saison"),
                new Glyph(0X202F, "French Space"),
                new Glyph(0XE050, "Service Mark"),
                new Glyph(0XE051, "Capital Sharp S"),
                new Glyph(0XEEA0, "No-Break Space"),
                new Glyph(0XEEFA, "Tofu"),
                new Glyph(0XFFFD, "Replacement Character")
            ]
        ]
    };

    const missingCharacters = Fonts.flatMap(font => Object.values(font.glyphs.glyphs)).filter(glyph => glyph.unicode && !Glyph.unicodes.includes(glyph.unicode)).map(glyph => new Glyph(glyph.unicode, glyph.name));
    if (missingCharacters.length) FontGlyphs["Unknown"] = [missingCharacters];
    const symbolBox = document.querySelector("#symbolBox");
    document.onselectstart = event => event.target === symbolBox;
    document.querySelector("#symbolBoxCopy").onclick = event => {
        symbolBox.select();
        document.execCommand("copy");
        event.target.innerHTML = "COPIED!";
        event.target.onmouseout = _ => event.target.innerHTML = "COPY";
        symbolBox.value = "";
    };
    const fragment = new DocumentFragment();
    const main = document.createElement("main");
    fragment.append(main);
    main.append(...Object.entries(FontGlyphs).map(([name, entries]) => {
        const section = document.createElement("section");
        section.setAttribute("group-name", name)
        section.append(...entries.map(entry => {
            const group = document.createElement("div");
            group.append(...entry.map(glyph => {
                const element = document.createElement("figure");
                element.innerHTML = glyph.glyph;
                element.setAttribute("glyph", glyph.glyph);
                let tooltipUnicodeLine = `U+${glyph.unicode}`;
                if (glyph.backgroundGlyph) {
                    tooltipUnicodeLine += ` (U+${glyph.backgroundGlyph.unicode} Background)`;
                    element.setAttribute("background-glyph", glyph.backgroundGlyph.glyph);
                    element.style.setProperty("--background-color", glyph.backgroundGlyph.color);
                } else if (glyph.backgroundColor) element.style.setProperty("--background-color", glyph.backgroundColor);
                element.title = `${glyph.name} (${glyph.glyphName})\n${tooltipUnicodeLine}\nClick to Copy`;
                element.style.setProperty("--color", glyph.color);
                if (glyph.color && (glyph.color.substring(1, 3) > "7F" || glyph.color.substring(3, 5) > "7F" || glyph.color.substring(5, 7) > "7F")) element.style.setProperty("--safe-color", glyph.color);
                if (glyph.glyphWidth <= 0) element.setAttribute("zero-width", "");
                return element;
            }));
            return group;
        }));
        return section;
    }));
    window.addEventListener("pointerup", (event) => {
        if (event.target.tagName == "FIGURE") {
            const selection = window.getSelection();
            const range = document.createRange();
            const title = event.target.title;
            range.selectNodeContents(event.target);
            selection.removeAllRanges();
            selection.addRange(range);
            document.execCommand("copy");
            selection.removeAllRanges();
            event.target.title = "Copied!";
            if (title != event.target.title) event.target.addEventListener("pointerout", _ => event.target.title = title, { once: true });
            symbolBox.value += event.target.getAttribute("glyph");
            symbolBox.focus();
        }
    });
    document.body.appendChild(fragment);
})()
