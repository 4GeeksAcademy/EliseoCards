/* eslint-disable */
import "./style.css";

window.onload = function() {
  // Initial card generation on page load
  generateCard();

  document.getElementById("resize-btn").addEventListener("click", resizeCard);
  document.getElementById("gen-btn").addEventListener("click", generateCard);

  function generateCard() {
    const suits = ["heart", "diamond", "spade", "club"];
    const values = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A"
    ];

    // Randomly select suit and value
    const randomSuitIndex = Math.floor(Math.random() * suits.length);
    const randomValueIndex = Math.floor(Math.random() * values.length);

    const selectedSuit = suits[randomSuitIndex];
    const selectedValue = values[randomValueIndex];

    // Create card HTML
    const cardContainer = document.getElementById("card-container");
    cardContainer.className = `card ${selectedSuit}`; // Set class for suit
    cardContainer.innerHTML = `<div class="symbol1">${getSuitSymbol(
      selectedSuit
    )}</div>
    <div class="value">${selectedValue}</div> 
    <div class="symbol2">${getSuitSymbol(selectedSuit)}</div>`; // Set inner HTML
  }

  function getSuitSymbol(suit) {
    switch (suit) {
      case "heart":
        return "♥";
      case "diamond":
        return "♦";
      case "spade":
        return "♠";
      case "club":
        return "♣";
      default:
        return "";
    }
  }

  function resizeCard() {
    const width = document.getElementById("width").value;
    const height = document.getElementById("height").value;
    const cardContainer = document.getElementById("card-container");
    cardContainer.style.width = width + "px";
    cardContainer.style.height = height + "px";
  }

  // Generate new card every 10 seconds
  setInterval(generateCard, 10000);
};
