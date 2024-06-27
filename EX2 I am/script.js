let slogan = document.querySelector('.container');

let iAm = ['Student','Web Developer','Muslim','Hard Worker','Aaditya'];

let iAmIndex = 0;
let characterIndex = 0;

function displaySlogan (){

    
    if(characterIndex < iAm[iAmIndex].length){

        slogan.innerHTML = `I am ${iAm[iAmIndex][0] === 'A'? '':'a'} ${iAm[iAmIndex].slice(0,characterIndex+1)}`;

        //afficher les caractères sans délai supplémentaire lorsqu'il y a un espace
        do{
            characterIndex++;
        }while(iAm[iAmIndex][characterIndex] === ' ');

        setTimeout(displaySlogan,300);
    }
    

    else{
            iAmIndex++;
            //fin de array
            if(iAm.length == iAmIndex){
                iAmIndex = 0;
            }
            characterIndex = 0;
            //delai entre chaques mots
        setTimeout(displaySlogan,700);
    }

    
  
        
 
   

}

displaySlogan();