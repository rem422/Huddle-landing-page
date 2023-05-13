import { createGlobalStyle } from "styled-components";

// Typography
import "@fontsource/poppins";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";

const GlobalStyles = createGlobalStyle`

:root {
    --black: #111;
    --white: #fff;
    --btnColor: #FF9BDB;
    --textColor: #9a9b9d;
    --heroBg: #a6def5;
    --footerBg: #00252E;
    --box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    --font-poppins: 'Poppins', sans-serif;
    --transition: all .3s ease;
}

*,
*::after,
*::before {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}

body {
    font-family: var(--font-poppins);
	overflow-x: hidden;
	scroll-behavior: smooth;
}

a {
    text-decoration: none;
}

h1, h2, h3, h4, h5{
    color: var()--footerBg;
    font-family: var(--font-poppins);
    font-weight: 600;
}

ul,
ol,
li {
    list-style: none;
}

p {
    color: var(--textColor);
}

button {
    font-weight: 600;
    border: none;
    border-radius: 20px;
    padding: .8rem 3rem;
    cursor: pointer;
}

button.pink {
    color: var(--white);
    background-color: var(--btnColor);
    box-shadow: var(--box-shadow);
    transition: var(--transition);
}

button.pink:hover {
    color: var(--footerBg);
    background-color: var(--white);
}

button.white {
    color: var(--footerBg);
    background-color: var(--white);
    box-shadow: var(--box-shadow);
    transition: var(--transition);
}

button.white:hover {
    color: var(--white);
    background-color: var(--btnColor);
}

.wrapper {
    width: 90%;
    margin: auto;
    flex-wrap: wrap;
}

.logo {
    width: 140px;
}



@media only screen and (max-width:1280px) {
    .wrapper {
        width: 90%;
    }
}

@media only screen and (max-width:500px) {
.logo {
    width: 120px;
}

button {
    font-weight: 600;
    border: none;
    border-radius: 20px;
    padding: .6rem 1.8rem;
    cursor: pointer;
}
}



`
export default GlobalStyles;