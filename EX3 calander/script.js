let monthEL = document.querySelector('.month-name');
let dayNameEL = document.querySelector('.day-name');
let dayNumberEL = document.querySelector('.day-number');
let yearEl = document.querySelector('.year-number');

const date = new Date();

monthEL.textContent = date.toLocaleString('en',{
    month : 'long'
})

dayNameEL.textContent = date.toLocaleString('en',{
    weekday : 'long'
})
dayNumberEL.textContent = date.getDate();
yearEl.textContent = date.getFullYear();