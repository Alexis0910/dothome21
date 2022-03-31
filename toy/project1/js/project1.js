const addOrClose = document.querySelectorAll(".addOrClose");
const xbutton = document.querySelectorAll(".xbutton");
const trash = document.querySelectorAll(".trash");
const list = document.querySelectorAll(".list");

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
