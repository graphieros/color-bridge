import {
    expect,
    test,
    describe,
} from "vitest";
import { createShiftedHues, darkenHexColor, enumToArray, getDefaultPalette, lightenHexColor, shiftHue, textColorForBackground, validateCulture } from "../lib/utils";
import { Culture, Feeling, ThemeColor } from "../lib/types";
import { colorAssociations, defaultPalette, themePalettes } from "../lib/constants";

describe("lightenHexColor", () => {
    test("should lighten a hex color without transparency", () => {
        const result = lightenHexColor({ hexColor: "#ff5733", force: 0.2 });
        expect(result).toBe("#ff795c");
    });

    test("should lighten a hex color with transparency", () => {
        const result = lightenHexColor({ hexColor: "#ff573380", force: 0.2 });
        expect(result).toBe("#ff795c80");
    });

    test("should return a default color for invalid hex format", () => {
        const result = lightenHexColor({ hexColor: "invalid", force: 0.2 });
        expect(result).toBe("#000000");
    });

    test("should lighten a short hex color without transparency", () => {
        const result = lightenHexColor({ hexColor: "#f53", force: 0.3 });
        expect(result).toBe("#ff8870");
    });

    test("should lighten a short hex color with transparency", () => {
        const result = lightenHexColor({ hexColor: "#f53880", force: 0.3 });
        expect(result).toBe("#f874a6");
    });
});

describe("darkenHexColor", () => {
    test("should lighten a hex color without transparency", () => {
        const result = darkenHexColor({ hexColor: "#ff5733", force: 0.2 });
        expect(result).toBe("#cc4629");
    });

    test("should lighten a hex color with transparency", () => {
        const result = darkenHexColor({ hexColor: "#ff573380", force: 0.2 });
        expect(result).toBe("#cc462980");
    });

    test("should return a default color for invalid hex format", () => {
        const result = darkenHexColor({ hexColor: "invalid", force: 0.2 });
        expect(result).toBe("#000000");
    });

    test("should lighten a short hex color without transparency", () => {
        const result = darkenHexColor({ hexColor: "#f53", force: 0.3 });
        expect(result).toBe("#b33c24");
    });

    test("should lighten a short hex color with transparency", () => {
        const result = darkenHexColor({ hexColor: "#f53880", force: 0.3 });
        expect(result).toBe("#ac275a");
    });
});

