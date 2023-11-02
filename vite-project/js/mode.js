import { DOMSelectors } from './main.js';

DOMSelectors.light.addEventListener("click", function () {
    if (document.body.classList.contains("dark")) {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  });

DOMSelectors.dark.addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  }
});