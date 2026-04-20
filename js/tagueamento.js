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
(function () {
  var campNome = document.querySelector('#nome');
  if (!campNome) return;

  campNome.addEventListener('focus', function disparaFormStart() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event:            'form_start',
      page_location:    window.location.href,
      form_id:          'nome',
      form_name:        'contato',           // <form> não tem atributo name
      form_destination: 'https://sandro-pave.github.io/sobre.html#contato'            // <form> não tem atributo action
    });

    campNome.removeEventListener('focus', disparaFormStart);
  });
})();
