
  // const body = document.querySelector('body');

  
  // const handleMouseMove = createHeartFuction((event) => {
  // const yPos = event.offsetY;
  // const xPos = event.offsetX;
  // const span = document.createElement('span');
  // const size = Math.random() * 100;
  // span.style.top = yPos + "px";
  // span.style.left = xPos + "px";
  // span.style.width = size + 'px';
  // span.style.height = size + 'px';
  // span.style.position = 'absolute'; // Assurez-vous que le span est positionné correctement
  // span.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Ajoutez une couleur de fond pour le rendre visible
  // body.append(span);
  // setTimeout(() => {
  // span.remove()
  // }, 3000);
  // }, 50); // Limite à une exécution toutes les 100ms

  // //Throttle
  // function createHeartFuction(cb, delay){
  //   let shouldWait = false
  //   let waitingArgs;

  //   return(...args)=>{

  //     if(shouldWait) return
 
  //     cb(...args);
  //     shouldWait = true;

  //     setTimeout(()=>{
  //       shouldWait = false
  //     },delay);

  //   }
  // }
  
  // body.addEventListener('mousemove', handleMouseMove);  
  
  
  
// 2
  const body = document.querySelector('body');

  // Throttle function
  function createHeartFunction(cb, delay) {
    let shouldWait = false;
    let waitingArgs = null;
  
    const timeoutFunc = () => {
      if (waitingArgs === null) {
        shouldWait = false;
      } else {
        cb(...waitingArgs);
        waitingArgs = null;
        setTimeout(timeoutFunc, delay);
      }
    };
  
    return (...args) => {
      if (shouldWait) {
        waitingArgs = args;
        return;
      }
  
      cb(...args);
      shouldWait = true;
      setTimeout(timeoutFunc, delay);
    };
  }

//   // DASH OF HEARTS !!!
//   // Throttle function
// function createHeartFunction(cb, delay) {
//   let shouldWait = false;
//   let waitingEvents = [];

//   const timeoutFunc = () => {
//     if (waitingEvents.length === 0) {
//       shouldWait = false;
//     } else {
//       for (const event of waitingEvents) {
//         cb(event);
//       }
//       waitingEvents = [];
//       setTimeout(timeoutFunc, delay);
//     }
//   };

//   return (event) => {
//     waitingEvents.push(event);
//     if (!shouldWait) {
//       shouldWait = true;
//       setTimeout(timeoutFunc, delay);
//     }
//   };
// }
  
  

  // Heart creation function
  const handleMouseMove = createHeartFunction((event) => {
    const yPos = event.clientY; // Use clientY for correct positioning
    const xPos = event.clientX; // Use clientX for correct positioning
    const span = document.createElement('span');
    const size = Math.random() * 100;
    span.style.top = yPos + "px";
    span.style.left = xPos + "px";
    span.style.width = size + 'px';
    span.style.height = size + 'px';
    span.style.position = 'absolute';
    span.style.pointerEvents = 'none'; // Prevent it from blocking mouse events
    body.append(span);
    setTimeout(() => {
      span.remove();
    }, 3000);
  }, 35); // Limit to one execution every 100ms
  
  body.addEventListener('mousemove', handleMouseMove);