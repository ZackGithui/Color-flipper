const colors=['purple', 'pink','#18b2de','#fb37ff'];
const btn=document.getElementById("btn");
const color=document.querySelector(".color");

btn.addEventListener('click', function()
{
    const randomNumber=getNumber();
    
    console.log(randomNumber);
    document.body.style.backgroundColor= colors[randomNumber];
    color.textContent=colors[randomNumber];
}

);
function getNumber(){
    return Math.floor(Math.random()*colors.length);
};