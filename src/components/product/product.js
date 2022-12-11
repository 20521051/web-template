
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const tabcontents = $$(".tab-content-item");

const tabActive = $('.tab-item.active')
const line = $(".tabs .line");



requestIdleCallback(function () {
  line.style.left = tabActive.offsetLeft + "px";
  line.style.width = tabActive.offsetWidth + "px";
});


tabs.forEach((tab, index) => {
  const tabcontent = tabcontents[index]

  tab.onclick = function () {

    $('.tab-item.active').classList.remove('active')
    $('.tab-content-item.active').classList.remove('active')

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

    this.classList.add('active')
    tabcontent.classList.add('active')

  }
}); 