var btnText = document.getElementById("countrydopdownbtntext");
var btnSpan = document.getElementById("countrydopdownbtnspan");
var planName = document.getElementById("planName");
var detailsLine1 = document.getElementById("detailsline1")
var detailsLine2 = document.getElementById("detailsline2")
var detailsLine3 = document.getElementById("detailsline3")

// If want to change the more detaisl to different plans when the plan changes 
// https://stackoverflow.com/questions/4365246/how-to-change-href-of-a-tag-on-button-click-through-javascript 

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
        changeToPlanA();
    }
    else if (input.includes("Korea")) {
        btnText.innerHTML = "Korea";
        btnSpan.className = "fi fi-kr";
        changeToPlanB();
    }
    else if (input.includes("Mexico")) {
        btnText.innerHTML = "Mexico";
        btnSpan.className = "fi fi-mx";
        changeToPlanC();
    }
    else if (input.includes("Singapore")) {
        btnText.innerHTML = "Singapore";
        btnSpan.className = "fi fi-sg";
        changeToPlanA();
    }
    else if (input.includes("Spain")) {
        btnText.innerHTML = "Spain";
        btnSpan.className = "fi fi-es";
        changeToPlanB();
    }
    else if (input.includes("Taiwan")) {
        btnText.innerHTML = "Taiwan";
        btnSpan.className = "fi fi-tw";
        changeToPlanC();
    }
    else if (input.includes("Thailand")) {
        btnText.innerHTML = "Thailand";
        btnSpan.className = "fi fi-th";
        changeToPlanA();
    }
    else if (input.includes("Turkey")) {
        btnText.innerHTML = "Turkey";
        btnSpan.className = "fi fi-tr";
        changeToPlanB();
    }
    else if (input.includes("UnitedKingdom")) {
        btnText.innerHTML = "United Kingdom";
        btnSpan.className = "fi fi-gb";
        changeToPlanC();
    }
    else if (input.includes("UnitedStates")) {
        btnText.innerHTML = "United States";
        btnSpan.className = "fi fi-us";
        changeToPlanA();
    }
}
window.addEventListener('click', onClick);


//Timing for animations can be changed in css under plannamefadein class
function changeToPlanA() {
    planName.innerHTML = "Plan A";

    planName.classList.remove("plannamefadein");
    void planName.offsetWidth;
    planName.classList.add("plannamefadein");
    
    detailsLine1.innerHTML = "PCR Test + ART Test";
    detailsLine1.classList.remove("plannamefadein");
    void detailsLine1.offsetWidth;
    detailsLine1.classList.add("plannamefadein");
    
    detailsLine2.innerHTML = "Results within 24 hours";
    detailsLine2.classList.remove("plannamefadein");
    void detailsLine2.offsetWidth;
    detailsLine2.classList.add("plannamefadein");

    detailsLine3.innerHTML = "Express Delivery";
    detailsLine3.classList.remove("plannamefadein");
    void detailsLine3.offsetWidth;
    detailsLine3.classList.add("plannamefadein");

}

function changeToPlanB() {
    planName.innerHTML = "Plan B";

    planName.classList.remove("plannamefadein");
    void planName.offsetWidth;
    planName.classList.add("plannamefadein");

    detailsLine1.innerHTML = "PCR Test";
    detailsLine1.classList.remove("plannamefadein");
    void detailsLine1.offsetWidth;
    detailsLine1.classList.add("plannamefadein");
    
    detailsLine2.innerHTML = "Results within 48 hours";
    detailsLine2.classList.remove("plannamefadein");
    void detailsLine2.offsetWidth;
    detailsLine2.classList.add("plannamefadein");

    detailsLine3.innerHTML = "Normal Delivery";
    detailsLine3.classList.remove("plannamefadein");
    void detailsLine3.offsetWidth;
    detailsLine3.classList.add("plannamefadein");

}

function changeToPlanC() {
    planName.innerHTML = "Plan C";

    planName.classList.remove("plannamefadein");
    void planName.offsetWidth;
    planName.classList.add("plannamefadein");

    detailsLine1.innerHTML = "PCR Test";
    detailsLine1.classList.remove("plannamefadein");
    void detailsLine1.offsetWidth;
    detailsLine1.classList.add("plannamefadein");
    
    detailsLine2.innerHTML = "Results within 72 hours";
    detailsLine2.classList.remove("plannamefadein");
    void detailsLine2.offsetWidth;
    detailsLine2.classList.add("plannamefadein");

    detailsLine3.innerHTML = "Self Collection ";
    detailsLine3.classList.remove("plannamefadein");
    void detailsLine3.offsetWidth;
    detailsLine3.classList.add("plannamefadein");

}



