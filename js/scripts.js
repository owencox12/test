let form = document.querySelector("form")
let inputs = form.querySelectorAll(".check")


form.addEventListener("submit", function(e){
    for(let i = 0; i < inputs.length; i++) {
        if(!(inputs[i].value.length < 0)) {
            inputs[i].classList.add("err")
            err = true;
        }
        if (e.target.classList.contains("check")) {
            e.target.classList.remove("err")
        }

    }
    e.preventDefault()
})
    // let err = false;
    // inputs.forEach(function(event){
    //     if(evtnt.value == '') {
    //         event.classList.add("err")
    //         err = true;
    //     }

    //     if (err) {
    //         event.preventDefault()
    //         alert("Заполните все поля!")
    //     }





