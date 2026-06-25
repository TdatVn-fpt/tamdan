// --- LOGIC: INTERSECTION OBSERVER FOR FADE-UP ---
document.addEventListener('DOMContentLoaded', () => {
    // Fade-up animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
});

// Navigation Highlight on Scroll
window.addEventListener('scroll', () => {
    let current = "";
    const sections = document.querySelectorAll("section");
    const navHeight = 80;

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - navHeight - 50) {
            current = section.getAttribute("id");
        }
    });

    document.querySelectorAll(".nav-link").forEach((a) => {
        a.classList.remove("active", "text-slate-900");
        a.classList.add("text-slate-500");
        if (a.getAttribute("href").includes(current) && current !== "") {
            a.classList.add("active", "text-slate-900");
            a.classList.remove("text-slate-500");
        }
    });
});
