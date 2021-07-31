$("input[type=submit]").on("click", e=>{   
    if(!isTxt("userid", 5)) e.preventDefault();
    if(!isPwd("pwd1", "pwd2", 5)) e.preventDefault();
});


function isTxt(name, len){
    if(len == undefined) len = 5;
    const txt = $(`[name=${name}]`).val();
    const msg = $(`[name=${name}]`).attr("placeholder");

    if(txt==""){
        alert(msg);
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

function isPwd(name1, name2, len){
    const $pwd1 = $(`input[name=${name1}]`);
    const $pwd2 = $(`input[name=${name2}]`);
    const pwd1 = $pwd1.val();
    const pwd2 = $pwd2.val();
    let isConfirm = false;
    let i=0;
    const num = /[0-9]/;
    const eng = /[a-zA-Z]/;
    const spc = /[~!@#$%^&*()_+]/;

    if(pwd1 === pwd2){
        //비번이 len갯수보다 큰지 확인
        if(pwd1.length >= len){
            i++;
        }else{
            alert("비밀번호를 5자리 이상 입력하세요.");
        }

        //비번에 숫자가 포함되어 있는지 확인
        if(num.test(pwd1)){
            i++;
        }else{
            alert("비밀번호에 숫자를 포함하세요.");
        }

        //비번에 문자가 포함되어 있는지 확인
        if(eng.test(pwd1)){
            i++;
        }else{
            alert("비밀번호에 문자를 포함하세요.");
        }

        //비번에 특수문자가 포함되어 있는지 확인
        if(spc.test(pwd1)){
            i++;
        }else{
            alert("비밀번호에 특수문자를 포함하세요.")
        }

        if(i===4){
            $pwd1.removeClass("error");
            $pwd2.removeClass("error");
            isConfirm = true;
            return isConfirm;
        }
    }else{
        $pwd1.addClass("error");
        $pwd2.addClass("error");
        return isConfirm;
    }
    //대전제. name1, name의 비번이 같아야됨
    //조건1. name1의 갯수가 len보다 큼
    //조건2. name1에 숫자포함
    //조건3. name1에 문자표함
    //조건4. name1에 특수문자 포함
}