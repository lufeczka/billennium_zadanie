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
    let nodes_array = []
    for (let i = allTdElements.length - 1; i >= 0; i--){
        if (getComputedStyle(allTdElements[i]).color === getComputedStyle(allTdElements[i]).backgroundColor) {
            allTdElements[i].parentNode.removeChild(allTdElements[i]);
        }  else {
            nodes_array.push(clone_node(allTdElements[i]));
            allTdElements[i].parentNode.removeChild(allTdElements[i]);
        }
        append_to_element_desc(selectedTr, nodes_array);
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

function append_to_element_desc(element, array) {
    for (let i = array.length - 1; i >= 0; i--){
        element.parentNode.append(array[i]);
    }
}

function clone_node(element) {
    let temp_elem = element.cloneNode();
    temp_elem.innerText = element.innerText;
    return temp_elem;
}