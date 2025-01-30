<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Juego de Preguntas - Logística</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="game-container">
        <h1>Juego de Preguntas - Logística</h1>
        <p>Ingresa tu nombre:</p>
        <input type="text" id="playerName" placeholder="Tu nombre">
        <button onclick="startGame()">Iniciar</button>
        <div id="game" style="display: none;">
            <p class="progress">Pregunta <span id="currentQuestion">1</span> de 15</p>
            <p class="question" id="questionText"></p>
            <div class="options" id="options"></div>
            <p class="feedback" id="feedback"></p>
        </div>
        <div id="result" style="display: none;">
            <h2>¡Juego Terminado!</h2>
            <p id="finalScore"></p>
            <p id="finalTime"></p>
            <p id="farewell"></p>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
body { 
    font-family: Arial, sans-serif; 
    text-align: center; 
    background-color: #87CEEB; 
    overflow: hidden; 
}
.game-container { 
    max-width: 600px; 
    margin: auto; 
    padding: 20px; 
    background: white; 
    border-radius: 10px; 
    box-shadow: 0 0 10px rgba(0,0,0,0.3); 
}
.question { 
    font-size: 18px; 
    margin: 20px 0; 
}
.options button { 
    display: block; 
    width: 100%; 
    margin: 5px 0; 
    padding: 10px; 
    transition: transform 0.2s; 
}
.options button:hover { 
    transform: scale(1.05); 
    background-color: #4CAF50; 
    color: white; 
}
.progress { 
    margin: 20px 0; 
    font-weight: bold; 
}
.feedback { 
    font-size: 20px; 
    font-weight: bold; 
    margin-top: 10px; 
}
.character { 
    width: 100px; 
    position: absolute; 
    bottom: 10px; 
    left: 10px; 
    animation: bounce 0.5s infinite; 
}
@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}
const questions = [
    { q: "¿Cuál es la principal causa del desperdicio de alimentos y bebidas?", options: ["Mal almacenamiento", "Daños, pérdidas y retrasos en el transporte", "Falta de demanda"], answer: 1 },
    { q: "¿Cuántos alimentos desperdicia en promedio un transportista al año?", options: ["1 millón", "2.4 millones", "3.5 millones"], answer: 1 },
    { q: "¿Qué factor tiene el mayor impacto en la fluctuación de los precios de los alimentos?", options: ["Costos logísticos", "Competencia de supermercados", "Subsidios agrícolas"], answer: 0 },
    // Agrega más preguntas según sea necesario...
];

let currentIndex = 0, score = 0, startTime;

function startGame() {
    const playerName = document.getElementById("playerName").value;
    if (!playerName) { alert("Ingresa tu nombre"); return; }
    startTime = new Date();
    document.querySelector(".game-container h1").innerText = `¡Bienvenido, ${playerName}!`;
    document.getElementById("game").style.display = "block";
    document.getElementById("playerName").style.display = "none";
    document.querySelector("button").style.display = "none";
    loadQuestion();
}

function loadQuestion() {
    if (currentIndex >= questions.length) { endGame(); return; }
    document.getElementById("currentQuestion").innerText = currentIndex + 1;
    document.getElementById("questionText").innerText = questions[currentIndex].q;
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";
    questions[currentIndex].options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    if (selectedOption === questions[currentIndex].answer) {
        score++;
        document.getElementById("feedback").innerText = "¡Correcto!";
    } else {
        document.getElementById("feedback").innerText = "Incorrecto. La respuesta correcta es: " + questions[currentIndex].options[questions[currentIndex].answer];
    }
    currentIndex++;
    setTimeout(() => {
        document.getElementById("feedback").innerText = "";
        loadQuestion();
    }, 1000);
}

function endGame() {
    const endTime = new Date();
    const timeTaken = Math.round((endTime - startTime) / 1000);
    document.getElementById("game").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("finalScore").innerText = `Puntuación final: ${score} de ${questions.length}`;
    document.getElementById("finalTime").innerText = `Tiempo total: ${timeTaken} segundos`;
    document.getElementById("farewell").innerText = "¡Gracias por jugar!";
}
