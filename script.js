document.addEventListener("DOMContentLoaded", function(){
    var input= document.getElementById("inputBox");
    var buttons=document.getElementsByTagName("button");

    for (var i=0;i< buttons.length;i++){
        buttons[i].addEventListener("click", function() {
             var button= this.textContent;
                try{
              switch(button){
                case '=':
                    input.value=eval(input.value);
                    break;
                case 'AC':
                    input.value='';
                    break;
                case 'DEL':
                    input.value=input.value.slice(0,-1);
                    break;
                default:
                    input.value+=button;
                    console.log("HI");
                    break;
             }  
            }
            catch{
                input.value="ERROR";
            }
             /* if(buttonn==='='){
                
                try {
                    var result = eval(input.value);
                    inputBox.value = result;
                    console.log("HEY");
                } catch (error) {
                    inputBox.value = "Error";
                }
             } */

        });
    }
});