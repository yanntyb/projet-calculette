let number = document.getElementsByClassName("case");
let action = document.getElementsByClassName("actionButton");
let result = document.getElementById("result");
let resultFinal = document.getElementById("resultFinal");

let calcule = ["0"];
let pos = 0;
let calc = 0;
let formule = ""

function afficher(text){
    result.innerHTML = text;
}

for (let i of number) {
    i.addEventListener("click", function () {
        if(calcule[pos] != undefined && calcule[pos].toString().endsWith(".")){
            calcule[pos] += i.innerHTML;
        }else {
            calcule[pos] = i.innerHTML;
        }
        afficher(calcule[pos])
    })
}

for (let i of action) {
    i.addEventListener("click", function () {
        i.style.animationName = "animCase";
        i.style.animationDuration = "0.5s"
        if (i.innerHTML === "=") {
            console.log(calcule)
            if (!isNaN(parseInt(calcule[calcule.length - 1])) || calcule[calcule.length - 1] == ")") {
                for (let j = 0; j < calcule.length; j++) {
                    formule += calcule[j];
                }
                calcule = [];
                calcule[0] = eval(formule).toString();
                pos = 0;
                formule = "";
                console.log(resultFinal);
                console.log(calcule[0]);
                resultFinal.innerHTML= calcule[0];
            }
        } else if (i.innerHTML === "+") {
            if (!isNaN(parseInt(calcule[pos]))) {
                pos++;
                calcule[pos] = "+";
                afficher("+");
                pos++;
            }
        } else if (i.innerHTML === "-") {
            if (!isNaN(calcule[pos])) {
                pos++;
                calcule[pos] = "-";
                afficher("-");
                pos++;
            }
        } else if (i.innerHTML === "x") {
            if (!isNaN(calcule[pos])) {
                pos++;
                calcule[pos] = "*";
                afficher("x");
                pos++;
            }
            else {
                calcule[pos] = "*";
                afficher("x");
                pos++;
            }
        }else if (i.innerHTML === ".") {
            if (!isNaN(calcule[pos])) {
                calcule[pos] += ".";
                afficher(".");
                pos++
            }
        } else if (i.innerHTML === "%") {
            if (!isNaN(calcule[pos])) {
                 pos++;
                calcule[pos] = "%";
                afficher("%");
                pos++;
            }
        }else if (i.innerHTML === "(") {
            calcule[pos] = "(";
            afficher("(");
            pos++;
        }else if (i.innerHTML === ")") {
            if(!isNaN(calcule[pos])){
                pos++;
            }
            calcule[pos] = ")";
            afficher(")")
            pos++;
        } else if (i.innerHTML === "reset"){
            calcule[0] = 0;
            pos = 0;
            result.innerHTML = "";
            resultFinal.innerHTML = "";
            console.clear();
        }
    })
}
