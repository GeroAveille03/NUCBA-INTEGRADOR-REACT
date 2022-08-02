import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;400;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

    :root {
    --bordo-bg: #aa0000;
    --red-union: rgba(218, 37, 29, 1);
    --dark-red-union:rgba(201,0,0,1);
    --blue-union: #02437c;
    --gray-union: rgb(145, 145, 145);
    --white-union:#ffff;
    --btn-gradient: linear-gradient(83deg, rgb(145, 145, 145);, #ffff;);
  }

    html{
    scroll-behavior: smooth;
    }

    body {
    margin: 0;
    padding: 0;
    background: var(--bordo-bg);
    font-family: 'Oswald', sans-serif;
    color: white;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden
    }

    a {
    text-decoration: none;
    }

    a:visited {
    color: white;
    }

    li {
    list-style: none;
    }

`;
