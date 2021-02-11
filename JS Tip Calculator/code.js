function calculateTips() {
    var billAmt = document.querySelector(".bill_amt").value;
    var serviceQuality = document.querySelector("#service_quality").value;
    var peopleAmt = document.querySelector("#people_amt").value;

    if(billAmt === "" || serviceQuality == 0) {
        alert("Plese enter the values");
        return;
    };

    if(peopleAmt === ""|| peopleAmt <= 1) {
        peopleAmt = 1;
        document.querySelector("#each").style.display = "none";
    } else {
        document.querySelector("#each").style.display = "block";
    }

    var total = (billAmt * serviceQuality) / peopleAmt;

    total = Math.round(total * 100) / 100;

    total = total.toFixed(2);

    document.querySelector("#totalTip").style.display = "block";    
    document.querySelector("#tip").innerHTML = total;  

}
    
    document.querySelector("#totalTip").style.display = "none";    
    document.querySelector("#each").style.display = "none";    
    
    document.querySelector("#calculate").onclick = function(){
        calculateTips();
    };    
