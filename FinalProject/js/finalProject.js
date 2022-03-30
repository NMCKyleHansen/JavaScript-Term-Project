/*  JQuery tab code */
$('.tab-list').each(function(){                   
  var $this = $(this);                            
  var $tab = $this.find('li.active');             
  var $link = $tab.find('a');                    
  var $game = $($link.attr('href'));           

  $this.on('click', '.tab-control', function(e) { 
    e.preventDefault();                           
    var $link = $(this),                          
        id = this.hash;                           

    if (id && !$link.is('.active')) {             
      $game.removeClass('active');              
      $tab.removeClass('active');                 

      $game = $(id).addClass('active');          
      $tab = $link.parent().addClass('active');   
    }
  });
});

/* Listener to play sub game*/
document.getElementById("button1").addEventListener("click", function(){
  location.replace("submarine/submarine.html");
  });
/* Listener to play cat game*/  
document.getElementById("button2").addEventListener("click", function(){
    location.replace("catbox/catbox.html");
    });