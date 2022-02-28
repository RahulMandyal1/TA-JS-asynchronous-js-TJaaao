let input = document.querySelector('input');
let root = document.querySelector('.image-container');

function createUI(data){
    root.innerHTML = "";
    data.forEach(eachImage=>{
        let image  = document.createElement('img');
        image.src =  eachImage.urls.full;
        root.append(image);
    });
}
input.addEventListener('keyup',(event)=>{
    if(event.keyCode === 13){
        let input = event.target.value;
        console.log(input);

        let xhl = new XMLHttpRequest();
        xhl.open('GET' , `https://api.unsplash.com/search/photos?page=1&query=${event.target.value}&client_id=GS20ECWWxrEdxKk7brL3YHk0SE6e9cuq6e-nzbO-jHM`);
        xhl.send();
        xhl.onload = function(){
           let imageData =JSON.parse(xhl.response);
           createUI(imageData.results);
        }
        input.value = "";
    }
})
// https://api.unsplash.com/search/photos?page=1&query=${event.target.value}?client_id=GS20ECWWxrEdxKk7brL3YHk0SE6e9cuq6e-nzbO-jHM

// GET /collections/