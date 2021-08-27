// theme.ts
import {extendTheme} from "@chakra-ui/react";
import "@fontsource/roboto/400.css";

const theme = extendTheme({
  fonts: {
    heading: "Roboto",
  },
  styles: {
    global: {
      html: {
        textAlign: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      },
      body: {
        margin: 0,
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        color: "blackAlpha.900",
      },
    },
  },
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: "bold", // Normally, it is "semibold"
      },
      // 2. We can add a new button size or extend existing
      sizes: {
        xl: {
          h: "56px",
          fontSize: "lg",
          px: "32px",
        },
      },
      // 3. We can add a new visual variant
      variants: {
        "with-shadow": {
          bg: "red.400",
          boxShadow: "0 0 2px 2px #efdfde",
        },
        // 4. We can override existing variants
        solid: (props) => ({
          bg: props.colorMode === "dark" ? "red.300" : "red.500",
        }),
      },
    },
    Heading: {
      baseStyle: {
        margin: 0,
        padding: 0,
      },
    },
    Text: {
      baseStyle: {
        margin: 0,
        padding: 0,
      },
    },
  },
});

export default theme;
