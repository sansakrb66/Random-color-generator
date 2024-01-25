let btn=document.querySelector("button");
btn.addEventListener("click",function(){

    let h3=document.querySelector("h3")
    let c=randomColor();
    h3.innerText=c;
    let div=document.querySelector("div");
    div.style.backgroundColor=c;

});

function randomColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);

    let color=`rgb(${red}, ${green}, ${blue})`
    return color;
    
}