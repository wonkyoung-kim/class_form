$("input[type=submit]").on("click", e=>{   
    if(!isTxt("userid", 5)) e.preventDefault();
});


function isTxt(name, len){
    if(len == undefined) len = 5;
    const txt = $(`[name=${name}]`).val();
    const msg = $(`[name=${name}]`).attr("placeholder");

    if(txt==""){
        $(`[name=${name}]`).addClass("error");
        return false;
    }else{
        if(txt.length < len){
            alert(`최소 ${len}글자 이상 입력하세요!`);
            $(`[name=${name}]`).addClass("error");
            return false;
        }else{
            $(`[name=${name}]`).removeClass("error");
            return true;
        }
    }
}