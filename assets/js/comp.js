function check_script(){
    var array = divide_textArea("test");
    var algorithm = [];
    var line = 0;
  
    for(var i=0;i<array.length;i++){
        line++;
        if(array[i] == ""){
            array.splice(i,1);
            i = i - 1;
            continue;
}
        
        var type = array[i].split(" ")[0];
        
        switch(type.toLowerCase()){
            case "texto":
            case "num":
                var element = array[i].split(/=/);
                if(element.length == 2){                   
                    var step = [];
                    step.type = type;
                    step.name = clean((element[0].split(" "))[1]);
                    
                    if(type=="texto"){element[1]};
                    
                    step.value = clean(element[1]);
                    algorithm.push(step);
                }else if((array[i].split(" ")).length == 2){
                    var step = [];
                    step.type = type;
                    step.name = clean((element[0].split(" "))[1]);
                    
                    if(type=="texto"){step.value=""}else if(type=="num"){step.value=0};

                    algorithm.push(step);
                }else{
                    return {state:"error",error:"sintaxis invalida","linea":line};
                }
                break;
    
            case "si":
                var element = array[i].split(" ");
            	if(element.length == 2){
                	var condition =  element[1].split(/([<>=])/);
                    
                    if(condition.length == 3){ 
                        var step = [];
                        step.type = type;
                        step.eval = condition[0];
                        step.type_if = condition[1];
                        step.value = condition[2];
                        algorithm.push(step);                      
                    }else{
                        return {state:"error",error:"condicion invalida","linea":line};
                    }
                }
                break;
                
            case "finsi":
                var step = [];
                step.type = "finsi";
                algorithm.push(step); 
                break;
                
            case "sino":
                var step = [];
                step.type = "sino";
                algorithm.push(step); 
                break;
                
            case"return":
            case "mostrar":
            case "responder":
                var element = array[i].split(" ");
                if(element.length == 2){
                    var step = [];
                    step.type = "op";
                    step.value = "return " + element[1];
                    algorithm.push(step);  
                }else{
                    return {state:"error",error:"sintaxis invalida","linea":line};
                }
                break;
                
            default:
                var element = array[i].split(/[=]/);
                if(element.length == 2 && element[0].indexOf(" ") === -1){
                    var step = [];
                    step.type = "op";
                    step.value = array[i];
                    algorithm.push(step);  
                }else{
                    return {state:"error",error:"sintaxis invalida","linea":line};
                }
                break;
        }        
    }
    
    return {state:"success",value:algorithm};
    
}

function compile(){
    var response = check_script();
    if(response.state == "success"){
        
        var steps = response.value
        var step = "";
        
        for(var i = 0;i<steps.length;i++){
            var separator = true;
            
            switch(steps[i].type){
                case "num":
                    if(Number.isInteger(steps[i].value)){
                        step += "var " + steps[i].name + " = parseInt(" + steps[i].value + ")";
                    }else{
                        step +=  "var " + steps[i].name + " = " + steps[i].value;
                    }
                    
                    break;
                    
                case "texto":
                    step += "var " + steps[i].name + " = ";
                    if(steps[i].value == ""){
                        step += "''";
                    }else{
                        step += steps[i].value
                    }
                    break;
                
                case "si":
                    separator=false;
                    var value;
                    
                    step += "if (" + steps[i].eval;
                    
                    if(steps[i].type_if == "="){
                        step += "==";
                    }else{
                        step += steps[i].type_if
                    }
                    
                    if($.isNumeric(steps[i].value)){
                        if(Number.isInteger(steps[i].value)){
                            value = "(parseInt(" + steps[i].value + "))";
                        }else{
                            value = steps[i].value;
                        }
                    }else{
                        value = steps[i].value;
                    }
                    step+= value + "){";
                    break;
                
                case "finsi":
                    step += "}";
                    break;
                    
                case "sino":
                    step += "}else{";
                    separator=false;
                    break;
                    
                case "op":
                    step += steps[i].value;
                    break;
            }
            
            if(separator){
                step += ";";
            }
            
            $("#compile").html(step);
        }
        eval("function compiled(){" + step + "}");
        //alert(compiled());
        data_return(compiled());
    }else{
        alert(response.error + " en linea " + response.linea);
    }
}

function divide_textArea(id){
    return arrayOfLines = $('#' + id).val().split('\n');
}

function clean(string){
    return string.replace(" ", "");
}

function data_return(data){
    alert(data)
}

/*structure
asignacion (tipo nombre=valor)
*/