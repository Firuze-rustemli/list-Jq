$(document).ready(function () {

    $('li').draggable({
        containment: 'document',
        revert: true,
        start: function () {
            content = $(this).text();
        }
    });

    $("#list").droppable({
        hoverClass: 'border',
        accept: '.item',
        drop: function () {
            $("#list").addClass("pattern").append("<li>" + content + "</li>" + "</br>");
            $("#list li").addClass("pattern");
        } 
    });

});