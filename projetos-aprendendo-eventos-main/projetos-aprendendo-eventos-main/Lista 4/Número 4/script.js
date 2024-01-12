function changeBackgroundColor() {
    var colorSelect = document.getElementById("color-select");
    var selectedColor = colorSelect.value;
    document.body.style.backgroundColor = selectedColor;
}