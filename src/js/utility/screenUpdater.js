import screens from '../common/screenData';

const colorNavItem = (itemIndex) => {
    const navItems = Array.from(document.querySelectorAll(".nav-item"));
    console.log(navItems);
    navItems.forEach((navItem, index) => {
        if (index === Number(itemIndex)) navItem.classList.add("primary");
        else navItem.classList.remove("primary");
    })
}

const updateScreen = (screenIndex) => {
    const content = document.querySelector(".content");
    content.innerHTML = "";
    content.appendChild(screens[screenIndex].init());
    document.body.style.backgroundImage = `url(${screens[screenIndex].background})`;
    colorNavItem(screenIndex);
}

export default updateScreen;