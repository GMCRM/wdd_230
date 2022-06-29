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


let date = document.getElementById("date");
date.innerText = new Date().toLocaleDateString("en-US", {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })



// API JS
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=4379644&appid=da1c6ca84b3935dbb55fe9ef4e11871f";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    let temp = (jsObject.main.temp - 273.15) * 1.8 + 32;
    document.querySelector('#current-temp').textContent = temp.toFixed(2);

    let windspeed = jsObject.wind.speed;
    document.querySelector('#windSpeed').textContent = windspeed;

    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    // document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;


    if (temp <= 50 && windspeed > 3.0) {
    let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));
    document.querySelector('#windchill').textContent = chill + ' °F';
  }
  });




// lazy loading images

  const images = document.querySelectorAll("[data-src]")


function preloadImage(img){
  const src = img.getAttribute("data-scr");
  if(!src) {
    return;
  }

  img.src = src;
}

const imgOptions = {
  threshold:0, 
  rootMargin: "0px 0px 300px 0px"
};


  const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
      if(!entry.isIntersectiing) {
        return;
      } else{
        preloadImage(entry.target);
        imgObserver.unobserve(entry.target);
      }
    })
  }, imgOptions);

  images.forEach(image => {
    imgObserver.observe(image);
  })