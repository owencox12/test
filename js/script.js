let burger = document.querySelector(".header__burger")

burger.addEventListener("click", function(){
    document.querySelector(".header__links_list").classList.toggle("header__links_list_active")
    document.querySelector(".header__burger").classList.toggle("header__burger_active")
    document.querySelector("body").classList.toggle("lock")
})

let img = document.getElementById("myImg")
let newImg = document.getElementById("img01")
let modal = document.querySelector(".modal")
let closeModal = document.querySelector(".modal__window_close")
img.addEventListener("click", function(){
    modal.classList.add("modal_hidden")
    newImg.src = this.src
    closeModal.addEventListener("click", function(){
        modal.classList.remove("modal_hidden")
    })
})
let hWrapper = document.querySelector(".header__wrapper")
window.addEventListener("scroll", function(){
    if(scrollY > 50) {
        hWrapper.classList.add("header__wrapper_active")
    }
    else if (scrollY === 0) {
        hWrapper.classList.remove("header__wrapper_active")
    }
})




let links = document.querySelector(".header__links_list")
    links.addEventListener("click", function(e){
        let link = e.target
        if (link.dataset.id) {
            console.log(e.target)
            e.preventDefault();
            let target = document.querySelector(link.hash)
            let pos = target.offsetTop - 50
            console.log(pos)
            window.scrollTo({
                top: pos,
                behavior: "smooth"
            }) 
        }
    })

let onTop = document.querySelector(".header__logo_image_link")
onTop.addEventListener("click", function(e){
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})