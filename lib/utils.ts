import { colorAssociations, defaultPalette } from "./constants";
import { Culture, Feeling, FeelingColor, HueParams } from "./types";

export function lightenHexColor(params: HueParams) {
    if (!/^#([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i.test(params.hexColor)) {
        console.warn('lightenHexColor : Invalid hex color format');
        return "#000000";
    }

    let color = params.hexColor.replace('#', '');

    if (color.length === 3) {
        color = color.split('').map(c => c + c).join('');
    }

    const r = parseInt(color.substring(0, 2), 16);
    const g = parseInt(color.substring(2, 4), 16);
    const b = parseInt(color.substring(4, 6), 16);

    const newR = Math.min(255, r + (255 - r) * params.force);
    const newG = Math.min(255, g + (255 - g) * params.force);
    const newB = Math.min(255, b + (255 - b) * params.force);

    const lighterHex = `#${Math.round(newR).toString(16).padStart(2, '0')}${Math.round(newG).toString(16).padStart(2, '0')}${Math.round(newB).toString(16).padStart(2, '0')}`;

    if (color.length === 8) {
        const alpha = color.substring(6, 8);
        return lighterHex + alpha;
    }
    return lighterHex;
}

export function darkenHexColor(params: HueParams) {
    if (!/^#([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i.test(params.hexColor)) {
        console.warn('darkenHexColor: Invalid hex color format');
        return "#000000";
    }

    let color = params.hexColor.replace('#', '');

    if (color.length === 3) {
        color = color.split('').map(c => c + c).join('');
    }

    const r = parseInt(color.substring(0, 2), 16);
    const g = parseInt(color.substring(2, 4), 16);
    const b = parseInt(color.substring(4, 6), 16);

    const newR = Math.max(0, r - r * params.force);
    const newG = Math.max(0, g - g * params.force);
    const newB = Math.max(0, b - b * params.force);

    const darkerHex = `#${Math.round(newR).toString(16).padStart(2, '0')}${Math.round(newG).toString(16).padStart(2, '0')}${Math.round(newB).toString(16).padStart(2, '0')}`;

    if (color.length === 8) {
        const alpha = color.substring(6, 8);
        return darkerHex + alpha;
    }

    return darkerHex;
}

export function shiftHue(params: HueParams) {

    const nakedHex = params.hexColor.length === 9 ? params.hexColor.substring(0, 7) : params.hexColor;
    const alphaChannel = params.hexColor.length === 9 ? params.hexColor.substring(7, 9) : null;

    const hexToRgb = (hex: string) => ({
        r: parseInt(hex.substring(1, 3), 16),
        g: parseInt(hex.substring(3, 5), 16),
        b: parseInt(hex.substring(5, 7), 16),
    });

    const rgbToHsl = ({ r, g, b }: { r: number, g: number, b: number}) => {
        r /= 255;
        g /= 255;
        b /= 255;
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        let h: number = 0, s: number, l = (max + min) / 2;

        if (max === min) {
            h = s = 0;
        } else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }
        return { h, s, l };
    };

    const hslToRgb = ({ h, s, l }: { h: number, s: number, l: number}) => {
        let r: number, g: number, b: number;

        if (s === 0) {
            r = g = b = l;
        } else {
            const hue2rgb = (p: number, q: number, t: number) => {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1 / 6) return p + (q - p) * 6 * t;
                if (t < 1 / 2) return q;
                if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            };

            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
        }

        return {
            r: Math.round(r * 255),
            g: Math.round(g * 255),
            b: Math.round(b * 255),
        };
    };

    const rgbColor = hexToRgb(nakedHex || "#000000");
    const hslColor = rgbToHsl(rgbColor);
    hslColor.h += params.force;
    hslColor.h = (hslColor.h + 1) % 1;

    const shiftedRgbColor = hslToRgb(hslColor);
    const shiftedHexColor = `#${(shiftedRgbColor.r << 16 | shiftedRgbColor.g << 8 | shiftedRgbColor.b).toString(16).padStart(6, '0')}`;


    return shiftedHexColor + (alphaChannel || '');
}

export function enumToArray<T>(enumObj: any): T[] {
    return Object.values(enumObj).filter(value => typeof value === 'string') as T[];
}

function mapFeelingsToColors(arr: FeelingColor[]): Record<string, string> {
    return arr.reduce((acc, { feeling, color }) => {
        // @ts-ignore
        acc[feeling] = defaultPalette[color];
        return acc;
    }, {} as Record<string, string>);
}

export function getDefaultPalette(culture: Culture): Record<Feeling, string> {
    const feelingColors = enumToArray<Feeling>(Feeling).map((feeling: Feeling) => {
        return {
            feeling,
            color: colorAssociations[feeling][culture]
        }
    })
    return mapFeelingsToColors(feelingColors);
}

export function validateCulture(culture: Culture | string){
    if(!enumToArray<Culture>(Culture).includes(culture as Culture)) {
        throw new Error(`"${culture}" is not part of the available cultures\nPlease provide one of the following cultures:\n${enumToArray<Culture>(Culture).toString().split(',').join('\n')}`);
    }
}

export function mapObjectColorValues(obj: Record<string, string>, mapFunction: (color: string) => any ) {
    return Object.keys(obj).reduce((acc: any, key: string) => {
        acc[key] = mapFunction(obj[key])
        return acc;
    }, {});
}