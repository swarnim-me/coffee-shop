import screens from '../common/screenData';

const updateScreen = (screenIndex) => {
    const content = document.querySelector(".content");
    content.innerHTML = "";
    content.appendChild(screens[screenIndex].init());
    document.body.style.backgroundImage = `url(${screens[screenIndex].background})`;
}

export default updateScreen;