// A $( document ).ready() block.
$(document).ready(function () {
    //your jquery method blocks here 
    showAlbums();
    imageChange();
});
//Hides albums on load
$(function hideAlbums() {
    $('.hidden').hide();
});

function showAlbums() {

    $("#morebutton").click(function () {
        $('.hidden').show();
        $('#morebutton').hide();
    });
}
function imageChange(){
    $('.mainimage').click(function() {
        $('.mainimage').animate({
            height: '+=10%',
            width: '+=10%'
        });
    });
}


/*$("button").click(function(){
    $("div").animate({
        left: '250px',
        height: '+=150px',
        width: '+=150px'
    });
})*/