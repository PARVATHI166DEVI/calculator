var ele = document.createElement("h1");
ele.innerHTML = "calculator"


let a = document.getElementById("inputs");

function display(num){
    a.value += num;
}

function calculate(){
    try{
        a.value = eval(a.value);
    }
    catch(err){
        alert("INVALID");
    }
}

function clr(){
    a.value = "";
}

function del(){
    a.value = a.value.slice(0,-1);
}

