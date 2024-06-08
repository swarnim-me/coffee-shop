// Screen
import createMenu from '../screens/menu';
import createHome from '../screens/home';
import createAbout from '../screens/about';
import createContact from '../screens/contact';

// Background Images
import homeBackground from '../../assets/images/background-home.png';
import aboutBackgroud from '../../assets/images/background-about.png';
import menuBackground from '../../assets/images/background-menu.png';
import contactBackground from '../../assets/images/background-contact.png';

// CSS import
import '../../css/style.css';

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

export default screens;