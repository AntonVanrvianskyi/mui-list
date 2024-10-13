import {createTheme} from "@mui/material/styles";

const theme = createTheme({
  spacing: 8,
  breakpoints: {
    values: {
      xs: 321,
      sm: 480,
      md: 1000,
      lg: 1280,
      xl: 1920,
    },
  },

  palette: {
    bgColor: {
      extraLight: "rgba(129, 106, 166, 0.08)",
      light: "#322A49",
      medium: "#1B152A",
      dark: "#120E1F",
    },
    textColor: {
      faded: "#816AA6",
    },
    orange400: {
      main: "#F7951F",
    },
    white: {
      main: "#FFFFFF",
    },
    error: {
      main: "#D61C49",
    },
    orange: {
      main: "#FF782D",
    },
    orange32: {
      main: "rgba(255, 120, 45, 0.32)",
    },
    orange64: {
      main: "rgba(255, 120, 45, 0.64)",
    },
  },

  typography: {
    fontFamily: "Rubik, sans-serif",
    body2: {
      fontSize: "14px",
      fontWeight: 700,
    },
    title: {
      fontSize: "16px",
      fontWeight: 400,
    },
  },
  components: {
    // Global Styles

    MuiCssBaseline: {
      styleOverrides: {
        "html, body": {
          background: "#1B152A",
          WebKItBackfaceVisibility: "hidden",
          WebKitPerspective: 1000,
          backfaceVisibility: "hidden",
          height: "calc(var(--vh, 1vh) * 100)",
          maxHeight: "-webkit-fill-available",
          "& .intercom-dfosxs": {
            display: "none !important",
          },
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        body: {
          WebKItBackfaceVisibility: "hidden",
          WebKitPerspective: 1000,
          backfaceVisibility: "hidden",
        },
      },
    },
  },
});

export default theme;
