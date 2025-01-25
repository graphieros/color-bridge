import {
    expect,
    test,
    describe,
} from "vitest";

import colorBridge from "../lib/main"
import { Culture, Feeling } from "../lib/types";
import { colorAssociations, defaultPalette } from "../lib/constants";
import { darkenHexColor, enumToArray, lightenHexColor } from "../lib/utils";

function generateColorShades(baseColor: string, lightSteps: number, darkSteps: number): string[] {
    const shades:string[] = [];
    for (let i = lightSteps; i >= 0; i -= 0.1) {
        shades.push(lightenHexColor({ hexColor: baseColor, force: i }));
    }
    for (let i = 0.1; i <= darkSteps; i += 0.1) {
        shades.push(darkenHexColor({ hexColor: baseColor, force: i }));
    }
    return shades;
}

describe('main', () => {
    enumToArray<Culture>(Culture).forEach((culture) => {
        test(`should return available features of the library for culture: ${culture}`, () => {

            const expectedPalette = enumToArray<Feeling>(Feeling).reduce((acc, feeling) => {
                acc[feeling] = defaultPalette[colorAssociations[feeling][culture]];
                return acc;
            }, {});

            const expectedHues = enumToArray<Feeling>(Feeling).reduce((acc, feeling) => {
                const baseColor = defaultPalette[colorAssociations[feeling][culture]];
                acc[feeling] = generateColorShades(baseColor, 0.8, 0.8);
                return acc;
            }, {});

            const result = colorBridge({ culture });

            expect(result.palette).toStrictEqual(expectedPalette);
            expect(result.hues).toStrictEqual(expectedHues);
            expect(typeof result.lightenHexColor).toBe('function');
            expect(typeof result.darkenHexColor).toBe('function');
        });
    });
});