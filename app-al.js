const newForm=document.querySelector('.newForm');
const accPlus=document.querySelector('.acc-content-plus');
const accMinus=document.querySelectorAll('.acc-content-minus');
const minusRows=document.querySelectorAll('.stu');
const pbodyInner=document.querySelector('.p-body-inner');



const accPlus2=document.querySelector('.acc-content-plus-2');
const accMinus2=document.querySelectorAll('.acc-content-minus-2');
const minusRows2=document.querySelectorAll('.stu-2');
const pbodyInner2=document.querySelector('.p-body-inner-2');


const timeSection = document.querySelector('.time-section');

const addTimeNew= document.querySelector('.time-plus');
function myFunction2() {
    var text=document.getElementsByClassName("text2").item(0);
    text.color="black";
} 
function myFunction() {
    var text=document.getElementsByClassName("text2").item(0);
    text.color="black";
} 
/*--------------------Upload------------------------------------*/

$(document).ready(function() {

    
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.profile-pic').attr('src', e.target.result);
            }
    
            reader.readAsDataURL(input.files[0]);
        }
    }
    

    $(".file-upload").on('change', function(){
        readURL(this);
    });
    
    $(".upload-button").on('click', function() {
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
document.querySelector('.twt-rm-1').addEventListener('click',onclick1);
function onclick1(e){
    let val;
    val=e.target;
    val.parentElement.parentElement.parentElement.parentElement.remove();
    console.log(val);
}
document.querySelector('.twt-rm-2').addEventListener('click',onclick2);
function onclick2(e){
    let val;
    val=e.target;
    val.parentElement.parentElement.parentElement.parentElement.remove();
    console.log(val);
}
document.querySelector('.twt-rm-3').addEventListener('click',onclick3);
function onclick3(e){
    let val;
    val=e.target;
    val.parentElement.parentElement.parentElement.parentElement.remove();
    console.log(val);
}
/*-------------------------Add New Section On Clicking the + icon---------------------------*/
document.querySelector('.plus-newSection').addEventListener('click',createNew);
function createNew(e){

    
    let di = document.createElement('div');
    di.className="form-group";
    di.innerHTML='<div class="row"><div class="col-lg-12 d-flex justify-content-between"><div class="col-lg-11"><input type="text" class="form-control twitter-input py-1" placeholder="https://youtube.com/"></div><div class="py-1 delete-item"><i class="fas fa-minus-circle"></i></div></div></div><div class="border-so mt-2"></div>';
   // di.innerHTML='<div class="form-group"><div class="row"><div class="d-flex justify-content-start col-lg-1"><div><div class="mr-2"><i class="fab fa-youtube-square"></i></div></div><div><div><h6 class="yt mt-1 pt-1">Youtube</h6></div></div></div><div class="col-lg-11 d-flex justify-content-between"><div class="col-lg-11"><input type="text" class="form-control twitter-input py-1" placeholder="https://youtube.com/"></div><div class="py-1 delete-item"><i class="fas fa-minus-circle twt-rm-3"></i></div></div></div><div class="border-so mt-2"></div></div>';

    newForm.appendChild(di);   
       
}
/*--------------------------Remove New Section Created--------------------------------------*/
newForm.addEventListener('click',removenew);
function removenew(e){
   
    if(e.target.parentElement.classList.contains('delete-item')){
        const va = e.target;
        console.log(va);
        va.parentElement.parentElement.parentElement.parentElement.remove();
    }
}
/*--------------------------Pricing Section-------------------------------------------------*/
/*Add On Clicking + icon */
accPlus.addEventListener('click',addPricing);
function addPricing(e){
    const p=document.createElement('div');
    p.className="row mt-4 stu";
    p.innerHTML='<div class="col-lg-4 col-md-4 col-sm-6"><input class="form-control py-2" type="text" placeholder="Title*"></div><div class="col-lg-5 col-md-5 col-sm-6"><input class="form-control py-2" type="text" placeholder="Description*"></div><div class="col-lg-2 col-md-2 col-sm-12"><div class="d-flex justify-content-between input-bd-usd"><div><input class="form-control py-2" style="border:none;" type="text" placeholder="Price*"></div><div class="input-group-prepend "><span class="input-group-text usd-bd" id="validationTooltipUsernamePrepend">USD</span></div></div></div><div class="col-lg-1 col-sm-1 parent-remove"><i class="fas fa-minus mt-3 fa-xs acc-content-minus"></i></div>';
    pbodyInner.appendChild(p);
}
/*Remove On Clicking - icon*/
pbodyInner.addEventListener('click',removeNew1);
function removeNew1(e){
    if(minusRows.length>=1){
        if(e.target.parentElement.classList.contains('parent-remove')){
            e.target.parentElement.parentElement.remove();
        }
    }  
}
/*--------------------------Pricing Section222-------------------------------------------------*/
/*Add On Clicking + icon */
accPlus2.addEventListener('click',addPricing2);


function addPricing2(e){
    const q=document.createElement('div');
    q.className="row mt-4 stu-2";
    q.innerHTML='<div class="col-lg-4 col-md-4 col-sm-6"><input class="form-control py-2" type="text" placeholder="Title*"></div><div class="col-lg-5 col-md-5 col-sm-6"><input class="form-control py-2" type="text" placeholder="Description*"></div><div class="col-lg-2 col-md-2 col-sm-12"><div class="d-flex justify-content-between input-bd-usd"><div><input class="form-control py-2" style="border:none;" type="text" placeholder="Price*"></div><div class="input-group-prepend "><span class="input-group-text usd-bd" id="validationTooltipUsernamePrepend">USD</span></div></div></div><div class="col-lg-1 col-sm-1 parent-remove-2"><i class="fas fa-minus mt-3 fa-xs acc-content-minus-2"></i></div>';
 
    pbodyInner2.appendChild(q);
}

/*Remove On Clicking - icon*/
pbodyInner2.addEventListener('click',removeNew2);
function removeNew2(e){
    if(minusRows2.length>=1){
        if(e.target.parentElement.classList.contains('parent-remove-2')){
            e.target.parentElement.parentElement.remove();
        }
    }  
}
timeSection.addEventListener('click',removeTime);
function removeTime(e){
    if(e.target.parentElement.classList.contains('time-minus')){
        e.target.parentElement.parentElement.parentElement.remove();
    }
}

addTimeNew.addEventListener('click',addTime);
const parentTimeAppend=document.querySelector('.time-section');
function addTime(e){
        const newTimeSec = document.createElement('div');
        newTimeSec.className="row mt-3 margin-row-smdv";
        newTimeSec.innerHTML='<div class="col-4"><div class="px-3"><div class="row open-hours-4 border-so pb-3"><input type="text" class="twitter-input col-lg-2 col-md-2 other" placeholder="Mon"><span class="mx-2 col-lg-1 col-md-1 hiphen">-</span><input type="text" class="twitter-input col-lg-2 col-md-2 other" placeholder="Sat"></div></div></div><div class="col-8 d-flex justify-content-between border-so "><div class="col-lg-other-smdv"><div class="row border-so-smdv"><div class="col-lg-5 col-md-5 col-lg-other col-lg-other-smdv2"><input id="input-time" class="open-hours-5" type="time" value="--"><span class="badge badge-light am">am</span></div><div class="col-lg-1 col-md-1"><span class="to pr-2">to</span></div><div class="col-lg-5 col-md-5 col-lg-other col-lg-other-smdv"><input id="input-time" class="open-hours-5" type="time" value="--"><span class="badge badge-light am">pm</span></div></div></div><div class="py-1 time-minus"><i class="fas fa-minus-circle minus-smdv"></i></div></div>';
        parentTimeAppend.appendChild(newTimeSec);
}
/*

                                    
                                        
                                    

                                        


                                            
                                               
                                                    
                                                  
                                                
                                          
                                        
                                        
                                            
                                                
                                                    
                                                        
                                                        
                                                    
                                                    
                                                        
                                                   
                                                    
                                                        
                                                        
                                                    
                                               
                                           
                                            
                                                
                                            
                                        
                                                               
                                        
                                            


                                                
                                                
                                                
                                                
                                                
                                            
                                        
                                        
                                            
                                        
                                   
                                

*/