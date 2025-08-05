function calc(){
    const width=parseFloat(document.getElementById("width").value);
    const length=parseFloat(document.getElementById("length").value);
    
    const area=width*length;
    const circumference=2*(width+length);
    
    document.getElementById("area").value=area.toFixed(2);
    document.getElementById("circumference").value=circumference.toFixed(2);
}