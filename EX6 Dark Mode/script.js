let input = document.querySelector('input');
let body  = document.querySelector('body');

                //get form local storage
input.checked =  JSON.parse(localStorage.getItem("mode")) ;

function darkMode(){

    if(input.checked ){
        body.style.backgroundColor = 'black';
    }
    else{
        body.style.backgroundColor = 'white';
    }
}
darkMode();

//event
input.addEventListener('click',(event)=>{
    darkMode();
    saveMode()
})

//save mode t local storage
function saveMode(){
    localStorage.setItem("mode", JSON.stringify(input.checked))
}