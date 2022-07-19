import { createGlobalStyle } from "styled-components";
import '@fontsource/poppins';

const GlobalStyle = createGlobalStyle`
    :root {
        box-sizing: border-box;
        font-size: 0.75rem;
        --color-primary: #2188E4;
        --color-secondary: #F7AA36;
        
        --color-grey-light: #F1F1F1;
        --color-white: #FFFFFF;

        --color-text: #333333;
        --color-heading: #013D62;

        --font: 'Poppins', sans-serif;

        --spacing-s: 0.5rem;
        --spacing-m: 1.5rem;
        --spacing-l: 3rem;

// Adaptation de la police
  @media (min-width: 500px) {
    :root {
      font-size: 0.9rem;
    }
  }

  @media (min-width: 800px) {
    :root {
      font-size: 1.1rem;
    }
  }

  @media (min-width: 1400px) {
    :root {
      font-size: 1.2rem;
    }
  }
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
    margin: 0;
    padding: 0;
    line-height: 1.5;
    font-family: var(--font);
  }

a {
  text-decoration: none;
}
`

export default GlobalStyle;