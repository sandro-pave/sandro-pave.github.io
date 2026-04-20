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

  var form = campNome.closest('form');
  if (!form) return;

  campNome.addEventListener('focus', function disparaFormStart() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event:            'form_start',
      page_location:    window.location.href,
      form_id:          form.getAttribute('id')     || '',
      form_name:        form.getAttribute('name')   || '',
      form_destination: form.getAttribute('action') || ''
    });

    campNome.removeEventListener('focus', disparaFormStart);
  });
})();
