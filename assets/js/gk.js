// Wait for the DOM to finish loading before running the quiz
document.addEventListener("DOMContentLoaded", loadQuestion());

// --- DOM Elements
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const scoreBtn = document.getElementById("scoreBtn");
const nextBtn = document.getElementById("nextBtn");
const resetBtn = document.getElementById("resetBtn");
const scoreOutput = document.getElementById("scoreOutput");
const explanationEl = document.getElementById("explanation");
const congratsMsg = document.getElementById("congratsMsg");

// Variables
let currentQuestion = 0; // Index of the current question
let totalScore = 0; // User's score

//  QUIZ DATA -Array of questions
const quizData = [
    {
        question: "1. What is the color of the sky on a clear day?",
        options: ["Blue", "Green", "Red", "Yellow"],
        correct: 0,
        explanation:
            "The sky appears blue during the day due to the scattering of sunlight by the atmosphere.",
    },
    {
        question: "2. How many days are there in a leap year?",
        options: ["364", "365", "366", "367"],
        correct: 2,
        explanation:
            "A leap year has 366 days, which includes an extra day in February.",
    },
    {
        question: "3. Which animal is known as the ‘King of the Jungle’?",
        options: ["Lion", "Tiger", "Elephant", "Cheetah"],
        correct: 0,
        explanation:
            "The lion is often referred to as the ‘King of the Jungle’ due to its majestic appearance and position as a top predator.",
    },
    {
        question: "4. How many colors are there in a rainbow?",
        options: ["5", "6", "7", "8"],
        correct: 2,
        explanation:
            "There are 7 colors in a rainbow: red, orange, yellow, green, blue, indigo, and violet.",
    },
    {
        question: "5.Which is the largest ocean on Earth?",
        options: [
            "Atlantic Ocean",
            "Indian Ocean",
            "Arctic Ocean",
            "Pacific Ocean",
        ],
        correct: 3,
        explanation:
            "The Pacific Ocean is the largest and deepest ocean on Earth.",
    },
];
