import '../css/nav.css';

const createNav = (navTitles) => {
    // Wrapper
    const navItems = document.createElement("ul");
    navItems.classList.add("nav-items");
    console.log(navTitles);
    // Nav links
    navTitles.forEach(navTitle => {
        const navItemEle = document.createElement("li");
        navItemEle.classList.add("nav-item");
        navItemEle.textContent = navTitle;
        navItemEle.addEventListener("click", () => console.log(navItemEle));
        navItems.appendChild(navItemEle);
    })

    return navItems;
}

export default createNav;