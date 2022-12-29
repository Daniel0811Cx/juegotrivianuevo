let score = 0;
let currentQuestion = 0;

const questions = [
    {
        question: "¿Cuál es el nombre real de Jin?",
        answers: [
            "Kim Seok-jin",
            "Min Yoongi",
            "Jung Hoseok",
            "Kim Taehyung"
        ],
        correctAnswer: "Kim Seok-jin"
    },
    {
        question: "¿Cuál es el nombre real de Suga?",
        answers: [
            "Kim Namjoon",
            "Kim Seok-jin",
            "Min Yoongi",
            "Jung Hoseok"
        ],
        correctAnswer: "Min Yoongi"
    },

    {
        question: "¿Cuál es el primer álbum completo de BTS?",
        answers: [
            "Dark & Wild",
            "2 Cool 4 Skool",
            "Love Yourself: Her",
            "Map of the Soul: Persona"
        ],
        correctAnswer: "Dark & Wild"
    },
    {
        question: "¿Cuál es el nombre del sello discográfico de BTS?",
        answers: [
            "Big Hit Entertainment",
            "YG Entertainment",
            "SM Entertainment",
            "JYP Entertainment"
        ],
        correctAnswer: "Big Hit Entertainment"
    },
    {
        question: "¿Cuáles son los idiomas que hablan los miembros de BTS?",
        answers: [
            "Coreano e inglés",
            "Coreano e italiano",
            "Coreano e japonés",
            "Coreano e español"
        ],
        correctAnswer: "Coreano e inglés"
    },

    {
        question: "¿Qué significa BTS?",
        answers: [
            "Bangtan Sonyeondan",
            "Beyond the Scene",
            "Best in the Scene",
            "Boy's Toys"
        ],
        correctAnswer: "Bangtan Sonyeondan"
    },
    {
        question: "¿Cuál es el nombre del primer single japonés de BTS?",
        answers: [
            "Danger",
            "I Need U",
            "For You",
            "Blood Sweat & Tears"
        ],
        correctAnswer: "For You"
    },
    {
        question: "¿Cuántos álbumes de estudio ha lanzado BTS?",
        answers: [
            "4",
            "5",
            "6",
            "7"
        ],
        correctAnswer: "7"
    },
    {
        question: "¿Cuál es el título del primer álbum completo de BTS en español?",
        answers: [
            "Otro día más en paradise",
            "Amo a mi soledad",
            "No más sueño",
            "Dónde voy sin ti"
        ],
        correctAnswer: "Otro día más en paradise"
    },
    {
        question: "¿Cuál es el título de la canción principal del primer álbum completo de BTS?",
        answers: [
            "N.O",
            "We are bulletproof pt.2",
            "No More Dream",
            "I Like It"
        ],
        correctAnswer: "No More Dream"
    },
    {
        question: "¿Qué premio ganó BTS en la ceremonia de los American Music Awards de 2017?",
        answers: [
            "Mejor álbum pop/rock",
            "Mejor grupo pop/rock",
            "Mejor artista nuevo",
            "Mejor artista internacional"
        ],
        correctAnswer: "Mejor artista internacional"
    },
    {
        question: "¿Cuál es el nombre del primer álbum en solitario de Jin?",
        answers: [
            "Agust D",
            "Map of the Soul: 7",
            "Love Yourself: Tear",
            "Epiphany"
        ],
        correctAnswer: "Epiphany"
    },
    {
        question: "¿Cuál es el título del primer álbum en solitario de Jimin?",
        answers: [
            "Always",
            "Promise",
            "Filter",
            "Serendipity"
        ],
        correctAnswer: "Promise"
    },
    {
        question: "¿Cuál es el título del primer álbum en solitario de J-Hope?",
        answers: [
            "Hope World",
            "Love Yourself: Answer",
            "Map of the Soul: Persona",
            "The Most Beautiful Moment in Life"
        ],
        correctAnswer: "Hope World"
    },
    {
        question: "¿Cuál es el nombre del primer álbum en solitario de V?",
        answers: [
            "Map of the Soul: Persona",
            "Agust D",
            "Love Yourself: Tear",
            "Singularity"
        ],
        correctAnswer: "Singularity"
    },
    {
        question: "¿Cuál es el título de la canción principal del último álbum de BTS?",
        answers: [
            "Dynamite",
            "Savage Love (Laxed - Siren Beat)",
            "Levitating",
            "Mood"
        ],
        correctAnswer: "Dynamite"
    }
    // más preguntas aquí
];

