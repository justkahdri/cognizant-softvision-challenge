// theme.ts
import {extendTheme} from "@chakra-ui/react";
import "@fontsource/roboto/400.css";

const theme = extendTheme({
  colors: {
    brand: {
      400: "#D3E0EA",
      500: "#1687A7",
      600: "#147A96",
      800: "#276678",
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
        backgroundColor: "background",
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
