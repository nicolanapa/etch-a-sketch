let div = document.createElement('div');
for ( let i = 0; i < 32; i++ ) {
    div = document.createElement("div");
    div.style.cssText = "display: flex; background-color: white; border: 1px solid grey;";
    container.appendChild(div);
}