document.getElementById("draw-button").addEventListener("click", function () {
  const inputList = document.getElementById("input-list").value.trim();
  const result = document.getElementById("result");

  if (inputList === "") {
    result.textContent = "リストを入力してください。";
    result.style.color = "red";
    return;
  }

  const items = inputList.split("\n").filter(item => item.trim() !== "");
  const randomIndex = Math.floor(Math.random() * items.length);
  const selectedItem = items[randomIndex];

  result.textContent = `抽選結果: ${selectedItem}`;
  result.style.color = "#4caf50";
});
