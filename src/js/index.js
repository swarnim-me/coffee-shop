// Screens
import createNav from './nav';
import createHome from './home';
import createMenu from './menu';
import createAbout from './about';
import createContact from './contact';

// Background Images
import homeBackground from '../assets/images/background-home.png';
import aboutBackgroud from '../assets/images/background-about.png';
import menuBackground from '../assets/images/background-menu.png';
import contactBackground from '../assets/images/background-contact.png';

// CSS import
import '../css/style.css';

const screens = [
    {
        title: "Home",
        background: homeBackground,
        init: createHome,
    },
    {
        title: "Menu",
        background: menuBackground,
        init: createMenu,
    },
    {
        title: "About",
        background: aboutBackgroud,
        init: createAbout
    },
    {
        title: "Contact",
        background: contactBackground,
        init: createContact
    }
]

const content = document.createElement("div");
content.classList.add("content");
content.appendChild(createHome());
document.body.style.backgroundImage = `url(${homeBackground})`;

const updateScreen = (event) => {
    console.log(event.target.dataset.index);
    content.innerHTML = "";
    console.log(screens[event.target.dataset.index].init());
    content.appendChild(screens[event.target.dataset.index].init());
    document.body.style.backgroundImage = `url(${screens[event.target.dataset.index].background})`;
}

document.body.appendChild(createNav(screens, updateScreen));
// document.body.appendChild(createHome());
document.body.appendChild(content);
