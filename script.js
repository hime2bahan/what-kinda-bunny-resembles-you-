const questions = [
{
question: "What's your favorite thing to snack on after a long day?",
options: [
{ text: "A pizze or some burgers, some fast food is always yum", type: "foodiebunny" },
{ text: "Some cookies, tirmasiu and cheescake.. Oh how I love sweets", type: "sweetbunny" },
{ text: "Always choose healthy, a salad or a quick sandwhich", type: "healthybunny" }
]
},
{
question: "When you are faced with conflict, what's your automatic reaction?",
options: [
{ text: "Discuss it and figure out my feelings, then take a decision when I've calmed down", type: "healthybunny" },
{ text: "Cry into my pillow...I could use a choclate rn...", type: "sweetbunny" },
{ text: "Stress eat then pick a fight. I can handle this", type: "foodiebunny" }
]
}
];

// Defining result descriptions
const resultData = {
sweetbunny: {
title: "The (literally) sweet bunny",
desc: "Awh such a sweetiepie. A combo of sweet and sensitive, fully indulging in whatever sensation that comes your way. Cute."
},
foodiebunny: {
title: "The (literally) casual bunny",
desc: "Unbothered and chill. Life can be nice if you just live it. A foodie and a brave soul i guess. Awesome."
},
healthybunny: {
title: "The (literally) healthy bunny",
desc: "Such an ideal. Healthy in more than ways at once. Must be nice to live the standard. Keep it up."
}
};

// Tracking questions and scores
let currentQuestionIndex = 0;
let scores = { sweetbunny: 0, foodiebunny: 0, healthybunny: 0 };

function loadQuestion() {
// Get the current question object from our array
const currentQ = questions[currentQuestionIndex];

// Update the HTML heading with the question text
document.getElementById("question-text").innerText = currentQ.question;

// Grab the options container and clear out any old buttons from previous questions
const optionsContainer = document.getElementById("options-container");
optionsContainer.innerHTML = "";

// Loop through each option in the current question and build a button for it
currentQ.options.forEach(option => {
const button = document.createElement("button");
button.innerText = option.text;
button.className = "option-btn";

// When clicked, record the choice and move forward
button.onclick = () => selectOption(option.type);

// Add the newly created button into the options container on your page
optionsContainer.appendChild(button);
});
}

function selectOption(type) {
// Add 1 to the score of the selected category
scores[type]++;

// Move to the next question index
currentQuestionIndex++;

// If there are more questions, load the next one. Otherwise, show results!
if (currentQuestionIndex < questions.length) {
loadQuestion();
} else {
showResult();
}
}

function showResult() {
// Hide the question text and options container
document.getElementById("question-text").classList.add("hidden");
document.getElementById("options-container").classList.add("hidden");

// Reveal the result card
document.getElementById("result-card").classList.remove("hidden");

// Find which bunny category scored the highest
const winningType = Object.keys(scores).reduce((a, b) =>
scores[a] > scores[b] ? a : b
);

// Populate the title and description from our resultData object
const result = resultData[winningType];
document.getElementById("result-title").innerText = result.title;
document.getElementById("result-desc").innerText = result.desc;
}

function restartQuiz() {
// Reset state variables back to initial values
currentQuestionIndex = 0;
scores = { sweetbunny: 0, foodiebunny: 0, healthybunny: 0 };

// Hide the result card and re-reveal the quiz elements
document.getElementById("result-card").classList.add("hidden");
document.getElementById("question-text").classList.remove("hidden");
document.getElementById("options-container").classList.remove("hidden");

// Load the first question again
loadQuestion();
}

// Kick off the quiz on initial page load
loadQuestion();

