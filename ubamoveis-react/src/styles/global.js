import { createGlobalStyle } from "styled-components";

import { colors } from "./colors";

import DosisBold from "../assets/fonts/Dosis-Bold.ttf";
import DosisExtraBold from "../assets/fonts/Dosis-ExtraBold.ttf";
import DosisExtraLight from "../assets/fonts/Dosis-ExtraLight.ttf";
import DosisLight from "../assets/fonts/Dosis-Light.ttf";
import DosisMedium from "../assets/fonts/Dosis-Medium.ttf";
import DosisRegular from "../assets/fonts/Dosis-Regular.ttf";
import DosisSemiBold from "../assets/fonts/Dosis-SemiBold.ttf";

import SourceSansProBlack from "../assets/fonts/SourceSansPro-Black.ttf";
import SourceSansProBlackItalic from "../assets/fonts/SourceSansPro-BlackItalic.ttf";
import SourceSansProBold from "../assets/fonts/SourceSansPro-Bold.ttf";
import SourceSansProBoldItalic from "../assets/fonts/SourceSansPro-BoldItalic.ttf";
import SourceSansProExtraLight from "../assets/fonts/SourceSansPro-ExtraLight.ttf";
import SourceSansProExtraLightItalic from "../assets/fonts/SourceSansPro-ExtraLightItalic.ttf";
import SourceSansProItalic from "../assets/fonts/SourceSansPro-Italic.ttf";
import SourceSansProLight from "../assets/fonts/SourceSansPro-Light.ttf";
import SourceSansProLightItalic from "../assets/fonts/SourceSansPro-LightItalic.ttf";
import SourceSansProRegular from "../assets/fonts/SourceSansPro-Regular.ttf";
import SourceSansProSemiBold from "../assets/fonts/SourceSansPro-Semibold.ttf";
import SourceSansProSemiBoldItalic from "../assets/fonts/SourceSansPro-SemiboldItalic.ttf";

const GlobalStyle = createGlobalStyle`


@font-face {
    font-family: "DosisBold";
    src: url(${DosisBold}) format("opentype");
  }
  @font-face {
    font-family: "DosisExtraBold";
    src: url(${DosisExtraBold}) format("opentype");
  }
  @font-face {
    font-family: "DosisExtraLight";
    src: url(${DosisExtraLight}) format("opentype");
  }
  @font-face {
    font-family: "DosisLight";
    src: url(${DosisLight}) format("opentype");
  }
  @font-face {
    font-family: "DosisMedium";
    src: url(${DosisMedium}) format("opentype");
  }
  @font-face {
    font-family: "DosisRegular";
    src: url(${DosisRegular}) format("opentype");
  }
  @font-face {
    font-family: "DosisSemiBold";
    src: url(${DosisSemiBold}) format("opentype");
  }


  @font-face {
    font-family: "SourceSansProBlack";
    src: url(${SourceSansProBlack}) format("opentype");
  }
  @font-face {
    font-family: "SourceSansProBlackItalic";
    src: url(${SourceSansProBlackItalic}) format("opentype");
  }
  @font-face {
    font-family: "SourceSansProBold";
    src: url(${SourceSansProBold}) format("opentype");
  }
  @font-face {
    font-family: "SourceSansProBoldItalic";
    src: url(${SourceSansProBoldItalic}) format("opentype");
  }
  @font-face {
    font-family: "SourceSansProExtraLight";
    src: url(${SourceSansProExtraLight}) format("opentype");
  }
  @font-face {
    font-family: "SourceSansProExtraLightItalic";
    src: url(${SourceSansProExtraLightItalic}) format("opentype");
  }
  @font-face {
    font-family: "SourceSansProItalic";
    src: url(${SourceSansProItalic}) format("opentype");
  }
  @font-face {
    font-family: "SourceSansProLight";
    src: url(${SourceSansProLight}) format("opentype");
  }
  @font-face {
    font-family: "SourceSansProLightItalic";
    src: url(${SourceSansProLightItalic}) format("opentype");
  }
  @font-face {
    font-family: "SourceSansProRegular";
    src: url(${SourceSansProRegular}) format("opentype");
  }
  @font-face {
    font-family: "SourceSansProSemiBold";
    src: url(${SourceSansProSemiBold}) format("opentype");
  }
  @font-face {
    font-family: "SourceSansProSemiBoldItalic";
    src: url(${SourceSansProSemiBoldItalic}) format("opentype");
  }

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}

html,
body,
#root {
  height: 100%;
  scroll-behavior: smooth;
}

body {
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  background:#fff;
  color:#2B2B2B;
  font-family: "MuseoSans500", sans-serif;
  overflow-x: hidden;
}

a {
  text-decoration: none;
}

div {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}

button {
  font-family: "MuseoSans500", sans-serif;
  border: 0;
  cursor: pointer;
  background-color: transparent;
}

input {
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Roboto', sans-serif;
  font-weight: unset;
}

ul {
  list-style: none;
}

.toastsuccess {
  border-radius: 6px;
  background-color: ${colors.primary} !important;
}

.Toastify__toast--error {
  border-radius: 6px;
  background-color: ${colors.danger} !important;
}

.Toastify__toast-body {
  font-family: "GilroyBold" !important;
  font-size: 14px;
  padding: 0 16px;
}
`;

export default GlobalStyle;

// @font-face {
//     font-family: "MuseoSlab700";
//     src: url(${MuseoSlab700}) format("opentype");
//   }

// @font-face {
//     font-family: "MuseoSans700";
//     src: url(${MuseoSans700}) format("opentype");
//   }

// @font-face {
//     font-family: "MuseoSans500";
//     src: url(${MuseoSans500}) format("opentype");
//   }
