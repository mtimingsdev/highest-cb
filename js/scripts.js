const accordionBtns = document.querySelectorAll(".accordion");

for (var i = 0; i < accordionBtns.length; i++) {
    accordionBtns[i].onclick = function () {

    this.classList.toggle("open");

    let content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  };
};