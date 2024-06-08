// Components
import createNav from './nav';
import createHome from './home';

// Background Images
import homeBackground from '../assets/images/background-home.png';
import aboutBackgroud from '../assets/images/background-about.png';
import menuBackground from '../assets/images/background-menu.png';
import contactBackground from '../assets/images/background-contact.png';

// CSS import
import '../css/style.css';

const navTitles = ['Home', 'Menu', 'About'];

document.body.appendChild(createNav(navTitles));
document.body.appendChild(createHome());
console.log(homeBackground);
document.body.style.backgroundImage = `url(${homeBackground})`;