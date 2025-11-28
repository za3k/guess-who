const can = $(".candidates > *")
const yourChar = Math.floor(Math.random() * can.length)
$(".your-character").append(can[yourChar])

$("img").each((_, e) => {
    e = $(e)
    // Add a visible name
    const src = e.attr("src")
    const name = e.attr("name")
    e.replaceWith(`
        <figure class="person">
            <img src="${src}" draggable="false" alt="${name}">
            <figcaption>${name}</figcaption>
        </figure>`)
})

$(".candidates figure").on("click", (e) => $(e.currentTarget).toggleClass("X"))

