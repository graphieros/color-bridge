export enum Culture {
    AFRICAN = 'african',
    CHINESE = 'chinese',
    INDIAN = 'indian',
    JAPANESE = 'japanese',
    LATIN_AMERICAN = 'latinAmerican',
    MIDDLE_EASTERN = 'middleEastern',
    SOUTHEAST_ASIAN = 'southeastAsian',
    WESTERN = 'western',
}

export enum Feeling {
    CAUTION = 'caution',
    DANGER = 'danger',
    ENERGY = 'energy',
    ERROR = 'error',
    GROWTH = 'growth',
    HAPPINESS = 'happiness',
    INNOVATION = 'innovation',
    LUCK = 'luck',
    MOURNING = 'mourning',
    NEUTRALITY = 'neutrality',
    OPTIMISM = 'optimism',
    SADNESS = 'sadness',
    STABILITY = 'stability',
    SUCCESS = 'success',
    URGENCY = 'urgency',
}

export enum Color {
    YELLOW = 'yellow',
    RED = 'red',
    SAFFRON = 'saffron',
    PINK = 'pink',
    GOLD = 'gold',
    ORANGE = 'orange',
    BLUE = 'blue',
    WHITE = 'white',
    BLACK = 'black',
    GRAY = 'gray',
    GREEN = 'green',
    BEIGE = 'beige',
    BROWN = 'brown',
    PURPLE = 'purple'
}

export enum ThemePalette {
    BUSINESS = 'business',
    CELEBRATION = 'celebration',
    LUXURY = 'luxury',
    TECHNOLOGY = 'technology',
    MINIMALIST = 'minimalist'
}

export enum ThemeColor {
    BACKGROUND_COLOR = 'backgroundColor',
    TEXT_COLOR = 'textColor',
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    TERTIARY = 'tertiary'
}

export type ColorAssociation = {
    feeling: Feeling
    colors: {
        [key in Culture]: Color;
    };
}

export type FeelingColor = { feeling: Feeling, color: string };

/**
 * Params passed to hue shifting utility functions
 * @example lightenHexColor('#6376DD', 0.1);
 * darkenHexColor('#6376DD', 0.2);
 */
export type HueParams = {
    hexColor: string
    force: number
}

export type Theme = {
    [culture in Culture]: {
        [color in ThemeColor]: string;
    };
};

export type TextColorForBackgroundColorOptions = {
    light?: string
    dark?: string
}