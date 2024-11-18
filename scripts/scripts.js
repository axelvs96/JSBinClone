function actualizarSalida(){
    $("iframe").contents().find("html").html("<html>"+
                                                "<head>"+
                                                    "<style type='text/css'>"+
                                                        $("#cssPanel").val()+
                                                    "</style>"+
                                                "</head>"+
                                                "<body>"+
                                                    $("#htmlPanel").val())+
                                                "</body>"+
                                            "</html>";
    document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
}

$(".boton").hover(function(){
    $(this).addClass("botonMarcado");
},function(){
    $(this).removeClass("botonMarcado");
});

$(".boton").click(function(){
    $(this).toggleClass("activo");
    $(this).removeClass("botonMarcado");
    var panelId = $(this).attr("id")+"Panel";
    $("#"+panelId).toggleClass("oculto");
    var numeroPanelesActivos = 4- $(".oculto").length;
    $(".panel").width(($(window).width()/numeroPanelesActivos)-10);
});

$(".panel").height($(window).height()-$("#barra").height());

$(".panel").width($(window).width()/2 -10);

actualizarSalida();
$("textarea").on('change keyup paste', function(){
    actualizarSalida();
});