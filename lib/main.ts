import { Culture } from "./types"
import { 
    createHues, 
    darkenHexColor, 
    getDefaultPalette, 
    getThemePalettes, 
    lightenHexColor, 
    mapObjectColorValues, 
    validateCulture 
} from "./utils"

export default function colorBridge({ culture } : {
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
        createHues,
        darkenHexColor,
        lightenHexColor
    }
}