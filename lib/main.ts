import { Culture } from "./types"
import { 
    createHues, 
    darkenHexColor, 
    getDefaultPalette, 
    getThemePalettes, 
    lightenHexColor, 
    mapObjectColorValues, 
    textColorForBackground, 
    validateCulture 
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
        darkenHexColor,
        lightenHexColor,
        textColorForBackground
    }
}

export default function colorBridge() {
    return {
        bridge,
        utils
    }
}