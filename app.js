let sendMessage = document.getElementById('send')
sendMessage.addEventListener('click', function(){
  alert('Message Sent')
})

/*gallery*/
document.addEventListener('DOMContentLoaded', function() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const overlay = document.querySelector('.fullscreen-overlay');
  const fullscreenImage = document.querySelector('.fullscreen-image');
  const closeBtn = document.querySelector('.close-btn');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const imageInfo = document.querySelector('.image-info');
  
  let currentImageIndex = 0;
  const images = Array.from(galleryItems).map(item => ({
      src: item.querySelector('img').src,
      alt: item.querySelector('img').alt,
      title: item.querySelector('img').dataset.title
  }));
  
  galleryItems.forEach((item, index) => {
      item.addEventListener('click', () => {
          currentImageIndex = index;
          updateFullscreenImage();
          overlay.classList.add('active');
          document.body.style.overflow = 'hidden'; 
      });
  });
  
  closeBtn.addEventListener('click', () => {
      overlay.classList.remove('active');
      document.body.style.overflow = 'auto'; 
  });
  
  prevBtn.addEventListener('click', () => {
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
      updateFullscreenImage();
  });
  
  nextBtn.addEventListener('click', () => {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      updateFullscreenImage();
  });
  
  document.addEventListener('keydown', (e) => {
      if (!overlay.classList.contains('active')) return;
      
      if (e.key === 'Escape') {
          overlay.classList.remove('active');
          document.body.style.overflow = 'auto';
      } else if (e.key === 'ArrowLeft') {
          currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
          updateFullscreenImage();
      } else if (e.key === 'ArrowRight') {
          currentImageIndex = (currentImageIndex + 1) % images.length;
          updateFullscreenImage();
      }
  });
  
  function updateFullscreenImage() {
      const currentImage = images[currentImageIndex];
      fullscreenImage.src = currentImage.src;
      fullscreenImage.alt = currentImage.alt;
      imageInfo.textContent = currentImage.title;
  }
});


document.addEventListener('DOMContentLoaded', function() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const overlay = document.querySelector('.fullscreen-overlay');
  const fullscreenImage = document.querySelector('.fullscreen-image');
  const closeBtn = document.querySelector('.close-btn');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const imageInfo = document.querySelector('.image-info');
  
  let currentImageIndex = 0;
  const images = Array.from(galleryItems).map(item => ({
      src: item.querySelector('img').src,
      alt: item.querySelector('img').alt,
      title: item.querySelector('img').dataset.title
  }));
  
  // Open fullscreen overlay
  galleryItems.forEach((item, index) => {
      item.addEventListener('click', () => {
          currentImageIndex = index;
          updateFullscreenImage();
          overlay.classList.add('active');
          document.body.style.overflow = 'hidden'; 
      });
  });
  
  // Close fullscreen overlay
  closeBtn.addEventListener('click', () => {
      overlay.classList.remove('active');
      document.body.style.overflow = 'auto'; 
  });
  
  prevBtn.addEventListener('click', () => {
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
      updateFullscreenImage();
  });
  
  nextBtn.addEventListener('click', () => {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      updateFullscreenImage();
  });
  
  document.addEventListener('keydown', (e) => {
      if (!overlay.classList.contains('active')) return;
      
      if (e.key === 'Escape') {
          overlay.classList.remove('active');
          document.body.style.overflow = 'auto';
      } else if (e.key === 'ArrowLeft') {
          currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
          updateFullscreenImage();
      } else if (e.key === 'ArrowRight') {
          currentImageIndex = (currentImageIndex + 1) % images.length;
          updateFullscreenImage();
      }
  });
  
  function updateFullscreenImage() {
      const currentImage = images[currentImageIndex];
      fullscreenImage.src = currentImage.src;
      fullscreenImage.alt = currentImage.alt;
      imageInfo.textContent = currentImage.title;
  }
});

/*team*/
function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
  document.body.style.overflow = "hidden"; 
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
  document.body.style.overflow = "auto"; 
}

window.onclick = function(event) {
  if (event.target.className === "modal") {
      event.target.style.display = "none";
      document.body.style.overflow = "auto";
  }
}

/*medical services*/
document.addEventListener('DOMContentLoaded', function() {
  const percentage = (85320 / 250000) * 100;
  const progressBar = document.getElementById('progressBar');
  
  setTimeout(() => {
      progressBar.style.width = percentage + '%';
  }, 300);
  
  const raisedAmount = document.getElementById('raisedAmount');
  const targetAmount = 85320;
  let currentAmount = 0;
  const increment = targetAmount / 50;
  
  const countUp = setInterval(() => {
      currentAmount += increment;
      if (currentAmount >= targetAmount) {
          currentAmount = targetAmount;
          clearInterval(countUp);
      }
      raisedAmount.textContent = '$' + Math.floor(currentAmount).toLocaleString() + ' raised so far';
  }, 30);
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
});