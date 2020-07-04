const add=document.querySelector("#addcounter");
const lower=document.querySelector('#lowercounter');
const count=document.querySelector('.counter');

let counter=0;

add.addEventListener('click',addCounter);
lower.addEventListener('click',lowerCounter);


function addCounter(){
    counter++;
    count.innerHTML=counter;
    if(count.innerHTML>'0'){
        count.style.color='green'
    }
    else if(count.innerHTML==='0'){
        count.style.color='white';
    }
}


function lowerCounter(){
    counter--;
    count.innerHTML=counter;
    if(count.innerHTML<'0'){
        count.style.color='red' 
    }
    else if(count.innerHTML==='0'){
        count.style.color='white'
    }
}