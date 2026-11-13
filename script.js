const questions = [
{
question: "What's your favorite thing to snack on after a long day?",
options: [
{ text: "A pizza or some burgers, some fast food is always yum", type: "foodiebunny" },
{ text: "Some cookies, tiramisu and cheescake.. Oh how I love sweets", type: "sweetbunny" },
{ text: "Always choose healthy, a salad or a quick sandwhich", type: "healthybunny" }
]
},
{
question: "Ahem... You have an exam tomorrow and you haven't studied a letter, what's the strategy?",
options: [
{ text: "Get in the mood, lo-fi beats a drink and many many pastel highlighters", type: "sweetbunny" },
{ text: "Start the pomodoro, organize the material into little tasks. Breaks of strecthing and water are neccesary.", type: "healthybunny" },
{ text: "wellll, load up the snacks, those are the gas for this journey, will be needed. Time for an all-nighter.", type: "foodiebunny" }
]
},
{
question: "What's your opinion on clothing and attire?",
options: [
{ text: "A cute outfit is always nice", type: "sweetbunny" },
{ text: "Bleh, what matters is tha it's practical and convenient to wear for me.", type: "foodiebunny" },
{ text: "I have to make sure I look presentable and neat.", type: "healthybunny" }
]
},
{
question: "When you are faced with conflict, what's your automatic reaction?",
options: [
{ text: "Discuss it and figure out my feelings, then take a decision when I've calmed down", type: "healthybunny" },
{ text: "Cry into my pillow...I could use a choclate rn...", type: "sweetbunny" },
{ text: "Stress eat then pick a fight. I can handle this", type: "foodiebunny" }
]
},
{
question: "What do you think of this lil test?",
options: [
    { text: "Cute!", type: "sweetbunny"},
    { text: "Efficient.", type: "healthybunny"},
    { text: "Looks nicee", type: "foodiebunny"},
]
}
];

const resultData = {
sweetbunny: {
title: "The (literally) sweet bunny",
desc: "Awh such a sweetiepie. A combo of sweet and sensitive, fully indulging in whatever sensation that comes your way. Cute.",
image: "./sweetbunny.png"
},
foodiebunny: {
title: "The (literally) casual bunny",
desc: "Unbothered and chill. Life can be nice if you just live it. A foodie and a brave soul i guess. Awesome.",
image: "./foodiebunny.png"
},
healthybunny: {
title: "The (literally) healthy bunny",
desc: "Such an ideal. Healthy in more than ways at once. Must be nice to live the standard. Keep it up.",
image: "./healthybunny.png"
}
};

let currentQuestionIndex = 0;
let scores = { sweetbunny: 0, foodiebunny: 0, healthybunny: 0 };

function startQuiz() {
document.getElementById("start-card").classList.add("hidden");
document.getElementById("quiz-card").classList.remove("hidden");
loadQuestion();
}

function loadQuestion() {
const currentQ = questions[currentQuestionIndex];
document.getElementById("question-text").innerText = currentQ.question;

const optionsContainer = document.getElementById("options-container");
optionsContainer.innerHTML = "";

currentQ.options.forEach(option => {
const button = document.createElement("button");
button.innerText = option.text;
button.className = "option-btn";
button.onclick = () => selectOption(option.type);
optionsContainer.appendChild(button);
});
}

function selectOption(type) {
scores[type]++;
currentQuestionIndex++;

if (currentQuestionIndex < questions.length) {
loadQuestion();
} else {
showResult();
}
}

function showResult() {
document.getElementById("quiz-card").classList.add("hidden");
document.getElementById("result-card").classList.remove("hidden");

const winningType = Object.keys(scores).reduce((a, b) =>
scores[a] > scores[b] ? a : b
);

const result = resultData[winningType];
document.getElementById("result-title").innerText = result.title;
document.getElementById("result-desc").innerText = result.desc;
document.getElementById("result-img").src = result.image;
}

function restartQuiz() {
currentQuestionIndex = 0;
scores = { sweetbunny: 0, foodiebunny: 0, healthybunny: 0 };

document.getElementById("result-card").classList.add("hidden");
document.getElementById("start-card").classList.remove("hidden");
}

