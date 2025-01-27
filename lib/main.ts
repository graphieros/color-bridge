import { Culture } from "./types"
import { 
    createHues, 
    createShiftedHues, 
    darkenHexColor, 
    getDefaultPalette, 
    getThemePalettes, 
    lightenHexColor, 
    mapObjectColorValues, 
    shiftHue,
    textColorForBackground, 
    validateCulture,
} from "./utils"

function bridge({ culture } : {
    culture: string
}) {

    validateCulture(culture);
    
    const palette = getDefaultPalette(culture as Culture);

    const hues = mapObjectColorValues(palette, (hexColor) => {
        return createHues({ hexColor });
    });

    const themes = getThemePalettes(culture as Culture);
    return {
        palette,
        hues,
        themes,
    }
}

function utils() {
    return {
        createHues,
        createShiftedHues,
        darkenHexColor,
        lightenHexColor,
        shiftHue,
        textColorForBackground,
    }
}

export default function colorBridge() {
    return {
        bridge,
        utils
    }
}