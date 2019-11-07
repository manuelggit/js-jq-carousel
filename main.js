$( document ).ready(function() {

    $(".next").click(prossimaslide);
    $(".prev").click(precedenteslide);

    // cambio le immagini con la tastiera
    $('body').keydown(function(e){
      if(e.keyCode == 39 || e.keyCode == 32) { // con freccia a dx e space
        prossimaslide();
      }
      if (e.keyCode == 37) { // con freccia a sx
        precedenteslide();
      }

    });

    // FUNZIONI
    function prossimaslide(){

        var posizioneimg = $(".slider-wrapper .images  img.active");
        var posizionenav = $(".nav i.active");

        posizioneimg.removeClass("active");
        posizionenav.removeClass("active");

        // se siamo all'ultima img dello slider, ritorna ad essere attiva la prima
        if(posizioneimg.hasClass("last")){
            $(".slider-wrapper .images  img.first").addClass("active"); //immagine
            $(".nav i.first").addClass("active"); // cerchio
        } else{
            //altrimenti passa semplicemente l'active alla prossima
            posizioneimg.next("img").addClass("active"); //immagine
            posizionenav.next("i").addClass("active"); // cerchio
        }

    }

    function precedenteslide(){

        var posizioneimg = $(".slider-wrapper .images  img.active"); //immagine
        var posizionenav = $(".nav i.active"); // cerchio

        posizioneimg.removeClass("active"); // immagine
        posizionenav.removeClass("active"); // cerchio

        // se siamo alla prima img dello slider, ritorna ad essere attiva l'ultima
        if(posizioneimg.hasClass("first")){
            $(".slider-wrapper .images  img.last").addClass("active"); // immagine
            $(".nav i.last").addClass("active"); // cerchio
        } else{
            //altrimenti passa semplicemente l'active alla precedente
            posizioneimg.prev("img").addClass("active"); // immagine
            posizionenav.prev("i").addClass("active"); // cerchio
        }

    }


});
