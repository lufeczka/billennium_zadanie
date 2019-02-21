function odkryj() {
    const allTdElements = document.getElementsByTagName("td");
    let billenium_string = [];
    for (let i = 0; i < allTdElements.length; i++){
        if(getComputedStyle(allTdElements[i]).color === getComputedStyle(allTdElements[i]).backgroundColor) {
            billenium_string += allTdElements[i].innerText;
        }
    }
    document.getElementById("result").innerText = billenium_string;
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
        document.getElementById("result").innerText = "";
    }
}

function rearrange() {
    const selectedTr = document.getElementById("wrap")
    const allTdElements = document.getElementsByTagName("td");
    let temp = []
    for (let i = allTdElements.length - 1; i >= 0; i--){
        if(getComputedStyle(allTdElements[i]).color === getComputedStyle(allTdElements[i]).backgroundColor) {
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
        document.getElementById("odkryj").disabled = true;
        document.getElementById("show").disabled = true;
    }
}
