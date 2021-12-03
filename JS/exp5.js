function temptores(){
    
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
