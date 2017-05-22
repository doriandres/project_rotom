var dialog = new Object();
dialog.text=document.getElementById("dialog_text");
dialog.nxt=document.getElementById("dialog_arrow");
dialog.lines=new Array();
set_lines();
dialog.text.className=0;
dialog.text.innerHTML=dialog.lines[parseInt(dialog.text.className)][0];
var audio = new Object(); 
audio.nxt = new Audio('assets/media/xbox.mp3');
audio.congrats = new Audio('assets/media/gameboy.mp3') 
audio.background = new Audio('assets/media/backmusic.mp3'); 
audio.background.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
audio.background.play();
function twinkle(){
    var state = dialog.nxt.style.visibility;
    if (state=="visible"){
       dialog.nxt.style.visibility="hidden";
    }else{
        dialog.nxt.style.visibility="visible";
    }   
}
setInterval(twinkle, 400);
var current_problem=0;
var responses=[];
responses.push([0,0]);
responses.push([1.5,0]);//1 respuesta
responses.push([25,0]);//2 respuesta
responses.push(["no","0"]);//3 respuesta
responses.push([0.3125,0]);//4 respuesta
responses.push([3.75,0]);//5 respuesta
responses.push([0.5000000000000001,0]);//6 respuesta
responses.push([8.11111111111111,0]);//7 respuesta
responses.push(["no","0"]);//8 respuesta
responses.push([1,0]);//9 respuesta
responses.push(["si",0]);//10 respuesta
function next_line(res){
    audio.nxt.play();
    var index = parseInt(dialog.text.className)+1;
    dialog.text.className=String(index);
    if (res!="0"){
        
        dialog.text.innerHTML=dialog.lines[index][parseInt(res)-1][0];
        
        if (dialog.lines[index][parseInt(res)-1][1]=="2"){
            current_problem+=1;
            
            dialog.nxt.style.display="none";
            $("#done").removeClass("disabled");
            
        }else{
            
            dialog.nxt.style.display="block";
            $("#done").addClass("disabled");
            
        }    
        
    }else{
        
        dialog.text.innerHTML=dialog.lines[index][0];
        if (dialog.lines[index][1]=="2"){
            
            current_problem+=1;
            dialog.nxt.style.display="none";
            $("#done").removeClass("disabled");
            
        }else{
            
            dialog.nxt.style.display="block";
            $("#done").addClass("disabled");
            
        }
    }
}
function set_lines(){
    dialog.lines.push(["¡Hola amigos mi nombre es Rotom...","1"]); //0
    dialog.lines.push(["y necesito su ayuda...","1"]);//1
    dialog.lines.push(["y necesito su ayuda...","1"]); //2
    dialog.lines.push(["asi que tratemos de resolver algunos problemas...","1"]); //3
    dialog.lines.push(["Antes de comenzar necesitamos explicar en que consiste el juego","1"]); //4
    dialog.lines.push(["Como dije antes yo les voy a dar algunos problemas, estos problemas se solucionarán usando matemáticas y programación...","1"]); //5
    dialog.lines.push(["mis amigos de Informática en Desarrollo les ayudarán cuando lo necesiten, para esto solo deben levantar la mano pedirles ayuda...","1"]); //6
    dialog.lines.push(["¿Vale?, ¡Empecemos!","1"]); //6
    //1
    dialog.lines.push(["Necesito pintar mi habitación, en una pared gasté 2/4 litros de pintura, ¿cuanta pintura necesitaré para pintar las 3 paredes restantes? ","2"]); //7
    dialog.lines.push([["¡Oh vaya! parece que esa no era la solución... pero no te preocupes...","1"],["¡Correcto! Sabía que lo conseguirias.","1"]]); //8
    dialog.lines.push(["Siguiente caso","1"]);//9
    //2
    dialog.lines.push(["Un amigo guarda parques de las Islas Naranja necesita llenar el tanque de gasolina de una lancha, si gasta 100 litros de gasolina para llenar 4 lanchas, cuantos litros necesita para cada lancha?","2"]); //10
    dialog.lines.push([["¡Oh vaya! parece que esa no era la solución... pero no te preocupes...","1"],["¡Correcto! Sabía que lo conseguirias.","1"]]); //11
    dialog.lines.push(["Siguiente caso","1"]);//12
    //3
    dialog.lines.push(["Pikachu y yo queremos comprar porciones de pokepastel en el centro pokemon, pikachu quiere 5 porciones y yo 3, ambos queremos de chocolote, pero solo quedan 7/4 porciones, alcanzarán para lo que queremos?","2"]); //13
    dialog.lines.push([["¡Oh vaya! parece que esa no era la solución... pero no te preocupes...","1"],["¡Correcto! Sabía que lo conseguirias.","1"]]); //14
    dialog.lines.push(["Siguiente caso","1"]);//15
    //4
    dialog.lines.push(["Snivy compro una hamburguesa muy grande, pero considera que no puede comerla toda, asi que decide partirla en 8 porciones iguales, de las cuales come 3, entonces ¿como puede dividir las porciones que le quedan entre Oshawott y Tepig?","2"]); //16
    dialog.lines.push([["¡Oh vaya! parece que esa no era la solución... pero no te preocupes...","1"],["¡Correcto! Sabía que lo conseguirias.","1"]]); //17
    dialog.lines.push(["Siguiente caso","1"]);//18
    //5
    dialog.lines.push(["Jigglypuff es una diseñadora de ropa y quiere hacer 5 vestidos, si necesita 3/4 de tela para hacer 1 vestido, ¿cuanta tela necesita para hacer 5 vestidos?","2"]); //19
    dialog.lines.push([["¡Oh vaya! parece que esa no era la solución... pero no te preocupes...","1"],["¡Correcto! Sabía que lo conseguirias.","1"]]); //20
    dialog.lines.push(["Siguiente caso","1"]);//21
    //6
    dialog.lines.push(["Brook le debe $ 7/6 millones al pokebanco. Ayer depositó 4/6, ¿Cuanto le debe Brook al banco?","2"]); //22
    dialog.lines.push([["¡Oh vaya! parece que esa no era la solución... pero no te preocupes...","1"],["¡Correcto! Sabía que lo conseguirias.","1"]]); //23
    dialog.lines.push(["Siguiente caso","1"]);//24
    //7
    dialog.lines.push(["El profesor Oak quiere ir de vaciones, su auto necesita 9/2 litros de gasolina para estar lleno, si ya tiene 4/9 litros en el tanque y 1 litro cuesta $2, cuanto dinero necesita para llenar por completo el tanque.","2"]); //25
    dialog.lines.push([["¡Oh vaya! parece que esa no era la solución... pero no te preocupes...","1"],["¡Correcto! Sabía que lo conseguirias.","1"]]); //26
    dialog.lines.push(["Siguiente caso","1"]);//27
    //8
    dialog.lines.push(["Charmander, Squirtle y Bulbasur compraron una pizza, Chamander tiene que ir a una cita en el centro pokemon, por lo que le pide a sus amigos que le dejen 2/5 de pizza. Si Squirtle se comió 3/5 de pizza y Bulbasur se comio 1/5, Le dejaron suficiente pizza a Charmander?","2"]); //28
    dialog.lines.push([["¡Oh vaya! parece que esa no era la solución... pero no te preocupes...","1"],["¡Correcto! Sabía que lo conseguirias.","1"]]); //29
    dialog.lines.push(["Siguiente caso","1"]);//30
    //9
    dialog.lines.push(["Piplup comió 5/4 de queso y Bunnelby comió 1/4 de queso menos que Piplup, cuanto queso comio Bunnelby? ","2"]); //31
    dialog.lines.push([["¡Oh vaya! parece que esa no era la solución... pero no te preocupes...","1"],["¡Correcto! Sabía que lo conseguirias.","1"]]); //32
    dialog.lines.push(["Siguiente caso","1"]);//33
    //10
    dialog.lines.push(["Froggy necesita 3 kg de azucar para una receta. Hay 2 bolsas de azucar, una tiene 9/5 kg y la otra 6/5 kg, ¿Froggy tiene suficiente azucar?","2"]); //34
    dialog.lines.push([["¡Oh vaya! parece que esa no era la solución... pero no te preocupes...","1"],["¡Correcto! Sabía que lo conseguirias.","1"]]); //35
    dialog.lines.push(["Haz completado todos los problemas!","1"]);//36
    dialog.lines.push(["Felicidades!","1"]);//37
    dialog.lines.push(["Muchas Gracias!","1"]);//38
}

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
        //alert(response.error + " en linea " + response.linea);
        Materialize.toast(response.error + " en linea " + response.linea, 8000, "red white-text bold");
    }
}

function divide_textArea(id){
    return arrayOfLines = $('#' + id).val().split('\n');
}

function clean(string){
    return string.replace(" ", "");
}

function data_return(data){
    Materialize.toast("El resultado es: "+data, 5000, "white blue-text bold");
    document.getElementById("test").value=null;
    document.getElementById("test").innerHTML=null;
    if (data==responses[current_problem][0]){
        audio.congrats.play();
        next_line("2");
    }else{
        next_line("1");
    }    
}

/*structure
asignacion (tipo nombre=valor)
*/