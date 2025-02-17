const about_button = document.getElementById("about-button");
const about_text = document.getElementById("about-text");
const about_section = document.getElementById("about-section");
const contact_button = document.getElementById("contact-button");
const contact_text = document.getElementById("contact-text");
const contact_section = document.getElementById("contact-section");

let current = null;
let current_section = null;

function register_toggle(button, text, section) {
    button.addEventListener("click", function() {
        if(text.classList.toggle("visible")) {
            if(current != null) {
                current.classList.remove("visible");
                current_section.classList.remove("active");
            }
            section.classList.add("active");
            current = text;
            current_section = section;
        } else {
            section.classList.remove("active");
            current = null
            current_section = null;
        }
    });
}

register_toggle(about_button, about_text, about_section);
register_toggle(contact_button, contact_text, contact_section)


const projects_page = document.getElementById("projects-page");
const start_page = document.getElementById("start-page");
const back_button = document.getElementById("back-button");
const projects_button = document.getElementById("projects-button");

projects_button.addEventListener("click", function() {
    document.body.style.backgroundColor = "black";
    projects_page.classList.remove("hidden");
    start_page.classList.add("hidden");
    if(current) {
        current.classList.remove("visible");
        current_section.classList.remove("active");
        current = null;
        current_section = null;
    }
});

back_button.addEventListener("click", function() {
    document.body.style.backgroundColor = "rgb(233, 92, 172)";
    start_page.classList.remove("hidden");
    projects_page.classList.add("hidden");
});