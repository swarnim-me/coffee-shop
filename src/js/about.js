import '../css/about.css';
import aboutData from '../data/about.json';

const createAbout = () => {
    const aboutWrapperEle = document.createElement("div");
    aboutWrapperEle.classList.add("about-wrapper");
    aboutData.forEach(section => {
        const aboutItem = document.createElement("div");
        aboutItem.classList.add("about-item");

        const aboutItemTitle = document.createElement("p");
        aboutItemTitle.classList.add("about-item-title");
        aboutItemTitle.textContent = section.title;

        const aboutItemDescription = document.createElement("p");
        aboutItemDescription.classList.add("about-item-description");
        aboutItemDescription.textContent = section.description;

        aboutItem.append(aboutItemTitle, aboutItemDescription);

        aboutWrapperEle.append(aboutItem);
    })
    return aboutWrapperEle;
}

export default createAbout;