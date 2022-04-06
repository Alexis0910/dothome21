let addOrClose = document.querySelectorAll(".addOrClose");
let xbutton = document.querySelectorAll(".xbutton");
let trash = document.querySelectorAll(".trash");
let list = document.querySelectorAll(".list");
let listToDo = document.querySelectorAll(".listToDo");
let check = document.querySelectorAll(".check");
let todo = document.querySelectorAll(".todo");
let autodate = document.querySelector(".date span");
let writing = document.querySelectorAll(".writing");

//날짜 자동생성
date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
document.querySelector(".date span").innerHTML = year+ "/" + month + "/" + day ;

document.querySelectorAll(".titleBox .date h3")
document.querySelector(".add").addEventListener("click", function(){
})
document.querySelector(".delete").addEventListener("click", function(){
    document.querySelector(".delete").classList.add("active");
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
// 버튼 클릭시 check->checked로 변환
check.forEach(function(element, index){
    this.addEventListener("click", function(){
        check.forEach(function(el){
            el.classList.toggle("active")
        });
        todo.forEach(function(el){
            el.classList.toggle("active")
        })
    })
})
