
document.addEventListener("DOMContentLoaded", function(event) {
    let calc_button = document.getElementById("calc");
    calc_button.addEventListener("click", function(event) {
        
        let player1_one = document.getElementById("player1_one").value;
        let player1_two = document.getElementById("player1_two").value;
        let player1_three = document.getElementById("player1_three").value;
        let player1_four = document.getElementById("player1_four").value;
        let player1_five = document.getElementById("player1_five").value;
        let player1_six = document.getElementById("player1_six").value;

        let summa = 
        player1_one + 
        player1_two + 
        player1_three +
        player1_four + 
        player1_five + 
        player1_six;
    
        console.log(summa);
    });

})