const inp = document.querySelector(".inp")
const display = document.querySelector(".display")
const publish = document.querySelector(".btn1")
const card2 = document.querySelector(".card2")
const Delete = document.querySelector(".btn2")

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< ADDS AND DELETE INPUTED TEXTS FROM LOCAL STORAGE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

publish.addEventListener("click", (e) => {
  // Check if the text area is empty
  if (inp.value.trim() === '') {
    return alert("Please,enter a view before publishing")
  }

  e.preventDefault()
  const saver = inp.value
  card2.classList.add("active")
  localStorage.setItem("typedInfo", saver)
  display.textContent = localStorage.getItem("typedInfo")


})


Delete.addEventListener("click", (e) => {
  
  card2.classList.remove("active")
  localStorage.removeItem("typedInfo", saver)


})



// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< CLEARS TEXTAREA ON CLICK OF PUBLISH BUTTON >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

publish.addEventListener("click", () => {
  inp.value = "";
})

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< SPINNING EFFECT WHILE LOADING >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader")

  loader.classList.add("loader--hidden")

  loader.addEventListener("transitionend", () => {
    if (document.body.contains(loader)) {
      document.body.removeChild(loader)
    }
  })
})



// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< VOTING >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const plus = document.querySelector(".plus")
const minus = document.querySelector(".minus")
const result = document.querySelector(".result")

let vote = 0
plus.addEventListener("click", () => {
  vote++
  result.textContent = vote
  console.log(vote);
})

minus.addEventListener("click", () => {
  if (vote > 0) {
    vote--
    result.textContent = vote
    console.log(vote);
  }

})



// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< BELOW IS THE CURRENT DATE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


const mydate = document.querySelector(".date")
const recentDate = new Date
const convertedDateFormat = recentDate.toLocaleTimeString()
mydate.textContent = convertedDateFormat

  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< BELOW IS DIFFERENT METHODS OF INSERTING DATA.JSON IN AN HTML ELEMENT >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//   fetch('./data.json')
// .then(response => response.json())
// .then(data => {
//   // Access the data you need
//   const myData = data.comments[0].createdAt
//   console.log(myData);

//   // Insert the data into the div
//   const myDiv = document.querySelector('.date')
//   myDiv.innerHTML = myData;
// })
// .catch(error => console.error(error))


  // const dateElem = document.querySelector(".date")

  // fetch("./data.json")
  //   .then(res => res.json())
  //   .then((data) => {
  //     data.forEach((post) => {
  //       dateElem.insertAdjacentHTML("beforeend", `<div>${post.score}</div>`)
  //     })
  //   })
  //   .catch(error => console.log(error))



// // Parse the JSON file into a JavaScript object
// const jsonData = JSON.parse('{"currentUser":{"image":{"png":"./images/avatars/image-juliusomo.png","webp":"./images/avatars/image-juliusomo.webp"},"username":"juliusomo"},"comments":[{"id":1,"content":"Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You\'ve nailed the design and the responsiveness at various breakpoints works really well.","createdAt":"2 month ago","score":12,"user":{"image":{"png":"./images/avatars/image-amyrobson.png","webp":"./images/avatars/image-amyrobson.webp"},"username":"amyrobson"},"replies":[]},{"id":2,"content":"Woah, your project looks awesome! How long have you been coding for? I\'m still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!","createdAt":"2 weeks ago","score":5,"user":{"image":{"png":"./images/avatars/image-maxblagun.png","webp":"./images/avatars/image-maxblagun.webp"},"username":"maxblagun"},"replies":[{"id":3,"content":"If you\'re still new, I\'d recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It\'s very tempting to jump ahead but lay a solid foundation first.","createdAt":"1 week ago","score":4,"replyingTo":"maxblagun","user":{"image":{"png":"./images/avatars/image-ramsesmiron.png","webp":"./images/avatars/image-ramsesmiron.webp"},"username":"ramsesmiron"}},{"id":4,"content":"I couldn\'t agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.","createdAt":"2 days ago","score":2,"replyingTo":"ramsesmiron","user":{"image":{"png":"./images/avatars/image-juliusomo.png","webp":"./images/avatars/image-juliusomo.webp"},"username":"juliusomo"}}]}]}');

// // Select the div element
// const createdAtDiv = document.querySelector('.date');

// // Access the "createdAt" data
// const createdAtData = jsonData.comments[0].createdAt; // Assuming you want to access the createdAt data of the first comment

// // Set the text content of the selected div element with the "createdAt" data
// createdAtDiv.textContent = createdAtData;







