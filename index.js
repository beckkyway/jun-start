const langs = [
    document.getElementById("ru"),
    document.getElementById("en")
]

document.querySelectorAll(".info__language--text").forEach (el=> {
    el.addEventListener("click",function (e){
        langs.map(item => item.classList.remove("info__language--bold"))
        e.target.classList.add("info__language--bold") 
    })
} )