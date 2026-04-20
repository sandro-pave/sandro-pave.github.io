document.querySelectorAll('.card-montadoras').forEach(function(card) {
  card.addEventListener('click', function() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'click',
      page_location:  window.location.href,
      element_name:   this.getAttribute('data-name'),
      element_group:  'ver_mais'
    });
  });
});
