async function getBooks() {
    try {
        const response = await fetch("https://upadhayay.github.io/db.json");
        const data = await response.json();
        const mybooks_div = document.querySelector(".mybooks")

        for (let book of data.books) {
            if(book.published==true) {
            const single_book_div = document.createElement("div")
            single_book_div.innerHTML = `
            <img src="images/book.png" alt="" class="book-image">
                <div class="book-text"> 
                    <h2> Title: ${book.title} </h2>
                    <h3> Year: ${book.year} </h3>
                   
                </div>

            `

            single_book_div.classList.add("single_book")
            mybooks_div.append(single_book_div)
            }
        }

    }
    catch(error) {
        console.log("error")
       
    }
}
getBooks();
const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector(".mainMenu");

hamburger.addEventListener("click", function () {
  const isOpen = menu.classList.toggle("active");
  if (menu.classList.contains('active')) {
    hamburger.textContent="X"
  }
  else {
    hamburger.textContent="☰"
  }
});

const leftBtn = document.querySelector("#leftArrow")
const rightBtn = document.querySelector("#rightArrow")
const  image = document.querySelector("#showcasePhoto")
const output = document.querySelector("#whichPhoto")
let counter = 1;

leftBtn.addEventListener("click", function () {
    if(counter==1) {
        counter=6
    }
    else {
        counter--;
    }
    image.src = `images/showcase${counter}.jpeg`
    output.textContent = `Photo: ${counter}/6`
})
rightBtn.addEventListener("click", function () {
    if(counter==6) {
        counter=1
    }
    else {
        counter++;
    }
    image.src = `images/showcase${counter}.jpeg`
    output.textContent = `Photo: ${counter}/6`
})

