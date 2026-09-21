/* Mobile navigation toggle.
 *
 * The menu is progressive enhancement. With JavaScript unavailable the nav
 * simply renders as a stacked list under the header — every page stays
 * reachable, and the footer carries the same links as a second route.
 */
(function () {
  "use strict";

  var toggle = document.querySelector("[data-nav-toggle]");
  var nav = document.querySelector("[data-nav]");
  if (!toggle || !nav) return;

  // Matches the `max-width: 62rem` breakpoint in site.css.
  var mobile = window.matchMedia("(max-width: 62rem)");

  function close() {
    nav.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
  }

  function open() {
    nav.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
  }

  // On desktop the CSS keeps the nav visible regardless of the `hidden`
  // attribute, so it is safe to set it here on load without a flash.
  function sync() {
    if (mobile.matches) {
      close();
    } else {
      nav.hidden = false;
      toggle.setAttribute("aria-expanded", "false");
    }
  }

  toggle.addEventListener("click", function () {
    if (toggle.getAttribute("aria-expanded") === "true") {
      close();
    } else {
      open();
    }
  });

  // Escape closes the menu and returns focus to the button that opened it.
  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") return;
    if (toggle.getAttribute("aria-expanded") !== "true") return;
    close();
    toggle.focus();
  });

  // Following a link should not leave the menu open behind the new page.
  nav.addEventListener("click", function (event) {
    if (event.target.closest("a") && mobile.matches) close();
  });

  mobile.addEventListener("change", sync);
  sync();
})();
