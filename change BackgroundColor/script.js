const clickbtn=document.querySelector('.click-btn');
const body=document.querySelector('body');
const colors=['yellow','red','cyan','purple','magenta','green',
'#8b0a50','#3b5998','orange','indigo','chocolate','coral','crimson']
clickbtn.addEventListener('click',changecolor);
function changecolor(){
var ran=Math.floor(Math.random()*colors.length);
body.style.backgroundColor=colors[ran];
}
