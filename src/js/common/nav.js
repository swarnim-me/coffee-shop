import '../../css/nav.css';
import updateScreen from '../utility/screenUpdater';

const createNav = (screens) => {
    // Wrapper
    const navItems = document.createElement("ul");
    navItems.classList.add("nav-items");
    // Nav links
    screens.forEach((screen, index) => {
        const navItemEle = document.createElement("li");
        navItemEle.classList.add("nav-item");
        navItemEle.setAttribute("data-index", index);
        navItemEle.textContent = screen.title;
        navItemEle.addEventListener("click", (event) => {
            updateScreen(event.target.dataset.index);
        });
        navItems.appendChild(navItemEle);
    })

    return navItems;
}

export default createNav;