var affirmBtn = document.querySelector("#affirmation");
var mantraBtn = document.querySelector("#mantra");
var receiveMsgBtn = document.querySelector("#receive-msg-btn");
var msgContainer = document.querySelector(".msg-container");

var currentMessage;

receiveMsgBtn.addEventListener("click", receiveMessage);

function receiveMessage() {
  if (!affirmBtn.checked && !mantraBtn.checked) return;
  if (affirmBtn.checked) {
    affirmBtn.checked = false;
    currentMessage = affirmations[getRandomMessage(affirmations)];
  }
  if (mantraBtn.checked) {
    mantraBtn.checked = false;
    currentMessage = mantras[getRandomMessage(mantras)];
  }
  renderMessage()
}

function renderMessage() {
    msgContainer.innerText = currentMessage;
}

function getRandomMessage(array) {
  return Math.floor(Math.random() * array.length);
}
