document.getElementById('mobileBurger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementById('navigation').classList.toggle('active');
  });
  
  
  
  document.getElementById('menu').addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementById('navigation').classList.remove('active');
  });
  
  
  
  const swiper = new Swiper('.swiper-container', {
      // Optional parameters
      slidesPerView: 1,
      loop: true,
      autoHeight: true,
      breakpoints: {
        // when window width is >= 320px
        600: {
          slidesPerView: 2,
        },
        // when window width is >= 480px
        1000: {
          slidesPerView: 3,
        }
      },
     
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
    });
    
  let tabNavigationBlocks = document.querySelectorAll('.tab_section nav ul li');
  let tabContentBlocks = document.querySelectorAll('.tab_section .tab-content');
  
  function removeActiveNavigation() {
    for (let tab of tabNavigationBlocks) {
      tab.classList.remove('active');
    }
  }
  
  function removeActiveTabs() {
    for (let tab of tabContentBlocks) {
      tab.classList.remove('active');
    }
  }
  
  for (let tab of tabNavigationBlocks) {
    tab.addEventListener('click', function() {
      removeActiveNavigation();
      removeActiveTabs();
  
      this.classList.add('active');
  
      let index = this.dataset.slide;
  
      document.querySelector('.tab_section .tab-content[data-slide="'+index+'"]').classList.add('active');
    })
  }