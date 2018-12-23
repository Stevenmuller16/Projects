// check out items with click event
$("li").click(function(){
    
    $(this).toggleClass("completed");
});

$("span").click(function(e){
    e.stopPropagation();
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    
});

$("input[type='text']").keypress(function(){


});