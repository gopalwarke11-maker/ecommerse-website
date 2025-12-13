// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });

    // Close nav when clicking a link (mobile)
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
        });
    });
}

// Optional: small fade-in on scroll
const revealEls = document.querySelectorAll(".section, .page-hero, .hero-content, .products-grid, .collections-grid");
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.1 }
);

revealEls.forEach(el => {
    el.classList.add("reveal");
    observer.observe(el);
});
