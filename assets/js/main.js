// assets/js/main.js - 共用 JS (回頂部按鈕)
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('backToTop');
  if(!btn) return;
  // 顯示或隱藏按鈕
  window.addEventListener('scroll', () => {
    if(window.scrollY > 300) btn.style.display = 'block';
    else btn.style.display = 'none';
  });
  // 平滑回頂
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({top:0, behavior:'smooth'});
  });
});
