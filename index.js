const viewBtn = document.getElementById("view_btn");
const container = document.getElementById("container");

viewBtn.addEventListener("click", () => {
  createNotification();
});

function createNotification() {
  const notification = document.createElement("div");
  container.appendChild(notification);
  notification.classList.add("active");
  notification.innerHTML = `You have a new message`;

  setTimeout(() => {
    notification.classList.add("unactive");
  }, 5000);

  setTimeout(() => {
    notification.remove();
  }, 6000);
}
