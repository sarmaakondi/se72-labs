addEventListener("load", () => {
  const browseQuotesButton = document.getElementById("browse-quotes");

  browseQuotesButton.addEventListener("click", () => {
    location.href = "/quotes";
  });
});
