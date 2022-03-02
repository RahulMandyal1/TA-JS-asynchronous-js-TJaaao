// root element in which we are going to append  the data
let root = document.querySelector(".news-wrapper");

//to show the error on the screen 

let showError = document.querySelector('.getError');
let loadIndicator  =document.querySelector('.lds-roller');

// we have to filter the data according to the  news website as selected by the user
let userOption = document.querySelector("select");
let userInput = "SpaceNews";
userOption.addEventListener("change", (event) => {
  userInput = event.target.value;
  root.innerHTML = "";
  //    calling  the function again if any  change is made  then it will again make  the ui
  gettingData();
});

// making the spinner  load  by default it always  load 
loadIndicator.style.display = "block";

// Creating a function that will get the data from the api and pass that data inside  the
// createUi function  so it will create the data
function gettingData() {
  return fetch("https://api.spaceflightnewsapi.net/v3/articles?_limit=30")
    .then((res) => {
      if(!res.ok){ 
        throw new Error('404 Error content not found check  the url');
      }
      if(navigator.onLine === false){
        throw new Error ('Your system is offline connect it to a network');
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      if(Array.isArray(data)){
        createUi(data);
      }
    })
    .catch((err) => {
      showError.innerText = err ; 
      console.error(err);
    })
    .finally((data)=>{
      // when there is data or any error it stops loading
      loadIndicator.style.display = "none";
    });
}
// calling the function once so it will create  the  get data from the api and make the ui
gettingData();

// this function will make the user interface for this  project
function createUi(data) {
  // filtering the data here according to the user input
  data.filter((eachNews) => {
    if (userInput === eachNews.newsSite) {
      let newsCard = document.createElement("div");
      newsCard.classList.add("news-card");
      let figure = document.createElement("figure");
      let image = document.createElement("img");
      image.src = eachNews.imageUrl;
      figure.append(image);
      let postInfo = document.createElement("div");
      postInfo.classList.add("post-info");
      let postCategory = document.createElement("div");
      postCategory.innerText = userInput;
      postCategory.classList.add("post-category");
      let title = document.createElement("h2");
      title.innerText = eachNews.title;
      let btn = document.createElement("a");
      btn.href = eachNews.url;
      btn.innerText = "Read More";
      figure.append(image);
      postInfo.append(postCategory, title, btn);
      newsCard.append(figure, postInfo);
      root.append(newsCard);
    }
  });
}
