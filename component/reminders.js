function addNewRem (){
    var inputfield = document.getElementById("inputs");
    var inputAmount = inputfield.childNodes.length;
    const para = document.createElement("input");
    const para2 = document.createElement("input");
    para2.type = "checkbox";
    inputfield.appendChild(para2);
    inputfield.appendChild(para);
    para.id = "item" + inputAmount;
    para.style.width = "95%";
    inputfield.innerHTML += "<br>";
}

document.getElementById("add").addEventListener("click",addNewRem);

function removeItem(id){
    var inputfield = document.getElementById("inputs");
    document.getElementById("item"+id).remove();
    for (var x in inputfield.childNodes){
        inputfield.childNodes[x].id = "item" + (parseInt(x));
    }
}
