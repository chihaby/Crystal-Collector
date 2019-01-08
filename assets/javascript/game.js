function rand120() {
   return Math.floor(Math.random() * 120) + 19;
}

function randTwelve() {
    return Math.floor(Math.random() * 12) + 1;
}

$( "#targetScore").text(rand120);

$(".diamond").each(function() { 
    this.value = randTwelve();
    return this.value;
});

let score = 0;

$("#red").click(function(){
    score += parseInt(this.value);
    $("#yourScore").text(score);   
});

$("#blue").click(function(){
    score += parseInt(this.value);
    $("#yourScore").text(score);   
});

$("#yellow").click(function(){
    score += parseInt(this.value);
    $("#yourScore").text(score);   
});


$("#green").click(function(){
    score += parseInt(this.value);
    $("#yourScore").text(score);   
});

if($('#yourScore') > $('#targetScore')){
    console.log('test pass');
}

