// DevStack — small progressive enhancements (page works without JS)
const $ = (s) => [...document.querySelectorAll(s)];

// Scroll progress bar + back-to-top button
const bar = Object.assign(document.createElement("div"), {
  className: "progress",
});
const toTop = Object.assign(document.createElement("button"), {
  className: "to-top",
  type: "button",
  textContent: "↑",
});
toTop.setAttribute("aria-label", "Back to top");
document.body.append(bar, toTop);

addEventListener(
  "scroll",
  () => {
    const h = document.documentElement;
    bar.style.transform = `scaleX(${h.scrollTop / (h.scrollHeight - h.clientHeight)})`;
    toTop.classList.toggle("show", h.scrollTop > 600);
  },
  { passive: true },
);
toTop.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));

// Highlight the nav link of the section being read
const links = $('.main-nav a[href^="#"]');
const spy = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting)
        links.forEach((a) =>
          a.classList.toggle(
            "active",
            a.getAttribute("href") === "#" + e.target.id,
          ),
        );
    }),
  { rootMargin: "-40% 0px -55% 0px" },
);
$("#home, main section[id]").forEach((s) => spy.observe(s));

// Click a git command to copy it
$(".workflow-card code").forEach((c) => {
  c.tabIndex = 0;
  c.title = "Click to copy";
  const copy = async () => {
    const original = c.textContent;
    try {
      await navigator.clipboard.writeText(original);
      c.textContent = "Copied ✓";
      setTimeout(() => (c.textContent = original), 1200);
    } catch {}
  };
  c.addEventListener("click", copy);
  c.addEventListener("keydown", (e) => e.key === "Enter" && copy());
});
