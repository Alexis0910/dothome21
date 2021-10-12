
//mozilla/5.0 (windows nt 10.0; wow64; trident/7.0; .net4.0c; .net4.0e; .net clr 2.0.50727; .net clr 3.0.30729; .net clr 3.5.30729; zoom 3.6.0; rv:11.0) like gecko
//mozilla/5.0 (compatible; msie 10.0; windows nt 6.1; wow64; trident/7.0; slcc2; .net clr 2.0.50727; .net clr 3.5.30729; .net clr 3.0.30729; media center pc 6.0; .net4.0c; infopath.3; .net4.0e)
//mozilla/5.0 (compatible; msie 9.0; windows nt 6.1; wow64; trident/7.0; slcc2; .net clr 2.0.50727; .net clr 3.5.30729; .net clr 3.0.30729; media center pc 6.0; .net4.0c; infopath.3; .net4.0e)
//mozilla/4.0 (compatible; msie 8.0; windows nt 6.1; wow64; trident/7.0; slcc2; .net clr 2.0.50727; .net clr 3.5.30729; .net clr 3.0.30729; media center pc 6.0; .net4.0c; infopath.3; .net4.0e)
//mozilla/4.0 (compatible; msie 7.0; windows nt 6.1; wow64; trident/7.0; slcc2; .net clr 2.0.50727; .net clr 3.5.30729; .net clr 3.0.30729; media center pc 6.0; .net4.0c; infopath.3; .net4.0e)

//mozilla/5.0 (windows nt 6.1; win64; x64) applewebkit/537.36 (khtml, like gecko) chrome/88.0.4324.150 safari/537.36 edg/88.0.705.63
//mozilla/5.0 (windows nt 6.1; win64; x64) applewebkit/537.36 (khtml, like gecko) chrome/88.0.4324.150 safari/537.36
//mozilla/5.0 (macintosh; intel mac os x 11_2_1) applewebkit/537.36 (khtml, like gecko) chrome/88.0.4324.150 safari/537.36
//mozilla/5.0 (macintosh; intel mac os x 10_16_0) applewebkit/537.36 (khtml, like gecko) chrome/83.0.4103.106 whale/2.8.108.15 safari/537.36
//mozilla/5.0 (macintosh; intel mac os x 10_15_6) applewebkit/605.1.15 (khtml, like gecko) version/14.0.3 safari/605.1.15
//mozilla/5.0 (windows nt 10.0; wow64; trident/7.0; .net4.0c; .net4.0e; .net clr 2.0.50727; .net clr 3.0.30729; .net clr 3.5.30729; zoom 3.6.0; rv:11.0) like gecko
//mozilla/5.0 (compatible; msie 10.0; windows nt 6.1; wow64; trident/7.0; slcc2; .net clr 2.0.50727; .net clr 3.5.30729; .net clr 3.0.30729; media center pc 6.0; .net4.0c; infopath.3; .net4.0e)
//mozilla/5.0 (compatible; msie 9.0; windows nt 6.1; wow64; trident/7.0; slcc2; .net clr 2.0.50727; .net clr 3.5.30729; .net clr 3.0.30729; media center pc 6.0; .net4.0c; infopath.3; .net4.0e)
//mozilla/4.0 (compatible; msie 8.0; windows nt 6.1; wow64; trident/7.0; slcc2; .net clr 2.0.50727; .net clr 3.5.30729; .net clr 3.0.30729; media center pc 6.0; .net4.0c; infopath.3; .net4.0e)
//mozilla/4.0 (compatible; msie 7.0; windows nt 6.1; wow64; trident/7.0; slcc2; .net clr 2.0.50727; .net clr 3.5.30729; .net clr 3.0.30729; media center pc 6.0; .net4.0c; infopath.3; .net4.0e)
//Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36 Edg/92.0.902.84
//mozilla/5.0 (iphone; cpu iphone os 14_4 like mac os x) applewebkit/605.1.15 (khtml, like gecko) version/14.0.3 mobile/15e148 safari/604.1
//Mozilla/5.0 (Linux; Android 9; SM-G955N Build/PPR1.180610.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/75.0.3770.89 Mobile Safari/537.36
//Mozilla/5.0 (Ipad; CPU OS 13_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/79.0.3945.73 Mobile/15E148 Safari/ 604.1
//Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/24.1 Safari/605.1.15
//Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Safari/605.1.15
//Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:91.0) Gecko/20100101 Firefox/91.0
//user Agent 호환성체크

