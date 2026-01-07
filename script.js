const heroText = document.getElementById("heroText");
const actionBtn = document.getElementById("actionBtn");

let isDefault = true;

actionBtn.addEventListener("click", function () {
    if (isDefault) {
        heroText.textContent =
            "Aspiring Software Engineer • Passionate about Web & Problem Solving";
        actionBtn.textContent = "Click to Go Back";
    } else {
        heroText.innerHTML =
            "Computer Science Student. Web Development in Training• Csc/2024/82001";
        actionBtn.textContent = "Click here to change text and to Know Me Better";
    }

    isDefault = !isDefault;
});
