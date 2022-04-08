let addOrClose = document.querySelectorAll(".addOrClose");
let xbutton = document.querySelectorAll(".xbutton");
let trash = document.querySelectorAll(".trash");
let list = document.querySelectorAll(".list");
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
})

//addOrClose xbutton toggle + writting popup
addOrClose.forEach(function(el, index){
    el.addEventListener("click",function(){
        this.classList.toggle("xbutton")
        writing.forEach(function(el){
            el.classList.toggle("active")
        })
    })
    
});

// list 에 맞는 trash버튼 나타남
listToDo.forEach(function(element, index){
    element.addEventListener("mouseenter", function(){
        trash.forEach(function(el){
            el.classList.toggle("active")
        });
    })
})
document.querySelector(".list")


// 버튼 클릭시 check->checked로 변환
check.forEach(function(el, index){
    el.addEventListener("click", function(){
        check.forEach(function(el){
            el.classList.toggle("active")
        });
        todo.forEach(function(el){
            el.classList.toggle("active")
        })
    })
})
