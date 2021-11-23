var x = document.querySelector("#inputs");
var y = x.value;
var del = document.querySelector("#delete");
var paragr = document.querySelector("#outCon");

x.addEventListener("keyup", function(event){
  if (event.keyCode === 13) {
    var y = "-" + x.value;
    console.log(y);
    var node = document.createElement("p");
    var textnode = document.createTextNode(y);
    node.appendChild(textnode);
    node.classList.add("myStyle");
    node.setAttribute("onclick", "myFunction(event)")
    document.querySelector("#outCon").appendChild(node);
  }
});

del.addEventListener("click", () => {
    paragr.removeChild(paragr.lastChild);
    console.log(paragr)
  // const children = par.childNodes;
  // children.forEach(p => {
  // console.log(p.innerText);
  // })
  });

function myFunction(e){
  if (e.target.style.textDecoration == "none"){
  e.target.style.textDecoration = "line-through";
  } else {
  e.target.style.textDecoration = "none";
  }
}
