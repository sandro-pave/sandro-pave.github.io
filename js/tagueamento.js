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
(function() {
  var formPreenchido = false;

  var form = document.querySelector('form.contato');
  if (!form) return;

  var campos = form.querySelectorAll('input, textarea, select');

  campos.forEach(function(campo) {
    campo.addEventListener('focus', function() {
      if (formPreenchido) return; 
      formPreenchido = true;

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event:            'form_start',
        page_location:    window.location.href,
        form_id:          form.getAttribute('id')     || '',
        form_name:        form.getAttribute('name')   || '',
        form_destination: form.getAttribute('action') || ''
      });
    });
  });
})();
