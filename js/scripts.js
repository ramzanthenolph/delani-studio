$(document).ready(function(){
    $("img#designlogo").click(function(){
        $(".design").show();
    });
    $("img#developmenticon").click(function(){
        $(".dev").show();
    });
    $("img#producticon").click(function(){
        $(".product").show();
    });
    $("img#work1").hover(function(){
        $(".centered").show();
    });
});