// Task One gets Completed : ## XMLHttpRequest + Promise

function myFetch(keyWordImages) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();

    xhr.open(
      "GET",
      `https://api.unsplash.com/search/photos?page=1&query=${keyWordImages}&client_id=GS20ECWWxrEdxKk7brL3YHk0SE6e9cuq6e-nzbO-jHM`
    );
    xhr.send();
    xhr.onload = () => {
       return resolve(JSON.parse(xhr.response));
    };

    xhr.onerror = (err) => {
      return  reject(err);
    };
  });
}

let test= myFetch("Mountain")
  .then((data) => {
    console.log(data);
    return data.results;
  })
  .catch((data) => {
    return data;
  });

//task two refactor  the previous code of  the image search app

let input = document.querySelector("input");
let root = document.querySelector(".image-container");

function createUI(data) {
  root.innerHTML = "";
  data.forEach((eachImage) => {
    let image = document.createElement("img");
    image.src = eachImage.urls.full;
    root.append(image);
  });
}
input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    let input = event.target.value;
    console.log(input);
    let data = myFetch(event.target.value).then((data) =>{
        createUI(data.results);
    });
    console.log(`Data we have ${data.results}`)
    input.value = "";
  }
});
