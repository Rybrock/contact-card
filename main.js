const dialog = document.getElementById("dialog");
const openBtn = document.getElementById("open-dialog");

openBtn.addEventListener('click', () => {
  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  }
});