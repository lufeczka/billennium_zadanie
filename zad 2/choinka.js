function generate_tree() {
    document.getElementById("tree").innerHTML = "";
    const levels = document.getElementById("levels").value;
    const cap = document.getElementById("cap").value;
    let counter = 0;
    for (let i = 0; i < Math.ceil(levels/cap); i++) {
        if (i !== Math.ceil(levels/cap) - 1 || levels - (Math.floor(levels/cap) * cap) === 0)
        {
            for (let j = 0; j < cap; j++) {
                if (i === 0 && j === 0) {
                    star("tree");
                } else {
                    floor("tree", counter)
                    counter++;
                }
            }
            counter--;
        } else {
            console.log(levels - (Math.floor(levels/cap) * cap));
            for (let j = 0; j < levels - (Math.floor(levels/cap) * cap); j++) {
                document.getElementById("tree").innerHTML += "/"
                for (let k = 0; k < counter * 2; k++) {
                    document.getElementById("tree").innerHTML += "&nbsp"
                }
                document.getElementById("tree").innerHTML += " \\<br>"
                counter++;
            }
        }
        setLevels(levels,cap);
    }
}

function setLevels(levels, cap) {
    document.getElementById("show_floors").innerHTML = "Liczba pięter: " + Math.ceil(levels/cap);
}

function star(element) {
    document.getElementById(element).innerHTML += "*<br>"
}

function floor(element, counter) {
    document.getElementById(element).innerHTML += "/"
    for (let k = 0; k < counter * 2; k++) {
        document.getElementById(element).innerHTML += "&nbsp"
    }
    document.getElementById(element).innerHTML += " \\<br>"
}
