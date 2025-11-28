// Add your random character
const can = $(".candidates > *")
const yourChar = Math.floor(Math.random() * can.length)
$(".your-character").append($(can[yourChar]).clone())

// Add a visible name
$("img").each((_, e) => {
    e = $(e)
    const src = e.attr("src")
    const name = e.attr("name")
    e.replaceWith(`
        <figure class="person">
            <img src="${src}" draggable="false" alt="${name}">
            <figcaption>${name}</figcaption>
        </figure>`)
})

// Clicking toggles greyed-out
$(".candidates figure").on("click", (e) => $(e.currentTarget).toggleClass("X"))