function checkAnswer(e) {
    // obtener la respuesta seleccionada
    const selectedAnswer = e.target.innerHTML;

    // comprobar si la respuesta es correcta
    const question = questions[currentQuestion];
    if (selectedAnswer === question.correctAnswer) {
        // aumentar la puntuación
        score++;

        // mostrar un mensaje de éxito
        const messageElement = document.getElementById("message");
        messageElement.innerHTML = "¡Correcto!";
        messageElement.classList.add("success");
        messageElement.classList.remove("error");
    } else {
        // mostrar un mensaje de error
        const messageElement = document.getElementById("message");
        messageElement.innerHTML = "¡Incorrecto!";
        messageElement.classList.add("error");
        messageElement.classList.remove("success");
    }
}
function showQuestion() {
    // obtener la pregunta actual
    const question = questions[currentQuestion];

    // mostrar la pregunta en la pantalla
    const questionElement = document.getElementById("question");
    questionElement.innerHTML = question.question;

    // mostrar las respuestas en la pantalla
    const answerElements = document.querySelectorAll(".answer");
    for (let i = 0; i < answerElements.length; i++) {
        answerElements[i].innerHTML = question.answers[i];
    }
}

function nextQuestion() {
    // pasar a la siguiente pregunta
    currentQuestion++;

    // comprobar si se han agotado las preguntas
    if (currentQuestion >= questions.length) {
        // mostrar la puntuación final y un mensaje de felicitación
        const messageElement = document.getElementById("message");

        if (score > 10) {
            messageElement.innerHTML = `¡Felicidades! Has completado el juego con una puntuación de ${score} puntos. Eres una fan nivel natalia!`;

        }

        if (score > 5 && score < 10) {
            messageElement.innerHTML = `¡Felicidades! Has completado el juego con una puntuación de ${score} puntos. Eres una fan casual!`;

        }
        if (score < 5) {
            messageElement.innerHTML = `¡Felicidades! Has completado el juego con una puntuación de ${score} puntos. Eres una fan en inicios!`;

        }
        messageElement.classList.remove("error");
        messageElement.classList.remove("success");

        // ocultar la pregunta y las respuestas
        const questionElement = document.getElementById("question");
        questionElement.style.display = "none";
        const answerElements = document.querySelectorAll(".answer");
        for (const answerElement of answerElements) {
            answerElement.style.display = "none";
        }

        // mostrar el botón de reinicio
        const restartButton = document.getElementById("restartButton");
        restartButton.style.display = "block";
        showQuestion();
    } else {
        // mostrar la siguiente pregunta
        showQuestion();

        // ocultar el mensaje
        const messageElement = document.getElementById("message");
        messageElement.innerHTML = "";
    }
}

function restartGame() {
    // reiniciar la puntuación y la pregunta actual
    score = 0;
    currentQuestion = 0;

    // mostrar la primera pregunta y las respuestas
    const questionElement = document.getElementById("question");
    questionElement.style.display = "block";
    const answerElements = document.querySelectorAll(".answer");
    for (const answerElement of answerElements) {
        answerElement.style.display = "inline";
    }

    // ocultar el mensaje y el botón de reinicio
    const messageElement = document.getElementById("message");
    messageElement.innerHTML = "";
    const restartButton = document.getElementById("restartButton");
    restartButton.style.display = "none";

    // mostrar la primera pregunta
    showQuestion();
}

// asignar las funciones de comprobación de respuesta y paso a la siguiente pregunta a los eventos click de las respuestas
const answerElements = document.querySelectorAll(".answer");
for (const answerElement of answerElements) {
    answerElement.addEventListener("click", checkAnswer);
    answerElement.addEventListener("click", nextQuestion);
}

// asignar la función de reinicio al evento click del botón de reinicio
const restartButton = document.getElementById("restartButton");
restartButton.addEventListener("click", restartGame);


showQuestion();