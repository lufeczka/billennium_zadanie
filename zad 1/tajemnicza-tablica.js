function odkryj() {
    const allTdElements = document.getElementsByTagName("td");
    let billenium_string = [];
    for (let i = 0; i < allTdElements.length; i++){
        if(getComputedStyle(allTdElements[i]).color === getComputedStyle(allTdElements[i]).backgroundColor) {
            billenium_string += allTdElements[i].innerText;
        }
    }
    change_inner_text("result", billenium_string);
}

function show() {
    const allTdElements = document.getElementsByTagName("td");
    for (let i = 0; i < allTdElements.length; i++){
        if(getComputedStyle(allTdElements[i]).color === getComputedStyle(allTdElements[i]).backgroundColor) {
            allTdElements[i].style.backgroundColor = "black";
            allTdElements[i].style.color = "white";
        } else {
            allTdElements[i].style.backgroundColor = "white";
            allTdElements[i].style.color = "white";
        }
        change_inner_text("result", "")
    }
}

function rearrange() {
    const selectedTr = document.getElementById("wrap")
    const allTdElements = document.getElementsByTagName("td");
    let temp = []
    for (let i = allTdElements.length - 1; i >= 0; i--){
        if (getComputedStyle(allTdElements[i]).color === getComputedStyle(allTdElements[i]).backgroundColor) {
            allTdElements[i].parentNode.removeChild(allTdElements[i]);
        }  else {
            let temp_elem = allTdElements[i].cloneNode();
            temp_elem.innerText = allTdElements[i].innerText;
            temp.push(temp_elem);
            allTdElements[i].parentNode.removeChild(allTdElements[i]);
        }
        for (let i = temp.length - 1; i >= 0; i--){
            selectedTr.parentNode.append(temp[i]);
        }
        disable_buttons();
    }
}

function disable_buttons() {
    document.getElementById("odkryj").disabled = true;
    document.getElementById("show").disabled = true;
}

function change_inner_text(id, value) {
    document.getElementById(id).innerText = value;
}