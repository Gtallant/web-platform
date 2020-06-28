import { createGlobalStyle } from 'styled-components';
const FONT_DIRECTORY = '/fonts/';

export default createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url('${FONT_DIRECTORY}Roboto-Black.ttf');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('${FONT_DIRECTORY}Roboto-BlackItalic.ttf');
    font-weight: 900;
    font-style: italic;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('${FONT_DIRECTORY}Roboto-Bold.ttf');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('${FONT_DIRECTORY}Roboto-BoldItalic.ttf');
    font-weight: 700;
    font-style: italic;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('${FONT_DIRECTORY}Roboto-Medium.ttf');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('${FONT_DIRECTORY}Roboto-MediumItalic.ttf');
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('${FONT_DIRECTORY}Roboto-Regular.ttf');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('${FONT_DIRECTORY}Roboto-Italic.ttf');
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('${FONT_DIRECTORY}Roboto-Light.ttf');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('${FONT_DIRECTORY}Roboto-LightItalic.ttf');
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('${FONT_DIRECTORY}Roboto-Thin.ttf');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('${FONT_DIRECTORY}Roboto-ThinItalic.ttf');
    font-weight: 100;
    font-style: italic;
  }
`;