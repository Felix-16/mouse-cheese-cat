$(document).ready(function() {


    $("button").click(function(){
        const image = $("img");
        function blurImage(){
            image.css("filter", "blur(5px)")
        }; 
        image.fadeIn(3000,blurImage);
        
    });

    


























});