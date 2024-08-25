const lists = document.getElementsByClassName("list");
const rightBox = document.getElementById("right");
const leftBox = document.getElementById("left");

// متغیر برای ذخیره آیتم کشیده شده
let draggedItem = null;

// تابع برای جلوگیری از پیش‌فرض مرورگر
function allowDrop(e) {
  e.preventDefault();
}

// تابع برای انجام عملیات در هنگام دراپ
function drop(e, targetBox) {
  e.preventDefault();
  if (draggedItem) {
    targetBox.appendChild(draggedItem);
    draggedItem = null; // ریست کردن آیتم کشیده شده
  }
}

// اضافه کردن رویدادهای dragover و drop به جعبه‌ها
rightBox.addEventListener("dragover", allowDrop);
rightBox.addEventListener("drop", (e) => drop(e, rightBox));
leftBox.addEventListener("dragover", allowDrop);
leftBox.addEventListener("drop", (e) => drop(e, leftBox));

// اضافه کردن رویداد dragstart به لیست‌ها
for (let list of lists) {
  list.addEventListener("dragstart", function (e) {
    draggedItem = e.target;
  });
}
