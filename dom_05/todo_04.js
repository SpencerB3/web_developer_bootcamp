let lis = document.querySelectorAll("li");

for (let idx = 0; idx < lis.length; idx += 1) {
  lis[idx].addEventListener("mouseover", function() {
    this.classList.toggle("selected");
  });

  lis[idx].addEventListener("mouseout", function() {
    this.classList.toggle("selected");
  });

  lis[idx].addEventListener("click", function() {
    this.classList.toggle("done");
  });
};