//근데문제는 크롬, safari는 기본으로 다뜨는데 진자 크롬인지 아닌지 그거만 어떻게 뽑아낼거야?
//키값을 불러오면돼!
function agentCheck(){
    const agent = navigator.userAgent.toLowerCase();
    const browerList = {
        mac : agent.match(/macintosh/i),
        window : agent.match(/windows/i),
        iphone : agent.match(/iphone/i),
        android : agent.match(/Android/i),
        ipad : agent.match(/Ipad/i),
        ie7 : agent.match(/msie 7.0/i),
        ie8: agent.match(/msie 8.0/i),
        ie9: agent.match(/msie 9.0/i),
        ie10 : agent.match(/msie 10.0/),
        ie11 : agent.match(/rv:11.0/i),
        edge : agent.match(/Edg/i),
        chrome : agent.match(/Chrome/i),
        safari : agent.match(/Safari/i),
        firefox : agent.match(/Firefox/i),
        opera : agent.match(/opera/i),
        whale : agent.match(/whale/i),
    }
    for( prop in browerList ){
        if(browerList[prop]){ 
            //브라우저중에 내가오픈한브라우저 속성 키값만 보여줘!!한거 if안쓰면 키값 다가져옴;;;
            //console.log(prop)
            document.querySelector("body").classList.add(prop);
        }
    };
}

//code view
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre code').forEach((el) => {
    hljs.highlightElement(el);
    });
});



//Modal jQuery ver.
function modaljquery(){
    $(".info.bottom button").click(function(){
        $("#modal").removeClass().addClass("show");
        });
    $(".modal-cont button").click(function(){
        $("#modal").addClass("hide");
    });
}



//Modal Javascript Ver.
function modal(){
    document.querySelector(".info button").addEventListener("click", function(){
        document.querySelector("#modal").classList.remove("hide");
        document.querySelector("#modal").classList.add("show");
    });
    document.querySelector(".modal-cont button").addEventListener("click", function(){
        document.querySelector("#modal").classList.add("hide");
    });
    //modal버튼 내 html css java 작동 
    const viewTitle = document.querySelectorAll(".view-title li");
    const viewCont = document.querySelectorAll(".view-cont > div");
    
        viewTitle.forEach((element, index)=>{
        element.addEventListener("click", function(){
            viewTitle.forEach((el)=>{
                el.classList.remove("active");
            });
            element.classList.add("active");
    
            viewCont.forEach((el)=>{
                el.style.display = "none";
            });
            viewCont[index].style.display = "block";
        });
        });
}

//pe modal
function modalPEjquery(){
    $(".source span").click(function(){
    $("#paraModal").removeClass().addClass("show");
    });
    $(".modal-cont button").click(function(){
        $("#paraModal").addClass("hide");
    });
}


//pe modal javascript
function modalPEjavascript(){
    document.querySelector(".source span").addEventListener("click", function(){
        document.querySelector("#paraModal").classList.remove("hide");
        document.querySelector("#paraModal").classList.add("show");
    });
    document.querySelector(".modal-cont button").addEventListener("click", function(){
        document.querySelector("#paraModal").classList.add("hide");
    });
}

//모달창내의 효과
function modalJqueryInside(){
    //소스보기 버튼
    const tabBtn = $(".tab-btn ul li");  //5개의 버튼을 변수에 할당
    const tabCont = $(".tab-cont > div"); //5개의 컨텐츠를 변수에 할당
    tabBtn.click(function(){
        let target = $(this); //tabBtn 내가 클릭한 버튼
        tabBtn.removeClass("active"); //버튼들 다 active를 지우기
        target.addClass("active"); //그후 내가선택한 버튼만 active
    
        let index = target.index();
        tabCont.css("display","none"); //제이쿼리에서는 css를 이렇게도 사용가능하다.
        tabCont.eq(index).css("display","block"); //다시 none->block보이게하기
    });
    
    //소스보기 내의 탭메뉴 클래스액티브
    const viewTitle = $(".view-title li");
    const viewCont = $(".view-cont > div");
    
    viewTitle.click(function(){
        let target = $(this);
        viewTitle.removeClass("active");
        target.addClass("active");
        
        let index = target.index();
        viewCont.css("display","none");
        viewCont.eq(index).css("display","block");
    });
}