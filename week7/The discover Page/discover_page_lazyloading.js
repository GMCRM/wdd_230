function AdaptiveMenu() {
    let nav = document.querySelector("#menu");
    if (nav.className === "nav-menu") {
        nav.className += ".responsive"
    } else {
        nav.className = "nav-menu"
    }
}

document.querySelector(".nav-menu").addEventListener("click", AdaptiveMenu);


document.getElementById("modify").innerHTML = document.lastModified


let date = document.getElementById("date");
date.innerText = new Date().toLocaleDateString("en-US", {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
})





// lazy loading images

const images = document.querySelectorAll("[data-src]")

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if (!src) {
        return;
    }

    img.src = src;
}

const imgOptions = {
    threshold:0,
    rootMargin: "0px 0px 200px 0px"
};


const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
})