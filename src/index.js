const arrowLeft = document.getElementById("arrowLeft")
const arrowRight = document.getElementById("arrowRight")
const images = document.querySelectorAll(".image")
console.log(images.length)
let index = 0
const setImage = ()=>{
    images.forEach(element => {
        element.classList.add("hidden")
        images[index].classList.remove("hidden")
    });
}

arrowRight.addEventListener('click', function(){
    if (index === images.length-1){
        index = 0
    }
    else index ++
    console.log(index)
    setImage()
})

arrowLeft.addEventListener('click', function(){
    if (index > 0) {
        index --
    }
    else index = images.length-1
    console.log(index)
    setImage()
})

setImage()