let followerContainer = document.querySelector(".followers-container");
let followingContainer = document.querySelector(".following-container");
let userProfile = document.querySelector(".userprofile");
let userName = document.querySelector(".username");
let input = document.querySelector("input");
let catImage = document.querySelector(".cat-image");
let btn = document.querySelector("button");
// followersData, followingData
function createUi(userImage, username) {
  userProfile.src = userImage;
  userName.innerText = username;
}
function createFollowers(followersData) {
  followerContainer.innerHTML = "";
  for (let i = 0; i <= 4; i++) {
    let followerImage = document.createElement("img");
    followerImage.alt = "Follower-image";
    followerImage.src = followersData[i].avatar_url;
    followerContainer.append(followerImage);
  }
}

function createFollowing(followingData) {
  followingContainer.innerHTML = "";
  for (let i = 0; i <= 4; i++) {
    let followingImage = document.createElement("img");
    followingImage.alt = "Follower-image";
    followingImage.src = followingData[i].avatar_url;
    followingContainer.append(followingImage);
  }
}
//sending a  web request  and getting the data

//When  the user enter a github username then
input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.github.com/users/${event.target.value}`);
    xhr.send();

    xhr.onload = () => {
      let userData = JSON.parse(xhr.response);
      createUi(userData.avatar_url, userData.name);
      console.log(userData);
    };

    let followingData = new XMLHttpRequest();
    followingData.open(
      "GET",
      `https://api.github.com/users/${event.target.value}/following`
    );
    followingData.send();
    followingData.onload = () => {
      let following = JSON.parse(followingData.response);
      createFollowing(following);
    };

    let followersData = new XMLHttpRequest();
    followersData.open(
      "GET",
      `https://api.github.com/users/${event.target.value}/followers`
    );
    followersData.send();
    followersData.onload = () => {
      let followers = JSON.parse(followersData.response);
      createFollowers(followers);
    };
  }
});

//Access key
// GS20ECWWxrEdxKk7brL3YHk0SE6e9cuq6e-nzbO-jHM
// Secreate key
// bKXBr3AFIZRaiNUSxBGvsqqYwI35oPGsMuEuUYpvSyU

// Random cat Picture generator
btn.addEventListener("click", function () {
  let cat = new XMLHttpRequest();
  cat.open(
    "GET",
    "https://api.thecatapi.com/v1/images/search?limit=1&size=full"
  );
  cat.send();
  cat.onload = () => {
    let catData = JSON.parse(cat.response);
    catData.forEach((eachcat) => {
      catImage.src = eachcat.url;
    });
    console.log(catData);
  };
});
