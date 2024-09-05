 function convert(){
        let input_from=document.getElementById("data").value;
        let option_from=document.getElementById("option_from").value;
        let option_to=document.getElementById("option_to").value;

        if(input_from===""){
            document.getElementById('result').innerText="Please Enter A Valid Number";
        }
        input_from=parseFloat(input_from);
        if(option_from==="Celcius" & option_to==="Fahrenheit"){
        var ans=(input_from*1.8)+32;
        document.getElementById('result').innerText=ans+'  Fahrenheit';
        }
        
        else if(option_from==="Fahrenheit" & option_to==="Celcius"){
            var ans=(input_from-32)*5/9;
            document.getElementById('result').innerText=ans+'  Celcius';
        }
        else if(option_from===option_to){
            document.getElementById('result').innerText="Temperature cannot be of same unit.";
        }
        else{
            document.getElementById('result').innerText="Please Select Valid Unit";
        }
    }