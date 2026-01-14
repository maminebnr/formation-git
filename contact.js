// Get all contact cards
const contactCards = document.querySelectorAll('.contact-card');

// Loop through each card and add click listener
contactCards.forEach(card => {
  card.addEventListener('click', () => {
    const modalId = card.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    if(modal) {
      modal.style.display = 'block';
    }
  });
});

// Close modals when clicking on close button
const closeButtons = document.querySelectorAll('.close');
closeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentElement.parentElement.style.display = 'none';
  });
});

// Close modals when clicking outside the modal content
window.addEventListener('click', (e) => {
  if(e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
  }
});
