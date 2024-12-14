import ramenImg from "../assets/ramen.png";
export default function (contentContainer) {
    contentContainer.className = "menuContainer";
    const item = [{
        header: "RAMEN BOWL",
        description: "a bowl of ramen",
        image: ramenImg
    }, {
        header: "NOODLE BOWL",
        description: "a bowl of noodle",
        image: ramenImg
    }, {
        header: "NOODLE BOWL",
        description: "a bowl of noodle",
        image: ramenImg
    }]

    for (const itemElement of item) {
        const itemContents = document.createElement("div");
        itemContents.style.flexDirection = "column";
        itemContents.style.alignContent = "flex-start";
        itemContents.style.gridColumn = "1 / 2";

        const itemHeader = document.createElement("h2");
        itemHeader.textContent = itemElement.header;

        const itemDesc = document.createElement("p");
        itemDesc.textContent = itemElement.description;

        itemContents.appendChild(itemHeader);
        itemContents.appendChild(itemDesc);

        const itemImg = document.createElement("div");
        itemImg.style.flexDirection = "row"
        itemImg.style.justifyContent = "start"
        itemImg.style.gridColumn = "2 / 3";
        let img = document.createElement("img");
        img.src = itemElement.image;
        itemImg.appendChild(img);

        contentContainer.appendChild(itemContents);
        contentContainer.appendChild(itemImg);
    }
}