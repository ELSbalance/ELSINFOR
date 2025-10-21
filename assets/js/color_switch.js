// ================================
// 艾爾之光改版資料站 - 主題切換程式
// ================================

// 取得元素
const themeLink = document.getElementById("theme-link");
const themeToggleBtn = document.getElementById("theme-toggle");

// 判斷是否在 /updates/ 資料夾內
const isInsideUpdates = window.location.pathname.includes("/updates/");
const cssPrefix = isInsideUpdates ? "../assets/css/" : "assets/css/";

// 讀取 localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "pink") {
  themeLink.href = cssPrefix + "pink_style.css";
  themeToggleBtn.textContent = "❄ 切換藍調";
} else {
  themeLink.href = cssPrefix + "blue_style.css";
  themeToggleBtn.textContent = "🌸 切換粉色";
}

// 按鈕監聽事件
themeToggleBtn.addEventListener("click", () => {
  const current = themeLink.getAttribute("href");

  if (current.includes("blue_style.css")) {
    // 切換成粉色
    themeLink.href = cssPrefix + "pink_style.css";
    themeToggleBtn.textContent = "❄ 切換藍調";
    localStorage.setItem("theme", "pink");
  } else {
    // 切換成藍色
    themeLink.href = cssPrefix + "blue_style.css";
    themeToggleBtn.textContent = "🌸 切換粉色";
    localStorage.setItem("theme", "blue");
  }
});
