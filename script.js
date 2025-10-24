// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

// Mobile menu toggle
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active")
  })
}

// Close mobile menu when a link is clicked
const navLinks = document.querySelectorAll(".nav-link")
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
  })
})

// Contact form handling with Formspree
const contactForm = document.getElementById("contactForm")
if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault()

    const formData = new FormData(contactForm)

    try {
      const response = await fetch("https://formspree.io/f/xyzabc123", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        alert("Message sent successfully! We will get back to you soon.")
        contactForm.reset()
      } else {
        alert("There was an error sending your message. Please try again.")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("There was an error sending your message. Please try again.")
    }
  })
}

// Smooth scroll on page load if hash is present
window.addEventListener("load", () => {
  if (window.location.hash) {
    const element = document.querySelector(window.location.hash)
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" })
      }, 100)
    }
  }
})

// Add scroll effect to navbar
let lastScrollTop = 0
const navbar = document.querySelector(".navbar")

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop

  if (scrollTop > 100) {
    navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.15)"
  } else {
    navbar.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.1)"
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
})
