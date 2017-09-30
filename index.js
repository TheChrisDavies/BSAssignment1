// A $( document ).ready() block.
$(document).ready(function () {
    //your jquery method blocks here 

    imageChange();
    hideSpotify();
    showSpotify();
    appendComment();


});

// Hide spotify on load
$(function hideSpotify() {
    $('.spotify').hide();
});
//Toggle Spotify playlists on button click
$(function showSpotify() {
    $('.btn-spotify').click(function () {
        $('.spotify').toggle('slow');
    })
});
// JQuery Comment functionality
$(function appendComment() {
    $('.btn-comment').click(function () {
        var commentName = $("#usr").val();
        var commentText = $("#comment").val();
        $('#thecomment').append('<div class="bg-white col-xs-12 col-sm-12 col-md-12 col-md-offset-0 col-lg-12 col-lg-offset-0">' + commentName + ' wrote: <br/> ' + commentText + '</div>');
    })
});

//Animation of main image
$(".mainimage").hover(function () {
    console.log('hovered');
    $('.mainimage').animate({
        width: '-=5px',
        height: '-=5px'
    }, 'slow');
    $('.mainimage').animate({
        width: '+=5px',
        height: '+=5px'
    }, 'slow');
});