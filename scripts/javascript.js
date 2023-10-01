let div = document.createElement('div');
div.classList.add("colored-div");
for ( let i = 0; i < 32; i++ ) {
    div = document.createElement("div");
    div.classList.add("colored-div");
    container.appendChild(div);
}

//let hover = document.querySelector(".colored-div");
//hover.onmouseover = () => div.cssText = "background-color: black";
//hover.onmouseout = () => div.cssText = "background-color: black";