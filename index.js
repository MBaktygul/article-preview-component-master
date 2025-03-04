document.getElementById('share-button-visible').addEventListener('click', () => {
  // Check if screen width is smaller than 768px
  if (window.innerWidth < 768) {
    // Hide the footer and show the hidden info for mobile view
    document.querySelector('.card__footer').classList.add('hidden');
    document.querySelector('.hidden-info').classList.add('visible');
  }
});

document.getElementById('share-button-hidden').addEventListener('click', () => {
  // Check if screen width is smaller than 768px
  if (window.innerWidth < 768) {
    // Show the footer and hide the hidden info for mobile view
    document.querySelector('.card__footer').classList.remove('hidden');
    document.querySelector('.hidden-info').classList.remove('visible');
  }
});

document.querySelector('.share-button').addEventListener('click', () => {
  // Check if screen width is bigger than 768px
  if (window.innerWidth > 768) {
    const hiddenInfo = document.querySelector('.hidden-info');
    if (hiddenInfo.classList.contains('visible')) {
      hiddenInfo.classList.remove('visible');  
    } else {
      hiddenInfo.classList.add('visible');  
    }
  }
});


