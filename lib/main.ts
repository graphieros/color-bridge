import { Culture } from "./types"
import { darkenHexColor, getDefaultPalette, lightenHexColor, mapObjectColorValues, validateCulture } from "./utils"

export default function colorBridge({ culture } : {
    culture: string
}) {

    validateCulture(culture);
    
    const palette = getDefaultPalette(culture as Culture);

    const paletteHues = mapObjectColorValues(palette, (hexColor) => {
        const arr = [];
        for (let force = 0.8; force > 0; force -= 0.1) {
            arr.push(lightenHexColor({ hexColor, force }));
        }
        for (let force = 0.1; force < 0.8; force += 0.1) {
            arr.push(darkenHexColor({ hexColor, force }));
        }
        return arr;
    });

    return {
        palette,
        paletteHues
    }
}