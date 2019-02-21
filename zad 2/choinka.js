function generate_tree() {
    document.getElementById("tree").innerHTML = "";
    const levels = document.getElementById("levels").value;
    const cap = document.getElementById("cap").value;
    let counter = 0;
    for (let i = 0; i < Math.ceil(levels/cap); i++) {
        if (i !== Math.ceil(levels/cap) - 1)
        {
            for (let j = 0; j < cap; j++) {
                if (i === 0 && j === 0) {
                    document.getElementById("tree").innerHTML += "*<br>"
                } else {
                    document.getElementById("tree").innerHTML += "/"
                    for (let k = 0; k < counter * 2; k++) {
                        document.getElementById("tree").innerHTML += "&nbsp"
                    }
                    document.getElementById("tree").innerHTML += " \\<br>"
                    counter++;
                }
            }
            counter--;
        } else {
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
    console.log(Math.ceil(levels/cap));
    document.getElementById("show_floors").innerHTML = "Liczba pięter: " + Math.ceil(levels/cap);
}
