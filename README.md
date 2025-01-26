# color-bridge

[![npm](https://img.shields.io/npm/v/color-bridge)](https://github.com/graphieros/color-bridge)
[![License](https://img.shields.io/badge/license-MIT-green)](https://github.com/graphieros/color-bridge?tab=MIT-1-ov-file#readme)
[![GitHub issues](https://img.shields.io/github/issues/graphieros/color-bridge)](https://github.com/graphieros/color-bridge/issues)
[![npm](https://img.shields.io/npm/dt/color-bridge)](https://github.com/graphieros/color-bridge)

A tool to generate region-specific color palettes, based on cultural contexts.

[Documentation website](https://color-bridge.graphieros.com/)

```
npm i color-bridge
```

```js
import colorBridge from "color-bridge";

const { bridge, utils } = colorBridge();

const { palette, hue, themes } = bridge({ culture: "chinese" });

/**
 * palette: {
    caution: "#FFEE00",
    danger: "#1A1A1A",
    energy: "#FF3000",
    error: "#1A1A1A",
    growth: "#EFBF04",
    happiness: "#FF3000",
    innovation: "#FF3000",
    luck: "#FF3000",
    mourning: "#FAFAFA",
    neutrality: "#888888",
    optimism: "#EFBF04",
    sadness: "#FAFAFA",
    stability: "#3030FF",
    success: "#FF3000",
    urgency: "#FF7900"
}
 * hues: {
    caution: [
        "#fffccc",
        "#fffab3",
        "#fff899",
        "#fff780",
        "#fff566",
        "#fff34d",
        "#fff133",
        "#fff01a",
        "#ffee00",
        "#e6d600",
        "#ccbe00",
        "#b3a700",
        "#998f00",
        "#807700",
        "#665f00",
        "#4d4700",
        "#333000"
    ],
    danger: [...],
    ... and so on
 } 
 */
```

### Available cultures:

- african:

```js
const { bridge } = colorBridge();
const { palette, hues, themes } = bridge({ culture: "african" });
```

- chinese

```js
const { bridge } = colorBridge();
const { palette, hues, themes } = bridge({ culture: "chinese" });
```

- indian

```js
const { bridge } = colorBridge();
const { palette, hues, themes } = bridge({ culture: "indian" });
```

- japanese

```js
const { bridge } = colorBridge();
const { palette, hues, themes } = bridge({ culture: "japanese" });
```

- latinAmerican

```js
const { bridge } = colorBridge();
const { palette, hues, themes } = bridge({ culture: "latinAmerican" });
```

- middleEastern

```js
const { bridge } = colorBridge();
const { palette, hues, themes } = bridge({ culture: "middleEastern" });
```

- southeastAsian

```js
const { bridge } = colorBridge();
const { palette, hues, themes } = bridge({ culture: "southeastAsian" });
```

- western

```js
const { bridge } = colorBridge();
const { palette, hues, themes } = bridge({ culture: "western" });
```

### Utility functions

```js
const { utils } = colorBridge();
const { createHues, darkenHexColor, lightenHexColor, textColorForBackground } =
  utils();

// Create a set of 16 colors fro light to dark from a hex color
const myHues = createHues({ hexColor: "#6376DD" });

// Darken a hex color by a given force (from 0 to 1)
const darkened = darkenHexColor({ hexColor: "#6376DD", force: 0.2 });

// Lighten a hex color by a given force (from 0 to 1)
const darkened = lightenColor({ hexColor: "#6376DD", force: 0.2 });

// Return a text color for a given background, for a perfect contrast
const textColor1 = textColorForBackground("#6376DD"); // #000000
const textColor2 = textColorForBackground("#887123"); // #FFFFFF

// Return a text color for a given background, with options for dark or light return color
const textColor3 = textColorForBackground("#6376DD", {
  light: "#FAFAFA",
  dark: "#1A1A1A",
}); // #1A1A1A
const textColor4 = textColorForBackground("#887123", {
  light: "#FAFAFA",
  dark: "#1A1A1A",
}); // #FAFAFA
```
