const requestURL = "https://gmcrm.github.io/wdd_230/week9/JSON/directory.json";

async function getBusinesses(requestURL) {
    const response = await fetch(requestURL);
    if (response.ok){
        const jsonObject = await response.json();
        console.log(jsonObject);
        businesses = jsonObject;
        businesses.forEach(displayBusinesses);
    }
};

getBusinesses(requestURL)

function displayBusinesses(businesses) {
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let address = document.createElement("p");
    let phoneNumber = document.createElement("p");
    let websiteLink = document.createElement("p");
    let img = document.createElement("img");

    h2.textContent = businesses.company_name;
    address.textContent = businesses.address;
    phoneNumber.textContent = businesses.phone_number;
    websiteLink.textContent = businesses.website_url;
    img.setAttribute("src", businesses.image_path);
    img.setAttribute("alt", businesses.company_name );
    card.appendChild(h2);
    card.appendChild(address);
    card.appendChild(phoneNumber);
    card.appendChild(websiteLink);
    card.appendChild(img);
    document.querySelector(".cards").appendChild(card);


}
