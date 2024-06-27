const textAreaEl = document.querySelector('.textarea');
const totalCounter = document.querySelector('.total-counter');
const totalRemaning = document.querySelector('.total-remaning');


textAreaEl.addEventListener('keyup',(e)=>{
    updateText();
    
})

function updateText() {
    let textLenght =  textAreaEl.value.length;
    let textRemaning = textAreaEl.maxLength  - textLenght;

    totalCounter.textContent = textLenght;
    totalRemaning.textContent = textRemaning;
}