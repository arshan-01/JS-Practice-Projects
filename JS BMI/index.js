function calculate(){
    var w=document.getElementById('weight').value;
       var h=document.getElementById('Height').value;
          var bmi= w/(h*h);
             document.getElementById("BMItext").value = bmi.toFixed(1);

}