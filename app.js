var btnCheck = document.querySelector("#btn-check");
var selectDate = document.querySelector("#selectDate");
var selectNumber = document.querySelector("#selectNumber");
var output = document.querySelector("#output");

function clickEventHnadler() {
    var bdate = selectDate.value;
    var number = selectNumber.value;

    if (bdate != 0 && number != 0) {
        replaceCharacterandAddNumber(bdate);
    } else {
        output.innerText = "Please fill both the fields..";
    }
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
    if (sum % selectNumber.value == 0) {
        output.innerText = "Yayyy...Your birthdate is lucky 😎😎";
    } else {
        output.innerText = "Ooops...Your birthdate is not lucky 😞😞";
    }
}

btnCheck.addEventListener("click", clickEventHnadler);