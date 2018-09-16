const newForm = document.querySelector('.newForm');
const accPlus = document.querySelector('.acc-content-plus');
const accMinus = document.querySelectorAll('.acc-content-minus');
const minusRows = document.querySelectorAll('.stu');
const pbodyInner = document.querySelector('.p-body-inner');



const accPlus2 = document.querySelector('.acc-content-plus-2');
const accMinus2 = document.querySelectorAll('.acc-content-minus-2');
const minusRows2 = document.querySelectorAll('.stu-2');
const pbodyInner2 = document.querySelector('.p-body-inner-2');





function myFunction2() {
    var text = document.getElementsByClassName("text2").item(0);
    text.color = "black";
}
/*--------------------Upload------------------------------------*/

$(document).ready(function () {


    var readURL = function (input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.profile-pic').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }


    $(".file-upload").on('change', function () {
        readURL(this);
    });

    $(".upload-button").on('click', function () {
        $(".file-upload").click();
    });
});


/*---------------------Accordion---------------------------------*/
var selectIds = $('#panel1,#panel2,#panel3');
$(function ($) {
    selectIds.on('show.bs.collapse hidden.bs.collapse', function () {
        $(this).prev().find('.pm').toggleClass('fa-plus-circle fa-minus-circle');
    })
});

/*-----------------------Delete On Clicking the - icon----------------------------------*/
/*document.querySelector('.efgh').parentElement.parentElement.parentElement.remove();*/
document.querySelector('.twt-rm-1').addEventListener('click', onclick1);
function onclick1(e) {
    let val;
    val = e.target;
    val.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
    console.log(val);
}
document.querySelector('.twt-rm-2').addEventListener('click', onclick2);
function onclick2(e) {
    let val;
    val = e.target;
    val.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
    console.log(val);
}
document.querySelector('.twt-rm-3').addEventListener('click', onclick3);
function onclick3(e) {
    let val;
    val = e.target;
    val.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
    console.log(val);
}
/*-------------------------Add New Section On Clicking the + icon---------------------------*/
document.querySelector('.plus-newSection').addEventListener('click', createNew);
function createNew(e) {
    let di = document.createElement('div');
    di.className = "form-group";
    di.innerHTML = '<div class="row"><div class="d-flex justify-content-start col-lg-2"></div><div class="col-lg-10"><div class="row"><div class="col-10"><input type="text" class="form-control twitter-input py-1" placeholder="https://youtube.com/"></div><div class="py-1 col-2 delete-item"><i class="fas fa-minus-circle"></i></div></div></div></div><div class="border-so mt-2"></div>';
    newForm.appendChild(di);
}
/*--------------------------Remove New Section Created--------------------------------------*/
newForm.addEventListener('click', removenew);
function removenew(e) {

    if (e.target.parentElement.classList.contains('delete-item')) {
        const va = e.target;
        console.log(va);
        va.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
    }
}

