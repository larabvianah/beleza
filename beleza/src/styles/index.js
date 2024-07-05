import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
    },
    h1 {
        font-size: 2em;
    },
    h2 {
        font-size: 1.5em;
    },
    h3 {
        font-size: 1.17em;
    },
    h4 {
        font-size: 1em;
    },
    h5 {
        font-size: .83em;
    },
    h6 {
        font-size: .67em;
    },
    a {
        text-decoration: none;
        color: inherit;
    },
    ul {
        list-style-type: none;
        padding: 0;
    },
    li {
        padding: 0;
    },
    img {
        width: 100%;
    },
    button {
        border: none;
        background-color: transparent;
        cursor: pointer;
    },
    input {
        border: none;
    },
    textarea {
        border: none;
    },
    select {
        border: none;
    },
    option {
        border: none;
    },
    p {
        margin: 0;
    },
`;

export default GlobalStyle;