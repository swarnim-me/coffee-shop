// Screens
import createNav from './common/nav';
import createHome from './screens/home';
import screens from './common/screenData';

// CSS import
import '../css/style.css';

import updateScreen from './utility/screenUpdater';

const content = document.createElement("div");
content.classList.add("content");

document.body.appendChild(createNav(screens));
// document.body.appendChild(createHome());
document.body.appendChild(content);

updateScreen(0);