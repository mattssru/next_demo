import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiTab: {
      root: {
        fontFamily: "Prompt-Medium",
        fontWeight: "normal",
      },
    },
    MuiFormHelperText: {
      contained: {
        fontSize: `18px`,
        lineHeight: `18px`,
      },
      root: {
        fontSize: `18px`,
        lineHeight: `18px`,
      },
    },
    MuiCssBaseline: {
      "@global": {
        body: {
          WebkitFontSmoothing: "auto",
          fontFamily: "Prompt-Regular",
          fontSize: "28px",
          maxWidth: "1920px",
          color: "#000000",
          backgroundImage: "url(/static/images/bg-green.png)",
          backgroundColor: "#fff",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top right",
          backgroundSize: "auto",
          "@media (max-width: 1024px)": {
            backgroundSize: "70vw auto",
          },
          "@media (max-width: 767px)": {
            backgroundSize: "40% auto",
          },
        },
        article: {
          overflow: "hidden",
        },
        ".MuiContainer-root": {
          padding: "0 15px !important",
        },

        ".MuiToolbar-gutters": {
          padding: "0 15px !important",
        },
        ".MuiLink-root": {
          textDecoration: "none",
          cursor: "pointer",
        },
        ".MuiToolbar-root .MuiContainer-root": {
          "@media (max-width: 767px)": {
            padding: "0 !important",
          },
        },
        ".MuiInputBase-root": {
          fontFamily: "Prompt-Regular !important",
        },
        ".MuiTableCell-root": {
          fontFamily: "DBHeavent",
          fontWeight: "normal !important",
        },
        a: {
          textDecoration: "none",
          curser: "pointer",
          MozTransition: "all .2s ease-in",
          WebkitTransition: "all .2s ease-in",
          transition: "all .2s ease-in",
        },
        "&:focus, &:hover, &:visited, &:link, &:active": {
          textDecoration: "none",
        },
        MuiButton: {
          text: {
            color: "white",
          },
        },
        strong: {
          fontFamily: "Prompt-Medium",
          fontWeight: "normal",
        },

        button: {
          fontFamily: "Prompt-Medium",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#172978",
      contrastText: "#fff",
    },
    secondary: {
      main: "#09ae9f",
      contrastText: "#fff",
    },
    error: {
      main: "#f44336",
      contrastText: "#fff",
    },
    warning: {
      main: "#ff9800",
      contrastText: "#fff",
    },
    info: {
      main: "#1778F2",
      contrastText: "#fff",
    },
    success: {
      main: "#4caf50",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: "Prompt-Regular",
    h1: {
      fontFamily: "Prompt-Medium",
      fontSize: 60,
      lineHeight: "60px",
      fontWeight: "normal",
    },
    h2: {
      fontFamily: "Prompt-Medium",
      fontSize: 30,
      lineHeight: "30px",
      fontWeight: "normal",
    },
    h3: {
      fontFamily: "Prompt-Medium",
      fontWeight: "normal",
    },
    h4: {
      fontFamily: "Prompt-Medium",
      fontWeight: "normal",
    },
    h5: {
      fontFamily: "Prompt-Medium",
      fontWeight: "normal",
    },
    h6: {
      fontFamily: "Prompt-Medium",
      fontWeight: "normal",
    },
    body1: {
      fontSize: "24px",
      lineHeight: "24px",
    },
    body2: {
      fontSize: "21px",
      lineHeight: "21px",
    },
  },
  shape: {
    borderRadius: 12,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 991,
      lg: 1280,
      xl: 1920,
      // xs: 0,
      // sm: 767,
      // md: 1024,
      // lg: 1280,
      // xl: 1920,
    },
  },
});

export default theme;
