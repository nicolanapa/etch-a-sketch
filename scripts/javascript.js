let div = document.createElement('div');

for ( let i = 0; i < 32; i++ ) {
    div = document.createElement("div");
    container.appendChild(div);
    div.classList.add("colored-div", "hover");
    
}
   
/*div.addEventListener("mouseover", function (e) {
    div.style.backgroundColor = "black";
 });*/


let hover = document.querySelectorAll(".hover");
hover.forEach(function (element) {
    element.addEventListener("mouseover", function (e) {
        element.style.backgroundColor = "black";
    });
});
//hover.onmouseover = () => div.cssText = "background-color: black";
//hover.onmouseout = () => div.cssText = "background-color: black";