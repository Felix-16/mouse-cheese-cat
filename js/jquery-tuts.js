$(document).ready(function(){
  const TOGGLE_SHOW = "Show Text";
  
  const paragraphElement = $("#pText");

  $(".felixButton").click(function() {
    // const buttonText = $(this).text();
    // if (buttonText === TOGGLE_SHOW) {
    //     paragraphElement.show(1000);
    //     $(this).text("Hide Text");
    // } else {
    //     paragraphElement.hide(1000);
    //     $(this).text(TOGGLE_SHOW);
    // }

    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
    $("#div4").fadeIn(5000);
  }); 
  
$("h1:last").hover(function() {
    $(this).css("color", "red");
}, function(){
    $(this).css("color", "#000")
});


$("img").on("mouseover", function() {
    $(this).css("filter", "blur(10px)");
  });
  
$("img").on("mouseleave", function() {
    $(this).css("filter", "none");
});
















});



// $(function(){

// });

// $(()=> {

// });

// jQuery(document).ready(()=> {

// });

// jQuery(function(){

// });

// jQuery(()=> {

// });