const quotes = {
  inspiration: [
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt",
    },
    {
      text: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius",
    },
    {
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
    },
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      text: "Everything you've ever wanted is on the other side of fear.",
      author: "George Addair",
    },
    { text: "Daal Bhaat power 24 hours.", author: "Prajwol" },
  ],
  science: [
    {
      text: "The important thing is to not stop questioning. Curiosity has its own reason for existing.",
      author: "Albert Einstein",
    },
    {
      text: "The good thing about science is that it's true whether or not you believe in it.",
      author: "Neil deGrasse Tyson",
    },
    {
      text: "If I have seen further it is by standing on the shoulders of Giants.",
      author: "Isaac Newton",
    },
    {
      text: "Science is not only a disciple of reason but also one of romance and passion.",
      author: "Stephen Hawking",
    },
    {
      text: "The science of today is the technology of tomorrow.",
      author: "Edward Teller",
    },
  ],
  humor: [
    {
      text: "I'm not lazy, I'm just on energy-saving mode.",
      author: "Anonymous",
    },
    {
      text: "The road to success is always under construction.",
      author: "Lily Tomlin",
    },
    {
      text: "I used to think I was indecisive, but now I'm not so sure.",
      author: "Anonymous",
    },
    {
      text: "The best way to teach your kids about taxes is by eating 30% of their ice cream.",
      author: "Bill Murray",
    },
    {
      text: "A day without sunshine is like, you know, night.",
      author: "Steve Martin",
    },
  ],
  philosophy: [
    { text: "The unexamined life is not worth living.", author: "Socrates" },
    {
      text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
      author: "Aristotle",
    },
    {
      text: "Happiness is not something ready-made. It comes from your own actions.",
      author: "Dalai Lama",
    },
    {
      text: "Man is condemned to be free; because once thrown into the world, he is responsible for everything he does.",
      author: "Jean-Paul Sartre",
    },
    { text: "I think therefore I am.", author: "René Descartes" },
  ],
};

let currentCategory = "all";
let currentIndex = 0;
let filteredQuotes = [];

const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const categorySelect = document.getElementById("category-select");
const prevButton = document.getElementById("prev-quote");
const nextButton = document.getElementById("next-quote");
const randomButton = document.getElementById("random-quote");
const darkModeToggle = document.getElementById("dark-mode-toggle");
const decreaseFontBtn = document.getElementById("decrease-font");
const increaseFontBtn = document.getElementById("increase-font");

function initApp() {
  loadPreferences();
  categorySelect.addEventListener("change", handleCategoryChange);
  prevButton.addEventListener("click", showPreviousQuote);
  nextButton.addEventListener("click", showNextQuote);
  randomButton.addEventListener("click", showRandomQuote);
  darkModeToggle.addEventListener("change", toggleDarkMode);
  decreaseFontBtn.addEventListener("click", decreaseFontSize);
  increaseFontBtn.addEventListener("click", increaseFontSize);
  filterQuotesByCategory();
  displayQuote();
}
function filterQuotesByCategory() {
  if (currentCategory === "all") {
    filteredQuotes = [];
    for (const category in quotes) {
      filteredQuotes = filteredQuotes.concat(quotes[category]);
    }
  } else {
    filteredQuotes = quotes[currentCategory] || [];
  }
  if (currentIndex >= filteredQuotes.length) {
    currentIndex = 0;
  }
}
function displayQuote() {
  if (filteredQuotes.length === 0) {
    quoteText.textContent = "No quotes available for this category.";
    quoteAuthor.textContent = "";
    return;
  }

  const quote = filteredQuotes[currentIndex];
  quoteText.textContent = `"${quote.text}"`;
  quoteAuthor.textContent = `— ${quote.author}`;
}
function handleCategoryChange() {
    currentCategory = categorySelect.value;
    currentIndex = 0;
    filterQuotesByCategory();
    displayQuote();
    savePreferences();
}
function showPreviousQuote() {
    if (filteredQuotes.length === 0) return;
    
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = filteredQuotes.length - 1;
    }
    displayQuote();
}
function showNextQuote() {
    if (filteredQuotes.length === 0) return;
    
    currentIndex++;
    if (currentIndex >= filteredQuotes.length) {
        currentIndex = 0;
    }
    displayQuote();
}

document.addEventListener("DOMContentLoaded", initApp);
