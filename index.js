// Number of stars you want on the screen
const numStars = 200;

// Function to generate random stars
function createStars() {
    const starsContainer = document.getElementById('stars');
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 5 + 1}s`; // Vary animation duration for a more natural look
        starsContainer.appendChild(star);
    }
}

// Create stars when the window loads
window.onload = createStars;

const menubtn = document.querySelector(".menubtn");
const closebtn = document.querySelector(".closebtn");
const nav_menu = document.querySelector(".nav-menu");

function openMenu() {
  nav_menu.style.display = "block";
  menubtn.style.display = "none";
  closebtn.style.display = "block";
}
function closeMenu() {
  nav_menu.style.display = "none";
  menubtn.style.display = "block";
  closebtn.style.display = "none";
}

//Text Typing
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;  
  }
   // instead of creating a prototpe method, we would just create a method within the class - a method called type
   // everything within the type method is going to be exactly the same thing

  type() {
  // Current index of word
  // We use the modulus operator to get the total length of the words
  const current = this.wordIndex % this.words.length;
  // console.log(current);
  
  // Get full text of current word
  const fullTxt = this.words[current];
  // console.log(fullTxt);
  
  // Check to see if it's in the deleting state
  if(this.isDeleting) {
     // Remove a character
      this.txt = fullTxt.substring(0, this.txt.length - 1);
     } else {
     // Add a character
         this.txt = fullTxt.substring(0, this.txt.length + 1);
     }
  
  // Every half a second output what is in the .txt
  // Insert txt into element
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  
  // Initial Type Speed
  let typeSpeed = 300;
  if(this.isDeleting) {
     typeSpeed /= 2;
     }
  // Check to see if the word is complete
  if(!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
     typeSpeed = this.wait;
      // Set isDeleting to true
      this.isDeleting = true;
     } else if(this.isDeleting && this.txt === '') {
      // Set isDeleting back to false
         this.isDeleting = false;
      // Move to the next word
         this.wordIndex++;
      // Pause before start typing again
         typeSpeed = 500;
     }
  
  // Run it at a certain pace
  setTimeout(() => this.type(), typeSpeed);
  }
}

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', init);

// Initialize the app in the init function
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait')
  // Initialize the TypeWriter
  new TypeWriter(txtElement, words, wait);
}