//variables and the date object

let date = new Date();
console.log(date);

let year = date.getFullYear();
console.log()

//selecting element in HTML and DOM manipulation

document.querySelector("h1").textContent = year;

document.querySelector("div").innerHTML = "<h2>Subtitle</h2>";


let newpara = document.createElement("p");
newpara.textContent = "This is my paragraph";
document.querySelector("div").appendChild(newpara);

document.querySelector("img").setAttribute("src", "images/matai.jpg")

document.querySelector("img").classList.add

//function

function addayear(yr) {
    console.log("yr");

}

addayear();


// selection

// if clause

if(year == 2022) {
    console.log("current year")
}

//repitition (loops)

const myarray = ["CSE121b", "WDD230", "CIT111"];

function makelist(item) {
    document.querySelector("div").innerHTML += "<li>" + item + "</li>"
}

myarray.forEach(makelist);

// Week 1 important to know

//last modified property

let currentdate = document.lastModified;


document.querySelector("span").textContent = currentdate;
console.log(currentdate);