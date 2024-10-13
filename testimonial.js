const testimonials = [
  {
    author: "Edita",
    text: "Mijn ervaring met Gwendolyn was bijzonder waardevol. Ze werkte met veel geduld en mindfulness, waardoor ik me echt gehoord voelde. Dankzij haar begeleiding kan ik nu veel beter voelen wat er in mijn lichaam gebeurt. Ze hielp me inzien hoe mijn lichaam stress opslaat en gaf me de tools om dit stap voor stap los te laten. We zijn in het proces nooit te snel gegaan, wat Gwendolyn heel goed aanvoelde. Ze creëerde een veilige ruimte waarin ik mijn emoties kon toelaten en kon verkennen wat er naar boven kwam. Dit maakte de sessies niet alleen diepgaand, maar ook helend. Een ervaring waar ik dankbaar voor ben en altijd naar terug kan grijpen xx",
  },
  { author: "bla", text: "ds" },
  { author: "henk", text: "sdf" },
  { author: "qwd", text: "ef" },
]

let currentTestimonial = 0

const btnLeft = document.querySelector(".btnLeft")
const btnRight = document.querySelector(".btnRight")

btnLeft.addEventListener("click", showPrevious)
btnRight.addEventListener("click", showNext)

const testimonialText = document.querySelector(".testimonial > .text")
const testimonialAuthor = document.querySelector(".testimonial > .author")

function showNext() {
  currentTestimonial++
  if (currentTestimonial >= testimonials.length) {
    currentTestimonial = 0
  }
  updateTestimonial()
}

function showPrevious() {
  currentTestimonial--
  if (currentTestimonial < 0) {
    currentTestimonial = testimonials.length - 1
  }
  updateTestimonial()
}

function updateTestimonial() {
  testimonialAuthor.textContent = testimonials[currentTestimonial].author
  testimonialText.textContent = testimonials[currentTestimonial].text
}

updateTestimonial()
