import '../css/home.css';
import Logo from '../assets/images/logo.png';

const createHome = () => {

    // Wrapper
    const homeContent = document.createElement("div");
    homeContent.classList.add("home-content");

    // Logo
    const logoEle = document.createElement("img");
    logoEle.classList.add("logo")
    logoEle.src = Logo;

    // Tagline
    const taglineEle = document.createElement("p");
    taglineEle.textContent = "Good days start with a good ";
    taglineEle.classList.add("tagline")

    // Coffee keyword
    const coffeeWord = document.createElement("span");
    coffeeWord.textContent = "coffee";
    coffeeWord.classList.add("primary");
    taglineEle.appendChild(coffeeWord);

    // Explore Menu Button
    const exploreMenuBtn = document.createElement("button");
    exploreMenuBtn.textContent = "Explore Menu";
    exploreMenuBtn.classList.add("explore-menu-btn");

    // Adding all elements to the wrapper
    homeContent.append(logoEle, taglineEle, exploreMenuBtn);
    return homeContent;
}

export default createHome;