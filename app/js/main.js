




$(function () {

    // accordeon

  const headers = document.querySelectorAll('[data-name="accordion-title"]');
  const contents = document.querySelectorAll('[data-name="content"]')

  
   

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      
      if (header.classList.contains('active')) {
        header.classList.remove('active');
        contents[index].classList.add('hidden');
        
      } else {
        headers.forEach((item, i) => {
          item.classList.remove('active');
          contents[i].classList.add('hidden');

        });
        header.classList.add('active');
        contents[index].classList.remove('hidden');
      }
    })
  });

});