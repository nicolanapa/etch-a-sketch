let div = document.createElement('div');
let popup = document.querySelector("#popup");
let touched = false;
popup.addEventListener("click", () => {
    if (touched == true) {
        location.reload();
    }
    touched = true;
    let pronto = prompt("Please enter how much grid size you want", "16");
    
    if ( pronto > 500 ) {
        return alert("Can't output more than 500*500 grids!");
    }
    if ( pronto < 0 ) {
        return alert("Can't output negative numbers!");
    }
    let ii = pronto;
    ii = ii * ii;
    for ( let i = 0; i < ii; i++ ) {
    div = document.createElement("div");
    container.appendChild(div);
    div.classList.add("colored-div", "hover"); 
    }
    let hover = document.querySelectorAll(".hover");
    hover.forEach(function (element) {
    element.addEventListener("mouseover", function (e) {
        element.style.backgroundColor = "black";
        pronto = parseInt(pronto);
    });
});
});


   
/*div.addEventListener("mouseover", function (e) {
    div.style.backgroundColor = "black";
 });*/
//hover.onmouseover = () => div.cssText = "background-color: black";
//hover.onmouseout = () => div.cssText = "background-color: black";
