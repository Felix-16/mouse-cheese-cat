$(document).ready(function() {

    $("button").click(function() {
        
        let movingJerry = false;
        let movingCheese = false;


        animateImages();

        function animateImages() {
            let cheeseOriginPos = $("#cheese").position();
            let jerryOriginPos = $("#jerry").position();
            // let tomOriginPos = $("#tom").position();

            if (!movingJerry && jerryOriginPos.left < cheeseOriginPos.left - 200) {
                movingJerry = true;
                $("#jerry").animate({ left: "+=350" }, 5000, function() {
                    movingJerry = false;
                });
            }

            if (!movingCheese && jerryOriginPos.left > cheeseOriginPos.left - 250 && jerryOriginPos.left < cheeseOriginPos.left + 200) {
                movingCheese = true;
                $("#cheese").animate({left: "+=390"}, 5000, function() {
                    movingCheese = false;
                });
            }

            // if (!movingCheese && cheeseOriginPos.left > tomOriginPos.left - 200 && cheeseOriginPos.left < tomOriginPos.left + 200) {
            //     movingCheese = true;
            //     $("#B").animate({ left: '+=390' }, 1000, function() {
            //       movingCheese = false;
            //     });
            // }    
                
            // Stop Jerry from moving after it has reached halfway near the cheese
            setTimeout(function() {
            $("#jerry").stop();
            }, 5000);

            requestAnimationFrame(animateImages);
        };
        











    });

});