import { Color, Culture, Feeling, Theme, ThemeColor, ThemePalette } from "./types";

export const colorAssociations = {
    [Feeling.HAPPINESS]: {
        western: Color.YELLOW,
        chinese: Color.RED,
        indian: Color.SAFFRON,
        japanese: Color.PINK,
        middleEastern: Color.GOLD,
        african: Color.GOLD,
        latinAmerican: Color.ORANGE,
        southeastAsian: Color.GOLD
    },
    [Feeling.SADNESS]: {
        western: Color.BLUE,
        chinese: Color.WHITE,
        indian: Color.WHITE,
        japanese: Color.GRAY,
        middleEastern: Color.BLACK,
        african: Color.BLACK,
        latinAmerican: Color.BLACK,
        southeastAsian: Color.GRAY
    },
    [Feeling.DANGER]: {
        western: Color.RED,
        chinese: Color.BLACK,
        indian: Color.RED,
        japanese: Color.RED,
        middleEastern: Color.RED,
        african: Color.RED,
        latinAmerican: Color.RED,
        southeastAsian: Color.RED
    },
    [Feeling.LUCK]: {
        western: Color.GREEN,
        chinese: Color.RED,
        indian: Color.YELLOW,
        japanese: Color.GOLD,
        middleEastern: Color.GREEN,
        african: Color.GOLD,
        latinAmerican: Color.GREEN,
        southeastAsian: Color.RED
    },
    [Feeling.MOURNING]: {
        western: Color.BLACK,
        chinese: Color.WHITE,
        indian: Color.WHITE,
        japanese: Color.WHITE,
        middleEastern: Color.BLACK,
        african: Color.BLACK,
        latinAmerican: Color.BLACK,
        southeastAsian: Color.WHITE
    },
    [Feeling.ENERGY]: {
        western: Color.ORANGE,
        chinese: Color.RED,
        indian: Color.RED,
        japanese: Color.ORANGE,
        middleEastern: Color.RED,
        african: Color.RED,
        latinAmerican: Color.ORANGE,
        southeastAsian: Color.RED
    },
    [Feeling.GROWTH]: {
        western: Color.GREEN,
        chinese: Color.GOLD,
        indian: Color.GREEN,
        japanese: Color.GREEN,
        middleEastern: Color.GREEN,
        african: Color.GREEN,
        latinAmerican: Color.GREEN,
        southeastAsian: Color.GREEN
    },
    [Feeling.CAUTION]: {
        western: Color.YELLOW,
        chinese: Color.YELLOW,
        indian: Color.ORANGE,
        japanese: Color.YELLOW,
        middleEastern: Color.YELLOW,
        african: Color.YELLOW,
        latinAmerican: Color.YELLOW,
        southeastAsian: Color.YELLOW
    },
    [Feeling.SUCCESS]: {
        western: Color.GREEN,
        chinese: Color.RED,
        indian: Color.SAFFRON,
        japanese: Color.GOLD,
        middleEastern: Color.GREEN,
        african: Color.GREEN,
        latinAmerican: Color.GREEN,
        southeastAsian: Color.GREEN
    },
    [Feeling.ERROR]: {
        western: Color.RED,
        chinese: Color.BLACK,
        indian: Color.BLACK,
        japanese: Color.BLACK,
        middleEastern: Color.BLACK,
        african: Color.BLACK,
        latinAmerican: Color.BLACK,
        southeastAsian: Color.BLACK
    },
    [Feeling.NEUTRALITY]: {
        western: Color.GRAY,
        chinese: Color.GRAY,
        indian: Color.BEIGE,
        japanese: Color.GRAY,
        middleEastern: Color.BEIGE,
        african: Color.BROWN,
        latinAmerican: Color.GRAY,
        southeastAsian: Color.GRAY
    },
    [Feeling.URGENCY]: {
        western: Color.RED,
        chinese: Color.ORANGE,
        indian: Color.RED,
        japanese: Color.ORANGE,
        middleEastern: Color.ORANGE,
        african: Color.RED,
        latinAmerican: Color.ORANGE,
        southeastAsian: Color.ORANGE
    },
    [Feeling.OPTIMISM]: {
        western: Color.YELLOW,
        chinese: Color.GOLD,
        indian: Color.ORANGE,
        japanese: Color.GOLD,
        middleEastern: Color.YELLOW,
        african: Color.YELLOW,
        latinAmerican: Color.YELLOW,
        southeastAsian: Color.GOLD
    },
    [Feeling.STABILITY]: {
        western: Color.BLUE,
        chinese: Color.BLUE,
        indian: Color.BROWN,
        japanese: Color.BLUE,
        middleEastern: Color.BLUE,
        african: Color.BROWN,
        latinAmerican: Color.BLUE,
        southeastAsian: Color.GRAY
    },
    [Feeling.INNOVATION]: {
        western: Color.PURPLE,
        chinese: Color.RED,
        indian: Color.GOLD,
        japanese: Color.BLUE,
        middleEastern: Color.GREEN,
        african: Color.ORANGE,
        latinAmerican: Color.YELLOW,
        southeastAsian: Color.PURPLE
    }
}

