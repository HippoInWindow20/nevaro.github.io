var data = [];

function addNewRem() {
    var inputfield = document.getElementById("inputs");
    const para = document.createElement("input");
    const para2 = document.createElement("input");
    para2.type = "checkbox";
    inputfield.appendChild(para2);
    inputfield.appendChild(para);
    para.style.width = "95%";
    const para3 = document.createElement("br");
    inputfield.appendChild(para3);
    relabel();
    data.push(new Reminder());
}

document.getElementById("add").addEventListener("click", addNewRem);
document.getElementById("delete").addEventListener("click", removeArray);

function removeItem(ids) {
    for (var y in ids) {
        document.getElementById("item" + ids[y]).nextSibling.remove();
        document.getElementById("item" + ids[y]).remove();
        document.getElementById("check" + ids[y]).remove();
    }
    relabel();
}

function relabel() {
    var inputfield = document.getElementById("inputs");
    var inputs = 1;
    var checks = 1;
    for (var x in inputfield.childNodes) {
        if (inputfield.childNodes[x].type == "checkbox") {
            inputfield.childNodes[x].id = "check" + (parseInt(checks));
            checks += 1;
        } else if (inputfield.childNodes[x].type == "text") {
            inputfield.childNodes[x].id = "item" + (parseInt(inputs));
            inputs += 1;
        }
    }
}

function removeArray() {
    var inputfield = document.getElementById("inputs");
    var checked = [];
    var totalnotyet = inputfield.childNodes;
    for (var z in totalnotyet) {
        if (totalnotyet[z].type == "checkbox") {
            if (totalnotyet[z].checked) {
                checked.push(totalnotyet[z].id.substring(5));
            }
        }
    }
    console.log(checked);
    removeItem(checked);
}

class Reminder {
    constructor(id, date, location, desc) {
        this.date = date;
        this.location = location;
        this.desc = desc;
    }
}