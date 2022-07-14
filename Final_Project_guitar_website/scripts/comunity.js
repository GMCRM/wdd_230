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

// like button local storage code

window.addEventListener('load', () => {
    let likeBtns = document.querySelectorAll('button.like-button');
    for (let i = 0; i < likeBtns.length; i++) {
        loadLike(likeBtns[i].getAttribute('data-postID'), likeBtns[i]);
    }
});

function loadLike(postID, button) {
    let likeKey = 'like-' + postID;
    if(localStorage.getItem(likeKey)=="1") {
        button.innerText = "Unlike";
    } else {
        button.innerText = "Like";
    }
}

function like(postID, button){
    let likeKey = 'like-' + postID;
    if(localStorage.getItem(likeKey)=="1") {
        button.innerText="Like";
        localStorage.setItem(likeKey, "0");
    }else{
        button.innerText="Unlike";
        localStorage.setItem(likeKey, "1");
    }
}


// local storage code comment section
let commentData = JSON.parse(localStorage.getItem("comments"));

if (commentData !== null) {
    for (let i = 0; i < commentData.length; i++) {
        createComment(commentData[i].postID, commentData[i].value);
    }
} else {
    commentData = [];
}

function postComment(postID) {
    let value = document.getElementById('comment-box-' + postID).value;
    commentData.push({postID: postID, value: value});
    createComment(postID, value);
    localStorage.setItem("comments", JSON.stringify(commentData));
}

function createComment(postID, value) {
    let content = document.createElement('p'),
        container = document.getElementById('comment-container-' + postID);
        content.classList.add("comment-css")    
        content.innerText = value;
    container.appendChild(content);
}