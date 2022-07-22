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

main {
  padding-left: var(--spacing-m);
  padding-right: var(--spacing-m);
}

h1, h2, h3 {
  color: var(--color-heading);
  font-weight: 400;
  font-size: 20px;
}

a {
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
  object-fit: cover;
}

form {
  width: 100%;
  max-width: 600px;
}

.shape-to-right {
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
  border-top-right-radius: 50%;
  object-position: 50% 50%;

}

.shape-to-left {
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
}
`

export default GlobalStyle;