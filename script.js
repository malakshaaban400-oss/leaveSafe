let out = document.getElementById("out");
let sleep = document.getElementById("sleep");
let away = document.getElementById("away");

let home = document.getElementById("home");
let checklist1 = document.getElementById("checklist1");
let checklist2 = document.getElementById("checklist2");
let checklist3 = document.getElementById("checklist3");

let finish1 = document.getElementById("finish1");
let finish2 = document.getElementById("finish2");
let finish3 = document.getElementById("finish3");

let result = document.getElementById("result");
let title = document.getElementById("title");
let count = document.getElementById("count");
let missingtext = document.getElementById("missingtext");

checklist1.style.display = "none";
checklist2.style.display = "none";
checklist3.style.display = "none";
result.style.display = "none";

out.addEventListener("click" , function(){
    home.style.display = "none";
    checklist1.style.display = "block";
});

sleep.addEventListener("click" , function(){
    home.style.display = "none";
    checklist2.style.display = "block";
});

away.addEventListener("click" , function(){
    home.style.display = "none";
    checklist3.style.display = "block";
});

function checkresult(checklist){
    let boxes=checklist.querySelectorAll("input[type='checkbox']");
    let checked=0;
    let missing="";

    for(let i=0 ; i<boxes.length ; i++)
    {
        if(boxes[i].checked)
        {
            checked++;
        }
        else 
        {
            missing+="• "+boxes[i].parentElement.innerText+"<br>";
        }
    }
    checklist.style.display="none";
    result.style.display="block";
    count.innerHTML=checked+" / "+boxes.length +" checked";

    if(checked==boxes.length)
    {
        title.innerHTML="✓ ALL CLEAR";
        missingtext.innerHTML="Your home is ready";
    }
    else{
        title.innerHTML="⚠️ Your check is not complete";
        missingtext.innerHTML="Don't forget to check :"+"<br>"+missing;
    }


}

finish1.addEventListener("click" , function(){
    checkresult(checklist1);
});

finish2.addEventListener("click" , function(){
    checkresult(checklist2);
});

finish3.addEventListener("click" , function(){
    checkresult(checklist3);
});