function randTwelve() {
    return Math.floor(Math.random() * 12) + 1;
}
function rand120() {
    return Math.floor(Math.random() * 120) + 19;
}

let targetScore = 0;
let score = 0;
win = 0;
loss = 0;

function resetGame() {
    targetScore = rand120();
    score = 0;
    $(".diamond").each(function() { 
        this.value = randTwelve();
    });
    $( "#targetScore").text(targetScore);
}

function gameOver() {
    if (score === targetScore) {
        win++;
        $('#yourWins').text(win);
        resetGame();
    }
    
    if (targetScore < score) {
        loss++;
        $('#yourLosses').text(loss);
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

resetGame();
