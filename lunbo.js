window.onload=function(){
    var oBox=document.querySelector('.bloglist');
    var oPrev=oBox.children[0];
    var oNext=oBox.children[1];
    var oUl=oBox.children[2];
    var oOl=oBox.children[3];
    var aLi=oUl.children;
    var aBtn=oOl.children;
    var n = 0;
    var timer =null;
    oUl.innerHTML+=oUl.innerHTML;
    oUl.style.width=aLi[0].offsetWidth*aLi.length+'px';
    oBox.onmouseover=function(){
        oPrev.style.display='block';
        oNext.style.display='block';
    };
    oBox.onmouseout=function(){
        oPrev.style.display='none';
        oNext.style.display='none';
    };
    for(var i =0; i<aBtn.length;i++){
        (function(index){
            aBtn[i].onclick=function(){
                if((n%3==2 || n%3==-1)&&index==0){
                     n++;
                }
                if(n%3==0&&index==aBtn.length-1){
                    n--;
                }
                n=Math.floor(n/aBtn.length)*aBtn.length+index;
                tab();
            };
        })(i);
    }
    function tab(){
        for(var i=0;i<aBtn.length;i++){
            aBtn[i].className=''
        }
        aBtn[(n%3+3)%3].className='active';
        //oUl.style.left=-n*aLi[0].offsetWidth+'px';
        startmove(oUl,-n*aLi[0].offsetWidth);

    };
    oPrev.onclick=function(){
        n--;
        tab();
    };
    oNext.onclick=function(){
        n++;
        tab();
    };
    var left = 0;
    var w = oUl.offsetWidth/2;
    function startmove(obj,target){
        clearInterval(timer);
        var start = left;
        var dis = target-start;
        var count = Math.floor(500/30);
        var i = 0;
        timer=setInterval(function(){
            i++;
            var a = i/count;
            var cur = start+dis*a*a*a;
            left=cur;
            obj.style.left=(left%w-w)%w+'px';
            if(i==count){
                clearInterval(timer);
            }
        },16);
    };  
};