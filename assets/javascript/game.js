
function rand120() {
    return Math.floor(Math.random() * 120) + 19;
}
let targetScore = 0;
let score = 0;

function resetGame() {
    targetScore = rand120();
    score = 0;
    $(".diamond").each(function() { 
        this.value = randTwelve();
    });
    $( "#targetScore").text(targetScore);
}

function randTwelve() {
    return Math.floor(Math.random() * 12) + 1;
}

function gameOver() {
    if (score === targetScore) {
        console.log("you win!");
        resetGame();
    } else if (targetScore < score) {
        console.log("you lose...");
        resetGame();
    }
}





$("#red").click(function(){
    score += parseInt(this.value);
    $("#yourScore").text(score);
    gameOver(); 
});

$("#blue").click(function(){
    score += parseInt(this.value);
    $("#yourScore").text(score); 
    gameOver();  
});

$("#yellow").click(function(){
    score += parseInt(this.value);
    $("#yourScore").text(score);
    gameOver();   
});


$("#green").click(function(){
    score += parseInt(this.value);
    $("#yourScore").text(score); 
    gameOver();  
});

console.log($( "#targetScore").text());
console.log($( "#yourScore").text());

if( score++ > $( "#targetScore").text()){
    console.log('test pass');
}

resetGame();
