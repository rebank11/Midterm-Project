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
                    <h1> Title: ${book.title} </h2>
                    <h2> Year: ${book.year} </h3>
                    <h2> Published?: ${book.published} </h3>
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
