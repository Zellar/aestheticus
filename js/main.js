document.addEventListener("DOMContentLoaded", function() {
    

    // Мобильное меню
  let mobBtn = document.querySelector('.menu');
  let mobMenu = document.querySelector('.nav-list');
  let header = document.querySelector('header');

    let noScroll = () => {
        let body = document.querySelector('body');
        let html = document.querySelector('html');
        if (mobBtn.classList.contains('active')) {
            body.style.overflowY = 'hidden';
            html.style.overflowY = 'hidden';
        } else {
            body.style.overflowY = 'auto';
            html.style.overflowY = 'auto';
        }
    };

    let openMobMenu = (btn, menu, header) => {
      
      document.addEventListener('click', (e) => {
          if(e.target === btn) {
              btn.classList.toggle('active');
              menu.classList.toggle('active');
              header.classList.toggle('active');
          } else if (!header.contains(e.target)) {
            btn.classList.remove('active');
            menu.classList.remove('active');
            header.classList.remove('active');
            console.log(e.target);
          }
          noScroll();
      });
       
  };

  openMobMenu(mobBtn, mobMenu, header);

})