let expression="";
let list;
let input=document.getElementById("input");
let buttons=document.querySelectorAll("button");

for(list of buttons){
    list.addEventListener("click" ,(e) =>{

        let inputTex=e.target.innerText;

        console.log("inner text is" +inputTex);

        if(inputTex=='X'){
            inputTex='*';

            expression+=inputTex;
            input.value=expression;
        }
        else if(inputTex=='C'){
            expression="";
            input.value=expression;
        }
        else if(inputTex=='='){
            input.value=eval(expression);
        }
        else{
            expression+=inputTex;
            input.value=expression;    
        }
    })
}








