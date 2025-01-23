import { Color, Feeling } from "./types";

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
    [Color.YELLOW] : '#FFEE00',
    [Color.RED]: '#FF3000',
    [Color.SAFFRON]: '#F1C338',
    [Color.PINK]: '#FFC0CB',
    [Color.GOLD]: '#EFBF04',
    [Color.ORANGE]: '#FF7900',
    [Color.BLUE]: '#3030FF',
    [Color.WHITE]: '#FAFAFA',
    [Color.BLACK]: '#1A1A1A',
    [Color.GRAY]: '#888888',
    [Color.GREEN]: '#00DD20',
    [Color.BEIGE]: '#C09E80',
    [Color.BROWN]: '#895129',
    [Color.PURPLE]: '#9d00ff'
}