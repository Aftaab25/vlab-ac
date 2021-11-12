// Procedure pop-up js code 

function popup() {
    document.getElementById("draggable").style.display = "block";
}
$(function () {
    $("#draggable").draggable().resizable();
});

function hide() {
    document.getElementById("draggable").style.display = "none";
}


// Observation Table toggle code
function toggle_popup_observation() {
    var displ = document.getElementById("obsertable");
    document.getElementById("obsertable").style.visibility = "visible";


    if (displ.style.display === 'none') {
        displ.style.display = 'block';
    } else {
        displ.style.display = 'none';
    }
}


// Calculating output voltage

var out;
var ref_vol;
var n = 1;
var vout;

function res(slideValue) {
    var sliderDiv = document.getElementById("txt1");
    sliderDiv.innerHTML = slideValue + " &#8486";


    ref_vol = parseFloat(4.5);
    out = 9 / 1000 * slideValue;


    if (out >= ref_vol) {


        document.getElementById("ans").style.color = "green";
        document.getElementById('led-on').style.visibility = 'visible';
        document.getElementById('led-off').style.visibility = 'hidden';
        vout = "High";

    } else {



        document.getElementById("ans").style.color = "red";
        document.getElementById('led-off').style.visibility = 'visible';
        document.getElementById('led-on').style.visibility = 'hidden';
        vout = "Low";

    }
    document.getElementById("ans").innerHTML = out.toFixed(3) + "V";
}

// Adding data to observation table

function add() {



    var table = document.getElementById("obsTable");


    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow(-1);
    // Insert new cells (<td> elements):
    var num = row.insertCell(0);
    var vin = row.insertCell(1);
    var vref = row.insertCell(2);
    var out = row.insertCell(3);

    num.innerHTML = n++;
    vin.innerHTML = document.getElementById("ans").innerHTML;
    vref.innerHTML = 4.5;
    out.innerHTML = vout;
    if (parseFloat(vin.innerHTML) >= parseFloat(4.5)) {
        out.style.color = "forestgreen";

    } else {
        out.style.color = "red";
    }


}
