const burgerMenuHover = () => {

  const dataHref = document.querySelectorAll('[data-href]');
  const dataContent = document.querySelectorAll('[data-content]');
  
  dataHref.forEach(function (item) {
    item.addEventListener('mouseover', function () {
  
      dataContent.forEach(function (item) {
        item.classList.remove('popup-img--active');
      })
  
      const id = document.querySelector('#' + this.dataset.href);
      id.classList.add('popup-img--active');
  
    })
  })

}

burgerMenuHover();