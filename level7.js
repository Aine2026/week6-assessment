
const book = {
    title: "Things Fall Apart",
    author: "Chinua Achebe",
    year: 1958,
    genres: ["Historical fiction", "Tragedy"],

    summary() {
        return `${this.title} was written by ${this.author} in ${this.year}.`;
    }
};

// Add a rating
book.rating = 4.8;

// Update the publication year
book.year = 1959;

// Display the summary
console.log(book.summary());

// Display all object entries
for (const [key, value] of Object.entries(book)) {
    console.log(key, ":", value);
}
