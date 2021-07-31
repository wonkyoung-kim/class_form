$('input[type=submit]').on('click', e=>{
    
    const txt = $('[name=userid]').val();
    const msg = $('[name=userid]').attr('placeholder');

    if(txt == ''){
        e.preventDefault();
        alert(msg);
    } else {
        if(txt.length < 5){
            e.preventDefault();
            alert('최소 5글자 이상 입력하세요.');
            $('[name=userid]').addClass('error');
        }
    }
})