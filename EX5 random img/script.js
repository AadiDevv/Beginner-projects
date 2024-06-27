let imageContainer = document.querySelector('.container')
let button = document.querySelector('.btn');

button.addEventListener('click',()=>{
    addImg();

});

function addImg(){

    const imgNb = 8;
    for(let i = 0 ; i<imgNb ; i++){

        let newImg = document.createElement('img');
        newImg.src = `https://picsum.photos/200?random=
        ${Math.floor(Math.random()*10000)}`
        imageContainer.appendChild(newImg);
    }
 
}