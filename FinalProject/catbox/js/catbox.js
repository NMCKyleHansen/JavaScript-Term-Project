var modalpopup = document.getElementById('infoModal');
    $(function()
        {
            $("#Movecat1").draggable();
            $("#Movecat2").draggable();
            $("#Movecat3").draggable();
            $("#Movecat4").draggable();
            $("#Movecat5").draggable();
            $("#Movecat6").draggable();
            $("#Movemouse1").draggable();
            $("#Moveyarn1").draggable();                        
            
        });         
    document.getElementById("button1").addEventListener("click", function(){
           modalpopup.style.display = "block";
               document.getElementById("exit").addEventListener("click", function(){
               location.replace("../finalProject.html");
               });
               document.getElementById("restart").addEventListener("click", function(){
               location.replace("catbox.html"); 
               });

 });