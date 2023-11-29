let labels = document.querySelectorAll("label");
labels.forEach(function (label) {
    label.innerHTML = label.innerHTML
        .split("")
        .map((item, index) => {
            return `<span style="transition-delay: ${(index + 1) * 50}ms">${item}</span>`;
        })
        .join("");
});