export const defaultPalette = {
    [Color.BEIGE]: '#C09E80',
    [Color.BLACK]: '#1A1A1A',
    [Color.BLUE]: '#3030FF',
    [Color.BROWN]: '#895129',
    [Color.GOLD]: '#EFBF04',
    [Color.GRAY]: '#888888',
    [Color.GREEN]: '#00DD20',
    [Color.ORANGE]: '#FF7900',
    [Color.PINK]: '#FFC0CB',
    [Color.PURPLE]: '#9d00ff',
    [Color.RED]: '#FF3000',
    [Color.SAFFRON]: '#F1C338',
    [Color.WHITE]: '#FAFAFA',
    [Color.YELLOW] : '#FFEE00',
}

export const themePalettes: Record<ThemePalette, Theme> = {
    [ThemePalette.BUSINESS]: {
        [Culture.WESTERN]: {
            [ThemeColor.BACKGROUND_COLOR]: '#f5f5f5',
            [ThemeColor.TEXT_COLOR]: '#333333',
            [ThemeColor.PRIMARY]: '#0056b3',
            [ThemeColor.SECONDARY]: '#6c757d',
            [ThemeColor.TERTIARY]: '#d1ecf1'
        },
        [Culture.CHINESE]: {
            [ThemeColor.BACKGROUND_COLOR]: '#fafafa',
            [ThemeColor.TEXT_COLOR]: '#1A1A1A',
            [ThemeColor.PRIMARY]: '#c41e3a',
            [ThemeColor.SECONDARY]: '#e3b041',
            [ThemeColor.TERTIARY]: '#f4F4F4'
        },
        [Culture.INDIAN]: {
            [ThemeColor.BACKGROUND_COLOR]: '#fefefe',
            [ThemeColor.TEXT_COLOR]: '#1b1b1b',
            [ThemeColor.PRIMARY]: '#0066cc',
            [ThemeColor.SECONDARY]: '#ff9900',
            [ThemeColor.TERTIARY]: '#d9d9d9'
        },
        [Culture.JAPANESE]: {
            [ThemeColor.BACKGROUND_COLOR]: '#fafafa',
            [ThemeColor.TEXT_COLOR]: '#1a1a1a',
            [ThemeColor.PRIMARY]: '#d70035',
            [ThemeColor.SECONDARY]: '#7b8a8b',
            [ThemeColor.TERTIARY]: '#eaeaea'
        },
        [Culture.MIDDLE_EASTERN]: {
            [ThemeColor.BACKGROUND_COLOR]: '#f9f7f1',
            [ThemeColor.TEXT_COLOR]: '#333333',
            [ThemeColor.PRIMARY]: '#004d40',
            [ThemeColor.SECONDARY]: '#c29f56',
            [ThemeColor.TERTIARY]: '#e6e1d7'
        },
        [Culture.AFRICAN]: {
            [ThemeColor.BACKGROUND_COLOR]: '#fafafa',
            [ThemeColor.TEXT_COLOR]: '#1f1f1f',
            [ThemeColor.PRIMARY]: '#ff7f00',
            [ThemeColor.SECONDARY]: '#008751',
            [ThemeColor.TERTIARY]: '#e0e0e0'
        },
        [Culture.LATIN_AMERICAN]: {
            [ThemeColor.BACKGROUND_COLOR]: '#f9f9f9',
            [ThemeColor.TEXT_COLOR]: '#2d2d2d',
            [ThemeColor.PRIMARY]: '#0057a0',
            [ThemeColor.SECONDARY]: '#ff5722',
            [ThemeColor.TERTIARY]: '#d9d9d9'
        },
        [Culture.SOUTHEAST_ASIAN]: {
            [ThemeColor.BACKGROUND_COLOR]: '#f8f8f8',
            [ThemeColor.TEXT_COLOR]: '#222222',
            [ThemeColor.PRIMARY]: '#007b80',
            [ThemeColor.SECONDARY]: '#ffa500',
            [ThemeColor.TERTIARY]: '#c0c0c0'
        }
    },
    [ThemePalette.CELEBRATION]: {
        [Culture.WESTERN]: {
            [ThemeColor.BACKGROUND_COLOR]: '#f8f9fa',
            [ThemeColor.TEXT_COLOR]: '#343a40',
            [ThemeColor.PRIMARY]: '#e63946',
            [ThemeColor.SECONDARY]: '#f1faee',
            [ThemeColor.TERTIARY]: '#a8dadc'
        },
        [Culture.CHINESE]: {
            [ThemeColor.BACKGROUND_COLOR]: '#fff0f0',
            [ThemeColor.TEXT_COLOR]: '#1a1a1a',
            [ThemeColor.PRIMARY]: '#d32f2f',
            [ThemeColor.SECONDARY]: '#ffd700',
            [ThemeColor.TERTIARY]: '#ffeb3b'
        },
        [Culture.INDIAN]: {
            [ThemeColor.BACKGROUND_COLOR]: '#fff9f2',
            [ThemeColor.TEXT_COLOR]: '#1a1a1a',
            [ThemeColor.PRIMARY]: '#f44336',
            [ThemeColor.SECONDARY]: '#ff9800',
            [ThemeColor.TERTIARY]: '#9c27b0'
        },
        [Culture.JAPANESE]: {
            [ThemeColor.BACKGROUND_COLOR]: '#fefefe',
            [ThemeColor.TEXT_COLOR]: '#2c3e50',
            [ThemeColor.PRIMARY]: '#d32f2f',
            [ThemeColor.SECONDARY]: '#c5cae9',
            [ThemeColor.TERTIARY]: '#ffccbc'
        },
        [Culture.MIDDLE_EASTERN]: {
            [ThemeColor.BACKGROUND_COLOR]: '#faf2e6',
            [ThemeColor.TEXT_COLOR]: '#3c3c3c',
            [ThemeColor.PRIMARY]: '#e53946',
            [ThemeColor.SECONDARY]: '#ffca28',
            [ThemeColor.TERTIARY]: '#ffeb3b'
        },
        [Culture.AFRICAN]: {
            [ThemeColor.BACKGROUND_COLOR]: '#fef2e0',
            [ThemeColor.TEXT_COLOR]: '#2e2e2e',
            [ThemeColor.PRIMARY]: '#ff5722',
            [ThemeColor.SECONDARY]: '#8bc34a',
            [ThemeColor.TERTIARY]: '#ffc107'
        },
        [Culture.LATIN_AMERICAN]: {
            [ThemeColor.BACKGROUND_COLOR]: '#fbe9e7',
            [ThemeColor.TEXT_COLOR]: '#3e2723',
            [ThemeColor.PRIMARY]: '#ff5722',
            [ThemeColor.SECONDARY]: '#ff9800',
            [ThemeColor.TERTIARY]: '#9c27b0'
        },
        [Culture.SOUTHEAST_ASIAN]: {
            [ThemeColor.BACKGROUND_COLOR]: '#fff3e0',
            [ThemeColor.TEXT_COLOR]: '#4e342e',
            [ThemeColor.PRIMARY]: '#ff7043',
            [ThemeColor.SECONDARY]: '#ffeb3b',
            [ThemeColor.TERTIARY]: '#81c784'
        }
    },
    [ThemePalette.LUXURY]: {
        [Culture.WESTERN]: {
            [ThemeColor.BACKGROUND_COLOR]: '#f5f5f5',
            [ThemeColor.TEXT_COLOR]: '#333333',
            [ThemeColor.PRIMARY]: '#d4af37',
            [ThemeColor.SECONDARY]: '#212121',
            [ThemeColor.TERTIARY]: '#8e8e8e'
        },
        [Culture.CHINESE]: {
            [ThemeColor.BACKGROUND_COLOR]: '#fef4d8',
            [ThemeColor.TEXT_COLOR]: '#2f2f2f',
            [ThemeColor.PRIMARY]: '#b88a3f',
            [ThemeColor.SECONDARY]: '#9e1b32',
            [ThemeColor.TERTIARY]: '#5d4d2e'
        },
        [Culture.INDIAN]: {
            [ThemeColor.BACKGROUND_COLOR]: '#fff8e1',
            [ThemeColor.TEXT_COLOR]: '#1a1a1a',
            [ThemeColor.PRIMARY]: '#c5a000',
            [ThemeColor.SECONDARY]: '#b5386b',
            [ThemeColor.TERTIARY]: '#8e6a3a'
        },
        [Culture.JAPANESE]: {
            [ThemeColor.BACKGROUND_COLOR]: '#ffffff',
            [ThemeColor.TEXT_COLOR]: '#4d4d4d',
            [ThemeColor.PRIMARY]: '#b28d4d',
            [ThemeColor.SECONDARY]: '#424242',
            [ThemeColor.TERTIARY]: '#c9b79f'
        },
        [Culture.MIDDLE_EASTERN]: {
            [ThemeColor.BACKGROUND_COLOR]: '#f1f1f1',
            [ThemeColor.TEXT_COLOR]: '#3b3b3b',
            [ThemeColor.PRIMARY]: '#c29f56',
            [ThemeColor.SECONDARY]: '#1d1d1d',
            [ThemeColor.TERTIARY]: '#a7a7a7'
        },
        [Culture.AFRICAN]: {
            [ThemeColor.BACKGROUND_COLOR]: '#f4f4f4',
            [ThemeColor.TEXT_COLOR]: '#2b2b2b',
            [ThemeColor.PRIMARY]: '#9c6b35',
            [ThemeColor.SECONDARY]: '#202020',
            [ThemeColor.TERTIARY]: '#a67940'
        },
        [Culture.LATIN_AMERICAN]: {
            [ThemeColor.BACKGROUND_COLOR]: '#fefefe',
            [ThemeColor.TEXT_COLOR]: '#2e2e2e',
            [ThemeColor.PRIMARY]: '#cfa22f',
            [ThemeColor.SECONDARY]: '#393939',
            [ThemeColor.TERTIARY]: '#a67d45'
        },
        [Culture.SOUTHEAST_ASIAN]: {
            [ThemeColor.BACKGROUND_COLOR]: '#e0e0e0',
            [ThemeColor.TEXT_COLOR]: '#333333',
            [ThemeColor.PRIMARY]: '#b08d57',
            [ThemeColor.SECONDARY]: '#3e3e3e',
            [ThemeColor.TERTIARY]: '#a59a6d'
        }
    },
    [ThemePalette.TECHNOLOGY]: {
        [Culture.WESTERN]: {
            [ThemeColor.BACKGROUND_COLOR]: '#f5f5f5',
            [ThemeColor.TEXT_COLOR]: '#333333',
            [ThemeColor.PRIMARY]: '#1e88e5',
            [ThemeColor.SECONDARY]: '#424242',
            [ThemeColor.TERTIARY]: '#e3f2fd' 
        },
        [Culture.CHINESE]: {
            [ThemeColor.BACKGROUND_COLOR]: '#f0f0f0',
            [ThemeColor.TEXT_COLOR]: '#2d2d2d',
            [ThemeColor.PRIMARY]: '#ff6f00',
            [ThemeColor.SECONDARY]: '#3c3c3c',
            [ThemeColor.TERTIARY]: '#f7f7f7'
        },
        [Culture.INDIAN]: {
            [ThemeColor.BACKGROUND_COLOR]: '#ffffff',
            [ThemeColor.TEXT_COLOR]: '#222222',
            [ThemeColor.PRIMARY]: '#4caf50',
            [ThemeColor.SECONDARY]: '#e0e0e0',
            [ThemeColor.TERTIARY]: '#f9f9f9'
        },
        [Culture.JAPANESE]: {
            [ThemeColor.BACKGROUND_COLOR]: '#fafafa',
            [ThemeColor.TEXT_COLOR]: '#1c1c1c',
            [ThemeColor.PRIMARY]: '#b30000',
            [ThemeColor.SECONDARY]: '#8e8e8e',
            [ThemeColor.TERTIARY]: '#e0e0e0'
        },
        [Culture.MIDDLE_EASTERN]: {
            [ThemeColor.BACKGROUND_COLOR]: '#f4f4f4',
            [ThemeColor.TEXT_COLOR]: '#3b3b3b',
            [ThemeColor.PRIMARY]: '#00897b',
            [ThemeColor.SECONDARY]: '#4e4e4e',
            [ThemeColor.TERTIARY]: '#b2dfdb'
        },
        [Culture.AFRICAN]: {
            [ThemeColor.BACKGROUND_COLOR]: '#f9f9f9',
            [ThemeColor.TEXT_COLOR]: '#2d2d2d',
            [ThemeColor.PRIMARY]: '#0288d1',
            [ThemeColor.SECONDARY]: '#43a047',
            [ThemeColor.TERTIARY]: '#b2ebf2'
        },
        [Culture.LATIN_AMERICAN]: {
            [ThemeColor.BACKGROUND_COLOR]: '#f7f7f7',
            [ThemeColor.TEXT_COLOR]: '#2c2c2c',
            [ThemeColor.PRIMARY]: '#039be5',
            [ThemeColor.SECONDARY]: '#ffb300',
            [ThemeColor.TERTIARY]: '#e0e0e0'
        },
        [Culture.SOUTHEAST_ASIAN]: {
            [ThemeColor.BACKGROUND_COLOR]: '#e3f2fd',
            [ThemeColor.TEXT_COLOR]: '#212121',
            [ThemeColor.PRIMARY]: '#00796b',
            [ThemeColor.SECONDARY]: '#0288d1',
            [ThemeColor.TERTIARY]: '#f1f1f1'
        }
    },
    [ThemePalette.MINIMALIST]: {
        [Culture.WESTERN]: {
            [ThemeColor.BACKGROUND_COLOR]: '#ffffff',
            [ThemeColor.TEXT_COLOR]: '#000000',
            [ThemeColor.PRIMARY]: '#c4c4c4',
            [ThemeColor.SECONDARY]: '#999999',
            [ThemeColor.TERTIARY]: '#f2f2f2'
        },
        [Culture.CHINESE]: {
            [ThemeColor.BACKGROUND_COLOR]: '#ffffff',
            [ThemeColor.TEXT_COLOR]: '#000000',
            [ThemeColor.PRIMARY]: '#8a2e2e',
            [ThemeColor.SECONDARY]: '#c0c0c0',
            [ThemeColor.TERTIARY]: '#f4f4f4'
        },
        [Culture.INDIAN]: {
            [ThemeColor.BACKGROUND_COLOR]: '#f5f5f5',
            [ThemeColor.TEXT_COLOR]: '#333333',
            [ThemeColor.PRIMARY]: '#4e5b6e',
            [ThemeColor.SECONDARY]: '#dcdcdc',
            [ThemeColor.TERTIARY]: '#ffffff'
        },
        [Culture.JAPANESE]: {
            [ThemeColor.BACKGROUND_COLOR]: '#ffffff',
            [ThemeColor.TEXT_COLOR]: '#000000',
            [ThemeColor.PRIMARY]: '#b5b5b5',
            [ThemeColor.SECONDARY]: '#d8d8d8',
            [ThemeColor.TERTIARY]: '#f0f0f0'
        },
        [Culture.MIDDLE_EASTERN]: {
            [ThemeColor.BACKGROUND_COLOR]: '#f5f5f5',
            [ThemeColor.TEXT_COLOR]: '#3e3e3e',
            [ThemeColor.PRIMARY]: '#a67c52',
            [ThemeColor.SECONDARY]: '#6d6d6d',
            [ThemeColor.TERTIARY]: '#ffffff'
        },
        [Culture.AFRICAN]: {
            [ThemeColor.BACKGROUND_COLOR]: '#f6f6f6',
            [ThemeColor.TEXT_COLOR]: '#2d2d2d',
            [ThemeColor.PRIMARY]: '#f5b100',
            [ThemeColor.SECONDARY]: '#6d6d6d',
            [ThemeColor.TERTIARY]: '#ffffff'
        },
        [Culture.LATIN_AMERICAN]: {
            [ThemeColor.BACKGROUND_COLOR]: '#ffffff',
            [ThemeColor.TEXT_COLOR]: '#1a1a1a',
            [ThemeColor.PRIMARY]: '#00b0ff',
            [ThemeColor.SECONDARY]: '#b5b5b5',
            [ThemeColor.TERTIARY]: '#f2f2f2'
        },
        [Culture.SOUTHEAST_ASIAN]: {
            [ThemeColor.BACKGROUND_COLOR]: '#ffffff',
            [ThemeColor.TEXT_COLOR]: '#2d2d2d',
            [ThemeColor.PRIMARY]: '#e0b0a0',
            [ThemeColor.SECONDARY]: '#dcdcdc',
            [ThemeColor.TERTIARY]: '#f8f8f8'
        }
    }
}