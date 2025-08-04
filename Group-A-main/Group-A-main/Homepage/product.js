$(document).ready(function () {
  $(".product-card").on("click", function () {
    const category = $(this).data("name");
    if (category === "Smartphone") {
      window.location.href = "smartphones.html";
    } else {
      alert("Redirect for " + category + " coming soon.");
    }
  });
});
