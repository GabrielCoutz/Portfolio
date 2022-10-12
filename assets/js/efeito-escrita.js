export default class EfeitoEscrita {
  constructor(elemento) {
    this.elemento = document.querySelector(elemento);
    this.frases = this.elemento.dataset.jsEscrita.split(",");
    this.isAdding = true;
    this.index = 0;
    this.fraseIndex = 0;
  }

  apagar() {
    return setTimeout(() => {
      this.playAnim();
    }, 2000);
  }

  playAnim() {
    setTimeout(
      () => {
        this.elemento.innerText = this.frases[this.fraseIndex].slice(
          0,
          this.index
        );
        if (this.isAdding) {
          if (this.index > this.frases[this.fraseIndex].length) {
            this.isAdding = false;
            return this.apagar();
          } else {
            this.index++;
          }
        } else {
          if (this.index === 0) {
            this.isAdding = true;
            this.fraseIndex = (this.fraseIndex + 1) % this.frases.length;
          } else {
            this.index--;
          }
        }
        this.playAnim();
      },
      this.isAdding ? 120 : 60
    );
  }

  init() {
    this.playAnim();
  }
}
