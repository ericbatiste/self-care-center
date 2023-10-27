var affirmBtn = document.querySelector("#affirmation");
var mantraBtn = document.querySelector("#mantra");
var receiveMsgBtn = document.querySelector("#receive-msg-btn");
var viewAllBtn = document.querySelector("#view-all-btn");
var goHomeBtn = document.querySelector('.go-home-btn');
var msgContainer = document.querySelector(".msg-container");
var inputsContainer = document.querySelector('.inputs-container');
var viewAllMsgs = document.querySelector('.view-all-msgs');

var currentMessage;

receiveMsgBtn.addEventListener('click', receiveMessage);
viewAllBtn.addEventListener('click', showViewAllPage);
goHomeBtn.addEventListener('click', showHomePage)

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

function showViewAllPage() {
    toggle(msgContainer);
    toggle(inputsContainer);
    toggle(viewAllBtn);
    toggle(viewAllMsgs);
}

function showHomePage() {
    toggle(msgContainer);
    toggle(inputsContainer);
    toggle(viewAllBtn);
    toggle(viewAllMsgs);    
}

function toggle(element) {
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
    } else {
        element.classList.add('hidden');
    }
    return element;
}

function getRandomMessage(array) {
  return Math.floor(Math.random() * array.length);
}
