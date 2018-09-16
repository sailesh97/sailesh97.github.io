
function myFunction2() {
    var text=document.getElementsByClassName("text2").item(0);
    text.color="black";
} 




/*---------------------Accordion---------------------------------*/
var selectIds = $('#panel1,#panel2,#panel3');
$(function ($) {
    selectIds.on('show.bs.collapse hidden.bs.collapse', function () {
        $(this).prev().find('.pm').toggleClass('fa-plus-circle fa-minus-circle');
    })
});