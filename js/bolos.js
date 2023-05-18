$(document).ready(function() {
    // Aquí agregaremos algunos eventos

    $('#nav-boton').click(function() {
        $('nav ul').toggle()
        $('#nav-boton').toggleClass("activo");
      })
      
  });

