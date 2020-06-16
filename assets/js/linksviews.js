let show = document.getElementById('show')
show.style.color = 'green'
let x = document.querySelectorAll('main div  .btn2')
console.log(x)
for (let i = 0; i <= x.length; i++) {
  x[i].className = 'delete'
  x[i].addEventListener('click', e => {
    e.target.parentElement.parentElement.remove()

    show.innerHTML = 'Deleted'

    setTimeout(() => {
      show.innerHTML = ''
    }, 1500)
  })

  let rename = x[i].previousSibling
  rename.className = 'rename'
  let a = 0
  rename.addEventListener('click', e => {
    let target = e.target.parentElement.previousElementSibling

    if (a === 0) {
      target.contentEditable = 'true'
      e.target.innerHTML = 'SAVE'
      target.style.focus = 'true'
      target.style.background = 'white'
      target.style.border = '1px solid black'
      a = a + 1
    } else if (a === 1) {
      target.contentEditable = 'false'
      e.target.innerHTML = 'RENAME'
      target.style.focus = 'false'
      target.style.background = 'none'
      target.style.border = 'none'
      a = a - 1
      console.log(a)
      show.innerHTML = 'Saved'

      setTimeout(() => {
        show.innerHTML = ''
      }, 1500)
    }
  })
}
