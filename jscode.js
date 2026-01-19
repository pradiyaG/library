const books = [
    { title: "Data Structures & Algorithms", author: "Narasimha Karumanchi" },
    { title: "Operating System Concepts", author: "Silberschatz" },
    { title: "Let Us C", author: "Yashwant Kanetkar" },
    { title: "Computer Networks", author: "Tanenbaum" }
];

function displayBooks(bookArray) {
    const container = document.getElementById("bookList");
    container.innerHTML = "";

    bookArray.forEach(book => {
        const card = document.createElement("div");
        card.className = "book-card";
        card.innerHTML = `<h3>${book.title}</h3><p>${book.author}</p>`;
        container.appendChild(card);
    });
}

function searchBook() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const filtered = books.filter(book => book.title.toLowerCase().includes(query));
    displayBooks(filtered);
}

// Initial load
displayBooks(books);
