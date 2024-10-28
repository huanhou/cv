document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("about").classList.add("active");
});

document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelectorAll(".section").forEach((section) => {
      section.classList.remove("active");
    });

    document.querySelectorAll(".nav-item").forEach((nav) => {
      nav.classList.remove("active");
    });

    this.classList.add("active");
    const sectionId = this.getAttribute("data-section");
    document.getElementById(sectionId).classList.add("active");
  });
});

document.addEventListener("mousemove", (e) => {
  const trail = document.createElement("div");
  trail.classList.add("cursor-trail");
  trail.style.left = `${e.pageX}px`;
  trail.style.top = `${e.pageY}px`;

  document.body.appendChild(trail);

  setTimeout(() => {
    trail.remove();
  }, 500);
});

(function () {
  emailjs.init("E5iW-kR7EcirveQHC");
})();

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    emailjs.sendForm("service_pze7jyo", "template_j0ctme9", this).then(
      function () {
        alert("Message sent successfully!");
        document.getElementById("contactForm").reset();
      },
      function (error) {
        alert("Failed to send message. Please try again later.");
        console.log(error);
      }
    );
  });

function toggleNav() {
  document.querySelector(".sidebar").classList.toggle("show-nav");
}
