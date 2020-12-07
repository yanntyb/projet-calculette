let number = document.getElementsByClassName("case");
let action = document.getElementsByClassName("actionButton");
let result = document.getElementById("result");

let calcule = [0];
let pos = 0;
let calc = 0;

function afficher(text){
    result.innerHTML += text;
}

for (let i of number) {
    i.addEventListener("click", function () {
        calcule[pos] = i.innerHTML;

        afficher(i.innerHTML)
        console.log(calcule);
    })
}

for (let i of action) {
    i.addEventListener("click", function () {
        if (i.innerHTML === "=") {
            if (!isNaN(parseInt(calcule[calcule.length - 1]))) {
                for (let j=0; j< calcule.length; j++) {
                    if (calcule[j] === "+") {
                        calc += parseInt(calcule[j-1]);
                        calc += parseInt(calcule[j+1]);
                        calcule = calcule.splice(j,1);
                        console.log(calcule)
                        calcule[0] = calc.toString();
                        j = 0;
                        console.log(calcule);
                    }
                    calc = 0;
                }
            }
        } else if (i.innerHTML === "+") {
            if (calcule[pos] === 0) {
                calcule[pos] = "0";
            }
            if (!isNaN(parseInt(calcule[pos]))) {
                pos++;
                calcule[pos] = "+";
                afficher("+")
                pos++;
            }
        } else if (i.innerHTML === "-") {
            if (!isNaN(calcule[pos])) {
                pos++;
                calcule[pos] = "-";
                afficher("-")
                pos++;
            }
        } else if (i.innerHTML === "x") {
            if (!isNaN(calcule[pos])) {
                pos++;
                calcule[pos] = "x";
                afficher("x")
                pos++;
            }
        } else if (i.innerHTML === "%") {
            if (!isNaN(calcule[pos])) {
                pos++;
                calcule[pos] = "%";
                afficher("%")
                pos++;
            }
        }
    })
}
