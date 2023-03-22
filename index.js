const test = document.querySelectorAll(".info__language--text")
test.forEach (el=> {
    el.addEventListener("click",function (e){
        console.log("e",e.target);
        const block = e.target
        const ruBlock = document.getElementById("ru")
        const enBlock = document.getElementById("en")
        ruBlock.classList.remove("info__language--bold")
        enBlock.classList.remove("info__language--bold")
        block.classList.add("info__language--bold") 
    })
} )

console.log("test",test);





