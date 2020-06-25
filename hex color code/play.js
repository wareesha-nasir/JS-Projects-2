const hexcolor=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const btn=document.querySelector('.click-btn');
let body=document.querySelector('body');
let hex=document.querySelector('.hex');
btn.addEventListener('click',hexCode);

function hexCode(){
    let a='#';
    for(let i=0;i<6;i++){
        let ran=Math.floor(Math.random()*hexcolor.length)
        a+=hexcolor[ran]
    }
    body.style.backgroundColor=a;
    hex.innerHTML=a;
}