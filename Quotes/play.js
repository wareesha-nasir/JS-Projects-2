const b=document.querySelector('.click');
const q=document.querySelector('#quotes');
const a=document.querySelector('#author');
const quotes=[
    {
        name:'Walt disney',
        quote:'The Way Get Started Is To Quit Talking And Begin Doing.'
    },
    {
        name:'Wintson Churchill',
        quote:'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.'
    },
    {
        name:'Will Rogers',
        quote:'Don’t Let Yesterday Take Up Too Much Of Today.'
    },
    {
        name:'Wareesha',
        quote:'You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.'
    },
    {
        name:'Rob sitanen',
        quote:'People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.'
    },
    {
        name:'Maya Angelou',
        quote:'We May Encounter Many Defeats But We Must Not Be Defeated..'
    }

]
b.addEventListener('click',getQuotes)


function getQuotes(){
let ran=Math.floor(Math.random()*quotes.length)
q.innerHTML=quotes[ran].quote;
a.innerHTML=quotes[ran].name;
}