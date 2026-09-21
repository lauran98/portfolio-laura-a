/* Project filtering on the Projects page.
 *
 * Progressive enhancement: the filter panel ships with a `hidden` attribute and
 * this script removes it. If the script never runs, every project is shown and
 * there are no controls that do nothing.
 */
(function () {
  "use strict";

  var panel = document.querySelector("[data-filters]");
  var grid = document.querySelector("[data-project-grid]");
  if (!panel || !grid) return;

  var statusLine = document.querySelector("[data-filter-status]");
  var emptyLine = document.querySelector("[data-filter-empty]");
  var cards = Array.prototype.slice.call(grid.querySelectorAll(".card-item"));
  var total = cards.length;

  var active = { category: "all", tools: "all" };

  panel.hidden = false;

  function matches(card) {
    if (active.category !== "all" && card.dataset.category !== active.category) {
      return false;
    }
    if (active.tools !== "all") {
      var tools = (card.dataset.tools || "").split(/\s+/);
      if (tools.indexOf(active.tools) === -1) return false;
    }
    return true;
  }

  function apply() {
    var shown = 0;
    cards.forEach(function (card) {
      var visible = matches(card);
      card.hidden = !visible;
      if (visible) shown++;
    });

    if (emptyLine) emptyLine.hidden = shown !== 0;

    if (statusLine) {
      if (shown === total) {
        statusLine.textContent = "Showing all " + total + " projects.";
      } else {
        statusLine.textContent =
          "Showing " + shown + " of " + total + " project" + (total === 1 ? "" : "s") + ".";
      }
    }
  }

  panel.addEventListener("click", function (event) {
    var chip = event.target.closest(".filter-chip");
    if (!chip) return;

    var group = chip.dataset.filter;
    active[group] = chip.dataset.value;

    panel.querySelectorAll('[data-filter="' + group + '"]').forEach(function (other) {
      other.setAttribute("aria-pressed", other === chip ? "true" : "false");
    });

    apply();
  });

  var reset = document.querySelector("[data-filter-reset]");
  if (reset) {
    reset.addEventListener("click", function () {
      active = { category: "all", tools: "all" };
      panel.querySelectorAll(".filter-chip").forEach(function (chip) {
        chip.setAttribute("aria-pressed", chip.dataset.value === "all" ? "true" : "false");
      });
      apply();
    });
  }
})();
