let rootEle = document.querySelector("ul");
let inputBox = document.querySelector(".userinput");
let baseUrl = 'https://sleepy-falls-37563.herokuapp.com/api/todo';

function createUi() {
  let li = document.createElement("li");
  let input = document.createElement("input");
  input.type = "checkbox";
  let p = document.createElement("p");
  // p.innerText = todo.name;
  let span = document.createElement("span");
  span.innerHTML = ` <i class="fas fa-window-close close-btn"></i>`;
  li.append(input, p, span);
  rootEle.append(li);
  return rootEle;
}
createUi();
createUi();
// Adding a event listner keyup so and it will give us the value of the userinput only if
// user has pressed enter (keyCode of enter  is 13).
inputBox.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    console.log(e.target.value);
  }
});

// Now add some content on the api 


// fetch('https://sleepy-falls-37563.herokuapp.com/api/todo', {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data) // body data type must match "Content-Type" header
//   }).then((data)=>console.log(data)).catch((err)=>console.log(err));

//   fetch(baseUrl).then((res)=> res.json()).then((data)=>{
//       console.log(data);
//   }).catch((err)=>{
//       console.log(err);
//   })

let data = {
    todo: {
      title: 'Play football',
      isCompleted: false,
    },
  };
fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });