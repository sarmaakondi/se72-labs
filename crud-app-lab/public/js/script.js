addEventListener("load", () => {
  const browseQuotesButton = document.getElementById("browse-quotes");
  const deleteIcon = document.getElementById("delete");

  if (browseQuotesButton) {
    browseQuotesButton.addEventListener("click", () => {
      location.href = "/quotes";
    });
  }

  if (deleteIcon) {
    deleteIcon.addEventListener("click", async () => {
      const quoteId = deleteIcon.dataset.quoteId;
      try {
        const response = await fetch(`/quotes/${quoteId}`, {
          method: "DELETE",
        });
        if (response.ok) {
          location.href = "/quotes";
        }
      } catch (error) {
        console.error(`Error deleting quote with ID: ${quoteId}`);
      }
    });
  }
});
