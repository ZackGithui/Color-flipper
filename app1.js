const colors=['#2C1608','#082C16','#000602','#1B5231','#16082C','#020006','#311B52','#FFFFFF','#FFFFF0','#FFFFED','#FFFF66','#FFFF31','#FFFF00','#FFFE00','#FFFDD0','#FFFAFA','#FFFAF0','#FFFACD','#FFF8E7','#FFF8DC','#FFF700','#FFE4E1','#FFE4C4','#FFE135','#FFDF00','#FFDEAD','#FFDB58','#FFDAB9','#FFD800','#FFD1DC','#FFCC99','#FFCC33','#FFCC00','#FFCBA4','#FFC87C','#FFC40C','#FFC1CC','#FFC0CB','#FFBF00','#FFBCD9','#FFBA00','#FFB7C5','#FFB6C1','#FFB347','#FFB300','#FFA812','#FFA700','#000080','#000']
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