describe('shiftHue', () => {
    test("takes a HEX color and returns a shifted HEX color", () => {
        expect(shiftHue({ hexColor: "#6376DD", force: 0.1 })).toBe("#9963dd");
        expect(shiftHue({ hexColor: "#9963dd", force: 0.1 })).toBe("#dd63d8");
        expect(shiftHue({ hexColor: "#dd63d8", force: 0.1 })).toBe("#dd638f");
        expect(shiftHue({ hexColor: "#dd638f", force: 0.1 })).toBe("#dd8063");
        expect(shiftHue({ hexColor: "#dd8063", force: 0.1 })).toBe("#ddc963");
        expect(shiftHue({ hexColor: "#ddc963", force: 0.1 })).toBe("#a8dd63");
        expect(shiftHue({ hexColor: "#a8dd63", force: 0.1 })).toBe("#63dd67");
        expect(shiftHue({ hexColor: "#63dd67", force: 0.1 })).toBe("#63ddb0");
        expect(shiftHue({ hexColor: "#63ddb0", force: 0.1 })).toBe("#63c1dd");
        expect(shiftHue({ hexColor: "#63c1dd", force: 0.1 })).toBe("#6378dd");
    });

    test("should return a shifted hex color with same alpha channel", () => {
        expect(shiftHue({ hexColor: "#6376DD50", force: 0.1 })).toBe("#9963dd50");
    });

    test('should shift the hue of a hex color without alpha channel', () => {
        const params = { hexColor: '#ff0000', force: 0.5 };
        const result = shiftHue(params);
        expect(result).toBe('#00ffff');
    });

    test('should shift the hue of a hex color with alpha channel', () => {
        const params = { hexColor: '#ff000080', force: 0.25 };
        const result = shiftHue(params);
        expect(result).toBe('#80ff0080');
    });

    test('should handle hue overflow correctly (hue > 1 wraps around)', () => {
        const params = { hexColor: '#00ff00', force: 1.2 };
        const result = shiftHue(params);
        expect(result).toBe('#00ccff');
    });

    test('should handle hue underflow correctly (hue < 0 wraps around)', () => {
        const params = { hexColor: '#0000ff', force: -0.5 };
        const result = shiftHue(params);
        expect(result).toBe('#ffff00');
    });

    test('should handle fully black (#000000) color correctly', () => {
        const params = { hexColor: '#000000', force: 0.5 };
        const result = shiftHue(params);
        expect(result).toBe('#000000');
    });

    test('should handle fully white (#ffffff) color correctly', () => {
        const params = { hexColor: '#ffffff', force: 0.5 };
        const result = shiftHue(params);
        expect(result).toBe('#ffffff');
    });

    test('should handle invalid hexColor by returning black', () => {
        const params = { hexColor: '#invalid', force: 0.5 };
        const result = shiftHue(params);
        expect(result).toBe('#000000');
    });

    test('should handle edge case where force is 0 (no hue shift)', () => {
        const params = { hexColor: '#ff0000', force: 0 };
        const result = shiftHue(params);
        expect(result).toBe('#ff0000');
    });

    test('should handle edge case where force is exactly 1 (full hue rotation)', () => {
        const params = { hexColor: '#ff0000', force: 1 };
        const result = shiftHue(params);
        expect(result).toBe('#ff0000');
    });

    test('should correctly parse and preserve an 8-character hex color with transparency', () => {
        const params = { hexColor: '#ff0000ff', force: 0.25 };
        const result = shiftHue(params);
        expect(result).toBe('#80ff00ff');
    });

    test('should pad hex values correctly when resulting RGB values are single digits', () => {
        const params = { hexColor: '#010101', force: 0.5 };
        const result = shiftHue(params);
        expect(result).toBe('#010101');
    });

    test('should handle extreme force values by normalizing them to valid hue shifts', () => {
        const params = { hexColor: '#00ff00', force: 2.5 };
        const result = shiftHue(params);
        expect(result).toBe('#ff00ff');
    });

    test('should correctly calculate RGB values for low luminance (l < 0.5)', () => {
        const params = { hexColor: '#0066ff', force: 0.33 };
        const result = shiftHue(params);
        expect(result).toBe('#ff006b');
    });

    test('should correctly calculate RGB values for high luminance (l >= 0.5)', () => {
        const params = { hexColor: '#66ff33', force: 0.25 };
        const result = shiftHue(params);
        expect(result).toBe('#33ccff');
    });

    test('should correctly process non-zero saturation (s > 0) for a given hue shift', () => {
        const params = { hexColor: '#cc0033', force: 0.15 };
        const result = shiftHue(params);
        expect(result).toBe('#cc8500');
    });

    test('should use default black color (#000000) when nakedHex is empty', () => {
        const params = { hexColor: '', force: 0.5 };
        const result = shiftHue(params);
        expect(result).toBe('#000000');
    });
});


describe("getDefaultPalette", () => {
    test("should return an object of colors corresponding to all feelings for the culture passed as param", () => {
        enumToArray<Culture>(Culture).forEach(culture => {
            const expectedPalette = enumToArray<Feeling>(Feeling).reduce((acc, feeling) => {
                acc[feeling] = defaultPalette[colorAssociations[feeling][culture]];
                return acc;
            }, {});
            expect(getDefaultPalette(culture)).toStrictEqual(expectedPalette)
        });
    });
});

describe('validateCulture', () => {
    test('should not throw an error for valid cultures', () => {
        enumToArray<Culture>(Culture).forEach(culture => {
            expect(() => validateCulture(culture)).not.toThrow();
        })
    });

    test('should throw an error for invalid cultures', () => {
        expect(() => validateCulture('martian')).toThrow()
    });
});

describe('themePalettes', () => {
    test('should have valid colors for all cultures', () => {
        const hexColorRegex = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
        Object.entries(themePalettes).forEach(([_themeName, themeData]) => {
            Object.values(Culture).forEach((culture) => {
                const palette = themeData[culture];
                expect(palette).toBeDefined();
                Object.values(ThemeColor).forEach((colorKey) => {
                    expect(palette[colorKey]).toBeDefined();
                    expect(typeof palette[colorKey]).toBe('string');
                    expect(palette[colorKey]).toMatch(hexColorRegex);
                });
            });
        });
    });
});

