const inp = document.querySelector(".inp")
const display = document.querySelector(".display")
const publish = document.querySelector(".btn1")
const card2 = document.querySelector(".card2")
const Delete = document.querySelector(".btn2")

const saver = inp.value

display.textContent = localStorage.getItem("temp")



publish.addEventListener("click", (e) => {
    e.preventDefault()
    card2.classList.add("active")
    localStorage.setItem("typedInfo", saver)
    
   
    
})

Delete.addEventListener("click", (e) => {
    e.preventDefault()
    card2.classList.remove("active")
    localStorage.removeItem("typedInfo", saver)
   
    
})

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden")
  
    loader.addEventListener("transitionend", () => {
      if (document.body.contains(loader)) {
        document.body.removeChild(loader)
      }
    })
  })




fetch("./data.json")
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.error(error))




