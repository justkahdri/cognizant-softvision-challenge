// theme.ts
import {extendTheme} from "@chakra-ui/react";
import "@fontsource/roboto/400.css";

const theme = extendTheme({
  colors: {
    brand: {
      200: "#68D4F2",
      500: "#1687A7",
      600: "#147A96",
      800: "#276678",
    },
    complementary: {
      50: "#ffa95e",
      200: "#ffa95e",
      500: "#FF8C21",
    },
    secondary: "#D3E0EA",
    background: "#F6F5F5",
  },
  fonts: {
    heading: "Roboto",
  },
  styles: {
    global: {
      html: {
        textAlign: "center",
      },
      body: {
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        color: "blackAlpha.900",
        background:
          "radial-gradient( circle farthest-corner at 10% 20%,  rgba(97,186,255,1) 0%, rgba(166,239,253,1) 90.1% )",
      },
    },
  },
  components: {
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
