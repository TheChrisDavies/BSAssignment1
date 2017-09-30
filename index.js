// A $( document ).ready() block.
$(document).ready(function () {
    //your jquery method blocks here 

    imageChange();
    hideSpotify();
    showSpotify();
    appendText();


});

// Hide spotify on load
$(function hideSpotify() {
    $('.spotify').hide();
});

$(function showSpotify() {
    $('.btn-spotify').click(function () {
        $('.spotify').toggle('slow');
    })
});
$(function appendText() {
    $('.btn-comment').click(function () {
        console.log('Comment button clicked');

        var commentName = $("#usr").val();
        var commentText = $("#comment").val();
        //var commentName = $("<p></p>").text('Commenter Wrote:');
        //var commentText = $("<p></p>").text('Comment Text');
        $('#thecomment').append('<div class="bg-white col-xs-12 col-sm-12 col-md-12 col-md-offset-0 col-lg-12 col-lg-offset-0">' + commentName + 'wrote: <br/> ' + commentText + '</div>');
        // 
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