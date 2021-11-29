
//공통 애니메이션
$(".splice").each(function (index) {
    let text = $(this).text();
    let split = text.split('').join(
        "</span><span aria-hidden='true'>"); //아리아히든은 웹표준을 지키기위해서 하나하나 읽지않게하는것
    split = "<span aria-hidden='true'>" + split + "</span>";
    $(this).html(split).attr("aria-label",
        text); //아리아 히든했기때문에 부모박스인 desc에게 label을 붙여준것이야. 그러면 한자한자 끊어읽지않고 한번에 읽어.
});

// //gsap
// $("#About .article1 .title h1").each(function (index) {
//     if ($(window).scrollTop() >= $(this).offset().top) {
//         gsap.to($(this).find("strong span"), { //먼저 각  섹션을찾고 그안의 desc span을 find해라
//             duration: 0.1,
//             opacity: 1,
//             stagger: 0.05, //시간차를 주는 gsap기능(이러면 show붙여서 시간차setTimeout 이런거 할 필요가없지)
//             y: 0, //위에 css에서 translateY를 100을주고 여기서는 심플하게 y라고 하고 0 하면 애니메이션 차이
//             ease: "power4.out",
//             rotation: 0,
//             scale: 1
//         });
//     }
// });
if ($(window).scrollTop() >= $(".splice").offset().top) {
    gsap.to(this, { //먼저 각  섹션을찾고 그안의 desc span을 find해라
        duration: 0.5,
        opacity: 1,
        stagger: 0.1, //시간차를 주는 gsap기능(이러면 show붙여서 시간차setTimeout 이런거 할 필요가없지)
        y: (0),
        ease: "power4.out",
    });
}

// //window scroll function ** 
// $(window).scroll(function () {
//     let scrollTop = $(window).scrollTop();

//     const mainPic = document.querySelector(".image .mainPic");
//     const lake = document.querySelector(".image .lake");

//     //gsap
//     $("#About .article1 .title h1").each(function (index) {
//         if ($(window).scrollTop() >= $(this).offset().top) {
//             gsap.to($(this).find("strong span"), { //먼저 각  섹션을찾고 그안의 desc span을 find해라
//                 duration: 0.1,
//                 opacity: 1,
//                 stagger: 0.05, //시간차를 주는 gsap기능(이러면 show붙여서 시간차setTimeout 이런거 할 필요가없지)
//                 y: 0, //위에 css에서 translateY를 100을주고 여기서는 심플하게 y라고 하고 0 하면 애니메이션 차이
//                 ease: "power4.out",
//                 rotation: 0,
//                 scale: 1
//             });
//         }
//     });
