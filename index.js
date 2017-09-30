// A $( document ).ready() block.
$(document).ready(function () {
    //your jquery method blocks here 
    
    imageChange();
    hideSpotify();
    showSpotify();


       
});

 // Hide spotify on load
 $(function hideSpotify(){
    $('.spotify').hide();
});

//This doesn't work
$(function showSpotify(){
    $('.btn-spotify').click(function(){
        //$(".spotify").toggle();
        $('.spotify').toggle('slow');
              
    })
});
/* $(".next").click(function () {
  $(this).closest(".stage").fadeOut().next().fadeIn();
});
$(".back").click(function () {
  $(this).closest(".stage").fadeOut().prev().fadeIn();
}); */
//Increases the size of the main image 5% and reduces it back to normal in the same animation
function imageChange() {
    $('.mainimage').hover(function () {
        $('.mainimage').animate({
            height: '+=5%',
            width: '+=5%'
        }, 'slow');
        $('.mainimage').animate({
            height: '-=5%',
            width: '-=5%'
        }, 'slow');    
    });
};