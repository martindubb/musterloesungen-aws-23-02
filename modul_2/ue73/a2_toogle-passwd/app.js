const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("mouseover", function () {
    toggle();
});

togglePassword.addEventListener("mouseout", function () {
    toggle();
});

// prevent form submit
const form = document.querySelector("form");
form.addEventListener('submit',function(e){
    e.preventDefault();
});

function toggle() {
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    // toggle the icon
    togglePassword.classList.toggle("bi-eye");
}