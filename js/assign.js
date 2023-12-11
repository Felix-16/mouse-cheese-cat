$(document).ready(function() {
    let movingA = false; 
    let movingB = false;
        

    animate();

    function animate() {
        let currentPosA = $("#A").position();
        let currentPosB = $("#B").position();
        let currentPosC = $("#C").position();
       
        if (!movingA && currentPosA.left < currentPosB.left - 100) {
           movingA = true;
           $("#A").animate({ left: '+=190' }, 1000, function() {
             movingA = false;
           });
        }
       
        if (!movingB && currentPosA.left > currentPosB.left - 100 && currentPosA.left < currentPosB.left + 100) {
           movingB = true;
           $("#B").animate({ left: '+=190' }, 1000, function() {
             movingB = false;
           });
        }
       
        // if (!movingB && currentPosB.left > currentPosC.left - 100 && currentPosB.left < currentPosC.left + 100) {
        //    movingB = true;
        //    $("#B").animate({ left: '+=190' }, 1000, function() {
        //      movingB = false;
        //    });
        // }

        setTimeout(function() {
            $("#A").stop();
            }, 1000);
       
        requestAnimationFrame(animate);
    }
});

