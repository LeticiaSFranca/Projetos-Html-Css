const btnToggle = document.querySelector('#button');
btnToggle.addEventListener('click', function toggleParagraph() {
    var paragraph = document.getElementById("paragraph");
    if (paragraph.style.display === "none") {
      paragraph.style.display = "block";
    } else {
      paragraph.style.display = "none";
    }
})