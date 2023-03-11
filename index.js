import dogsData from "./data.js";
import Dog from "./Dog.js";

//use to assign into the data object , dogsData[0] , dogsData[1] , dogsData[2]
let currentDogIndex = 0;
let currentDog = new Dog(dogsData[currentDogIndex]);
let prevntClick = false;

const like = () => {
  if (!prevntClick) {
    prevntClick = true;
    changeLikeBg.style.backgroundColor = "#DBFFF4";

    document.getElementById("main-imgDiv").innerHTML +=
      currentDog.getStatus(true);
    getNewDog();
    console.log("like");
  }
};

const dislike = () => {
  if (!prevntClick) {
    prevntClick = true;
    changeDislikeBg.style.backgroundColor = "#FFE7EF";
    document.getElementById("main-imgDiv").innerHTML +=
      currentDog.getStatus(false);
    getNewDog();
    console.log("dislike");
  }
};

const render = () => {
  console.log("index:" + currentDogIndex + " Dogs length:" + dogsData.length);
  if (currentDogIndex < dogsData.length) {
    document.getElementById("main-imgDiv").innerHTML = currentDog.getDogHtml();
    prevntClick = false;
  } else {
    document.body.innerHTML = `<h1 class="finish">There are no more dogs in your area !!</h1>`;
  }
};

const getNewDog = () => {
  setTimeout(() => {
    currentDogIndex++;
    currentDog = new Dog(dogsData[currentDogIndex]);
    changeLikeBg.style.backgroundColor = "white";
    changeDislikeBg.style.backgroundColor = "white";
    render();
  }, 2000);
};

document.getElementById("action-dislike").addEventListener("click", dislike);

document.getElementById("action-like").addEventListener("click", like);

const changeLikeBg = document.getElementById("action-bg-like");

const changeDislikeBg = document.getElementById("action-bg-dislike");

render();
