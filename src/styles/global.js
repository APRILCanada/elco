import { createGlobalStyle } from "styled-components";
import '@fontsource/poppins';

const GlobalStyle = createGlobalStyle`
    :root {
        box-sizing: border-box;
        font-size: 0.9rem;
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

        --max-width: 1380px;


/* RYTHME VERTICAL */
section + section,
button + button {
  margin-top: var(--spacing-m);
}

section {
  padding: var(--spacing-l) 0;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
    margin: 0;
    padding: 0;
    line-height: 1.4;
    font-family: var(--font);
  }

h1, h2, h3 {
  color: var(--color-heading);
  font-weight: 400;
  font-size: 20px;
}

// Adaptation de la police
@media (min-width: 500px) {
    :root {
      font-size: 0.9rem;
    }

    h1 {
      font-size: 1.6rem;
    }
  }

  @media (min-width: 750px) {
    :root {
      font-size: 1.1rem;
    }

    h1 {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 980px) {
    :root {
      font-size: 1.2rem;
    }

    h1 {
      font-size: 1.8rem;
      line-height: 1.4;
    }
  }


  @media (min-width: 1180px) {
    :root {
      font-size: 1.2rem;
    }

    h1 {
      font-size: 2rem;
      line-height: 1.4;
    }
  }

  @media (min-width: 1380px) {
    :root {
      font-size: 1.2rem;
    }

    h1 {
      font-size: 2.2rem;
      line-height: 1.4;
    }
  }

  @media (min-width: 1900px) {
    :root {
      font-size: 1.2rem;
    }
  }
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

.highlight {
  font-weight: 800;
  color: var(--color-secondary);
}

.highlight-primary {
  font-weight: 800;
  color: var(--color-primary);
}

.float {
     border-radius: 50%;
      float: left;
      margin-right: 1.5rem;
      margin-bottom: 1.5rem;
      min-width: 85px;
      shape-outside: circle();
    }
`

export default GlobalStyle;