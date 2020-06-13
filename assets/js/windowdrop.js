

// document.getElementById('image-parent')
 window.addEventListener('mouseover', ((e)=>{

 e.preventDefault()

document.getElementById('image-parent').firstElementChild.className="resize-draw"
let resizeParent
let child = document.getElementById('image-parent').firstElementChild


var UL =document.createElement('DIV');
let[option1,option2,option3]= [document.createElement('DIV'),
 document.createElement('DIV'),
 document.createElement('DIV')]
UL.className="ul"
option1.innerHTML="delete"
option2.innerHTML='copy/paste'
option3.innerHTML=''
UL.appendChild(option1)
UL.appendChild(option2)
UL.appendChild(option3)


resizeParent=document.createElement('DIV')
resizeParent.appendChild(child)
resizeParent.appendChild(UL)
resizeParent.className="resize-drag"

document.getElementById('paste').appendChild(resizeParent)


let allChildren=document.getElementById('paste').children
for(let i=0; i<allChildren.length; i++){
 let exactchild= allChildren[i]



 exactchild.addEventListener('contextmenu', function(e) {
  e.preventDefault()
   setTimeout(()=>{
    on(e.target.parentElement.firstChild.nextElementSibling)

   }, 100)
   setTimeout(()=>{
    on(e.target.parentElement.firstChild.nextElementSibling)

   }, 110)
   

   
  
  // console.log('moving')
    return false;
}, false);





/***]
 * logic for delete, paste and copy
 */

exactchild.addEventListener('click', function(e) {

  e.preventDefault();

})

/***
 * 
 * 
 * delete function
 */
exactchild.firstChild.nextSibling.firstChild.addEventListener('click', ((e)=>{

 delet(e.target.parentElement)
}))

/**
 * 
 * copy/paste function
 */
exactchild.firstChild.nextSibling.firstChild.nextSibling.addEventListener('click', ((e)=>{
e.preventDefault()

let parent=e.target.parentElement.parentElement
newEl=parent.cloneNode(true)

let off=document.getElementById('paste').appendChild(newEl)

window.addEventListener('click', ((e)=>{
unique(off.firstElementChild.nextElementSibling)
console.log(off)
}))

off.addEventListener('contextmenu', function(e) {
e.preventDefault()
setTimeout(()=>{
  on(e.target.parentElement.firstChild.nextElementSibling)
  
},100)
 
  // console.log('moving')
    return false;
}, false);

}))


/***end of
 * delete
 * paste
 * copy
 */
//})
}
let indexUl=document.getElementsByClassName('ul')
for(let ind=0; ind<indexUl; ind++){
let high=indexUl[ind]
higherIndex(high)
}
window.addEventListener('click', ((e)=>{
   
   unique(resizeParent.lastChild)
}))


 
 }))


/***
 * 
 * functions
 */

const unique=(ul)=>{
 ul.style.display="none"
}
const on=(ul)=>{
  ul.style.display="block"
}
const delet=(ul)=>{
  ul.parentElement.remove()
}

let prev = false
const higherIndex=(elem)=>{
  for(let z=0; z<elem.length; z++){
    elem[z].onclick=(()=>{
      this.style.position="absolute";
      if(prev){
        prev.style.zIndex=1;
        this.style.zIndex=1000;
        prev=this
      }
    })
  }
}

