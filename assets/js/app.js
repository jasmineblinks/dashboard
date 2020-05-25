// document.getElementById("dragged").addEventListener("dragstart",function(e){
//     var cup =this.cloneNode(true);
//     document.body.appendChild(cup);
//     e.dataTransfer.setDragImage(cup,0,0);

// },true);


function dragStart(ev) {
    ev.dataTransfer.effectAllowed='move';
    ev.dataTransfer.setData("Text", ev.target.getAttribute('id'));
    ev.dataTransfer.setDragImage(ev.target,0,0);
    return true;
 }
function dragEnter(ev){
    event.preventDefault();
    return true;
}

function dragOver(ev){
    return false;
}

function dragDrop(ev) {
    var src = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(src));
    ev.stopPropagation();
    return true;
 }