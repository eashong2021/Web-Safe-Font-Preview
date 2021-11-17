$(document).ready(() => {
    $('#text').on('keyup',(event) => {
     $('.preview').html($(event.currentTarget).val());
    });
  
    $('#font').on('change', (event) => {
  $('.preview').CSS({
    fontFamily:
    $(event.currentTarget).val()
  })
    });
  
    $('#weight').on('change', (event) => {
  $('.preview').CSS({
    fontWeight:
    $(event.currentTarget).val()
  })
    });
  
  $('#size').on('keyup', (event) => {
  let fontSize = $(event.currentTarget).val() + 'px';
  $('.preview').CSS({
    fontSize: fontSize
  })
  });
    })
  
  
  
  