import menuData from '../data/menu.json';
import '../css/menu.css';

const createMenu = () => {
    const menuWrapperEle = document.createElement("div");
    menuWrapperEle.classList.add("menu-wrapper");

    menuData.forEach(menuItem => {
        const menuItemEle = document.createElement("div");
        menuItemEle.classList.add("menu-item");

        const menuItemTitleWrapper = document.createElement("p");
        menuItemTitleWrapper.classList.add("menu-item-title-wrapper");

        const menuItemTitleEle = document.createElement("p");
        menuItemTitleEle.classList.add("menu-item-title");
        menuItemTitleEle.textContent = menuItem.title;

        const menuItemPriceEle = document.createElement("p");
        menuItemPriceEle.classList.add("menu-item-price");
        menuItemPriceEle.textContent = "$ " + String(menuItem.price);

        const menuItemDescriptionEle = document.createElement("p");
        menuItemDescriptionEle.classList.add("menu-item-description");
        menuItemDescriptionEle.textContent = menuItem.description;

        menuItemTitleWrapper.append(menuItemTitleEle, menuItemPriceEle);
        menuItemEle.append(menuItemTitleWrapper, menuItemDescriptionEle);
        menuWrapperEle.appendChild(menuItemEle);
    })
    return menuWrapperEle;
}

export default createMenu;