$(document).ready(function(){
    
  
  
  
  //slider
    if(window.location.href.indexOf('index') > -1){
      $('.bxslider').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 1200
    });

    }
    
    

  //Post
  if(window.location.href.indexOf('index') > -1){
  var posts = [
      {
        title: 'Prueba de titulo 1',
        date: 'Publicado el dia ' + moment().date()+ ' de '+ moment().format("MMMM") + ' del Ano  '+moment().format("YYYY"),

        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et lacus elit. Morbi vehicula leo ut aliquam  t pulvinar enim pretium ac. Mauris luctusssssdgljklgjk erat mattis, cursus velit at, vehicula lectus. Suspendisse ligula augue, tempus et feugiat at, maximus eu tellus Morbi vehicula leo ut aliquam pretium.Pellentesque a quam ipsum. Morbi et accumsan diamNulla ultrices rutrum sem,'
                            
      },
      {
        title: 'Prueba de titulo 2',
        date: 'Publicado el dia ' + moment().date()+ ' de '+ moment().format("MMMM") + ' del Ano  '+moment().format("YYYY"),
        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et lacus elit. Morbi vehicula leo ut aliquam  t pulvinar enim pretium ac. Mauris luctusssssdgljklgjk erat mattis, cursus velit at, vehicula lectus. Suspendisse ligula augue, tempus et feugiat at, maximus eu tellus Morbi vehicula leo ut aliquam pretium.Pellentesque a quam ipsum. Morbi et accumsan diamNulla ultrices rutrum sem,'
                            
      },
      {
        title: 'Prueba de titulo 3',
        date: 'Publicado el dia ' + moment().date()+ ' de '+ moment().format("MMMM") + ' del Ano  '+moment().format("YYYY"),
        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et lacus elit. Morbi vehicula leo ut aliquam  t pulvinar enim pretium ac. Mauris luctusssssdgljklgjk erat mattis, cursus velit at, vehicula lectus. Suspendisse ligula augue, tempus et feugiat at, maximus eu tellus Morbi vehicula leo ut aliquam pretium.Pellentesque a quam ipsum. Morbi et accumsan diamNulla ultrices rutrum sem,'
                            
      },
      {
        title: 'Prueba de titulo 4',
        date: 'Publicado el dia ' + moment().date()+ ' de '+ moment().format("MMMM") + ' del Ano  '+moment().format("YYYY"),
        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et lacus elit. Morbi vehicula leo ut aliquam  t pulvinar enim pretium ac. Mauris luctusssssdgljklgjk erat mattis, cursus velit at, vehicula lectus. Suspendisse ligula augue, tempus et feugiat at, maximus eu tellus Morbi vehicula leo ut aliquam pretium.Pellentesque a quam ipsum. Morbi et accumsan diamNulla ultrices rutrum sem,'
                            
      },
      {
        title: 'Prueba de titulo 5',
        date: 'Publicado el dia ' + moment().date()+ ' de '+ moment().format("MMMM") + ' del Ano  '+moment().format("YYYY"),
        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et lacus elit. Morbi vehicula leo ut aliquam  t pulvinar enim pretium ac. Mauris luctusssssdgljklgjk erat mattis, cursus velit at, vehicula lectus. Suspendisse ligula augue, tempus et feugiat at, maximus eu tellus Morbi vehicula leo ut aliquam pretium.Pellentesque a quam ipsum. Morbi et accumsan diamNulla ultrices rutrum sem,'
                            
      },     
    ];
    posts.forEach((item,index) => {
        var post = 
        `<article class="post">
            <h2>${item.title}</h2>
            <spam class="date">${item.date}</spam>
            <p>
                ${item.content}
            </p>
            <a href="#" class="button-more">Leer mas</a>
        </article>
        `;
        //console.log(post);
        $("#posts").append(post);
    });
  }
    //Selector de tema
    var theme = $('#theme');
    $("#to-green").click(function(){
      theme.attr("href", "css/green.css");
    });
    $("#to-red").click(function(){
      theme.attr("href", "css/red.css");
    });
    $("#to-blue").click(function(){
      theme.attr("href", "css/blue.css");
    });

    //Scroll ariba d ela web
    $('.subir').click(function(e){
      e.preventDefault();

      $('html , body').animate({
        scrollTop:0
      }, 700);
      return false;
    });
    //login falso
    $('#login form').submit(function(){
      var form_name = $("#form_name").val();

      localStorage.setItem("form_name",form_name);
    });
    var form_name = localStorage.getItem("form_name");

    if(form_name != null &&  form_name != "undefined"){
      var about_parrafo = $("#about p");
      about_parrafo.html("<br><strong> Bienvenido "+ form_name + "<strong>");
      about_parrafo.append("<a href='#' id='logout'>Cerrar Secion </a>");


      $('#login').hide();

      $("#logout").click(function(){
        localStorage.clear();
        location.reload ();
      });

    }
    //Acordeon
    if(window.location.href.indexOf('about') > -1){
      $("#acordeon").accordion();
    }
    //Reloj
    if(window.location.href.indexOf('reloj') > -1){
      setInterval(function(){
          var reloj = moment().format("hh:mm:ss");
          $('#reloj').html(reloj);
      },1000);
    }
    //Validacion
    if(window.location.href.indexOf('contacto') > -1){
        $("form input[name='date']").datepicker({
          dateFormat: 'dd-mm-yy'
        });
        $.validate({
        lang: 'es',
        errorMessagePosition: 'top',
        scrollToTopOnError: true
      });
    }
    




});