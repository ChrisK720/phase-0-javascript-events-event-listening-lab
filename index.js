function addingEventListener(color) {
   let div = document.getElementById("input")
   div.addEventListener('click', (event) => {
    div.style.color = color

   })
}

addingEventListener('red')