describe("textColorForBackground", () => {
    test("should return the dark text color for a light background", () => {
        const bgColor = "#FFFFFF";
        const result = textColorForBackground(bgColor);
        expect(result).toBe("#000000");
    });

    test("should return the light text color for a dark background", () => {
        const bgColor = "#000000";
        const result = textColorForBackground(bgColor);
        expect(result).toBe("#FFFFFF");
    });

    test("should handle mid-tone colors and choose the best contrast", () => {
        const bgColor = "#777777";
        const result = textColorForBackground(bgColor);
        expect(result).toBe("#000000");
    });

    test("should handle custom light and dark colors provided in options", () => {
        const bgColor = "#333333";
        const options = { light: "#FFFFFF", dark: "#000000" };
        const result = textColorForBackground(bgColor, options);
        expect(result).toBe("#FFFFFF");
    });

    test("should work with short hex colors", () => {
        const bgColor = "#FFF";
        const result = textColorForBackground(bgColor);
        expect(result).toBe("#000000");
    });

    test("should work with RGB colors", () => {
        const bgColor = "rgb(255, 255, 255)";
        const result = textColorForBackground(bgColor);
        expect(result).toBe("#000000");
    });

    test("should work with RGBA colors and ignore alpha", () => {
        const bgColor = "rgba(255, 255, 255, 0.5)";
        const result = textColorForBackground(bgColor);
        expect(result).toBe("#000000");
    });

    test("should choose dark text for saturated light colors", () => {
        const bgColor = "#FFDD88";
        const result = textColorForBackground(bgColor);
        expect(result).toBe("#000000");
    });

    test("should choose light text for saturated dark colors", () => {
        const bgColor = "#0055AA";
        const result = textColorForBackground(bgColor);
        expect(result).toBe("#FFFFFF");
    });

    test("should handle edge cases with near-white colors", () => {
        const bgColor = "#FEFEFE";
        const result = textColorForBackground(bgColor);
        expect(result).toBe("#000000");
    });

    test("should handle edge cases with near-black colors", () => {
        const bgColor = "#010101";
        const result = textColorForBackground(bgColor);
        expect(result).toBe("#FFFFFF");
    });

    test("should correctly compare contrast when light and dark colors are custom and swapped", () => {
        const bgColor = "#888888";
        const options = { light: "#000000", dark: "#FFFFFF" };
        const result = textColorForBackground(bgColor, options);
        expect(result).toBe("#000000");
    });

    test("should handle invalid color inputs gracefully", () => {
        const bgColor = "not-a-color";
        expect(() => textColorForBackground(bgColor)).toThrowError("Invalid color format");
    });

    test("should return default values if options are incomplete", () => {
        const bgColor = "#222222";
        const options = { light: "#FFFFFF" };
        const result = textColorForBackground(bgColor, options);
        expect(result).toBe("#FFFFFF");
    });
});

describe('createShiftedHues', () => {
    test('should return shifted colors with default step and range', () => {
        expect(createShiftedHues({ hexColor: '#6376DD' })).toStrictEqual([
            "#6376dd",
            "#6369dd",
            "#6a63dd",
            "#7863dd",
            "#8563dd",
            "#9263dd",
            "#9f63dd",
            "#ac63dd",
            "#b963dd",
            "#c763dd",
            "#d463dd",
            "#dd63d9",
            "#dd63cc",
            "#dd63bf",
            "#dd63b2",
            "#dd63a4",
            "#dd6397",
        ])
    });
    test('should return shifted colors with set step', () => {
        expect(createShiftedHues({ hexColor: '#6376DD', step: 0.05 })).toStrictEqual([
            "#6376dd",
            "#7563dd",
            "#9963dd",
            "#be63dd",
            "#dd63d8",
            "#dd63b3",
        ]);
    })
    test('should return shifted colors with set step and range', () => {
        expect(createShiftedHues({ hexColor: '#6376DD', step: 0.1, range: 0.6 })).toStrictEqual([
            "#6376dd",
            "#9963dd",
            "#dd63d8",
            "#dd638e",
            "#dd8163",
            "#ddca63",
        ]);
    });
});