import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
  colors: {
    primary: "#08D899",
    error: '#C21807',
    background: {
      white: "#ffffff",
      main: "#F0F5F5",
    },
    fonts: {
      white: "#19191B",
      grey: "#676767",
    },
  },
  fontSize: {
    xs: "12px",
    small: "14px",
    medium: "16px",
    large: "18px",
  },

  lineHeight: {
    small: "16px",
    medium: "18px",
    large: "20px",
  },

  media: {
    desktop: "(max-width: 1025px)",
    tablet: "(max-width: 640px)",
    mobile: "(max-width: 360px)",
  },

  // in ms
  durations: {
    ms300: 300,
  },

  // z-index
  order: {
    header: 1,
    modal: 100,
    footer: 1,
  },
};
