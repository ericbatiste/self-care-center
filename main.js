var affirmBtn = document.querySelector("#affirmation");
var mantraBtn = document.querySelector("#mantra");
var receiveMsgBtn = document.querySelector("#receive-msg-btn");
var viewAllBtn = document.querySelector("#view-all-btn");
var goHomeBtn = document.querySelector(".go-home-btn");
var msgContainer = document.querySelector(".msg-container");
var inputsContainer = document.querySelector(".inputs-container");
var viewAllMsgs = document.querySelector(".view-all-msgs");
var affirmList = document.querySelector(".affirm-list");
var mantraList = document.querySelector(".mantra-list");
var newAffirmForm = document.querySelector("#new-affirm-form");
var newMantraForm = document.querySelector("#new-mantra-form");
var newAffirmText = document.querySelector("#new-affirmation");
var newMantraText = document.querySelector("#new-mantra");

var currentMessage;

window.addEventListener("load", renderAllMessageLists);
receiveMsgBtn.addEventListener("click", receiveMessage);
viewAllBtn.addEventListener("click", showViewAllPage);
goHomeBtn.addEventListener("click", showHomePage);
newAffirmForm.addEventListener("submit", addNewAffirmation);
newMantraForm.addEventListener("submit", addNewMantra);

function receiveMessage() {
  if (!affirmBtn.checked && !mantraBtn.checked) return;
  if (affirmBtn.checked) {
    affirmBtn.checked = false;
    currentMessage = affirmations[getRandomMessage(affirmations)].text;
  }
  if (mantraBtn.checked) {
    mantraBtn.checked = false;
    currentMessage = mantras[getRandomMessage(mantras)].text;
  }
  renderMessage();
}

function renderMessage() {
  msgContainer.innerText = currentMessage;
}

function renderAllMessageLists() {
  affirmList.innerHTML = "";
  for (var i = 0; i < affirmations.length; i++) {
    affirmList.innerHTML += `
        <div class="list-msg">
            <li>${affirmations[i].text}</li>
            <button class="delet-btn">-</button>
        </div>`;
  }
  mantraList.innerHTML = "";
  for (var i = 0; i < mantras.length; i++) {
    mantraList.innerHTML += `
        <div class="list-msg">
            <li>${mantras[i].text}</li>
            <button class="delet-btn">-</button>
        </div>`;
  }
}

// function addNewMessage(message, array) {
//     event.preventDefault();
//     if (!message.value) return;
//     array.push(createNewMessage(message.value))
//     renderAllMessageLists()
// }

function addNewAffirmation() {
  event.preventDefault();
  if (!newAffirmText.value) return;
  affirmations.push(createNewMessage(newAffirmText.value));
  renderAllMessageLists();
  newAffirmForm.reset();
}

function addNewMantra() {
  event.preventDefault();
  if (!newMantraText.value) return;
  mantras.push(createNewMessage(newMantraText.value));
  renderAllMessageLists();
  newMantraForm.reset();
}

function createNewMessage(text) {
  return { id: Date.now(), text: text };
}

function showViewAllPage() {
  toggle(msgContainer);
  toggle(inputsContainer);
  toggle(viewAllBtn);
  toggle(viewAllMsgs);
  toggle(goHomeBtn);
}

function showHomePage() {
  toggle(msgContainer);
  toggle(inputsContainer);
  toggle(viewAllBtn);
  toggle(viewAllMsgs);
  toggle(goHomeBtn);
}

function toggle(element) {
  if (element.classList.contains("hidden")) {
    element.classList.remove("hidden");
  } else {
    element.classList.add("hidden");
  }
  return element;
}

function getRandomMessage(array) {
  return Math.floor(Math.random() * array.length);
}
