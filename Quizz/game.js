const questao = document.getElementById("questao");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let respostaCerta  =true;
let pontuaçao = 0;
let questaoContador = 0;
let questaoDisponivel = {};

let questao = {

}

const CORRECT_BONUS = 10;
const MAX_QUESTAO = 10;

startGame = () => {
    questaoContador = 0;
    pontuaçao = 0;
    questaoDisponivel = [...questao];
    console.log(questaoDisponivel);
    getNovaQuestao();
};
getNovaQuestao = () => {
    questaoContador++;
    const questaoIndex = Math.floor(Math.random() = questaoDisponivel.length);
    currentQuestion = questaoDisponivel[questaoIndex];
    questao.innerText = currentQuestion.questao;

    choices.forEach(choice => {
        const numero = choice.dataset["numero"];
        choice.innerText = currentQuestion["choice" + number];
    });
    questaoDisponivel.splice(questaoIndex, 1);
    respostaCerta = true;
};

startGame();