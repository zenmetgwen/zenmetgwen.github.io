const testimonialData = [
  {
    author: "Edita",
    text: "Mijn ervaring met Gwendolyn was bijzonder waardevol. Ze werkte met veel geduld en mindfulness, waardoor ik me echt gehoord voelde. Dankzij haar begeleiding kan ik nu veel beter voelen wat er in mijn lichaam gebeurt. Ze hielp me inzien hoe mijn lichaam stress opslaat en gaf me de tools om dit stap voor stap los te laten. We zijn in het proces nooit te snel gegaan, wat Gwendolyn heel goed aanvoelde. Ze creëerde een veilige ruimte waarin ik mijn emoties kon toelaten en kon verkennen wat er naar boven kwam. Dit maakte de sessies niet alleen diepgaand, maar ook helend. Een ervaring waar ik dankbaar voor ben en altijd naar terug kan grijpen xx",
  },
  {
    author: "Susan",
    text: "‘Wow’ wat een mooie ervaring om volledig uit mijn hoofd en volledig in mijn lichaam te zijn. Ik heb de ademsessies als heel prettig en professioneel ervaren. Gwendolyn heeft mij op een hele fijne manier begeleid tijdens de bewust verbonden ademsessies. Waardoor ik mij volledig kon overgeven aan de ervaring van de ademhaling. Voor iemand als ik die altijd in mijn hoofd zit was het heel bijzonder toen ik merkte dat deze volledig uit was en ik mij volledig gewaar was van alle sensaties in mijn lichaam.",
  },
  {
    author: "Joyce",
    text: "Gwendolyn is een krachtige liefdevolle vrouw die met aandacht naar de mens luistert en naar jouw echte verhaal. Als het unieke wezen dat jij bent. Een vrouw die een steunpilaar is en een zachte warme veilige energie uitstraalt. Ze geeft je gelijk het gevoel deze vrouw is er voor mij, hier kan ik op vertrouwen en bouwen wat er ook naar voren komt.",
  },
  {
    author: "Bram",
    text: "Gwendolyn bedankt voor de afgelopen sessies. Ik kreeg van jou rust en aandacht voor mijzelf mee. En dat is ook precies wat jij uitstraalt. Dit is voor mij veel waard.",
  },
  {
    author: "Sonja",
    text: "Ik wil je heel erg bedanken voor de inspirerende sessies en voor de nieuwe inzichten in mijn leven. Weer veel stof om over na te denken en verder mee aan de slag te gaan. Zo fijn om in alles te kunnen groeien en weer stappen te zetten in nog meer bewust zijn.",
  },
  {
    author: "Linda",
    text: "Gwendolyn is een krachtige vrouw met een groot empathisch vermogen. Zij kan zich goed verplaatsen in de ander en in wat je behoeften zijn. Daarnaast heeft ze een kalme en warme uitstraling, waardoor je in het eerste contact met haar tot rust komt. Ze creëert een veilige ruimte, zonder oordeel wat ertoe leidt dat je in alle openheid met haar kan praten.",
  },
]

function initializeTestimonials() {
  const collection = document.querySelector(".testimonial-collection")

  testimonialData.map((testimonial) =>
    collection.insertAdjacentHTML(
      "beforeend",
      `<div class="testimonial">
        <p class="text">${testimonial.text}</p>
        <h3 class="author">${testimonial.author}</h3>
      </div>`
    )
  )

  // Insert last one before
  collection.insertAdjacentHTML(
    "afterbegin",
    `<div class="testimonial">
        <p class="text">${testimonialData[testimonialData.length - 1].text}</p>
        <h3 class="author">${
          testimonialData[testimonialData.length - 1].author
        }</h3>
      </div>`
  )

  // Insert first one at the end
  collection.insertAdjacentHTML(
    "beforeend",
    `<div class="testimonial">
        <p class="text">${testimonialData[0].text}</p>
        <h3 class="author">${testimonialData[0].author}</h3>
      </div>`
  )
}

initializeTestimonials()

document.addEventListener("DOMContentLoaded", () => {
  let currentIndex = 1
  const collection = document.querySelector(".testimonial-collection")
  const testimonials = document.querySelectorAll(".testimonial")

  const btnLeft = document.querySelector(".testimonial-btn.left")
  const btnRight = document.querySelector(".testimonial-btn.right")
  const totalTestimonials = testimonials.length

  // Function to update the slide
  function updateSlide(animate = true) {
    const slideWidth = testimonials[0].clientWidth
    collection.style.transition = animate ? "transform 1s ease-in-out" : "none"
    collection.style.transform = `translateX(-${currentIndex * slideWidth}px)`
  }

  // Show the previous testimonial
  btnLeft.addEventListener("click", () => {
    currentIndex--
    updateSlide()

    // If we reach the duplicated first slide, reset to last real slide without animation
    if (currentIndex < 0) {
      setTimeout(() => {
        currentIndex = totalTestimonials - 2 // Position before the last clone
        updateSlide(false)
      }, 1000) // Timeout matches the CSS transition time
    }
  })

  // Show the next testimonial
  btnRight.addEventListener("click", () => {
    currentIndex++
    updateSlide()

    // If we reach the duplicated last slide, reset to the first real slide without animation
    if (currentIndex >= totalTestimonials - 1) {
      setTimeout(() => {
        currentIndex = 1 // Position after the first clone
        updateSlide(false)
      }, 1000) // Timeout matches the CSS transition time
    }
  })

  // Update slide on window resize to adjust for new slide width
  window.addEventListener("resize", updateSlide)

  updateSlide(false)
})
