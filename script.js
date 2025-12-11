// ============================================
// BYTES ORGANIZATION - OPTIMIZED JAVASCRIPT
// Fixed for Smooth Scrolling Performance
// ============================================

// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
  
  // ========================================
  // TAB NAVIGATION
  // ========================================
  const tabs = document.querySelectorAll(".tab-link");
  const sections = document.querySelectorAll(".tab-section");
  const homeCards = document.querySelectorAll(".home-card");

  function switchTab(tabName) {
    tabs.forEach(t => t.classList.remove("active"));
    sections.forEach(s => s.classList.remove("active"));
    
    const targetTab = document.querySelector(`.tab-link[data-tab="${tabName}"]`);
    const targetSection = document.getElementById(tabName);
    
    if (targetTab) targetTab.classList.add("active");
    if (targetSection) targetSection.classList.add("active");
  }

  // Tab link click events
  tabs.forEach(tab => {
    tab.addEventListener("click", e => {
      e.preventDefault();
      switchTab(tab.dataset.tab);
    });
  });

  // Home card click events
  homeCards.forEach(card => {
    card.addEventListener("click", () => {
      switchTab(card.dataset.tab);
    });
  });

  // ========================================
  // EVENT GALLERY MODAL & FULLSCREEN FUNCTIONALITY
  // ========================================

  // Define event categories with their images
  const eventCategories = {
    itcs: [
      "Pictures/BYTES Pictures/ITCSexhibit/_REY7720.jpg",
      "Pictures/BYTES Pictures/ITCSexhibit/_REY7728.jpg",
      "Pictures/BYTES Pictures/ITCSexhibit/_REY7729.jpg",
      "Pictures/BYTES Pictures/ITCSexhibit/_REY7736.jpg",
      "Pictures/BYTES Pictures/ITCSexhibit/_REY7737.jpg",
      "Pictures/BYTES Pictures/ITCSexhibit/_REY7739.jpg",
      "Pictures/BYTES Pictures/ITCSexhibit/_REY7743.jpg",
      "Pictures/BYTES Pictures/ITCSexhibit/_REY7749.jpg",
      "Pictures/BYTES Pictures/ITCSexhibit/_REY7753.jpg",
      "Pictures/BYTES Pictures/ITCSexhibit/_REY7761.jpg",
      "Pictures/BYTES Pictures/ITCSexhibit/_REY7764.jpg",
      "Pictures/BYTES Pictures/ITCSexhibit/_REY7769.jpg",
      "Pictures/BYTES Pictures/ITCSexhibit/_REY7772.jpg",
      "Pictures/BYTES Pictures/ITCSexhibit/_REY7774.jpg",
      "Pictures/BYTES Pictures/ITCSexhibit/_REY7781.jpg",
      "Pictures/BYTES Pictures/ITCSexhibit/_REY7782.jpg",
      "Pictures/BYTES Pictures/ITCSexhibit/_REY7783.jpg",
      "Pictures/BYTES Pictures/ITCSexhibit/_REY7786.jpg",
      "Pictures/BYTES Pictures/ITCSexhibit/_REY7793.jpg",
      "Pictures/BYTES Pictures/ITCSexhibit/_REY7794.jpg",
      "Pictures/BYTES Pictures/ITCSexhibit/_REY7795.jpg",
      "Pictures/BYTES Pictures/ITCSexhibit/_REY7798.jpg",
      "Pictures/BYTES Pictures/ITCSexhibit/_REY7799.jpg",
      "Pictures/BYTES Pictures/ITCSexhibit/_REY7800.jpg",
      "Pictures/BYTES Pictures/ITCSexhibit/_REY7802.jpg",
      "Pictures/BYTES Pictures/ITCSexhibit/_REY7810.jpg",
      "Pictures/BYTES Pictures/ITCSexhibit/_REY7812.jpg",
      "Pictures/BYTES Pictures/ITCSexhibit/_REY7816.jpg",
      "Pictures/BYTES Pictures/ITCSexhibit/_REY7826.jpg",
      "Pictures/BYTES Pictures/ITCSexhibit/_REY7835.jpg",
      "Pictures/BYTES Pictures/ITCSexhibit/_REY7852.jpg",
      "Pictures/BYTES Pictures/ITCSexhibit/_REY7882.jpg",
      "Pictures/BYTES Pictures/ITCSexhibit/_REY7936.jpg",
      "Pictures/BYTES Pictures/ITCSexhibit/_REY7965.jpg",
      "Pictures/BYTES Pictures/ITCSexhibit/_REY7974.jpg",
      "Pictures/BYTES Pictures/ITCSexhibit/_REY7987.jpg",
      "Pictures/BYTES Pictures/ITCSexhibit/_REY7991.jpg",
      "Pictures/BYTES Pictures/ITCSexhibit/_REY7997.jpg",
      "Pictures/BYTES Pictures/ITCSexhibit/_REY8001.jpg",
      "Pictures/BYTES Pictures/ITCSexhibit/_REY8004.jpg",
      "Pictures/BYTES Pictures/ITCSexhibit/_REY8014.jpg",
      "Pictures/BYTES Pictures/ITCSexhibit/_REY8024.jpg",
      "Pictures/BYTES Pictures/ITCSexhibit/_REY8042.jpg",
      "Pictures/BYTES Pictures/ITCSexhibit/_REY8047.jpg",
      "Pictures/BYTES Pictures/ITCSexhibit/_REY8058.jpg",
    ],
    assembly: [
      "Pictures/BYTES Pictures/GeneralAssembly/_REY7319.jpg",
      "Pictures/BYTES Pictures/GeneralAssembly/_REY7301.jpg",
      "Pictures/BYTES Pictures/GeneralAssembly/_REY7302.jpg",
      "Pictures/BYTES Pictures/GeneralAssembly/_REY7303.jpg",
      "Pictures/BYTES Pictures/GeneralAssembly/_REY7304.jpg",
      "Pictures/BYTES Pictures/GeneralAssembly/_REY7305.jpg",
      "Pictures/BYTES Pictures/GeneralAssembly/_REY7307.jpg",
      "Pictures/BYTES Pictures/GeneralAssembly/_REY7308.jpg",
      "Pictures/BYTES Pictures/GeneralAssembly/_REY7309.jpg",
      "Pictures/BYTES Pictures/GeneralAssembly/_REY7310.jpg",
      "Pictures/BYTES Pictures/GeneralAssembly/_REY7313.jpg",
      "Pictures/BYTES Pictures/GeneralAssembly/_REY7314.jpg",
      "Pictures/BYTES Pictures/GeneralAssembly/_REY7318.jpg",
      "Pictures/BYTES Pictures/GeneralAssembly/_REY7322.jpg",
      "Pictures/BYTES Pictures/GeneralAssembly/_REY7324.jpg",
      "Pictures/BYTES Pictures/GeneralAssembly/_REY7327.jpg",
      "Pictures/BYTES Pictures/GeneralAssembly/_REY7329.jpg",
      "Pictures/BYTES Pictures/GeneralAssembly/_REY7331.jpg",
      "Pictures/BYTES Pictures/GeneralAssembly/_REY7332.jpg",
      "Pictures/BYTES Pictures/GeneralAssembly/_REY7335.jpg",
      "Pictures/BYTES Pictures/GeneralAssembly/_REY7337.jpg",
      "Pictures/BYTES Pictures/GeneralAssembly/_REY7340.jpg",
      "Pictures/BYTES Pictures/GeneralAssembly/_REY7341.jpg",
      "Pictures/BYTES Pictures/GeneralAssembly/_REY7342.jpg",
      "Pictures/BYTES Pictures/GeneralAssembly/_REY7371.jpg",
      "Pictures/BYTES Pictures/GeneralAssembly/_REY7374.jpg",
      "Pictures/BYTES Pictures/GeneralAssembly/_REY7386.jpg",
      "Pictures/BYTES Pictures/GeneralAssembly/_REY7389.jpg",
      "Pictures/BYTES Pictures/GeneralAssembly/_REY7391.jpg",
      "Pictures/BYTES Pictures/GeneralAssembly/_REY7400.jpg",
      "Pictures/BYTES Pictures/GeneralAssembly/_REY7404.jpg",
      "Pictures/BYTES Pictures/GeneralAssembly/_REY7409.jpg",
      "Pictures/BYTES Pictures/GeneralAssembly/_REY7410.jpg",
      "Pictures/BYTES Pictures/GeneralAssembly/_REY7411.jpg",
      "Pictures/BYTES Pictures/GeneralAssembly/_REY7412.jpg",
      "Pictures/BYTES Pictures/GeneralAssembly/_REY7489.jpg",
      "Pictures/BYTES Pictures/GeneralAssembly/_REY7526.jpg",
      "Pictures/BYTES Pictures/GeneralAssembly/_REY7568.jpg",
      "Pictures/BYTES Pictures/GeneralAssembly/_REY7649.jpg",
      "Pictures/BYTES Pictures/GeneralAssembly/_REY7660.jpg",
      "Pictures/BYTES Pictures/GeneralAssembly/_REY7664.jpg",
      "Pictures/BYTES Pictures/GeneralAssembly/_REY7672.jpg",
      "Pictures/BYTES Pictures/GeneralAssembly/_REY7678.jpg",
    ],
    esports: [
      // Add more Esports images here
      // "Pictures/BYTES Pictures/Esports/esports1.jpg",
      // "Pictures/BYTES Pictures/Esports/esports2.jpg",
    ]
  };

  // Get modal elements
  const modal = document.getElementById('eventModal');
  const modalClose = document.querySelector('.modal-close');
  const modalTitle = document.getElementById('modalTitle');
  const modalGallery = document.getElementById('modalGallery');

  // Get fullscreen viewer elements
  const fullscreenViewer = document.getElementById('fullscreenViewer');
  const fullscreenImage = document.getElementById('fullscreenImage');
  const fullscreenClose = document.querySelector('.fullscreen-close');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const currentImageNumber = document.getElementById('currentImageNumber');
  const totalImages = document.getElementById('totalImages');
  const fullscreenTitle = document.getElementById('fullscreenTitle');

  // Fullscreen viewer state
  let currentCategory = '';
  let currentImageIndex = 0;
  let currentImages = [];

  // Check if modal elements exist
  if (!modal || !modalClose || !modalTitle || !modalGallery) {
    console.error('Modal elements not found in DOM');
    return;
  }

  // ========================================
  // MODAL FUNCTIONS
  // ========================================
  
  // Function to open modal with specific category
  function openEventModal(category, title) {
    const images = eventCategories[category];
    
    if (!images || images.length === 0) {
      console.warn('No images found for category:', category);
      return;
    }
    
    currentCategory = category;
    currentImages = images;
    
    // Set modal title
    modalTitle.textContent = title;
    
    // Clear previous gallery content
    modalGallery.innerHTML = '';
    
    // Use requestAnimationFrame for smoother rendering
    requestAnimationFrame(() => {
      // Add images to modal gallery
      images.forEach((imgSrc, index) => {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = title;
        img.dataset.index = index;
        img.style.cursor = 'pointer';
        img.title = 'Click to view fullscreen';
        img.loading = 'lazy'; // Lazy loading for better performance
        
        // Handle image load errors
        img.onerror = function() {
          console.warn('Failed to load image:', imgSrc);
          this.style.display = 'none';
        };
        
        // Click event to open fullscreen
        img.addEventListener('click', (e) => {
          e.stopPropagation();
          closeEventModal();
          setTimeout(() => {
            openFullscreenViewer(index, category, title);
          }, 100);
        });
        
        modalGallery.appendChild(img);
      });
    });
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Function to close modal
  function closeEventModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  // ========================================
  // FULLSCREEN VIEWER FUNCTIONS
  // ========================================
  
  // Function to open fullscreen viewer
  function openFullscreenViewer(index, category, title) {
    currentImageIndex = index;
    currentCategory = category;
    currentImages = eventCategories[category];
    
    updateFullscreenImage();
    fullscreenTitle.textContent = title;
    fullscreenViewer.classList.add('active');
  }

  // Function to update fullscreen image
  function updateFullscreenImage() {
    if (currentImages.length === 0) return;
    
    fullscreenImage.src = currentImages[currentImageIndex];
    currentImageNumber.textContent = currentImageIndex + 1;
    totalImages.textContent = currentImages.length;
    
    // Trigger animation
    fullscreenImage.style.animation = 'none';
    setTimeout(() => {
      fullscreenImage.style.animation = 'imageZoomIn 0.4s ease';
    }, 10);
  }

  // Function to show next image
  function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % currentImages.length;
    updateFullscreenImage();
  }

  // Function to show previous image
  function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
    updateFullscreenImage();
  }

  // Function to close fullscreen viewer
  function closeFullscreenViewer() {
    fullscreenViewer.classList.remove('active');
  }

  // ========================================
  // EVENT LISTENERS
  // ========================================
  
  // Add click events to EVENT CARDS (new design)
  const eventCards = document.querySelectorAll('.event-card');
  
  eventCards.forEach(card => {
    card.style.cursor = 'pointer';
    
    card.addEventListener('click', () => {
      const eventType = card.dataset.event;
      let eventTitle = '';
      
      // Determine which event was clicked
      if (eventType === 'assembly') {
        eventTitle = 'General Assembly 2025';
        openEventModal('assembly', eventTitle);
      } else if (eventType === 'itcs') {
        eventTitle = 'ITCS Exhibit';
        openEventModal('itcs', eventTitle);
      } else if (eventType === 'esports') {
        eventTitle = 'Esports Tournaments';
        openEventModal('esports', eventTitle);
      }
    });
  });
  
  // Add click events to event gallery images (old design - backward compatibility)
  const eventImages = document.querySelectorAll('.event-gallery img');

  eventImages.forEach((img, index) => {
    img.style.cursor = 'pointer';
    img.title = 'Click to view all photos from this event';
    
    img.addEventListener('click', () => {
      // Map images to categories based on their index
      if (index >= 0 && index <= 2) {
        openEventModal('assembly', 'General Assembly 2025');
      } else if (index >= 3 && index <= 5) {
        openEventModal('itcs', 'ITCS Exhibit');
      } else if (index >= 6 && index <= 20) {
        openEventModal('esports', 'Esports Tournaments');
      }
    });
  });

  // Modal close handlers
  if (modalClose) {
    modalClose.addEventListener('click', closeEventModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeEventModal();
      }
    });
  }

  // Fullscreen viewer controls
  if (fullscreenClose) {
    fullscreenClose.addEventListener('click', closeFullscreenViewer);
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', showPreviousImage);
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', showNextImage);
  }

  if (fullscreenViewer) {
    fullscreenViewer.addEventListener('click', (e) => {
      if (e.target === fullscreenViewer) {
        closeFullscreenViewer();
      }
    });
  }

  // ========================================
  // KEYBOARD NAVIGATION
  // ========================================
  document.addEventListener('keydown', (e) => {
    // Close modal with ESC
    if (e.key === 'Escape') {
      if (fullscreenViewer.classList.contains('active')) {
        closeFullscreenViewer();
      } else if (modal.classList.contains('active')) {
        closeEventModal();
      }
    }
    
    // Navigate images with arrow keys
    if (fullscreenViewer.classList.contains('active')) {
      if (e.key === 'ArrowRight') {
        showNextImage();
      } else if (e.key === 'ArrowLeft') {
        showPreviousImage();
      }
    }
  });

});