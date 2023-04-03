import { langArr } from "/js/lang.js";

const langs = [document.getElementById("ru"), document.getElementById("en")];

document.querySelectorAll(".info__language--text").forEach((el) => {
    el.addEventListener("click", function (e) {
        langs.map((item) => item.classList.remove("info__language--bold"));
        e.target.classList.add("info__language--bold");

        document.querySelectorAll(".lang").forEach((item) => {
            item.innerHTML = langArr[e.target.id][item.id];
           })
        })
});     
