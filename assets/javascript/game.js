// crystal numbers 1-12
// Score is between 19-120

const crystalNum = [1,2,3,4,5,6,7,8,9,10,11,12];
console.log(crystalNum[4]);


$( ".diamond" ).click(function() {
    alert( "Handler for .click() called." );
});


function getRandomNumber() {
    return Math.floor(Math.random() * 12) + 1;
}

//Then, use the jQuery .each() method like this

$(".crystal").each(function() { 
    $(this).attr("data-random-value", getRandomNumber());
})

//The each method will go through each element with that crystal class 
//and attach a different random number to each one. (edited) 
//Then you don't need your loop, because .each() does it for you