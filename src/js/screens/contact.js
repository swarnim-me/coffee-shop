import contactData from '../../data/contact.json';
import facebookIcon from '../../assets/images/facebook-icon.svg';
import instagramIcon from '../../assets/images/instagram-icon.svg';
import twitterIcon from '../../assets/images/twitter-icon.svg';
import '../../css/contact.css';

const createContact = () => {
    const contactWrapper = document.createElement("div");
    contactWrapper.classList.add("contact-wrapper");

    const contactContentEle = document.createElement("p");
    contactContentEle.classList.add("contact-content");
    contactContentEle.textContent = contactData.content;

    const addressEle = document.createElement("p");
    addressEle.classList.add("contact-address");
    addressEle.textContent = contactData.address;

    const phoneEle = document.createElement("p");
    phoneEle.classList.add("contact-phone");
    phoneEle.textContent = contactData.phone;

    const emailEle = document.createElement("p");
    emailEle.classList.add("contact-email");
    emailEle.textContent = contactData.email;

    const socialMediaWrapper = document.createElement("div");
    socialMediaWrapper.classList.add("social-media-wrapper");

    const facebookLink = document.createElement("a");
    facebookLink.href = contactData.social.facebook;
    const facebookIconEle = document.createElement("img");
    facebookLink.setAttribute("target", "_blank");
    facebookIconEle.src = facebookIcon;
    facebookLink.appendChild(facebookIconEle);

    const instagramLink = document.createElement("a");
    instagramLink.href = contactData.social.instagram;
    instagramLink.setAttribute("target", "_blank");
    const instagramIconEle = document.createElement("img");
    instagramIconEle.src = instagramIcon;
    instagramLink.appendChild(instagramIconEle);

    const twitterLink = document.createElement("a");
    twitterLink.href = contactData.social.twitter;
    const twitterIconEle = document.createElement("img");
    twitterLink.setAttribute("target", "_blank");
    twitterIconEle.src = twitterIcon;
    twitterLink.appendChild(twitterIconEle);


    socialMediaWrapper.append(facebookLink, instagramLink, twitterLink);

    contactWrapper.append(contactContentEle, addressEle, phoneEle, emailEle, socialMediaWrapper);
    return contactWrapper;
}

export default createContact;