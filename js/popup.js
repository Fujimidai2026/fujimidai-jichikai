document.addEventListener("DOMContentLoaded", function() {

  const modal = document.getElementById("gomiModal");
  const link = document.getElementById("gomiLink");
  const closeBtn = document.querySelector(".close");

  if (link) {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      modal.style.display = "block";
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", function() {
      modal.style.display = "none";
    });
  }

  window.addEventListener("click", function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

});

