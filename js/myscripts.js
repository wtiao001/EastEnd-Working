$(document).ready(function () {
    
    $('.carousel-cell').addClass('centered-cells');
    
    var $carousel = $('.carousel').flickity();
    $carousel.on( 'change.flickity', function( event, index) {
        
        //  REMOVE FOCUSED STYLES FROM INITIALLY FOCUSED CELL
        $('#carousel-cell2').children().removeClass('initial');
        $('#carousel-cell2').children().removeClass('initial-h');
        
        // DEFINE FOCUS CELL & VIDEO PREVIEW
        
        var focusCell = ($(".carousel-cell").eq(index));
        var focusVid = focusCell.find(".video-holder");
        var focusPrev = focusCell.find(".vid-preview");
        
        
        // PLAY PREVIEW VIDEO OF FOCUSED CELL
        focusPrev.get(0).play();
        
        // AJUST STYLES OF FOCUSED VIDEO CELL
        focusVid.addClass('expand');
        focusCell.children().addClass('showInfo');
        
        // HIDE OTHER CELL'S VIDEO INFO + ACCESS AND DISPLAY CHILD ELEMENTS OF FOCUS CELL
        
        
        if(focusCell.is($(".carousel-cell").last())) {
            $('#carousel-cell2').children().removeClass('showInfo');
            $('#carousel-cell2').find('.video-holder').removeClass('expand');
        }
        
        if(focusCell.is($(".carousel-cell").first())) {
            $('#carousel-cell3').children().removeClass('showInfo');
            $('#carousel-cell3').find('.video-holder').removeClass('expand');
        }
        
        focusCell.prev().children().removeClass('showInfo');
        focusCell.prev().find('.video-holder').removeClass('expand');
        focusCell.next().children().removeClass('showInfo');
        focusCell.next().find('.video-holder').removeClass('expand');
         
    });
});