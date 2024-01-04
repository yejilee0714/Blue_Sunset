const { createGlobalStyle } = require('styled-components');

const GlobalStyle = createGlobalStyle`
  // === ROOT ===
  :root {
    // Color
    --white-color: #FFFFFF;
    --black-color: #000000;
  }

  body{
    all: unset;
    background-color: var(--main-color);
    color: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input {
    border: none;
    background: none;
    font-family: inherit;
    padding: 0;

    &:focus {
      outline: none;
      background: none;
    }
  }

  img {
    vertical-align: top;
  }

  p{
    margin: 0;
    padding: 0;
  }

  button{
    background: none;
    border: none;
    font-family: inherit;
    font-size: inherit;
    cursor: pointer;
  }

  ul, li{
    all: unset;
  }

  .a11y-hidden {
      clip: rect(1px, 1px, 1px, 1px);
      clip-path: inset(50%);
      width: 1px;
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
  }
`;

export default GlobalStyle;