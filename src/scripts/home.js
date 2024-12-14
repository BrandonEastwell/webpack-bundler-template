import ramenImg from "../assets/ramen.png";
export default function (contentContainer) {
    contentContainer.className = "homeContainer";

    const contentHeader = document.createElement("div");
    let header = document.createElement("h1");
    header.textContent = "Dine With Us.";

    let text = document.createElement("p");
    text.textContent = "London's finest asian cuisine.";

    let button = document.createElement("button");
    button.textContent = "BOOK A TABLE";

    contentHeader.appendChild(header);
    contentHeader.appendChild(text);
    contentHeader.appendChild(button);
    contentContainer.appendChild(contentHeader);

    const contentImage = document.createElement("div");
    let img = document.createElement("img");
    img.src = ramenImg;
    contentImage.appendChild(img);
    contentContainer.appendChild(contentImage);
}