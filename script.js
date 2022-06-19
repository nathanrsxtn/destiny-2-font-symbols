(async function () {
    var Font = await opentype.load("fonts/Destiny_Keys.otf");
    const Colors = Object.freeze({
        VOID: "#B07CDB",
        SOLAR: "#E7601D",
        ARC: "#81B5E4",
        STASIS: "#5E7AFD",
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
        EXPERIENCE: "#00CFCF",
        MOD_FG: "#0AF3F3",
        MOD_BG: "#266669",
        GILDED_FG: "#F3E8B0",
        GILDED_BG: "#EDB15E99"
    });

    class Glyph {
        constructor(unicode, name, color = null, background = null) {
            this.unicode = unicode.toString(16).padStart(4, 0).toUpperCase();
            this.glyph = String.fromCharCode(unicode);
            this.name = name;
            this.color = color;
            if (background instanceof Glyph) {
                this.backgroundGlyph = background;
            } else {
                this.backgroundColor = background;
            }
            let glyph;
            if (glyph = Font.charToGlyph(String.fromCharCode(unicode))) {
                this.glyphName = glyph.name;
                this.glyphWidth = glyph.advanceWidth;
            }
        }
    }

    const FontGlyphs = {
        "Combat": {
            "Supers": {
                "Titan": {
                    "Sentinel": [
                        new Glyph(0xE061, "Banner Shield", Colors.VOID),
                        new Glyph(0xE128, "Sentinel Shield", Colors.VOID)
                    ],
                    "Sunbreaker": [
                        new Glyph(0xE060, "Burning Maul", Colors.SOLAR),
                        new Glyph(0xE126, "Hammer of Sol", Colors.SOLAR)
                    ],
                    "Striker": [
                        new Glyph(0xE058, "Thundercrash", Colors.ARC),
                        new Glyph(0xE122, "Fists of Havoc", Colors.ARC)
                    ],
                    "Behemoth": [
                        new Glyph(0xE083, "Shiver Strike", Colors.STASIS)
                    ]
                },
                "Hunter": {
                    "Nightstalker": [
                        new Glyph(0xE057, "Spectral Blades", Colors.VOID),
                        new Glyph(0xE127, "Shadowshot", Colors.VOID)
                    ],
                    "Gunslinger": [
                        new Glyph(0xE062, "Blade Barrage", Colors.SOLAR),
                        new Glyph(0xE123, "Golden Gun", Colors.SOLAR)
                    ],
                    "Arcstrider": [
                        new Glyph(0xE063, "Whirlwind Guard", Colors.ARC),
                        new Glyph(0xE121, "Arc Staff", Colors.ARC)
                    ],
                    "Revenant": [
                        new Glyph(0xE084, "Silence and Squall", Colors.STASIS),
                    ]
                },
                "Warlock": {
                    "Voidwalker": [
                        new Glyph(0xE064, "Nova Warp", Colors.VOID),
                        new Glyph(0xE120, "Nova Bomb", Colors.VOID)
                    ],
                    "Dawnblade": [
                        new Glyph(0xE056, "Well of Radiance", Colors.SOLAR),
                        new Glyph(0xE119, "Daybreak", Colors.SOLAR)
                    ],
                    "Stormcaller": [
                        new Glyph(0xE065, "Chaos Reach", Colors.ARC),
                        new Glyph(0xE125, "Stormtrance", Colors.ARC)
                    ],
                    "Shadebinder": [
                        new Glyph(0xE085, "Winter's Wrath", Colors.STASIS)
                    ]
                }
            },
            "Weapons": {
                "Primary": [
                    new Glyph(0xE099, "Bow", Colors.PRIMARY),
                    new Glyph(0xE100, "Auto Rifle", Colors.PRIMARY),
                    new Glyph(0xE101, "Pulse Rifle", Colors.PRIMARY),
                    new Glyph(0xE102, "Scout Rifle", Colors.PRIMARY),
                    new Glyph(0xE103, "Hand Cannon", Colors.PRIMARY),
                    new Glyph(0xE107, "Submachine Gun", Colors.PRIMARY),
                    new Glyph(0xE109, "Sidearm", Colors.PRIMARY)
                ],
                "Special": [
                    new Glyph(0xE104, "Shotgun", Colors.SPECIAL),
                    new Glyph(0xE105, "Sniper Rifle", Colors.SPECIAL),
                    new Glyph(0xE106, "Fusion Rifle", Colors.SPECIAL),
                    new Glyph(0xE155, "Light Grenade Launcher", Colors.SPECIAL),
                    new Glyph(0xE156, "Glaive", Colors.SPECIAL)
                ],
                "Heavy": [
                    new Glyph(0xE108, "Rocket Launcher", Colors.HEAVY),
                    new Glyph(0xE113, "Heavy Grenade Launcher", Colors.HEAVY),
                    new Glyph(0xE152, "Linear Fusion Rifle", Colors.HEAVY),
                    new Glyph(0xE153, "Sword", Colors.HEAVY),
                    new Glyph(0xE154, "Machine Gun", Colors.HEAVY)
                ],
                "Unique": [
                    new Glyph(0xE066, "Valkyrie Javelin", Colors.EXOTIC_LABEL),
                    new Glyph(0xE136, "Scorch Cannon", Colors.EXOTIC_LABEL),
                    new Glyph(0xE138, "Trace Rifle", Colors.EXOTIC_LABEL),
                    new Glyph(0xE150, "Skyburner's Oath", Colors.EXOTIC_LABEL),
                    new Glyph(0xE151, "Lord of Wolves", Colors.EXOTIC_LABEL)
                ],
                "Abilities": {
                    "Normal": [
                        new Glyph(0xE110, "Melee"),
                        new Glyph(0xE111, "Grenade"),
                        new Glyph(0xE112, "Smoke"),
                        new Glyph(0xE141, "Environment Hazard / Misadventure")
                    ],
                    "Charged": [
                        new Glyph(0xE067, "Throwing Hammer", Colors.SOLAR),
                        new Glyph(0xE080, "Coldsnap Grenade", Colors.STASIS),
                        new Glyph(0xE081, "Duskfield Grenade", Colors.STASIS),
                        new Glyph(0xE082, "Glacier Grenade", Colors.STASIS),
                        new Glyph(0xE086, "Glacial Quake", Colors.STASIS),
                        new Glyph(0xE087, "Withering Blade", Colors.STASIS),
                        new Glyph(0xE088, "Penumbral Blast", Colors.STASIS),
                        new Glyph(0xE089, "Encasement Shatter", Colors.STASIS),
                        new Glyph(0xE090, "Crystal Shatter", Colors.STASIS),
                        new Glyph(0xE118, "Arc Soul", Colors.ARC),
                        new Glyph(0xE124, "Throwing Knife", Colors.SOLAR),
                        new Glyph(0xE091, "Bleak Watcher", Colors.STASIS),
                        new Glyph(0xE093, "Child of the Old Gods", Colors.VOID),
                        new Glyph(0xE094, "Controlled Demolition", Colors.VOID),
                        new Glyph(0xE095, "Shield Throw", Colors.VOID),
                        new Glyph(0xE096, "Pocket Singularity", Colors.VOID),
                        new Glyph(0xE097, "Quickfall", Colors.VOID),
                        new Glyph(0xE114, "Consecration", Colors.SOLAR),
                        new Glyph(0xE115, "Gunpowder Gamble", Colors.SOLAR),
                        new Glyph(0xE116, "Incinerator Snap", Colors.SOLAR),
                    ],
                    "": [
                        new Glyph(0xE142, "Headshot")
                    ]
                }
            },
            "Vehicles": [
                new Glyph(0xE130, "Turret"),
                new Glyph(0xE131, "Pike"),
                new Glyph(0xE132, "Interceptor"),
                new Glyph(0xE133, "Sparrow"),
                new Glyph(0xE134, "Shield Artifact"),
                new Glyph(0xE135, "Loader Tank"),
                new Glyph(0xE137, "Drake")
            ]
        },
        "Character": {
            "Elements": [
                new Glyph(0xE144, "Void", Colors.VOID),
                new Glyph(0xE140, "Solar", Colors.SOLAR),
                new Glyph(0xE143, "Arc", Colors.ARC),
                new Glyph(0xE139, "Stasis", Colors.STASIS)
            ],
            "Mods": [
                new Glyph(0xE070, "Shield-Piercing (Barrier)", Colors.MOD_FG, Colors.MOD_BG),
                new Glyph(0xE071, "Disruption (Overload)", Colors.MOD_FG, Colors.MOD_BG),
                new Glyph(0xE072, "Stagger (Unstoppable)", Colors.MOD_FG, Colors.MOD_BG)
            ],
            "Seals": [
                new Glyph(0xE076, "Stasis: Glyph 0", Colors.STASIS),
                new Glyph(0xE077, "Stasis: Glyph 1", Colors.STASIS),
                new Glyph(0xE078, "Stasis: Glyph 2", Colors.STASIS),
                new Glyph(0xE079, "Stasis: Glyph 3", Colors.STASIS)
            ],
            "Other": [
                new Glyph(0xE052, "Light", Colors.EXPERIENCE),
                new Glyph(0xE059, "Settings"),
                new Glyph(0xE147, "Gilded", Colors.GILDED_FG, Colors.GILDED_BG),
                new Glyph(0xE148, "Cabal Gold", Colors.LEGENDARY_LABEL)
            ],
            "Activities": [
                new Glyph(0xE053, "Small Blocker"),
                new Glyph(0xE054, "Medium Blocker"),
                new Glyph(0xE055, "Large Blocker"),
                new Glyph(0xE068, "Giant Blocker"),
                new Glyph(0xE069, "Invasion"),
                new Glyph(0xE075, "Quest", null, Colors.QUEST),
                new Glyph(0xE145, "Lost Sector", null, Colors.QUEST),
                new Glyph(0xE146, "Revive Token", Colors.EXOTIC_LABEL)
            ]
        },
        "Controllers": {
            "Playstation": [
                new Glyph(0xE025, "Playstation Cross Button", Colors.PS_BUTTON, new Glyph(0xE045, null, Colors.PS_CROSS)),
                new Glyph(0xE026, "Playstation Circle Button", Colors.PS_BUTTON, new Glyph(0xE045, null, Colors.PS_CIRCLE)),
                new Glyph(0xE027, "Playstation Square Button", Colors.PS_BUTTON, new Glyph(0xE045, null, Colors.PS_SQUARE)),
                new Glyph(0xE028, "Playstation Triangle Button", Colors.PS_BUTTON, new Glyph(0xE045, null, Colors.PS_TRIANGLE)),
                new Glyph(0xE029, "Playstation Share Button", Colors.PS_CONTROL),
                new Glyph(0xE030, "Playstation Touch Button", Colors.PS_TOUCH_FG, new Glyph(0xE046, null, Colors.PS_TOUCH_BG)),
                new Glyph(0xE031, "Playstation R2", Colors.PS_CONTROL),
                new Glyph(0xE032, "Playstation L2", Colors.PS_CONTROL),
                new Glyph(0xE033, "Playstation L1", Colors.PS_CONTROL),
                new Glyph(0xE034, "Playstation R1", Colors.PS_CONTROL),
                new Glyph(0xE035, "Playstation Right Stick", Colors.PS_CONTROL),
                new Glyph(0xE036, "Playstation Right Click", Colors.PS_CONTROL),
                new Glyph(0xE037, "Playstation Left Stick", Colors.PS_CONTROL),
                new Glyph(0xE038, "Playstation Left Click", Colors.PS_CONTROL),
                new Glyph(0xE039, "Playstation D-Pad Up", Colors.PS_CONTROL),
                new Glyph(0xE040, "Playstation D-Pad Right", Colors.PS_CONTROL),
                new Glyph(0xE041, "Playstation D-Pad Down", Colors.PS_CONTROL),
                new Glyph(0xE042, "Playstation D-Pad Left", Colors.PS_CONTROL),
                new Glyph(0xE044, "Playstation Options", Colors.PS_CONTROL),
                new Glyph(0xE045, "Playstation Black Background", Colors.PS_CONTROL),
                new Glyph(0xE046, "Playstation Touch Background", Colors.PS_CONTROL),
                new Glyph(0xE047, "Playstation D-Pad All", Colors.PS_CONTROL),
                new Glyph(0xE048, "Playstation D-Pad Left + Right", Colors.PS_CONTROL),
                new Glyph(0xE049, "Playstation D-Pad Up + Down", Colors.PS_CONTROL)
            ],
            "Xbox": [
                new Glyph(0xE157, "Xbox D-Pad Left + Right", Colors.XBOX_CONTROL),
                new Glyph(0xE158, "Xbox D-Pad Up + Down", Colors.XBOX_CONTROL),
                new Glyph(0xE159, "Xbox D-Pad All", Colors.XBOX_CONTROL),
                new Glyph(0xE160, "Xbox A Button", Colors.PS_BUTTON, new Glyph(0xE177, null, Colors.XBOX_A)),
                new Glyph(0xE161, "Xbox B Button", Colors.PS_BUTTON, new Glyph(0xE177, null, Colors.XBOX_B)),
                new Glyph(0xE162, "Xbox X Button", Colors.PS_BUTTON, new Glyph(0xE177, null, Colors.XBOX_X)),
                new Glyph(0xE163, "Xbox Y Button", Colors.PS_BUTTON, new Glyph(0xE177, null, Colors.XBOX_Y)),
                new Glyph(0xE164, "Xbox Menu Button", Colors.XBOX_BUTTON, new Glyph(0xE178, null, Colors.XBOX_CONTROL)),
                new Glyph(0xE165, "Xbox View Button", Colors.XBOX_BUTTON, new Glyph(0xE178, null, Colors.XBOX_CONTROL)),
                new Glyph(0xE166, "Xbox Right Trigger", Colors.XBOX_CONTROL),
                new Glyph(0xE167, "Xbox Left Bumper", Colors.XBOX_CONTROL),
                new Glyph(0xE168, "Xbox Right Bumper", Colors.XBOX_CONTROL),
                new Glyph(0xE169, "Xbox Right Stick", Colors.XBOX_CONTROL),
                new Glyph(0xE170, "Xbox Right Click", Colors.XBOX_CONTROL),
                new Glyph(0xE171, "Xbox Left Stick", Colors.XBOX_CONTROL),
                new Glyph(0xE172, "Xbox Left Click", Colors.XBOX_CONTROL),
                new Glyph(0xE173, "Xbox D-Pad Up", Colors.XBOX_CONTROL),
                new Glyph(0xE174, "Xbox D-Pad Right", Colors.XBOX_CONTROL),
                new Glyph(0xE175, "Xbox D-Pad Down", Colors.XBOX_CONTROL),
                new Glyph(0xE176, "Xbox D-Pad Left", Colors.XBOX_CONTROL),
                new Glyph(0xE177, "Xbox Black Background", Colors.XBOX_CONTROL),
                new Glyph(0xE178, "Xbox Burger Background", Colors.XBOX_CONTROL),
                new Glyph(0xE179, "Xbox Back Button", Colors.XBOX_CONTROL),
                new Glyph(0xE180, "Xbox Start Button", Colors.XBOX_CONTROL),
                new Glyph(0xE181, "Xbox Left Trigger", Colors.XBOX_CONTROL)
            ],
            "Nintendo": [
                new Glyph(0xE230, "Nintendo B Button", Colors.PS_BUTTON, new Glyph(0xE250, null, Colors.XBOX_A)),
                new Glyph(0xE231, "Nintendo A Button", Colors.PS_BUTTON, new Glyph(0xE250, null, Colors.XBOX_B)),
                new Glyph(0xE232, "Nintendo Y Button", Colors.PS_BUTTON, new Glyph(0xE250, null, Colors.XBOX_X)),
                new Glyph(0xE233, "Nintendo X Button", Colors.PS_BUTTON, new Glyph(0xE250, null, Colors.XBOX_Y)),
                new Glyph(0xE234, "Nintendo Plus Button", Colors.XBOX_BUTTON, new Glyph(0xE250, null, Colors.XBOX_CONTROL)),
                new Glyph(0xE235, "Nintendo Minus Button", Colors.XBOX_BUTTON, new Glyph(0xE250, null, Colors.XBOX_CONTROL)),
                new Glyph(0xE236, "Nintendo R", Colors.XBOX_CONTROL),
                new Glyph(0xE237, "Nintendo L", Colors.XBOX_CONTROL),
                new Glyph(0xE238, "Nintendo ZL", Colors.XBOX_CONTROL),
                new Glyph(0xE239, "Nintendo ZR", Colors.XBOX_CONTROL),
                new Glyph(0xE240, "Nintendo Right Stick", Colors.XBOX_CONTROL),
                new Glyph(0xE241, "Nintendo Right Click", Colors.XBOX_CONTROL),
                new Glyph(0xE242, "Nintendo Left Stick", Colors.XBOX_CONTROL),
                new Glyph(0xE243, "Nintendo Left Click", Colors.XBOX_CONTROL),
                new Glyph(0xE244, "Nintendo D-Pad Up", Colors.XBOX_CONTROL),
                new Glyph(0xE245, "Nintendo D-Pad Right", Colors.XBOX_CONTROL),
                new Glyph(0xE246, "Nintendo D-Pad Down", Colors.XBOX_CONTROL),
                new Glyph(0xE247, "Nintendo D-Pad Left", Colors.XBOX_CONTROL),
                new Glyph(0xE248, "Nintendo Share Button", Colors.XBOX_CONTROL),
                new Glyph(0xE249, "Nintendo Options Button", Colors.XBOX_CONTROL),
                new Glyph(0xE250, "Nintendo Black Background", Colors.XBOX_CONTROL),
                new Glyph(0xE251, "Nintendo Touch Background", Colors.XBOX_CONTROL),
                new Glyph(0xE252, "Nintendo D-Pad All", Colors.XBOX_CONTROL),
                new Glyph(0xE253, "Nintendo D-Pad Left + Right", Colors.XBOX_CONTROL),
                new Glyph(0xE254, "Nintendo D-Pad Up + Down", Colors.XBOX_CONTROL)
            ],
            "Mouse": [
                new Glyph(0xEECD, "Mouse 1", Colors.MOUSE_FG, new Glyph(0xEEF3, null, Colors.MOUSE_BG)),
                new Glyph(0xEECE, "Mouse 2", Colors.MOUSE_FG, new Glyph(0xEEF4, null, Colors.MOUSE_BG)),
                new Glyph(0xEECF, "Mouse 3", Colors.MOUSE_FG, new Glyph(0xEEF5, null, Colors.MOUSE_BG)),
                new Glyph(0xEED0, "Mouse 4", Colors.MOUSE_FG, new Glyph(0xEEF6, null, Colors.MOUSE_BG)),
                new Glyph(0xEED1, "Mouse 5", Colors.MOUSE_FG, new Glyph(0xEEF7, null, Colors.MOUSE_BG)),
                new Glyph(0xEED2, "Mouse Wheel Up", Colors.MOUSE_FG, new Glyph(0xEEF8, null, Colors.MOUSE_BG)),
                new Glyph(0xEED3, "Mouse Wheel Down", Colors.MOUSE_FG, new Glyph(0xEEF9, null, Colors.MOUSE_BG)),
                new Glyph(0xEEF3, "Mouse Button 1", Colors.MOUSE_BG),
                new Glyph(0xEEF4, "Mouse Button 2", Colors.MOUSE_BG),
                new Glyph(0xEEF5, "Mouse Button 3", Colors.MOUSE_BG),
                new Glyph(0xEEF6, "Mouse Button 4", Colors.MOUSE_BG),
                new Glyph(0xEEF7, "Mouse Button 5", Colors.MOUSE_BG),
                new Glyph(0xEEF8, "Mouse Wheel Up Button", Colors.MOUSE_BG),
                new Glyph(0xEEF9, "Mouse Wheel Down Button", Colors.MOUSE_BG)
            ],
            "Old": [
                new Glyph(0xE000, "Playstation Cross Button", Colors.PS_BUTTON, new Glyph(0xE020, null, Colors.PS_CROSS)),
                new Glyph(0xE001, "Playstation Circle Button", Colors.PS_BUTTON, new Glyph(0xE020, null, Colors.PS_CIRCLE)),
                new Glyph(0xE002, "Playstation Square Button", Colors.PS_BUTTON, new Glyph(0xE020, null, Colors.PS_SQUARE)),
                new Glyph(0xE003, "Playstation Triangle Button", Colors.PS_BUTTON, new Glyph(0xE020, null, Colors.PS_TRIANGLE)),
                new Glyph(0xE004, "Playstation Start Button", Colors.PS_TOUCH_FG, new Glyph(0xE021, null, Colors.PS_TOUCH_BG)),
                new Glyph(0xE005, "Playstation Select Button", Colors.PS_TOUCH_FG, new Glyph(0xE021, null, Colors.PS_TOUCH_BG)),
                new Glyph(0xE006, "Playstation R2", Colors.PS_CONTROL),
                new Glyph(0xE007, "Playstation L2", Colors.PS_CONTROL),
                new Glyph(0xE008, "Playstation L1", Colors.PS_CONTROL),
                new Glyph(0xE009, "Playstation R1", Colors.PS_CONTROL),
                new Glyph(0xE010, "Playstation Right Stick", Colors.PS_CONTROL),
                new Glyph(0xE011, "Playstation Right Click", Colors.PS_CONTROL),
                new Glyph(0xE012, "Playstation Left Stick", Colors.PS_CONTROL),
                new Glyph(0xE013, "Playstation Left Click", Colors.PS_CONTROL),
                new Glyph(0xE014, "Playstation D-Pad Up", Colors.PS_CONTROL),
                new Glyph(0xE015, "Playstation D-Pad Right", Colors.PS_CONTROL),
                new Glyph(0xE016, "Playstation D-Pad Down", Colors.PS_CONTROL),
                new Glyph(0xE017, "Playstation D-Pad Left", Colors.PS_CONTROL),
                new Glyph(0xE018, "Playstation Share", Colors.PS_CONTROL),
                new Glyph(0xE019, "Playstation Options", Colors.PS_CONTROL),
                new Glyph(0xE020, "Playstation Black Background", Colors.PS_CONTROL),
                new Glyph(0xE021, "Playstation Touch Background", Colors.PS_CONTROL),
                new Glyph(0xE022, "Playstation D-Pad All", Colors.PS_CONTROL),
                new Glyph(0xE023, "Playstation D-Pad Left + Right", Colors.PS_CONTROL),
                new Glyph(0xE024, "Playstation D-Pad Up + Down", Colors.PS_CONTROL)
            ],
        },
        "Keyboard": {
            "Capital Keys": [
                new Glyph(0xE208, "Key Captial O with diaeresis", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xE209, "Key Captial A with diaeresis", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xE214, "Key Capital I with Grave", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xE215, "Key Capital E with Grave", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xE216, "Key Capital I with Acute", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xE217, "Key Capital Sharp S", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xE218, "Key Capital C with Cedilla", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xE219, "Key Capital O with Grave", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xE220, "Key Capital A with Grave", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xE221, "Key Capital U with Grave", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE41, "Key Capital A", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE42, "Key Capital B", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE43, "Key Capital C", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE44, "Key Capital D", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE45, "Key Capital E", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE46, "Key Capital F", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE47, "Key Capital G", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE48, "Key Capital H", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE49, "Key Capital I", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE4A, "Key Capital J", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE4B, "Key Capital K", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE4C, "Key Capital L", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE4D, "Key Capital M", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE4E, "Key Capital N", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE4F, "Key Capital O", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE50, "Key Capital P", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE51, "Key Capital Q", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE52, "Key Capital R", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE53, "Key Capital S", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE54, "Key Capital T", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE55, "Key Capital U", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE56, "Key Capital V", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE57, "Key Capital W", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE58, "Key Capital X", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE59, "Key Capital Y", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE5A, "Key Capital Z", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEEDC, "Key Capital O with Diaeresis", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG))
            ],
            "Lowercase Keys": [
                new Glyph(0xE182, "Key Small N with Tilde", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xE184, "Key Small Z with Dot Above", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xE185, "Key Small S with Acute", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xE186, "Key Small L with Stroke", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xE187, "Key Small A with Ogonek", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xE188, "Key Small O with Ogonek", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE61, "Key Small a", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE62, "Key Small b", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE63, "Key Small c", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE64, "Key Small d", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE65, "Key Small e", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE66, "Key Small f", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE67, "Key Small g", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE68, "Key Small h", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE69, "Key Small i", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE6A, "Key Small j", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE6B, "Key Small k", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE6C, "Key Small l", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE6D, "Key Small m", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE6E, "Key Small n", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE6F, "Key Small o", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE70, "Key Small p", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE71, "Key Small q", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE72, "Key Small r", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE73, "Key Small s", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE74, "Key Small t", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE75, "Key Small u", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE76, "Key Small v", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE77, "Key Small w", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE78, "Key Small x", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE79, "Key Small y", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE7A, "Key Small z", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG))
            ],
            "Number Pad Keys": [
                new Glyph(0xEEBC, "Key Numpad Lock", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEEBD, "Key Numpad Divide", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEEBE, "Key Numpad Multiply", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEEBF, "Key Numpad Zero", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEEC0, "Key Numpad One", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEEC1, "Key Numpad Two", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEEC2, "Key Numpad Three", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEEC3, "Key Numpad Four", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEEC4, "Key Numpad Five", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEEC5, "Key Numpad Six", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEEC6, "Key Numpad Seven", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEEC7, "Key Numpad Eight", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEEC8, "Key Numpad Nine", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEEC9, "Key Numpad Subtract", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEECA, "Key Numpad Add", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEECB, "Key Numpad Enter", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEECC, "Key Numpad Decimal", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG))
            ],
            "": [
                new Glyph(0xE183, "Key Ordinal Indicator", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xE189, "Key Ogonek", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xE202, "Key Superscript Two", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xE203, "Key Degree Sign", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xE204, "Key Pound Sign", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xE205, "Key Diaeresis", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xE206, "Key Micro Sign", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xE207, "Key Section Sign", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xE211, "Key Broken Bar", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xE212, "Key Inverted Exclamation Mark", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xE213, "Key Inverted Question Mark", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE21, "Key Exclamation Mark", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE22, "Key Quotation Mark", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE23, "Key Number Sign", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE24, "Key Dollar Sign", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE25, "Key Percent Sign", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE26, "Key Ampersand", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE27, "Key Apostrophe", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE28, "Key Left Parenthesis", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE29, "Key Right Parenthesis", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE2A, "Key Asterisk", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE2B, "Key Plus Sign", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE2C, "Key Comma", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE2D, "Key Minus", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE2E, "Key Period", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE2F, "Key Slash", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE3A, "Key Colon", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE3B, "Key Semicolon", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE3C, "Key Less-Than Sign", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE3D, "Key Equals Sign", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE3E, "Key Greater-Than Sign", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE3F, "Key Question Mark", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE40, "Key At", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE5B, "Key Left Square Bracket", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE5C, "Key Backslash", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE5D, "Key Right Square Bracket", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE5E, "Key Circumflex Accent", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE5F, "Key Underscore", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE60, "Key Grave Accent", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE7B, "Key Left Curly Bracket", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE7C, "Key Vertical Bar", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE7D, "Key Right Curly Bracket", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEE7E, "Key Tilde", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEEA1, "Key Spacebar", Colors.KEY_FG, new Glyph(0xEEF1, null, Colors.KEY_BG)),
                new Glyph(0xEEA2, "Key Print Screen", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEEA3, "Key Scroll Lock", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEEA4, "Key Pause", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEEA5, "Key Backspace", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEEA6, "Key Tab", Colors.KEY_FG, new Glyph(0xEEF1, null, Colors.KEY_BG)),
                new Glyph(0xEEA7, "Key Caps Lock", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEEA8, "Key Return", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEEA9, "Key Left Shift", Colors.KEY_FG, new Glyph(0xEEF1, null, Colors.KEY_BG)),
                new Glyph(0xEEAA, "Key Right Shift", Colors.KEY_FG, new Glyph(0xEEF1, null, Colors.KEY_BG)),
                new Glyph(0xEEAB, "Key Control Left", Colors.KEY_FG, new Glyph(0xEEF1, null, Colors.KEY_BG)),
                new Glyph(0xEEAC, "Key Left Windows", Colors.KEY_FG, new Glyph(0xEEF1, null, Colors.KEY_BG)),
                new Glyph(0xEEAD, "Key Left Alt", Colors.KEY_FG, new Glyph(0xEEF1, null, Colors.KEY_BG)),
                new Glyph(0xEEAE, "Key Right Alt", Colors.KEY_FG, new Glyph(0xEEF1, null, Colors.KEY_BG)),
                new Glyph(0xEEAF, "Key Right Windows", Colors.KEY_FG, new Glyph(0xEEF1, null, Colors.KEY_BG)),
                new Glyph(0xEEB0, "Key Menu", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEEB1, "Key Right Control", Colors.KEY_FG, new Glyph(0xEEF1, null, Colors.KEY_BG)),
                new Glyph(0xEEB2, "Key Up Arrow", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEEB3, "Key Down Arrow", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEEB4, "Key Left Arrow", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEEB5, "Key Right Arrow", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEEB6, "Key Insert", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEEB7, "Key Home", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEEB8, "Key Page Up", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEEB9, "Key Delete", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEEBA, "Key End", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEEBB, "Key Page Down", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEED4, "Key F1", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEED5, "Key F2", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEED6, "Key F3", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEED7, "Key F4", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEED8, "Key F5", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEED9, "Key F6", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEEDA, "Key Escape", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEEDF, "Key Foward Slash", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEEE0, "Key F7", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEEE1, "Key F8", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEEE2, "Key F9", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEEE3, "Key F10", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEEE4, "Key F11", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEEE5, "Key F12", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEEE6, "Key Bind", Colors.KEY_FG),
                new Glyph(0xEEF0, "Key Standard Background", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG)),
                new Glyph(0xEEF1, "Key Large Background", Colors.KEY_FG, new Glyph(0xEEF0, null, Colors.KEY_BG))
            ]
        },
        "Special Characters": [
            new Glyph(0x0020, "Space"),
            new Glyph(0x000D, "CR"),
            new Glyph(0x036C, "Superscript r"),
            new Glyph(0x1D49, "Saison"),
            new Glyph(0x202F, "French Space"),
            new Glyph(0xE050, "Service Mark"),
            new Glyph(0xE051, "Capital Sharp S"),
            new Glyph(0xEEA0, "No-Break Space"),
            new Glyph(0xEEFA, "Tofu"),
            new Glyph(0xFFFD, "Replacement Character")
        ]
    }
    var symbolBox = document.querySelector("#symbolBox");
    document.querySelector("#symbolBoxCopy").onclick = function () {
        symbolBox.select();
        document.execCommand("copy");
        this.innerHTML = "COPIED!";
        this.onmouseout = _ => this.innerHTML = "COPY";
        symbolBox.value = "";
    };
    var fragment = new DocumentFragment();
    var main = document.createElement("main");
    fragment.append(main);
    Object.entries(FontGlyphs).forEach(entry => loop(entry, main));
    document.body.appendChild(fragment);
    window.addEventListener("pointerup", function (event) {
        if (event.target.tagName == "FIGURE") {
            const selection = window.getSelection();
            const range = document.createRange();
            const title = event.target.title;
            range.selectNodeContents(event.target);
            selection.removeAllRanges();
            selection.addRange(range);
            document.execCommand('copy');
            selection.removeAllRanges();
            event.target.title = "Copied!";
            if (title != event.target.title) {
                event.target.addEventListener("pointerout", _ => event.target.title = title, {
                    once: true
                });
            }
            symbolBox.value += event.target.getAttribute("glyph");
            symbolBox.focus();
        }
    });

    function loop(entry, group) {
        if (entry[1] instanceof Glyph) {
            var element = document.createElement("figure");
            element.innerHTML = entry[1].glyph;
            element.setAttribute("glyph", entry[1].glyph);
            var tooltipUnicodeLine = `U+${entry[1].unicode}`;
            if (entry[1].backgroundGlyph) {
                tooltipUnicodeLine += ` (U+${entry[1].backgroundGlyph.unicode} Background)`;
                element.setAttribute("background-glyph", entry[1].backgroundGlyph.glyph);
                element.style.setProperty('--background-color', entry[1].backgroundGlyph.color);
            } else {
                element.style.setProperty('--background-color', entry[1].backgroundColor);
            }
            element.title = `${entry[1].name} (${entry[1].glyphName})\n${tooltipUnicodeLine}\nClick to Copy`;
            element.style.setProperty('--color', entry[1].color);
            if (entry[1].glyphWidth <= 0) {
                element.setAttribute("zero-width", "");
            }
            group.appendChild(element);
        } else {
            var groupContent = makeGroup(entry[0], group);
            Object.entries(entry[1]).forEach(function (entry) {
                loop(entry, groupContent);
            });
        }
    }

    function makeGroup(name, group) {
        var groupContainer = document.createElement("section");
        groupContainer.setAttribute("group-name", name)
        group.appendChild(groupContainer);
        return groupContainer;
    }
})()
