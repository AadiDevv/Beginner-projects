//other darkMode

const btn = document.querySelector('button');
const body =  document.querySelector('body');
let dark = JSON.parse(localStorage.getItem('mode'));

// Appliquer l'état initial du mode sombre
if (dark) {
    body.style.backgroundColor = 'black';
} else {
    body.style.backgroundColor = 'white';
}

//function  dark mode
  function changeMode(){
      if(dark){
        body.style.backgroundColor = 'white';
        dark = false;
      }else{
        body.style.backgroundColor = 'black';
         dark = true;
      }
  }

btn.addEventListener('click',()=>{
    changeMode();
    save();
  })

//function save to local storage
function save(){
  localStorage.setItem('mode',JSON.stringify(dark));
}
  