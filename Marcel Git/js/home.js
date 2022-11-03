var btnText = document.getElementById("countrydopdownbtntext");
var btnSpan = document.getElementById("countrydopdownbtnspan");
var planName = document.getElementById("planName");
// If want to change the more detaisl to different plans when the plan changes 
// https://stackoverflow.com/questions/4365246/how-to-change-href-of-a-tag-on-button-click-through-javascript 


//Timing for animations can be changed in css under plannamefadein class
function changeToPlanA() {
    planName.innerHTML = "Plan A";

    planName.classList.remove("plannamefadein");
    void planName.offsetWidth;
    planName.classList.add("plannamefadein");

}

function changeToPlanB() {
    planName.innerHTML = "Plan B";

    planName.classList.remove("plannamefadein");
    void planName.offsetWidth;
    planName.classList.add("plannamefadein");

}

function changeToPlanC() {
    planName.innerHTML = "Plan C";

    planName.classList.remove("plannamefadein");
    void planName.offsetWidth;
    planName.classList.add("plannamefadein");

}



const onClick = (event) => {
    var input = event.srcElement.id
    if (input.includes("China")) {
        btnText.innerHTML = "China";
        btnSpan.className = "fi fi-cn";
        changeToPlanA();
    }

    else if (input.includes("France")) {
        btnText.innerHTML = "France";
        btnSpan.className = "fi fi-fr";
        changeToPlanB();

    }
    else if (input.includes("Germany")) {
        btnText.innerHTML = "Germany";
        btnSpan.className = "fi fi-de";
        changeToPlanC()
    }
    else if (input.includes("Italy")) {
        btnText.innerHTML = "Italy";
        btnSpan.className = "fi fi-it";
    }
    else if (input.includes("Korea")) {
        btnText.innerHTML = "Korea";
        btnSpan.className = "fi fi-kr";
    }
    else if (input.includes("Mexico")) {
        btnText.innerHTML = "Mexico";
        btnSpan.className = "fi fi-mx";
    }
    else if (input.includes("Singapore")) {
        btnText.innerHTML = "Singapore";
        btnSpan.className = "fi fi-sg";
    }
    else if (input.includes("Spain")) {
        btnText.innerHTML = "Spain";
        btnSpan.className = "fi fi-es";
    }
    else if (input.includes("Taiwan")) {
        btnText.innerHTML = "Taiwan";
        btnSpan.className = "fi fi-tw";
    }
    else if (input.includes("Thailand")) {
        btnText.innerHTML = "Thailand";
        btnSpan.className = "fi fi-th";
    }
    else if (input.includes("Turkey")) {
        btnText.innerHTML = "Turkey";
        btnSpan.className = "fi fi-tr";
    }
    else if (input.includes("UnitedKingdom")) {
        btnText.innerHTML = "United Kingdom";
        btnSpan.className = "fi fi-gb";
    }
    else if (input.includes("UnitedStates")) {
        btnText.innerHTML = "United States";
        btnSpan.className = "fi fi-us";
    }
}
window.addEventListener('click', onClick);