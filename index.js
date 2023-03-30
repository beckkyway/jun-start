import { langArr } from "/js/lang.js"

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

const lang = langArr

document.getElementById("home").innerHTML=lang.ru.nav.home;

console.log(lang.ru.nav.home);