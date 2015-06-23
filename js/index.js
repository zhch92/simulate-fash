$(document).ready(function() {
    //状态切换
  

    function autoPlay() {  
     var oP = $("#auto").position();
    var oLeft = oP.left;
    var oTop = oP.top;
        if (oLeft >-440) {
            $("#auto").css('left', '-=220px') 

        }else {
           $("#auto").css('left', '0px')  ; 
  
        }
    
    };

    setInterval(autoPlay, 3000)




})
