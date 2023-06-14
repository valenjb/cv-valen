 var mostrar = true
$("#boton-cv").on("click", function(){
    if(mostrar==true){
        $(".cv-contenedor").hide()
    } else{
        $(".cv-contenedor").show()
    }

    mostrar=!mostrar
})




$("#btn2").on("click", function(){
    $("body").removeClass("clase2").addClass("clase1");
});

$("#btn3").on("click", function(){
    $("body").removeClass("clase1").addClass("clase2");
});

$("#btn4").on("click", function(){
    $("body").removeClass("clase1").addClass("body");
});
$("#btn4").on("click", function(){
    $("body").removeClass("clase2").addClass("body");
});
