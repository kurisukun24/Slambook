function nextPage(pageNumber) {
  const currentPage = document.getElementById(`page${pageNumber - 1}`);
  const nextPage = document.getElementById(`page${pageNumber}`);

  if (currentPage && nextPage) {
    currentPage.style.display = "none";
    nextPage.style.display = "block";
  }
}

function previousPage(pageNumber) {
  const currentPage = document.getElementById(`page${pageNumber}`);
  const previousPage = document.getElementId("page" + (pageNumber - 1));

  if (currentPage && previousPage) {
    currentPage.style.display = "none";
    previousPage.style.display = "block";
  }
}

function validateForm(formId) {
  const form = document.getElementById(formId);
  let valid = true;

  form.querySelectorAll("input, select").forEach(input => {
    if (input.hasAttribute("required") && !input.value.trim()) {
      input.classList.add("invalid");
      valid = false;
    } else {
      input.classList.remove("invalid"); 
    }
  });

  return valid;
}
