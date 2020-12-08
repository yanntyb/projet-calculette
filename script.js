let number = document.getElementsByClassName("case");
let action = document.getElementsByClassName("actionButton");
let result = document.getElementById("result");
let resultFinal = document.getElementById("resultFinal");

let calcule = [];
let pos = 0;
let calc = 0;
let formule = ""

let symbole = ["+", "-", "*", "%"]
let operation = ["log"]

function afficher(text) {
    result.innerHTML = text;
}

for (let i of number) {
    i.addEventListener("click", function () {
        if (calcule[pos] != undefined) {
            calcule[pos] += i.innerHTML;
        } else {
            if (calcule[pos] === undefined) {
                calcule[pos] = i.innerHTML;
            }
        }
        afficher(calcule[pos]);
        console.log(calcule);
    })
}

for (let i of action) {
    i.addEventListener("click", function () {
        if (i.innerHTML === "=") {
            if (!isNaN(parseInt(calcule[calcule.length - 1])) || calcule[calcule.length - 1] == ")") {
                for (let j = 0; j < calcule.length; j++) {
                    if(operation.includes(calcule[j])){
                        let indexFermeture = calcule.indexOf(")");
                        let resultSub = calcule.slice(j + 1,indexFermeture + 1);
                        let formuleSub = "";
                        for (let k = 0;k<resultSub.length;k++){
                            formuleSub += resultSub[k];
                        }
                        formuleSub = eval(formuleSub);
                        if(calcule[j] === "log"){
                            formuleSub = Math.log(formuleSub);
                        }
                        else if(calcule[j] === "sin"){
                            formuleSub = Math.sin(formuleSub);
                        }
                        calcule.splice(j,resultSub.length + 1);
                        calcule[j] = formuleSub;
                        console.log("sub",formuleSub)
                        console.log(calcule);
                    }
                    formule += calcule[j];
                }
                calcule = [];
                calcule[0] = eval(formule).toString();
                pos = 0;
                formule = "";
                result.innerHTML = ""
                resultFinal.innerHTML = calcule[0];
                console.log("calc",calcule);
            }
        }
        else if (i.innerHTML === "+") {
            if (!isNaN(calcule[pos])) {
                pos++;
                calcule[pos] = "+";
                afficher("+");
                pos++;
            } else {
                calcule[pos] = "+";
                afficher("+");
                pos++;
            }
        }
        else if (i.innerHTML === "-") {
            if (!isNaN(calcule[pos])) {
                pos++;
                calcule[pos] = "-";
                afficher("-");
                pos++;
            } else {
                calcule[pos] = "-";
                afficher("-");
                pos++;
            }
        }
        else if (i.innerHTML === "x") {
            if (!isNaN(calcule[pos])) {
                pos++;
                calcule[pos] = "*";
                afficher("x");
                pos++;
            } else {
                calcule[pos] = "*";
                afficher("x");
                pos++;
            }
        }
        else if (i.innerHTML === ".") {
            if (!isNaN(calcule[pos])) {
                calcule[pos] += ".";
                afficher(".");
                pos++
            }
        }
        else if (i.innerHTML === "%") {
            if (!isNaN(calcule[pos])) {
                pos++;
                calcule[pos] = "%";
                afficher("%");
                pos++;
            } else {
                calcule[pos] = "%";
                afficher("%");
                pos++;
            }
        }
        else if (i.innerHTML === "ln") {
            if (symbole.includes(calcule[pos - 1]) || calcule[pos - 1] === undefined){
                calcule[pos] = "log";
                afficher("log");
                pos++;
            }
        }
        else if (i.innerHTML === "sin") {
            if (symbole.includes(calcule[pos - 1]) || calcule[pos - 1] === undefined){
                calcule[pos] = "sin";
                afficher("sin");
                pos++;
            }
        }
        else if (i.innerHTML === "(") {
            calcule[pos] = "(";
            afficher("(");
            pos++;
        }
        else if (i.innerHTML === ")") {
            if (!isNaN(calcule[pos])) {
                pos++;
            }
            calcule[pos] = ")";
            afficher(")")
            pos++;
        }
        else if (i.innerHTML === "reset") {
            calcule = [];
            pos = 0;
            result.innerHTML = "";
            resultFinal.innerHTML = "";
            console.clear();
        }
    })
}
