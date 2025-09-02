
  const cards = document.querySelectorAll('.card img');
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  const modalCaption = document.getElementById('modalCaption');
  const closeBtn = document.getElementById('closeBtn');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      // Just open modal (NO copying)
      modal.style.display = 'flex';
      modalImg.src = card.src;
      modalCaption.textContent = card.getAttribute('data-info');
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Close when clicking outside the image
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

