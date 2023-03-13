// color design tokens export
export const tokensLight = {
  grey: {
    100: "#eeeaeb",
    200: "#716956",
    300: "#4e4f41",
    400: "#858585",
  },
  primary: {
    // blue
    100: "#b8d9f1 ",
    200: "#86b2d9",
    300: "#5a8cb8",
    400: "#356899",
    500: "#1a4568 ",
  },
  secondary: {
    // yellow
    50: "#f0f0f0", // manually adjusted
    100: "#fff6e0",
    200: "#ffedc2",
    300: "#ffe3a3",
    400: "#ffda85",
    500: "#ffd166",
    600: "#cca752",
    700: "#997d3d",
    800: "#665429",
    900: "#332a14",
  },
};

// function that reverses the color palette
function reverseTokens(tokensLight) {
  const reversedTokens = {};
  Object.entries(tokensLight).forEach(([key, val]) => {
    const keys = Object.keys(val);
    const values = Object.values(val);
    const length = keys.length;
    const reversedObj = {};
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1];
    }
    reversedTokens[key] = reversedObj;
  });
  return reversedTokens;
}
export const tokensDark = reverseTokens(tokensLight);

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "light"
        ? {
            // palette values for light
            primary: {
              ...tokensLight.primary,
              main: tokensLight.primary[400],
              light: tokensLight.primary[400],
            },
            secondary: {
              ...tokensLight.secondary,
              main: tokensLight.secondary[300],
            },
            neutral: {
              ...tokensLight.grey,
              main: tokensLight.grey[500],
            },
            background: {
              default: tokensLight.primary[600],
              alt: tokensLight.primary[500],
            },
          }
        : {
            // palette values for dark
            primary: {
              ...tokensDark.primary,
              main: tokensLight.grey[50],
              light: tokensLight.grey[100],
            },
            secondary: {
              ...tokensDark.secondary,
              main: tokensLight.secondary[600],
              light: tokensLight.secondary[700],
            },
            neutral: {
              ...tokensDark.grey,
              main: tokensLight.grey[500],
            },
            background: {
              default: tokensLight.grey[0],
              alt: tokensLight.grey[50],
            },
          }),
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
