// ================================
// 艾爾之光改版資料站 - 主題切換程式
// ================================

// 取得元素
const themeLink = document.getElementById("theme-link");
const themeToggleBtn = document.getElementById("theme-toggle");

// 判斷頁面所在資料夾，自動設定 CSS 路徑
const pathname = window.location.pathname;
let cssPrefix;

// 頁面在 /Balance/ 或 /updates/ 資料夾內，CSS 路徑需要 ../assets/css/
if (pathname.includes("/Balance/") || pathname.includes("/updates/")) {
  cssPrefix = "../assets/css/";
} else {
  // 首頁或其他根目錄頁面，CSS 路徑為 assets/css/
  cssPrefix = "assets/css/";
}

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
