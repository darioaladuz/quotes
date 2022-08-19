const quotes = {
    programming: {
        text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        author: "Martin Fowler"
    },
    inspiring: {
        text: "Our greatest glory is not in never falling, but in rising every time we fall",
        author: "Confucius"
    },
    management: {
        text: "Good teams incorporate teamwork into their culture, creating the building blocks for success.",
        author: "Ted Sundquist"
    },
    life: {
        text: "If you want to live a happy life, tie it to a goal, not to people or things.",
        author: "Albert Einstein"
    },
    love: {
        text: "It's better to have loved and lost than never to have loved at all.",
        author: "Alfred Lord Tennyson"
    },
    art: {
        text: "The object of art is not to reproduce reality, but to create a reality of the same intensity.",
        author: "Alberto Giacometti"
    },
    students: {
        text: "The man who does not read books has no advantage over the one who cannot read them.",
        author: "Mark Twain"
    }
}

const buttons = document.querySelectorAll("button");
const quoteText = document.querySelector(".quote-text");
const quoteAuthor = document.querySelector(".quote-author");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if(!button.classList.contains("active")){
            buttons.forEach(btn => btn.classList.remove("active"));

            button.classList.add("active");

            const category = button.dataset.category;

            quoteText.textContent = quotes[category]["text"];
            quoteAuthor.textContent = quotes[category]["author"];
        }
    })
})