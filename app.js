var btnCheck = document.querySelector("#btn-check");
var selectDate = document.querySelector("#selectDate");
var selectNumber = document.querySelector("#selectNumber");

function clickEventHnadler() {
    replaceCharacterandAddNumber(selectDate.value);
}

function replaceCharacterandAddNumber(birthdate) {
    var sum = 0;
    for (var i = 0; i < birthdate.length; i++) {
        if (birthdate[i] != "-")
            sum = sum + parseInt(birthdate[i]);
    }

    checkDivisible(sum);
}

function checkDivisible(sum) {
    if (sum % selectNumber.value == 0){
        console.log("Yeahhh...Your birthdate is lucky 😎😎");
    }
    else{
        console.log("Ooops...Your birthdate is not lucky 😞😞");
    }
}

btnCheck.addEventListener("click", clickEventHnadler);