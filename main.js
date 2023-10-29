var affirmBtn = document.querySelector("#affirmation");
var mantraBtn = document.querySelector("#mantra");
var receiveMsgBtn = document.querySelector("#receive-msg-btn");
var viewAllBtn = document.querySelector("#view-all-btn");
var goHomeBtn = document.querySelector(".go-home-btn");
var inputsContainer = document.querySelector(".inputs-container");
var msgContainer = document.querySelector(".msg-container");
var meditationBell = document.querySelector("#meditation-bell");
var viewAllMsgs = document.querySelector(".view-all-msgs");
var affirmList = document.querySelector(".affirm-list");
var mantraList = document.querySelector(".mantra-list");
var newAffirmForm = document.querySelector("#new-affirm-form");
var newMantraForm = document.querySelector("#new-mantra-form");
var newAffirmText = document.querySelector("#new-affirmation");
var newMantraText = document.querySelector("#new-mantra");

var currentMessage;

window.addEventListener("load", renderAllMessageLists);
viewAllMsgs.addEventListener("dblclick", (e) => {
  deleteAffirmation(e);
  deleteMantra(e);
});
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
  setTimeout(resetMessageDisplay, 8000);
}

function renderMessage() {
  msgContainer.innerHTML = "";
  msgContainer.innerHTML += `<span>${currentMessage}</span>`;
}

function resetMessageDisplay() {
  msgContainer.innerHTML = "";
  msgContainer.innerHTML += `<img id="meditation-bell" src="assets/meditate.svg" alt="Meditation Bell">`;
}

function renderAllMessageLists() {
  affirmList.innerHTML = "";
  for (var i = 0; i < affirmations.length; i++) {
    affirmList.innerHTML += `<li id="${affirmations[i].id}">${affirmations[i].text}</li>`;
    saveAffirms();
  }
  mantraList.innerHTML = "";
  for (var i = 0; i < mantras.length; i++) {
    mantraList.innerHTML += `<li id="${mantras[i].id}">${mantras[i].text}</li>`;
    saveMantras();
  }
}

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

function deleteAffirmation(e) {
  for (var i = 0; i < affirmations.length; i++) {
    if (Number(e.target.id) === affirmations[i].id) {
      affirmations.splice(i, 1);
    }
  }
  saveAffirms();
  renderAllMessageLists();
}

function deleteMantra(e) {
  for (var i = 0; i < mantras.length; i++) {
    if (Number(e.target.id) === mantras[i].id) {
      mantras.splice(i, 1);
    }
  }
  saveMantras();
  renderAllMessageLists();
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

function saveAffirms() {
  return localStorage.setItem("affirms-to-keep", JSON.stringify(affirmations));
}

function saveMantras() {
  return localStorage.setItem("mantras-to-keep", JSON.stringify(mantras));
}
