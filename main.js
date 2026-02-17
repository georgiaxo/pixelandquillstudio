(() => {
  const header = document.querySelector("header.site-header");
  const toggle = document.querySelector("[data-nav-toggle]");
  if (!header || !toggle) return;

  toggle.addEventListener("click", () => {
    const open = header.getAttribute("data-open") === "true";
    header.setAttribute("data-open", String(!open));
  });
})();
