const heroText = document.getElementById("heroText");
const actionBtn = document.getElementById("actionBtn");

let isDefault = true;

actionBtn.addEventListener("click", function () {
    if (isDefault) {
        heroText.textContent =
            "Aspiring Software Engineer • Passionate about Web & Problem Solving";
        actionBtn.textContent = "Reset Introduction";
    } else {
        heroText.textContent =
            "Computer Science Student • Csc/2024/82001";
        actionBtn.textContent = "Click to Know Me Better";
    }

    isDefault = !isDefault;
});
