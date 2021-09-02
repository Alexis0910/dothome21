{
    //$(".info.bottom button").click(function(){
    //    $("#modal").removeClass().addClass("show");
    //    });
    //$(".modal-cont button").click(function(){
    //    $("#modal").addClass("hide");
    //});
    
    //Modal Javascript Ver.
    document.querySelector(".info button").addEventListener("click", function(){
        document.querySelector("#modal").classList.remove("hide");
        document.querySelector("#modal").classList.add("show");
    });
    document.querySelector(".modal-cont button").addEventListener("click", function(){
        document.querySelector("#modal").classList.add("hide");
    });
}