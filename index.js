const opponent = document.getElementById("Opponent_label")
const result = document.getElementById("result")
const mine = document.getElementById("my_choose")
let randomnum1 
let max =3; let min = 1;
let ch;


const s =  document.getElementById("scissor");
const p =  document.getElementById("paper");
const r =  document.getElementById("rock");

s.onclick = function(){
    ch = 's';
    update();
    playgame();
}
p.onclick = function(){
    ch = 'p';
    update();
    playgame();
}
r.onclick = function(){
    ch = 'r';
    update();
    playgame();
}

function update(){
    if (ch === 'r') {
        mine.textContent = `Rock`;
    } else if (ch === 'p') {
        mine.textContent = `Paper`;
    } else if (ch == 's') {
        mine.textContent = `Scissor`;
    }
}
function generate_choice(){
    let choices;
    choices = ['r', 'p', 's'];
    return choices[Math.floor(Math.random() * 3)];
}
function playgame(){
    let machine = generate_choice();
    if (machine == 'r') {
        opponent.textContent = `Rock`;
    } else if (machine =='p') {
        opponent.textContent = `Paper`;
    } else if (machine == 's') {
        opponent.textContent = `Scissor`;
    }

    let outcome;
    if(machine == ch)  result.textContent = `Draw`;

    else if (
        (ch === 'r' && machine === 's') ||
        (ch === 'p' && machine === 'r') ||
        (ch === 's' && machine === 'p')
    ) {
        result.textContent = `You win!`;

}else{
    result.textContent = `You loose`;
}
}


    