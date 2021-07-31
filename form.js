<<<<<<< HEAD
$('input[type=submit]').on('click', e=>{
    
    if(!isTxt('userid', 5)) e.preventDefault();
})
=======
$("input[type=submit]").on("click", e=>{   
    if(!isTxt("userid", 5)) e.preventDefault();
});

>>>>>>> 709a8327ee0ed0b03a03eb1637020c42383c1577

function isTxt(name, len){
    if(len == undefined) len = 5;
    const txt = $(`[name=${name}]`).val();
<<<<<<< HEAD
    const msg = $(`[name=${name}]`).attr('placeholder');

    if(txt==''){
        $(`[name=${name}]`).addClass('error');
=======
    const msg = $(`[name=${name}]`).attr("placeholder");

    if(txt==""){
        $(`[name=${name}]`).addClass("error");
>>>>>>> 709a8327ee0ed0b03a03eb1637020c42383c1577
        return false;
    }else{
        if(txt.length < len){
            alert(`최소 ${len}글자 이상 입력하세요!`);
<<<<<<< HEAD
            $(`[name=${name}]`).addClass('error');
            return false;
        }else {
            $(`[name=${name}]`).removeClass('error');
=======
            $(`[name=${name}]`).addClass("error");
            return false;
        }else{
            $(`[name=${name}]`).removeClass("error");
>>>>>>> 709a8327ee0ed0b03a03eb1637020c42383c1577
            return true;
        }
    }
}