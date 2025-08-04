$(document).ready(function () {
  $(".product-card").on("click", function () {
    const name = $(this).data("name");
    const price = $(this).data("price");
    const desc = $(this).data("desc");

    $("#detailName").text(name);
    $("#detailPrice").text("Price: " + price);
    $("#detailDesc").text(desc);
    $("#productDetail").fadeIn();
  });
});
$(".product-card").on("click", function () {
  const name = $(this).data("name");
  if (name === "Smartphone") {
    window.location.href = "smartphones.html";
    return;
  }
  ...
});
