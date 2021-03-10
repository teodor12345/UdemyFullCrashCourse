// statring with if statmantes //


var isPremiumUser = false;  
if(isPremiumUser){
    console.log(" thanks for beeing loyal custumer ")
} else{
    console.log("you shuld subscribe to our premium servie")
}

var myAge=7;
if (myAge<1){
    console.log("you are babby")
}else if(myAge < 3){
    console.log("you are a more than a babby")
}else if (myAge < 7){
    console.log("you are a big babby")
}else if(myAge < 17){
    console.log("you are a tineger")
}else if ( myAge < 40){
    console.log("you are an addult")
} else{
    console.log("you are not in our records")
} 

// in this exsample will see how if prits out the results in what order //

// we compared a true and flase with if and we copared if statments with integer and how it prints out the results using if else in what order //

// we leraned what is joda code (star wars) dont whrite lik taht ex-if (1 > my age )- joda code  <=> the right way is if (my age < 1)



// STrting with for loops //

for(i=0;i < 10;i++){
    console.log("curent i vlaye is " + i);
}


// it repaeats something until comes to 10 , it stratrs with 0 , 1, 2,3 , 4, 5, 6, 7 , 8, 9  = for (i=0; i < 10 ; i++) //



// stu=atrhing wit functions //


function myFunction(){
    console.log("My name is Teodor ");
}
 myFunction();


function PrintName(name , age ){
console.log("hello my name is " , name , ", you are " , age ,  " years old");
}
PrintName( "Teodor");
PrintName("Petar");
PrintName("Teodor" , 28)


// we have defined functions and how they print //


//Strating with more about functions and learn more //

// learn what is an event handle = in button the button is the event once you click on it the action tha it will take is the handaling //

// camille case in java script is the way you give name to function ( twwo words are together but once you start the second word you started
 // with a big lether like - buttonClicked - thus making it a CAMILLE with a hump like the animal)
  
 var btn = document.getElementById ("go-button");



function buttonClicked(){
    console.log("button clicked");
    btn.removeEventListener("click" , buttonClicked);
    document.getElementById("text").innerHTML = "dont do it";
    console.log(document.getElementById("text").innerHTML = "dont do it");
}

 btn.addEventListener("click",buttonClicked);


// getlemeneBu and eventListiner //





















