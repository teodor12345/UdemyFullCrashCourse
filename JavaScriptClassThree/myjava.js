
 //startig arayy//
 // multidemensional array is when you have arrays in one array //


 var hobies =["nature exploring" ,"pizza","poker","reading"];
 console.log(hobies);

 // the pop method  or pop  is doing is removing the last item of an array //

 console.log(hobies.pop());
 


 // other method is push metod or it pusehes a element in to the array //   
 
hobies.push("music");
console.log(hobies);

// the shift metod or remuving elenet for the begining//


hobies.shift("nature exploring");
console.log(hobies.shift());


// unshift is a method to add a element in to the begining od the array //

hobies.unshift("runing");


// array length , loop trugh array//


hobies.forEach(function(item,index){
console.log("i like " , item);        // thi is a method // //( i like ) is added plus item -music,nature explorin
});

// starting with splice wich is a take on one of the elements in array it doesent have to be at the start od the end it can be fron anyvere in the array ////
if (hobies.indexOf("reading") >-1){
console.log("i like reading")
}
 if (hobies.indexOf("sports") === -1){
     console.log("not in the array");  // using ther equal signs === menas does the value match and does is it the same tip while == means does is the same value//

 } 


 // we use === when we look for something specific  and if we want to know if its the same tipe, if we want not to be the same tip we use !== //


// learning how to interact bu grabing a value //
// starting with geting the values from inputs //


var btn = document.getElementById ("go-button");



function buttonClicked(){
    console.log("button clicked");
    btn.removeEventListener("click" , buttonClicked);
    document.getElementById("text").innerHTML = "dont do it";
    console.log(document.getElementById("text").innerHTML = "dont do it");
}

 btn.addEventListener("click",buttonClicked);
















