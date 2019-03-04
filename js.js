$(function() {
    var windowHeight = $(window).height();
    var menuHeight = $("#menuBar").height();
    var codeContainerHeight = windowHeight - menuHeight;
                
    //$(".codeContainer").css("height", codeContainerHeight);
    $(".codeContainer").height(codeContainerHeight+"px");
    
    $(".select").mouseover(function(){
        $(this).css("cursor", "pointer");
    });
    
    $(".select").click(function(){
        //$(this).toggle("slow");
        $(this).toggleClass("selected");
        //var id = $(this).html();
        var id = $(this).attr("name");
        $("#"+id+"Container").toggle();
        
        var number = $(".codeContainer").filter(function() {
            return check = $(this).css("display") !== "none";
        }).length;
        
        var width = 100/number;
        $(".codeContainer").css("width", width+"%");
    });
    
    $("#runButton").click(function(){        
        $('#resultFrame').contents().find('html').html("<style>"+$('#cssCode')
        .val()+"</style>"+$('#htmlCode').val());
        
        document.getElementById('resultFrame').contentWindow.eval($('#jsCode').val());
    });
    
});