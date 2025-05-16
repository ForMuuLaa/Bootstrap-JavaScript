function changeTitle() {
    let title = document.getElementById("title");
    title.innerHTML = "This title was changed by JavaScript.";
}

function greetUser() {
    alert("Hello, user!");
}


  function toggleTheme(button) {
    const body = document.body;
    const currentTheme = body.getAttribute("data-bs-theme");

    if (currentTheme === "dark") {
      body.setAttribute("data-bs-theme", "light");
      button.textContent = "Switch to Dark Mode";
    } else {
      body.setAttribute("data-bs-theme", "dark");
      button.textContent = "Switch to Light Mode";
    }
  }


function toggle_class_banner(element, class_added) {
    if (element.classList.contains(class_added)) {
        element.classList.remove(class_added);
    } else {
        element.classList.add(class_added);
    }
}


function toggle_class_narbar(element, class_added, class_removed) {
    if (element.classList.contains(class_added)) {
        element.classList.remove(class_added);
        element.classList.add(class_removed);
    } else {
        element.classList.remove(class_removed);
        element.classList.add(class_added);
    }
}

const button = document.getElementById("button");
const div = document.getElementById("main-banner");
const nav = document.getElementById("navbar");

button.addEventListener("click", () => {
    toggle_class_banner(div, "bg-body-tertiary");
    toggle_class_narbar(nav, "bg-dark", "bg-body-tertiary");
});
