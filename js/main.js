/*
ricreo lo slider come fatto questa mattina (o da zero, o partendo dall’html [ref sempre mio repo su github]);
faccio funzionare il tracciamento dei pallini anche in prev (stamattina lo abbiam fatto solo in next);
creo anche la possibilità di poter navigare cliccando anche sui pallini (quindi se clicco sul pallino 3, l’img vista è la 3 e il pallino 3 rimane rosso);
cerco di fare un refactoring del mio codice per renderlo il più chiaro, lineare, mantenibile e secco possibile (dobbiamo iniziare a farlo, e quindi prima del bonus).
*/

// creare lo slider
$(document).ready(function(){

  // click sulla freccia di destra
  $('.next').click(
    // callback
    imgNext
  );

  // click su freccia di sinistra
  $('.prev').click(
    // callback
    imgPrec
  );

  // click su pallino
  $('.nav i').click(
    // callback
    immagineCorrispondente
  );

  // funzione per creare carousel immagini verso destra
  function imgNext() {

    // salvo in una variabile immagine attiva al momento del click
    var imgActive = $('.images img.active');

    // salvo in una variabile pallino attivo al momento del click sulla freccia
    var pallinoActive = $('.nav i.active');

    //tolgo visibilità a immagine
    imgActive.removeClass('active');

    // tolgo opacità a pallino
    pallinoActive.removeClass('active');

    // verifico che immagine era l'ultima, altrimenti applico regole di default
    if(imgActive.hasClass('last')){
      $('.images img.first').addClass('active');
      $('.nav i.first').addClass('active');
    } else {
      // rendo visibile immagine successiva
      imgActive.next().addClass('active');
      pallinoActive.next().addClass('active');
    }

  }

  // funzione per creare carousel immagini verso sinistra
  function imgPrec() {

    // salvo in una variabile immagine attiva al momento del click
    var imgActive = $('.images img.active');
    // salvo in una variabile pallino attivo al momento del click sulla freccia
    var pallinoActive = $('.nav i.active');

    //tolgo visibilità a immagine
    imgActive.removeClass('active');

    // tolgo opacità a pallinoActive
    pallinoActive.removeClass('active');

    // verifico che immagine era l'ultima, altrimenti applico regole di default
    if(imgActive.hasClass('first')){
      $('.images img.last').addClass('active');
      $('.nav i.last').addClass('active');
    } else {
      // rendo visibile immagine successiva
      imgActive.prev().addClass('active');
      pallinoActive.prev().addClass('active');
    }
  }

  function immagineCorrispondente() {

    // creo variabile con immagine
    var immagineIniziale = $('.images img');

    // rendo immagini invisibili
    immagineIniziale.removeClass('active');

    // creo variabile con pallini
    var pallinoIniziale = $('.nav i');

    // elimino opacità pallino
    pallinoIniziale.removeClass('active');

    //seleziono pallino singolo e lo inserisco in una variabile
    var elementoSelezionato = $(this);

    // trovo posizione del singolo pallino e la salvo in una variabile
    var posizione = elementoSelezionato.index();

    // trovo corrispondente posizione dell'immagine
    var immagineSelezionata = $('.images img').eq(posizione);

    // rendo l'immagine in una data posizione visibile al click
    immagineSelezionata.addClass('active');

    // aggiungo opacità nel momento in cui clicco sul pallino
    elementoSelezionato.addClass('active');
  }


});
