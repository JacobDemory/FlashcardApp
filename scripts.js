const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {
    const card = document.getElementById('flashcard');
    const curcard = flashcards[currentIndex];

    if (showingTerm) {
      card.textContent = curcard.term;
    } else {
      card.textContent = curcard.definition;
    }


}

// The rest of the code you will write is apart of event listeners
displayCard();

function flipCard() {
 if (showingTerm) {
  showingTerm = false;
 } else {
  showingTerm = true;
 }
 displayCard();
}

function showNext() {
  if (currentIndex + 1 > flashcards.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  showingTerm = true;
  displayCard();
}

function showPrev() {
  if (currentIndex - 1 < 0) {
    currentIndex = flashcards.length - 1;
  } else {
    currentIndex--;
  }
  showingTerm = true;
  displayCard();
}

function addCard() {
  const newTerm = document.getElementById('new-term').value;
  const newDef = document.getElementById('new-definition').value;

  if (newTerm && newDef) {
    flashcards.push({term: newTerm, definition: newDef});
    document.getElementById('new-term').value = "";
    document.getElementById('new-definition').value = "";

    document.getElementById('new-term').placeholder = "Enter term";
    document.getElementById('new-definition').placeholder = "Enter definition";
    alert("New Flashcard Added Successfully");
  } else {
    alert("Cannot Add Flashcard: Please make sure the Term and Definition have Inputs");
  }
}

function addWithEnter(event) {
if (event.key == "Enter") {
  addCard();
}
}

document.getElementById('next-btn').addEventListener('click', showNext);
document.getElementById('prev-btn').addEventListener('click', showPrev);
document.getElementById('flashcard').addEventListener('click', flipCard);
document.getElementById('add-card-btn').addEventListener('click', addCard);
document.getElementById('new-term').addEventListener('keypress', addWithEnter);
document.getElementById('new-definition').addEventListener('keypress', addWithEnter);
// This line will display the card when the page is refreshed
window.onload = displayCard;