function AdaptiveMenu() {
    let nav = document.querySelector("#menu");
    if(nav.className === "nav-menu"){
        nav.className += ".responsive"
    }
    else{
        nav.className = "nav-menu"
    }
}

document.querySelector(".nav-menu").addEventListener("click", AdaptiveMenu); 

// carousel

function goRight(){
    document.querySelector(".carousel").scrollLeft += 560;
}

function goLeft(){
    document.querySelector(".carousel").scrollLeft -= 560;
}
// --------------

