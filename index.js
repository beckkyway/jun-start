import { langArr } from "/js/lang.js";

const langs = [document.getElementById("ru"), document.getElementById("en")];

document.querySelectorAll(".info__language--text").forEach((el) => {
    el.addEventListener("click", function (e) {
        langs.map((item) => item.classList.remove("info__language--bold"));
        e.target.classList.add("info__language--bold");
        console.log(e.target.id);
        console.log(langArr[e.target.id]);
        
        document.querySelectorAll(".nav__item").forEach((item) => console.log(item));

        document.getElementById("nav.home").innerHTML=langArr[e.target.id.item].nav.home;
        console.log(langArr[e.target.id.item].nav.home);
        // const lang = langArr
        // document.getElementById("nav.home").innerHTML=lang.(el);
        // document.getElementById("nav.about").innerHTML=langArr[e.target.id].nav.about;
        // document.getElementById("nav.skills").innerHTML=langArr[e.target.id].nav.skills;
        // document.getElementById("nav.portfolio").innerHTML=langArr[e.target.id].nav.portfolio;
        // document.getElementById("nav.contacts").innerHTML=langArr[e.target.id].nav.contacts;
        // console.log(lang;

        // document.querySelectorAll(".nav__item").innerHTML=langArr[e.target.id].(el);
        // console.log(langArr[e.target.id].(el))
        // document.querySelectorAll(".nav__item").forEach((id) => console.log(id));
        

        // document.querySelectorAll("nav__item").innerHTML=langArr[e.target.id](el);
        // console.log(langArr[e.target.id](el));



        // let elements = document.querySelectorAll(".nav__item")
        // for (let elem of elements)
        // alert(elem.innerHTML)

        // document.querySelectorAll("nav__item").innerHTML=langArr[e.target.id];
        // arr.forEach(function(nav__item))
        // console.log(langArr[e.target.id]);

        // const getQuerySelectorAll(".nav__item");
        // console.log(".nav__item");
        // const array1 =[e.target.id];
        // arr.forEach(el => console.log[e.target.id]);
         

        
        
        // const lang = langArr

        // document.getElementById("nav.home").innerHTML=langArr[e.target.id].nav.home;
        // document.getElementById("nav.about").innerHTML=langArr[e.target.id].nav.about;
        // document.getElementById("nav.skills").innerHTML=langArr[e.target.id].nav.skills;
        // document.getElementById("nav.portfolio").innerHTML=langArr[e.target.id].nav.portfolio;
        // document.getElementById("nav.contacts").innerHTML=langArr[e.target.id].nav.contacts;
        // console.log(langArr[e.target.id].nav.home,langArr[e.target.id].nav.about, langArr[e.target.id].nav.skills, langArr[e.target.id].nav.portfolio,langArr[e.target.id].nav.contacts );



        // document.getElementById("nav.home").innerHTML=langArr.ru.nav.home;
        // document.getElementById("nav.about").innerHTML=lang.ru.nav.about;
        // document.getElementById("nav.skills").innerHTML=lang.ru.nav.skills;
        // document.getElementById("nav.portfolio").innerHTML=lang.ru.nav.portfolio;
        // document.getElementById("nav.contacts").innerHTML=lang.ru.nav.contacts;
        // console.log(lang.ru.nav.home,lang.ru.nav.about,lang.ru.nav.skills,lang.ru.nav.portfolio,lang.ru.nav.contacts);
    });
    
});

//const lang = langArr

//document.getElementById("nav.home").innerHTML=lang.ru.nav.home;

//console.log(lang.ru.nav.home);
