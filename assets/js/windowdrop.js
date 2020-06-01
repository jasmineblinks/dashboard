let count
// document.getElementById('image-parent')
 window.addEventListener('mouseover', ((e)=>{
     count++
     e.preventDefault()
document.getElementById('image-parent').firstElementChild.className="resize-drag"
let child = document.getElementById('image-parent').firstElementChild
var copy=console.log(child)
document.getElementById('paste').appendChild(child)

 }))