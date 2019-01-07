


function randTwelve() {
    return Math.floor(Math.random() * 12) + 1;
}
function rand120() {
   return Math.floor(Math.random() * 120) + 19;
}

$( "#targetScore").text(rand120);

$(".diamond").each(function() { 
    this.value = rand120();
    return this.value;
});

let score = 0;
$(".diamond").click(function(){
    score += randTwelve();
    $("#yourScore").text(score);
    
});












//The each method will go through each element with that crystal class 
//and attach a different random number to each one. (edited) 
//Then you don't need your loop, because .each() does it for you

// $( ".diamond" ).click(randTwelve);
// $( ".diamond" ).click(rand120);

// $(this).attr("value", randTwelve());
