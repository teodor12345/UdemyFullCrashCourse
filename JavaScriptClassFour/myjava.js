
var btn = document.getElementById ("go-button");



function buttonClicked(){
    console.log("button clicked");
    
   var coustomText = document.getElementsByClassName("my-input");
   var results = document.getElementById("text");
    console.log (coustomText);
    results.innerHTML =  " hello " + coustomText[0].value;
}

 btn.addEventListener("click",buttonClicked);
