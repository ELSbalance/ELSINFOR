// ================================
// 艾爾之光改版資料站 - 主題切換程式
// ================================

// 檢查 localStorage 是否有已儲存的主題設定
const savedTheme = localStorage.getItem("theme");
const themeLink = document.getElementById("theme-link");
const themeToggleBtn = document.getElementById("theme-toggle");

if (savedTheme === "pink") {
  themeLink.href = "assets/css/style-pink.css";
  themeToggleBtn.textContent = "❄ 切換藍調";
} else {
  themeLink.href = "assets/css/style-blue.css";
  themeToggleBtn.textContent = "🌸 切換粉色";
}

// 監聽切換按鈕
themeToggleBtn.addEventListener("click", () => {
  const current = themeLink.getAttribute("href");

  if (current.includes("style-blue.css")) {
    // 切換成粉色主題
    themeLink.href = "assets/css/style-pink.css";
    themeToggleBtn.textContent = "❄ 切換藍調";
    localStorage.setItem("theme", "pink");
  } else {
    // 切換成藍色主題
    themeLink.href = "assets/css/style-blue.css";
    themeToggleBtn.textContent = "🌸 切換粉色";
    localStorage.setItem("theme", "blue");
  }
});
