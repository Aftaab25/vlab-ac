function popup() {
    document.getElementById("draggable").style.display = "block";
}
$(function () {
    $("#draggable").draggable().resizable();
});

function hide() {
    document.getElementById("draggable").style.display = "none";
}

function toggle_popup_observation() {
    var displ = document.getElementById("obsertable");
    document.getElementById("obsertable").style.visibility = "visible";


    if (displ.style.display === 'none') {
        displ.style.display = 'block';
    } else {
        displ.style.display = 'none';
    }
}

function check() {

    alert("RIGHT CONNECTION");

    document.getElementById('add').style.visibility = "visible";
    document.getElementById('output').style.visibility = "visible";
    document.getElementById('obsButton').style.visibility = "visible";
    document.getElementById('add').disabled = false;
    document.getElementById('output').disabled = false;
    document.getElementById('resistance1').disabled = false;
    document.getElementById('resistance2').disabled = false;
    document.getElementById('resistance3').disabled = false;


}

var vout=0;
var v1=1;
var v2=2;
var r1=500;
var r2=500;
var rf=500;


function res1(slideValue) {
    var sliderDiv = document.getElementById("txt1");
    sliderDiv.innerHTML = slideValue + " &#8486";
    r1 = slideValue;
    // document.getElementById("ans").innerHTML = out.toFixed(3) + "V";
}

function res2(slideValue) {
    var sliderDiv = document.getElementById("txt1-2");
    sliderDiv.innerHTML = slideValue + " &#8486";
    r2 = slideValue;
    // document.getElementById("ans").innerHTML = out.toFixed(3) + "V";
}

function res3(slideValue) {
    var sliderDiv = document.getElementById("txt1-3");
    sliderDiv.innerHTML = slideValue + " &#8486";
    rf = slideValue;
    // document.getElementById("ans").innerHTML = out.toFixed(3) + "V";
}

// console.log(r1);
function solve(){
    if (r1 === r2 && r2 === rf){
        vout = -1 * (v1 + v2);
        document.getElementById("type").innerHTML = "Adder Circuit";
        console.log(vout);
    } else if (r1 === r2 && rf/r1 === 0.5){
        vout = -1 * 0.5 * (v1 + v2);
        document.getElementById("type").innerHTML = "Averaging Circuit";
        console.log(vout);
    } else {
        vout = -1 * ((rf/r1)*v1 + (rf/r2)*v2);
        document.getElementById("type").innerHTML = "Scaling Circuit";
        console.log(vout);
    }
    document.getElementById("ans").innerHTML = vout.toFixed(3) + "V";
}

// To Reset Connections
function deleteconnection() {
    window.location.reload();
}
