// A $( document ).ready() block.
$(document).ready(function () {
    //your jquery method blocks here 
    showAlbums();
    imageChange();
    hideSpotify();
});
//Hides albums on load
$(function hideAlbums() {
    $('.hidden').hide();
});
// Hide spotify on load
$(function hideSpotify(){
    $('.spotify').hide();
})
//Shows extra albums when the more button is clicked and hides the button
function showAlbums() {

    $("#morebutton").click(function () {
        $('.hidden').show();
        $('#morebutton').hide();
    });
}
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