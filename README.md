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

const {
  // palettes
  palette,
  hues,
  themes,
  // utility functions
  createHues,
  darkenHexColor,
  lightenHexColor,
} = colorBridge({ culture: "chinese" });

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
const { palette, hues, themes } = colorBridge({ culture: "african" });
```

- chinese

```js
const { palette, hues, themes } = colorBridge({ culture: "chinese" });
```

- indian

```js
const { palette, hues, themes } = colorBridge({ culture: "indian" });
```

- japanese

```js
const { palette, hues, themes } = colorBridge({ culture: "japanese" });
```

- latinAmerican

```js
const { palette, hues, themes } = colorBridge({ culture: "latinAmerican" });
```

- middleEastern

```js
const { palette, hues, themes } = colorBridge({ culture: "middleEastern" });
```

- southeastAsian

```js
const { palette, hues, themes } = colorBridge({ culture: "southeastAsian" });
```

- western

```js
const { palette, hues, themes } = colorBridge({ culture: "western" });
```

### Utility functions

```js
const { createHues, darkenHexColor, lightenHexColor } = colorBridge({ culture: "chinese" });

// Create a set of 16 colors fro light to dark from a hex color
const myHues = createHues({ hexColor: '#6376DD' });

// Darken a hex color by a given force (from 0 to 1)
const darkened = darkenHexColor({ hexColor: '#6376DD', 0.2 });

// Lighten a hex color by a given force (from 0 to 1)
const darkened = lightenColor({ hexColor: '#6376DD', 0.2 });

```
