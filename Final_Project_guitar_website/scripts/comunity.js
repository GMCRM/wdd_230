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
function goRight2(){
    document.querySelector(".carousel2").scrollLeft += 560;
}

function goLeft2(){
    document.querySelector(".carousel2").scrollLeft -= 560;
}
function goRight3(){
    document.querySelector(".carousel3").scrollLeft += 560;
}

function goLeft3(){
    document.querySelector(".carousel3").scrollLeft -= 560;
}
// --------------

function showVideos(group){
     let genres = document.getElementById("genres");
     for(let i = 0; i < genres.childElementCount; i++ ){
         genres.children[i].classList.add("hidden");
     }
     document.getElementById(group).classList.remove("hidden");
}



function like(button){
    if(localStorage.getItem(button.name)=="1"){
        button.innerText="Like";
        localStorage.setItem(button.name, "0");
    
    }
    else{
        button.innerText="Unlike";
        localStorage.setItem(button.name, "1");
    }
}