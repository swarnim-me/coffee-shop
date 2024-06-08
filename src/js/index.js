// Screens
import createNav from './common/nav';
import createHome from './screens/home';
import screens from './common/screenData';

// CSS import
import '../css/style.css';

// Initial Background
import homeBackground from '../assets/images/background-home.png';

const content = document.createElement("div");
content.classList.add("content");
content.appendChild(createHome());
document.body.style.backgroundImage = `url(${homeBackground})`;


document.body.appendChild(createNav(screens));
// document.body.appendChild(createHome());
document.body.appendChild(content);