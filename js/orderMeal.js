let imgColor = document.querySelectorAll('.imgColor')
let imgShadow = document.querySelectorAll('.imgShadow')

for(let i=0; i<imgColor.length; i++){
    //drag
    imgColor[i].addEventListener('dragstart', dragStart)
    imgColor[i].addEventListener('dragend', dragEnd)
    
    //drop
    imgShadow[i].addEventListener('dragenter', (e)=>e.preventDefault())
    imgShadow[i].addEventListener('dragover', (e)=>e.preventDefault())
    imgShadow[i].addEventListener('drop', dropped)
    
    let dragEndX
    let dragEndY
    let droppedX
    let droppedY
    let newsrc
    
    function dragStart(e){
        e.dataTransfer.setData(`imgColor${i}`, `pic/food/food-${i+1}.png`)   
    }
    
    function dragEnd(e){
        dragEndX = e.x
        dragEndY = e.y
        if(dragEndX == droppedX && dragEndY == droppedY){
            imgColor[i].style.visibility = 'hidden'
            imgShadow[i].setAttribute('src', newsrc)
        }
    }
    
    function dropped(e){    
        e.preventDefault()
        
        droppedX = e.x
        droppedY = e.y
    
        newsrc = e.dataTransfer.getData(`imgColor${i}`)    
    }
}
