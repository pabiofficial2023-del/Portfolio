document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");

  sections.forEach((section) => {
    const heading = section.querySelector("h2");
    const text = heading.innerText;
    let html = "";

    // Wrap each letter in a span
    for (let i = 0; i < text.length; i++) {
      html += `<span style="transition-delay:${i * 0.05}s">${text[i] === " " ? "&nbsp;" : text[i]}</span>`;
    }

    heading.innerHTML = html;
    // Store total letters to delay paragraph
    heading.style.setProperty("--letters", text.length);
  });

  // Intersection Observer to trigger animation
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target); // animate only once
        }
      });
    },
    { threshold: 0.3 } // trigger when 30% visible
  );

  sections.forEach((section) => observer.observe(section));
});