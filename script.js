
function openModal() {
  document.getElementById("myModal").style.display = "flex";
}
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
function submitForm() {
  const name = document.getElementById("nameInput").value;
  const phone = document.getElementById("phoneInput").value;
  if (!name || !phone) {
    alert("Пожалуйста, заполните оба поля.");
    return;
  }

  const token = "8036492245:AAGjpUUveQgFJYgid_Z_3srANmT5aYWeTwQ";
  const chat_id = "1056038916";
  const message = `📝 Новая заявка:\n👤 Имя: ${name}\n📞 Телефон: ${phone}`;

  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id, text: message })
  }).then(response => {
    if (response.ok) {
      alert("Заявка отправлена!");
      closeModal();
    } else {
      alert("Ошибка отправки!");
    }
  });
}
function toggleAnswer(item) {
  const answer = item.querySelector(".answer");
  answer.style.display = answer.style.display === "block" ? "none" : "block";
}
