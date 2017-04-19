/*  Show The NavBar */ 
function navbarshow() {
$(".navbar ul").show(1000);
$(".navbar img").show(1000);

}
function headershow() {
$(".headertitle").show(1000);
$(".headbottom").slideDown(2000);
}
setTimeout(navbarshow,1000);
setTimeout(headershow,2000);

/* End of Show Navbar */

/* Smooth Scroll */ 
$("#nav").localScroll();



/* Button Show & Hide Navbar */ 
$("#toggle").click(function () {
$(".navbar ul li").toggle(1000);

});

$("#num1").mouseenter(function(){
    $("#bind1").slideToggle(1000);
    console.log("karem")

})
$("#num1").mouseleave(function(){
    $("#bind1").slideToggle(1000);
    console.log("karem")

})


/* Show and Hide Portofolio */ 
$("#num2").mouseenter(function(){
    $("#bind2").slideToggle(1000);
    console.log("karem")

})
$("#num2").mouseleave(function(){
    $("#bind2").slideToggle(1000);
    console.log("karem")

})



/* */ 
$(".navbar ul li a").mouseover(function () {
    $(".navbar ul li a").a


})
