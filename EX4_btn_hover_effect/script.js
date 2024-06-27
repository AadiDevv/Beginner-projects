let button = document.querySelector('.btn');

button.addEventListener('mouseover',(event)=>{
    let x = event.offsetX;
    let y = event.offsetY;
    // let x = event.pageX - button.offsetLeft;
    // let y =event.pageY - button.offsetTop;

    button.style.setProperty('--xPos', x + 'px');
    button.style.setProperty('--yPos', y + 'px');
    
})