var vout=0;
var vdc = 5;
var dr=0;
var rf = 4700;
var r1 = 1000;
var r = 100000;
var temp = 25;
var counter=0;


function temptores(slideValue){
    var sliderDiv = document.getElementById("txt4");
    sliderDiv.innerHTML = slideValue + "&deg;C";
    dr = -1*(slideValue - 25)*1000;
    temp = slideValue;
}

function solve(){

    counter += 1;
    vout = (rf/r1)*(dr/(4*r))*vdc;
    document.getElementById("ans").innerHTML = vout.toFixed(3) + "V";

    if (counter === 1){
        document.getElementById("temp1").innerHTML = temp + "&deg;C";
        document.getElementById("dr1").innerHTML = (dr/1000).toFixed(1) + " k&Omega;";
        document.getElementById("vout1").innerHTML = vout.toFixed(3) + "V";
    }

    if (counter === 2){
        document.getElementById("temp2").innerHTML = temp + "&deg;C";
        document.getElementById("dr2").innerHTML = (dr/1000).toFixed(1) + " k&Omega;";
        document.getElementById("vout2").innerHTML = vout.toFixed(3) + "V";
    }

    if (counter === 3){
        document.getElementById("temp3").innerHTML = temp + "&deg;C";
        document.getElementById("dr3").innerHTML = (dr/1000).toFixed(1) + " k&Omega;";
        document.getElementById("vout3").innerHTML = vout.toFixed(3) + "V";
    }

    if (counter === 4){
        document.getElementById("temp4").innerHTML = temp + "&deg;C";
        document.getElementById("dr4").innerHTML = (dr/1000).toFixed(1) + " k&Omega;";
        document.getElementById("vout4").innerHTML = vout.toFixed(3) + "V";
    }

    if (counter === 5){
        document.getElementById("temp5").innerHTML = temp + "&deg;C";
        document.getElementById("dr5").innerHTML = (dr/1000).toFixed(1) + " k&Omega;";
        document.getElementById("vout5").innerHTML = vout.toFixed(3) + "V";
    }

    if (counter > 5){
        alert("Observation Table already filled!");;
    }

}

function check(){
    let count = 0;
    x = instance.getAllConnections()
    if (x.length != 8){
        alert("Wrong Connections")
    }
    console.log(x[0].endpoints[0].getUuid());
    console.log(x[0].endpoints[1].getUuid());
    console.log(x[0].endpoints[0].getUuid() === 'vdc_dwn' && x[0].endpoints[1].getUuid() !== 'b_dwn');
    console.log(x[0].endpoints[0].getUuid() === 'b_dwn' && x[0].endpoints[1].getUuid() !== 'vdc_dwn');
    console.log((x[0].endpoints[0].getUuid === 'vdc_dwn' && x[0].endpoints[1].getUuid !== 'b_dwn') || (x[0].endpoints[0].getUuid() === 'b_dwn' && x[0].endpoints[1].getUuid() !== 'vdc_dwn'))
    for (let i =0 ; i<x.length; i++){
        console.log(i);
        if (x[i].endpoints[0].getUuid() === 'vdc_dwn' && x[i].endpoints[1].getUuid() !== 'b_dwn'){
            
            alert("Wrong Connections");
        }
        else if (x[i].endpoints[0].getUuid() === "b_dwn" && x[i].endpoints[1].getUuid() !== "vdc_dwn"){
            alert("Wrong Connections");
        }
        else if (x[i].endpoints[0].getUuid() === 'vdc_up' && x[i].endpoints[1].getUuid() !== 'b_up'){
            
            alert("Wrong Connections");
        }
        else if (x[i].endpoints[0].getUuid() === "b_up" && x[i].endpoints[1].getUuid() !== "vdc_up"){
            alert("Wrong Connections");
        }
        else if (x[i].endpoints[0].getUuid() === 'b_left' && x[i].endpoints[1].getUuid() !== 'a2_up'){
            
            alert("Wrong Connections");
        }
        else if (x[i].endpoints[0].getUuid() === "a2_up" && x[i].endpoints[1].getUuid() !== "b_left"){
            alert("Wrong Connections");
        }
        else if (x[i].endpoints[0].getUuid() === 'b_right' && x[i].endpoints[1].getUuid() !== 'a1_dwn'){
            
            alert("Wrong Connections");
        }
        else if (x[i].endpoints[0].getUuid() === "a1_dwn" && x[i].endpoints[1].getUuid() !== "b_right"){
            alert("Wrong Connections");
        }
        else if (x[i].endpoints[0].getUuid() === 'r2_out' && x[i].endpoints[1].getUuid() !== 'a3_dwn'){
            
            alert("Wrong Connections");
        }
        else if (x[i].endpoints[0].getUuid() === "a3_dwn" && x[i].endpoints[1].getUuid() !== "r2_out"){
            alert("Wrong Connections");
        }
        else if (x[i].endpoints[0].getUuid() === 'r1_out' && x[i].endpoints[1].getUuid() !== 'rf_in'){
            
            alert("Wrong Connections");
        }
        else if (x[i].endpoints[0].getUuid() === "rf_in" && x[i].endpoints[1].getUuid() !== "r1_out"){
            alert("Wrong Connections");
        }
        else if (x[i].endpoints[0].getUuid() === 'a2_dwn' && x[i].endpoints[1].getUuid() !== 'r2_in'){
            
            alert("Wrong Connections");
        }
        else if (x[i].endpoints[0].getUuid() === "r2_in" && x[i].endpoints[1].getUuid() !== "a2_dwn"){
            alert("Wrong Connections");
        }
        count += 1;
    }
    if (count === 8){
    alert("Connections are correct!")}

}

// To Reset Connections
function deleteconnection() {
    window.location.reload();
    counter = 0;
}