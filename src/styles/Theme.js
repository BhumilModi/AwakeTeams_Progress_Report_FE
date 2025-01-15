import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    // fontFamily: 'BDOGroteskRegular',
    fontSize: 14,
    fontWeight: 400,
    color: 'black',
    body1: {
      // fontFamily: "BDOGroteskRegular",
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "22.4px",
      letterSpacing: "-0.02em",
    },
    body2: {
      // fontFamily: "BDOGroteskRegular",
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "19.6px",
    },
    subtitle1: {
      // fontFamily: "BDOGroteskRegular",
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "16.8px",
    },
    h1: {
      // fontFamily: "BDOGroteskMedium",
      fontSize: "24px",
      fontWeight: 700,
      lineHeight: "33.6px",
      letterSpacing: "-0.02em",
    },
    h2: {
      // fontFamily: "BDOGroteskMedium",
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: "22.4px",
    },
    h3: {
      // fontFamily: "BDOGroteskMedium",
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "19.6px",
    },
    h4: {
      // fontFamily: "BDOGroteskMedium",
      fontSize: "12px",
      fontWeight: 500,
      lineHeight: "16.8px",
    }
  }
});