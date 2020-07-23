// Creare uno slider di immagini
// Potete usare le immagini che desiderate.
// Per facilitarvi la vita usate immagini delle stesse dimensioni :)
// Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
// Utilizziamo una classe first e last  per capire quali sono la prima e ultima immagine dello slider
// Utilizziamo una classe active per aiutarci a capire qual è l’immagine attuale da visualizzare nello slider


$(document).ready(function(){

//Scorrere le immagini in avanti o indietro cliccando sull'icona prev o next

$(".prev").click(function(){
    immaginiPrev();
});

$(".next").click(function(){
    immaginiNext();
});

$(".nav i").click(function(){

    var questo = this; // <----- Fondamentale salvare in una var (this) se crei una funzione esterna da richiamare
    console.log(questo);
    dotClick(questo); // <----- CON FUNZIONE DA RICHIAMARE

// SENZA CREARE UNA FUNZIONE APPOSTA

// // come prima devo prima rimuovere "active"
//     var imgActive = $(".images img.active");
//     var cerchioActive = $(".nav i.active");
//
//     imgActive.removeClass("active");
//     cerchioActive.removeClass("active");
//
// // riasegnarlo al cerchio che ho cliccato
//     $(this).addClass("active");
//
// // assegnarlo anche all'img corrispondente
//     if ($(".nav i").first().hasClass("active")){
//         $(".images img").first().addClass("active");
//     } else if ($(".nav i:nth-child(2)").hasClass("active")) {
//         $(".images img:nth-child(2)").addClass("active");
//     }  else if ($(".nav i:nth-child(3)").hasClass("active")){
//         $(".images img:nth-child(3)").addClass("active");
//     }   else if($(".nav i").last().hasClass("active")){
//         $(".images img").last().addClass("active");
//     }
//
})

// FUNZIONI

// *******************funzione NEXT**********************
function immaginiNext(){

     // memorizzare in una var l'immagine attiva
    var imgActive = $(".images img.active");
    var cerchioActive = $(".nav i.active")
    // Per prima cosa è necessario rimuovere la classe active
    // poi assegnarla all'immagine successiva o precedente

    // rimuovere la classe
    imgActive.removeClass("active");
    cerchioActive.removeClass("active");

    // riassegnare la classe alla successiva
    // se active è sull'ultima img non può andare oltre quindi va assegnata alla prima
    if (imgActive.hasClass("last")) {  // <--------- ==True
        $(".images img.first").addClass("active");
        $(".nav i.first").addClass("active");
    } else {
        imgActive.next().addClass("active");
        cerchioActive.next().addClass("active");
    }
}
// per i cerchi del nav il procedimento è simile e posso includerli nella stessa funzione
// perché seguono le img

// **********************funzione Prev**************************

function immaginiPrev(){

    var imgActive = $(".images img.active");
    var cerchioActive = $(".nav i.active");

    imgActive.removeClass("active");
    cerchioActive.removeClass("active");

    if (imgActive.hasClass("first")) {
        $(".images img.last").addClass("active");
        $(".nav i.last").addClass("active");
    } else {
        imgActive.prev().addClass("active");
        cerchioActive.prev().addClass("active");
    }
}

// BONUS

// ******************funzione dotClick**************************

function dotClick(a){  //<------- (a) segnaposto per il (this) che deve fare riferimento all'elemento cliccato

// come prima devo prima rimuovere "active"
    var imgActive = $(".images img.active");
    var cerchioActive = $(".nav i.active");

    imgActive.removeClass("active");
    cerchioActive.removeClass("active");

// riassegnarlo al cerchio che ho cliccato
    $(a).addClass("active");  //<------- (a) segnaposto per il (this) che deve fare riferimento all'elemento cliccato

// assegnarla anche all'img corrispondente

    if ($(".nav i").first().hasClass("active")){
        $(".images img").first().addClass("active");
    } else if ($(".nav i:nth-child(2)").hasClass("active")) {
        $(".images img:nth-child(2)").addClass("active");
    }  else if ($(".nav i:nth-child(3)").hasClass("active")){
        $(".images img:nth-child(3)").addClass("active");
    }   else if($(".nav i").last().hasClass("active")){
        $(".images img").last().addClass("active");
    }


}

}); //chiusura document.ready
