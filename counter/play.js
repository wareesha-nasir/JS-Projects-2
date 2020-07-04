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
    count.animate([{opacity:'0.2'},{opacity:'1'}],{duration:500,fill:'forwards'})
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
    count.animate([{opacity:'0.2'},{opacity:'1'}],{duration:1000,fill:'forwards'})
}