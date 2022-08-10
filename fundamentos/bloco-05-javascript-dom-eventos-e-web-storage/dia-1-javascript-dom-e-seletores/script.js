const container = document.querySelector('.container')
const sizeE1= document.querySelector('.size')
const size = sizeE1.value
const color = document.querySelector('.colorPixel')
const reset = document.querySelector('.btn')

function populate(size) {
    container.style.setProperty('--size', size)
    for (let index = 0; index < size * size; index++) {
        const div = document.createElement('div')
        div.classList.add('color')
        div.addEventListener('mouseover', function(){
            if(!draw) return
                div.style.backgroundColor=color.value
        })
        div.addEventListener('mousedown', function(){
          div.style.backgroundColor = color.value
        })
        container.appendChild(div)
    }
}
window.addEventListener("mousedown",function(){
    draw=true
})
window.addEventListener("mouseup", function(){
    draw=false
})
reset.addEventListener('click',function(){
    container.innerHTML= ''
    populate(size)
})
populate(size)