export default class HeaderFixo {
  constructor(header) {
    this.header = document.querySelector(header);
    this.headerHeight = this.header.offsetHeight / 2;
  }

  checkScroll() {
    if (window.pageYOffset >= this.headerHeight) {
      this.header.classList.add("header-fixo");
      document.querySelector(".intro").style.paddingTop = `${
        this.headerHeight * 2
      }px`;
    } else {
      document.querySelector(".intro").style.paddingTop = `0px`;
      this.header.classList.remove("header-fixo");
    }
  }

  addScroolEvent() {
    window.addEventListener("scroll", this.checkScroll.bind(this));
  }

  addHeaderListener() {}

  init() {
    if (!this.header) return;
    this.checkScroll();
    this.addScroolEvent();
    return this;
  }
}
