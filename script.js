
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav-links");

// Open and close the mobile navigation menu
if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("open");

        menuButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuButton.textContent = isOpen ? "✕" : "☰";
    });
}

// Display the current year in the footer
document.querySelectorAll(".year").forEach((element) => {
    element.textContent = new Date().getFullYear();
});

// Validate the contact form
const contactForm = document.querySelector("#contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const feedback = document.querySelector("#formFeedback");
        const name = document.querySelector("#name").value.trim();
        const message = document.querySelector("#message").value.trim();

        if (name.length < 2 || message.length < 10) {
            feedback.textContent =
                "Please enter your name and a message of at least 10 characters.";

            feedback.classList.add("error");
            return;
        }

        feedback.classList.remove("error");

        feedback.textContent =
            `Thanks, ${name}! Your form passed the demo validation. No email was sent.`;

        contactForm.reset();
    });
}
