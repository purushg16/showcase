import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      "50": "#e0e0e0",
      "100": "#c7c7c7",
      "200": "#a8a8a8",
      "300": "#878787",
      "400": "#6f6f6f",
      "500": "#565656",
      "600": "#404040",
      "700": "#000000",
      "800": "#000000",
      "900": "#000000",
    },
    red: {
      50: "#ffebee",
      100: "#ffcdd2",
      200: "#ef9a9a",
      300: "#e57373",
      400: "#ef5350",
      500: "#f44336",
      600: "#e53935",
      700: "#d32f2f",
      800: "#c62828",
      900: "#b71c1c",
    },
    blue: {
      50: "#e3f2fd",
      100: "#bbdefb",
      200: "#90caf9",
      300: "#64b5f6",
      400: "#42a5f5",
      500: "#2196f3",
      600: "#1e88e5",
      700: "#1976d2",
      800: "#1565c0",
      900: "#0d47a1",
    },
  },
});

export default theme;
