// تحسين تصميم الموقع للهواتف المحمولة
const viewport = document.querySelector('meta[name="viewport"]');
viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
// تحسين استجابة الموقع على الأجهزة المحمولة
const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
menuButton.addEventListener('click', function() {
  menu.classList.toggle('open');
});