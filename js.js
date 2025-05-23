

const btn = document.querySelector('.btn');
const quote = document.querySelector('.quote');
const name = document.querySelector('.writer-name');


const obj = [{
    quote: "Be Happy Be Bright Be You."
    , name: "Kate Spade"
}, {
    quote: "Dreams don't work unless you do.",
    name: "John C Maxwell"
}, {
    quote: "Happiness is not something readymade;it comes from your own actions.",
    name: "Dalal Lama"
},
{
    quote: "Risking is better than Regretting.",
    name: "BosseBabe"
},
{
    quote: "Kill them with success and Bury then with smile.",
    name: "Coco Chanel"
}];

btn.addEventListener("click", () => {
    let random = Math.floor(Math.random() * obj.length);
    quote.innerText = obj[random].quote;
    name.innerText = obj[random].name;
})
