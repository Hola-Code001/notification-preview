const viewBtn = document.getElementById("view_btn");
const container = document.getElementById("container");

viewBtn.addEventListener("click", () => {
  createNotification();
});

function createNotification() {
  const notification = document.createElement("div");
  container.appendChild(notification);
  notification.classList.add("active");
  notification.innerHTML = "You have a new messages";

  setTimeout(() => {
    notification.classList.add("unactive");
    console.log("removing");
  }, 8000);

  setTimeout(() => {
    notification.remove();
  }, 10000);
}
