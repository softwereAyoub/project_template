var ule=document.getElementById('dash');
var cl=document.getElementById('click');
var test=0;
var logos=document.querySelector('.logos');
cl.onclick=function(){
    if(test==0){
    ule.style.display='block';
    test=10;
    logos.style.display='none'
    }
    else{
        ule.style.display='none';
            logos.style.display='block'
        test=0;
    }
}