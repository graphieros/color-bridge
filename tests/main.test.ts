import {
    expect,
    test,
    describe,
} from "vitest";

import { Culture, Feeling } from "../lib/types";
import { colorAssociations, defaultPalette } from "../lib/constants";
import { darkenHexColor, enumToArray, lightenHexColor } from "../lib/utils";
import colorBridge from "../lib/main";

function generateColorShades(baseColor: string, lightSteps: number, darkSteps: number): string[] {
    const shades: string[] = [];
    for (let i = lightSteps; i >= 0; i -= 0.1) {
        shades.push(lightenHexColor({ hexColor: baseColor, force: i }));
    }
    for (let i = 0.1; i <= darkSteps; i += 0.1) {
        shades.push(darkenHexColor({ hexColor: baseColor, force: i }));
    }
    return shades;
}

const { bridge, utils } = colorBridge();

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

            const result = bridge({ culture });

            expect(result.palette).toStrictEqual(expectedPalette);
            expect(result.hues).toStrictEqual(expectedHues);
        });

        test('should provide utility functions', () => {
            const {
                createHues,
                createShiftedHues,
                darkenHexColor,
                lightenHexColor,
                shiftHue,
                textColorForBackground,
            } = utils();

            expect(typeof createHues).toBe('function');
            expect(typeof createShiftedHues).toBe('function');
            expect(typeof darkenHexColor).toBe('function');
            expect(typeof lightenHexColor).toBe('function');
            expect(typeof shiftHue).toBe('function');
            expect(typeof textColorForBackground).toBe('function');
        });
    });
});

describe('Default Export', () => {
    test('should return an object with bridge and utils', () => {
        const result = colorBridge();

        expect(result).toBeDefined();
        expect(result).toHaveProperty('bridge', bridge);
        expect(result).toHaveProperty('utils', utils);

        expect(typeof result.bridge).toBe('function');
        expect(typeof result.utils).toBe('function');
    });

    test('should allow calling bridge and utils', () => {
        const { bridge, utils } = colorBridge();

        const bridgeResult = bridge({ culture: Culture.CHINESE });
        expect(bridgeResult).toHaveProperty('palette');
        expect(bridgeResult).toHaveProperty('hues');
        expect(bridgeResult).toHaveProperty('themes');

        const utilityFunctions = utils();
        expect(utilityFunctions).toHaveProperty('createHues');
        expect(utilityFunctions).toHaveProperty('createShiftedHues');
        expect(utilityFunctions).toHaveProperty('darkenHexColor');
        expect(utilityFunctions).toHaveProperty('lightenHexColor');
        expect(utilityFunctions).toHaveProperty('shiftHue');
        expect(utilityFunctions).toHaveProperty('textColorForBackground');
    });
});
