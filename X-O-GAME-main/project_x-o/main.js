let title = document.querySelector(".title")
let input1 = document.querySelector("input1")
let input2 = document.querySelector("input2")
let input3 = document.querySelector("input3")
let input4 = document.querySelector("input4")
let input5 = document.querySelector("input5")
let input6 = document.querySelector("input6")
let input7 = document.querySelector("input7")
let input8 = document.querySelector("input8")
let input9 = document.querySelector("input9")
let sqours = []



let turn = "x"

function game(id) {
    let elment = document.getElementById(id)
    if (turn === "x" && elment.innerHTML == "") {
        title.innerHTML = "O"
        elment.innerHTML = "X"
        turn = "o"

    }
    else if (turn === "o" && elment.innerHTML == "") {
        title.innerHTML = "x"
        elment.innerHTML = "O"
        turn = "x"

    }
    winner()

}

function end(num1, num2, num3) {
    title.innerHTML = `${sqours[num1]} Winner`
    document.getElementById("input" + num1).style.background = "black"
    document.getElementById("input" + num2).style.background = "black"
    document.getElementById("input" + num3).style.background = "black"
    setInterval(function () { title.innerHTML += "." }, 1000)
    setTimeout(function () { location.reload() }, 3000)
}
function winner() {
    for (let i = 1; i < 10; i++) {
        sqours[i] = document.getElementById("input" + i).innerHTML
    }

    if (sqours[1] == sqours[2] && sqours[2] == sqours[3] && sqours[1] != "") {
        end(1, 2, 3)
    }
    if (sqours[4] == sqours[5] && sqours[5] == sqours[6] && sqours[4] != "") {
        end(4, 5, 6)

    }
    if (sqours[7] == sqours[8] && sqours[8] == sqours[9] && sqours[9] != "") {
        end(7, 8, 9)

    }
    if (sqours[1] == sqours[4] && sqours[7] == sqours[1] && sqours[1] != "") {
        end(1, 4, 7)

    }
    if (sqours[2] == sqours[5] && sqours[8] == sqours[5] && sqours[5] != "") {
        end(2, 5, 8)

    }
    if (sqours[9] == sqours[6] && sqours[6] == sqours[3] && sqours[3] != "") {
        end(9, 6, 3)

    }
    if (sqours[1] == sqours[5] && sqours[5] == sqours[9] && sqours[1] != "") {
        end(1, 5, 9)

    }
    if (sqours[3] == sqours[5] && sqours[5] == sqours[7] && sqours[3] != "") {
        end(7, 5, 3)
    }
    console.log(sqours[1] &&sqours[2] &&sqours[3] &&sqours[4] &&sqours[5] &&sqours[6] &&sqours[7] &&sqours[8] &&sqours[9]);
    if (sqours.length ==10) {
    }


}