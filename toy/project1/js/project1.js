let addOrClose = document.querySelectorAll(".addOrClose");
let xbutton = document.querySelectorAll(".xbutton");
let trash = document.querySelectorAll(".trash");
let list = document.querySelectorAll(".list");
let listActive = document.querySelectorAll(".list.active");
let listToDo = document.querySelectorAll("#lists .listToDo");
let add = document.querySelector(".add");
// let delete = document.querySelector(".delete");
let check = document.querySelectorAll(".check");
let todo = document.querySelectorAll(".todo");
let autodate = document.querySelector(".date span");
let writing = document.querySelectorAll(".writing");
const lists = document.getElementById("lists");
const wrap = document.getElementById("wrap");

//날짜 자동생성
date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
document.querySelector(".date span").innerHTML = year+ "/" + month + "/" + day ;

//추가,삭제버튼
// document.querySelector(".add").addEventListener("click", function(){
//     document.getElementById("lists").classList.add("list")
// })

//prepend 사용하려다가 못품
// wrap.ready(function() {
// 	var i=1; 
//     add.click(function() {
//         lists.prepend("");
//     i++; 
//     });
// });
document.querySelector(".delete").addEventListener("click", function(){
    document.querySelector(".delete").classList.toggle("active");
    list.forEach((element, index)=>{
        element.addEventListener("click",function(){
            element.classList.toggle("active")
        });
    });
});

//선택된 addOrClose xbutton toggle + writting popup
document.querySelectorAll(".addOrClose").forEach(function(el, index){
    el.addEventListener("click",function(){
        this.classList.toggle("xbutton");
        document.querySelectorAll(".writing").forEach(li => {
        });
        this.parentNode.querySelector(".writing").classList.toggle("active");
        //previousSibling, nextSibling 다 실패해서 parentNode로 해결
    });
});

// list 에 맞는 trash버튼 나타남
document.querySelectorAll(".listToDo").forEach((el, index)=>{
    el.addEventListener("mouseenter", function(){
        document.querySelectorAll(".trash").forEach(li =>{
        });
        this.previousElementSibling.querySelector(".trash").classList.toggle("active")
    });
});


// 버튼 클릭시 check->checked로 변환
document.querySelectorAll(".check").forEach((el, index)=>{
    el.addEventListener("click", function(){
        this.classList.toggle("active");
        
        document.querySelectorAll(".todo").forEach((el,li)=>{
        });
        this.parentNode.querySelector(".todo").classList.toggle("active");
    });
});

