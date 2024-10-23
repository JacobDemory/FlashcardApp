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
  const cardContent = document.getElementById('flashcard');
  cardContent.textContent = showingTerm ? flashcards[currentIndex].term : flashcards[currentIndex].definition;
}

// The rest of the code you will write is apart of event listeners
displayCard();

function toggleCard() {
  showingTerm = !showingTerm; // Toggle the boolean value
  displayCard(); // Update the display
}

function nextCard() {
  currentIndex = (currentIndex + 1) % flashcards.length; // Loop back to first card
  showingTerm = true; // Reset to show term
  displayCard();
}

function prevCard() {
  currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length; // Loop back to last card
  showingTerm = true; // Reset to show term
  displayCard();
}

function addCard() {
  const newTerm = document.getElementById('new-term').value;
  const newDefinition = document.getElementById('new-definition').value;

  if (newTerm && newDefinition) {
      flashcards.push({ term: newTerm, definition: newDefinition });
      document.getElementById('new-term').value = '';
      document.getElementById('new-definition').value = '';

      document.getElementById('new-term').placeholder = "Enter term";
      document.getElementById('new-definition').placeholder = "Enter definition";
      alert('Card added!');
  } else {
      alert('Please fill in both fields!');
  }
}

document.getElementById('next-btn').addEventListener('click', nextCard);
document.getElementById('prev-btn').addEventListener('click', prevCard);
document.getElementById('flashcard').addEventListener('click', toggleCard);
document.getElementById('add-card-btn').addEventListener('click', addCard);


// This line will display the card when the page is refreshed
window.onload = displayCard;