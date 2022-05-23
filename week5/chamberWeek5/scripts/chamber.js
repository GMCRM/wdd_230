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


document.getElementById("modify").innerHTML = document.lastModified
