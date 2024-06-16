addEventListener("load", () => {
  const browseQuotesButton = document.getElementById("browse-quotes");
  const deleteIcon = document.getElementById("delete");
  const upvoteIcon = document.getElementById("upvote");
  const downvoteIcon = document.getElementById("downvote");
  const voteCounterElement = document.getElementById("counter");

  if (browseQuotesButton) {
    browseQuotesButton.addEventListener("click", (event) => {
      event.preventDefault();
      location.href = "/quotes";
    });
  }

  if (deleteIcon) {
    deleteIcon.addEventListener("click", async (event) => {
      event.preventDefault();
      try {
        const quoteId = deleteIcon.dataset.quoteId;
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

  if (upvoteIcon) {
    upvoteIcon.addEventListener("click", async (event) => {
      event.preventDefault();
      try {
        const quoteId = deleteIcon.dataset.quoteId;
        const response = await fetch(`/quotes/${quoteId}/upvote`, {
          method: "PUT",
        });
        if (!response.ok) {
          throw new Error("Upvote failed");
        }
        const updatedQuote = await response.json();
        const upvotes = updatedQuote.upvotes;
        const downvotes = updatedQuote.downvotes;
        voteCounterElement.textContent = Math.max(upvotes - downvotes, 0);
      } catch (error) {
        console.error("Upvote error: ", error);
      }
    });
  }

  if (downvoteIcon) {
    downvoteIcon.addEventListener("click", async (event) => {
      event.preventDefault();
      try {
        const quoteId = deleteIcon.dataset.quoteId;
        const response = await fetch(`/quotes/${quoteId}/downvote`, {
          method: "PUT",
        });
        if (!response.ok) {
          throw new Error("Downvote failed");
        }
        const updatedQuote = await response.json();
        const upvotes = updatedQuote.upvotes;
        const downvotes = updatedQuote.downvotes;
        voteCounterElement.textContent = Math.max(upvotes - downvotes, 0);
      } catch (error) {
        console.error("Downvote error: ", error);
      }
    });
  }
});
